import { RollDialog, CombatDialog, SpellDialog } from "../system/dialog.js";
import Test from "../system/tests/test.js";
import CombatTest from "../system/tests/combat-test.js";
import SpellTest from "../system/tests/spell-test.js";
import MiracleTest from "../system/tests/miracle-test.js";
import SoulboundUtility from "../system/utility.js";
import TokenHelpers from "../system/token-helpers.js";
import { CommonRollDialog } from "../apps/roll-dialog/common.js";
import { SpellRollDialog } from "../apps/roll-dialog/spell.js";
import { MiracleRollDialog } from "../apps/roll-dialog/miracle.js";
import { CombatRollDialog } from "../apps/roll-dialog/combat.js";

export class SoulboundActor extends WarhammerActor {

    async _preCreate(data, options, user) {
        if (data._id)
            options.keepId = SoulboundUtility._keepID(data._id, this)
        
        await super._preCreate(data, options, user)

        this.updateSource(await this.system.preCreateData(data, options, user))
    }

    async _onCreate(data, options, user)
    {
        await super._onCreate(data, options, user);
        await this.system.createChecks(data, options, user);
    }

    async _preUpdate(updateData, options, user) {
        await super._preUpdate(updateData, options, user)
        await this.system.preUpdateChecks(updateData, options, user);

        // Treat the custom default token as a true default token
        // If you change the actor image from the default token, it will automatically set the same image to be the token image
        if (this.prototypeToken.texture.src.includes("modules/soulbound-core/assets/tokens/unknown") && updateData.img && !updateData.token?.img) {
            updateData["prototypeToken.texture.src"] = updateData.img;
        }
    }

    async _onUpdate(data, options, user)
    {
        await super._onUpdate(data, options, user);
        await this.update(await this.system.updateChecks(data, options));
    }


    prepareBaseData() {
        this._itemTypes = null;
        this.derivedEffects = [];
        this.postReadyEffects = []
        this.system.computeBase();
    }

    prepareDerivedData() {
        this.applyDerivedEffects()
        this.system.computeDerived();
    }


    applyDerivedEffects() {
        this.derivedEffects.forEach(change => {
            change.effect.fillDerivedData(this, change)
            change.effect.apply(this, change);
        })
    }

    //#region Rolling Setup
    async setupAttributeTest(attribute, options={}) 
    {
        let test = await this._setupTest(CommonRollDialog, Test, {attribute}, options);
        test.sendToChat();
        return test;
    }

    async setupSkillTest(skill, attribute, options={}) 
    {
        let test = await this._setupTest(CommonRollDialog, Test, {skill, attribute}, options)
        test.sendToChat();
        return test;
    }

    async setupCombatTest(weapon, options={})
    {
        let test = await this._setupTest(CombatRollDialog, CombatTest, weapon, options)
        test.sendToChat();
        return test;
    }

    async setupSpellTest(power, options={})
    {
        let test = await this._setupTest(SpellRollDialog, SpellTest, power, options)
        test.sendToChat();
        return test;
    }

    async setupMiracleTest(miracle, options={})
    {
        let test = await this._setupTest(MiracleRollDialog, MiracleTest, miracle, options)
        test.sendToChat();
        return test;
    }
    //#endregion

    /**
     * applies Damage to the actor
     * @param {int} damages 
     */
    async applyDamage(damage, {ignoreArmour = false, penetrating = 0, ineffective = false, restraining = false}={}) {
        let armour = this.combat.armour.value
        
        armour -= penetrating;
        
        if(armour < 0) { armour = 0; }            

        if (ineffective) armour *= 2;

        damage = ignoreArmour ? damage : damage - armour;

        if (damage < 0)
            damage = 0
        let remaining = this.combat.health.toughness.value - damage;

         // Update the Actor
         const updates = {
            "system.combat.health.toughness.value": remaining >= 0 ? remaining : 0
        };

        if (damage > 0 && restraining)
            await this.addCondition("restrained")

        // Delegate damage application to a hook
        const allowed = Hooks.call("modifyTokenAttribute", {
            attribute: "combat.health.toughness.value",
            value: this.combat.health.toughness.value,
            isDelta: false,
            isBar: true
        }, updates);

        let ret = allowed !== false ? await this.update(updates) : this;

        let note = game.i18n.format("NOTIFICATION.APPLY_DAMAGE", {damage : damage, name : this.prototypeToken.name});
        ui.notifications.notify(note);

        // Doing this here because foundry throws an error if wounds are added before the update
        if(remaining < 0 && this.combat.health.wounds.max > 0) {
            if (ineffective)
                remaining = -1 // ineffective can only cause minor wounds          
            await this.update(this.system.combat.computeNewWound(remaining));
        }
        return ret;
    }

    
    /**
     * applies healing to the actor
     */
    async applyHealing(healing) {

        
         // Update the Actor
         const updates = {};

        if (healing.toughness)
            updates["system.combat.health.toughness.value"] =  Math.min(this.combat.health.toughness.value + healing.toughness, this.combat.health.toughness.max)
        else return

        // Delegate damage application to a hook
        const allowed = Hooks.call("modifyTokenAttribute", {
            attribute: "combat.health.toughness.value",
            value: this.combat.health.toughness.value,
            isDelta: false,
            isBar: true
        }, updates);

        let ret = allowed !== false ? await this.update(updates) : this;

        let note = game.i18n.format("NOTIFICATION.APPLY_HEALING", {toughness : healing.toughness, name : this.prototypeToken.name});
        ui.notifications.notify(note);

        return ret;
    }

