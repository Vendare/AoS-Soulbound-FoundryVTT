import { AgeOfSigmarActor } from "./actor.js";
import { AgeOfSigmarItem } from "./item.js";
import { PlayerSheet } from "../sheet/player.js";
import { NpcSheet } from "../sheet/npc.js";
import { PartySheet } from "../sheet/party.js";
import { ArmourSheet } from "../sheet/armour.js";
import { ConnectionSheet } from "../sheet/connection.js";
import { EquipmentSheet } from "../sheet/equipment.js";
import { GoalSheet } from "../sheet/goal.js";
import { MiracleSheet } from "../sheet/miracle.js";
import { PartyItemSheet } from "../sheet/party-item.js";
import { RuneSheet } from "../sheet/rune.js";
import { SpellSheet } from "../sheet/spell.js";
import { TalentSheet } from "../sheet/talent.js";
import { WeaponSheet } from "../sheet/weapon.js";
import { WoundSheet } from "../sheet/wound.js";
import { AethericDeviceSheet } from "../sheet/aetheric-device.js";
import { initializeHandlebars } from "./handlebars.js";
import { prepareCustomRoll } from "./dialog.js";
import AOS_MacroUtil from "./macro.js"

import * as chat from "./chat.js";
import Migration from "./migrations.js";

Hooks.once("init", () => {
    game.settings.register("age-of-sigmar-soulbound", "initiativeRule", {
        name: "SETTING.INIT_RULE",
        hint: "SETTING.INIT_HINT",
        scope: "world",
        config: true,
        default: "default",
        type: String,
        restricted: true,
        choices: {
            "default": "SETTING.INIT_DEFAULT",
            "roll1d6": "SETTING.INIT_ROLL1d",
            "roll2d6": "SETTING.INIT_ROLL2d"
        },
        onChange: rule => {
            _registerInitiative(rule);
        }
    });

    game.settings.register("age-of-sigmar-soulbound", "systemMigrationVersion", {
        scope: "world",
        config: false,
        default: "",
        type: String
    });

    game.macro = AOS_MacroUtil;

    _registerInitiative(game.settings.get("age-of-sigmar-soulbound", "initiativeRule"));
    
    CONFIG.Actor.documentClass = AgeOfSigmarActor;
    CONFIG.Item.documentClass = AgeOfSigmarItem;
    CONFIG.fontFamilies.push("Alegreya Sans SC");
    CONFIG.roll = prepareCustomRoll;
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("age-of-sigmar-soulbound", PlayerSheet, { types: ["player"], makeDefault: true });
    Actors.registerSheet("age-of-sigmar-soulbound", NpcSheet, { types: ["npc"], makeDefault: true });
    Actors.registerSheet("age-of-sigmar-soulbound", PartySheet, { types: ["party"], makeDefault: true });
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("age-of-sigmar-soulbound", AethericDeviceSheet, { types: ["aethericDevice"], makeDefault: true });
    Items.registerSheet("age-of-sigmar-soulbound", ArmourSheet, { types: ["armour"], makeDefault: true });
    Items.registerSheet("age-of-sigmar-soulbound", ConnectionSheet, { types: ["connection"], makeDefault: true });
    Items.registerSheet("age-of-sigmar-soulbound", EquipmentSheet, { types: ["equipment"], makeDefault: true });
    Items.registerSheet("age-of-sigmar-soulbound", GoalSheet, { types: ["goal"], makeDefault: true });
    Items.registerSheet("age-of-sigmar-soulbound", MiracleSheet, { types: ["miracle"], makeDefault: true });
    Items.registerSheet("age-of-sigmar-soulbound", PartyItemSheet, { types: ["ally", "enemy", "fear", "resource", "rumour", "threat"], makeDefault: true });
    Items.registerSheet("age-of-sigmar-soulbound", RuneSheet, { types: ["rune"], makeDefault: true });
    Items.registerSheet("age-of-sigmar-soulbound", SpellSheet, { types: ["spell"], makeDefault: true });
    Items.registerSheet("age-of-sigmar-soulbound", TalentSheet, { types: ["talent"], makeDefault: true });
    Items.registerSheet("age-of-sigmar-soulbound", WeaponSheet, { types: ["weapon"], makeDefault: true });
    Items.registerSheet("age-of-sigmar-soulbound", WoundSheet, { types: ["wound"], makeDefault: true });
    initializeHandlebars();
});

Hooks.on("getChatLogEntryContext", chat.addChatMessageContextOptions);

  /**
   * Create a macro when dropping an entity on the hotbar
   * Item      - open roll dialog for item
   */
Hooks.on("hotbarDrop", async (bar, data, slot) => {
    // Create item macro if rollable item - weapon, spell, prayer, trait, or skill
    if (data.type == "Item") {
      let item = data.data
      let command = `game.macro.rollItemMacro("${item.name}", "${item.type}");`;
      let macro = game.macros.entities.find(m => (m.name === item.name) && (m.command === command));
      if (!macro) {
        macro = await Macro.create({
          name: item.name,
          type: "script",
          img: item.img,
          command: command
        }, { displaySheet: false })
      }
      game.user.assignHotbarMacro(macro, slot);
    } else {
        return;
    }
});

/** Helpers  */

function _registerInitiative(rule) {
    switch (rule) {
        case "default":
            CONFIG.Combat.initiative = { formula: "@combat.initiative.total", decimals: 0 };
            break;
        case "roll1d6":
            CONFIG.Combat.initiative = { formula: "1d6 + @combat.initiative.total", decimals: 0 };
            break;
        case "roll2d6":
            CONFIG.Combat.initiative = { formula: "2d6 + @combat.initiative.total", decimals: 0 };
            break;
    }    
}

Hooks.on("ready", () => {
    Migration.checkMigration()
})