    async addCondition(effect, options={}) {
        if (typeof (effect) === "string")
            effect = CONFIG.statusEffects.concat(Object.values(game.aos.config.systemEffects)).find(e => e.id == effect)
        if (!effect)
          return "No Effect Found"
        else 
            effect = duplicate(effect)
    
        if (!effect.id)
          return "Conditions require an id field"
    
    
        let existing = this.hasCondition(effect.id)
    
        if (!existing) {
          effect.name = game.i18n.localize(effect.name)
          effect.statuses = [effect.id];
          effect.origin = options.origin || "";
          delete effect.id
          return this.createEmbeddedDocuments("ActiveEffect", [effect])
        }
      }
    
      async removeCondition(effect, value = 1) {
        if (typeof (effect) === "string")
            effect = CONFIG.statusEffects.concat(Object.values(game.aos.config.systemEffects)).find(e => e.id == effect)
        if (!effect)
          return "No Effect Found"
        else
            effect = duplicate(effect)
    
        if (!effect.id)
          return "Conditions require an id field"
    
        let existing = this.hasCondition(effect.id)
    
        if (existing) {
          return existing.delete()
        }
      }
    
    
      hasCondition(conditionKey) {
        let existing = this.effects.find(e => e.statuses.has(conditionKey))
        return existing
    }

    async applyRend(damage, {magicWeapon = false}={}) {

        let armours = this.items.filter(i => i.isEquipped 
                                          && i.subtype !== "shield" // That isn't a shield
                                          && i.benefit !== 0 // not already at zero
                                          && (!i.traitList.magical || (i.traitList.magical && magicWeapon)) // Only nonmagical - unless magic weapon
                                          && (!i.traitList.sigmarite || (i.traitList.sigmarite && magicWeapon))) // Only sigmarite - unless magic weapon
        
        if(armours.length === 0) return ui.notifications.notify(game.i18n.localize("NOTIFICATION.REND_FAIL"));
        
        let sub = damage
        for(let am of armours) {            
            let val = am.benefit - sub;
            sub -= am.benefit;

            
            if(val >= 0) {
                await am.update({"system.benefit": val});
            } else {
                await am.update({"system.benefit": 0}); 
            }
            
            if(sub === 0) break;            
        }
        
        let note = game.i18n.format("NOTIFICATION.APPLY_REND", {damage : damage, name : this.prototypeToken.name});
        ui.notifications.notify(note);
    }

    async onEnterDrawing(drawing)
    {
        let flags = drawing.flags["soulbound"]

        let cover = flags.cover
        let hazard = flags.hazard
        let obscured = flags.obscured
        let difficult = flags.difficult
        let options = {origin : drawing.uuid}

        if (cover)
            await this.addCondition(cover, options)
        if (hazard)
            await this.addCondition(hazard, options)
        if (obscured)
            await this.addCondition(obscured, options)
        if (difficult)
            await this.addCondition("difficult", options)
    }

    async onLeaveDrawing(drawing)
    {
        let flags = drawing.flags["soulbound"]

        let cover = flags.cover
        let hazard = flags.hazard
        let obscured = flags.obscured
        let difficult = flags.difficult

        if (cover)
            await this.removeCondition(cover)
        if (hazard)
            await this.removeCondition(hazard)
        if (obscured)
            await this.removeCondition(obscured)
        if (difficult)
            await this.removeCondition("difficult")
    }

    speakerData(token) {
        if (token || this.isToken)
        {
            return {
                token : (token?.document || this.token).id,
                scene : (token?.document || this.token).parent.id
            }
        }
        else
        {
            return {
                actor : this.id
            }
        }
    }


    get Speed() {
        let speed = this.combat.speeds
        let display = []
        display.push(`${game.aos.config.speed[speed.foot]}`)

        if (speed.flight != "none")
            display.push(`${game.i18n.localize("HEADER.FLY_SPEED")} (${game.aos.config.speed[speed.flight]})`)

        if (speed.swim != "none")
            display.push(`${game.i18n.localize("HEADER.SWIM_SPEED")} (${game.aos.config.speed[speed.swim]})`)

        return display.join(", ")
        
    }

    get size() {
        if (this.type == "npc")
            return this.bio.size
        else
            return 2
    }

    // @@@@@ BOOLEAN GETTERS @@@@@
    get isSwarm() {return this.system.isSwarm}

    // @@@@@@ DATA GETTERS @@@@@@
    get attributes() {return this.system.attributes}
    get skills() {return this.system.skills}
    get combat() {return this.system.combat}
    get currencies() {return this.system.currencies}
    get bio() {return this.system.bio}
    get experience() {return this.system.experience}
    get notes() {return this.system.notes}
    get soulfire() {return this.system.soulfire}
    get doom() {return this.system.doom}
    get power() {return this.system.power}
    get members() {return this.system.members || []}

}