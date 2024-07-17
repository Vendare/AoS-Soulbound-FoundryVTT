let AOS = {}


AOS.attributes = {
    body :  "ATTRIBUTE.BODY",
    mind :  "ATTRIBUTE.MIND",
    soul :  "ATTRIBUTE.SOUL"
  }

AOS.skills = {
    arcana : "SKILL.ARCANA",
    athletics : "SKILL.ATHLETICS",
    awareness : "SKILL.AWARENESS",
    ballisticSkill : "SKILL.BALLISTIC_SKILL",
    beastHandling : "SKILL.BEAST_HANDLING",
    channelling : "SKILL.CHANNELLING",
    crafting : "SKILL.CRAFTING",
    determination : "SKILL.DETERMINATION",
    devotion : "SKILL.DEVOTION",
    dexterity : "SKILL.DEXTERITY",
    entertain : "SKILL.ENTERTAIN",
    fortitude : "SKILL.FORTITUDE",
    guile : "SKILL.GUILE",
    intimidation : "SKILL.INTIMIDATION",
    intuition : "SKILL.INTUITION",
    lore : "SKILL.LORE",
    medicine : "SKILL.MEDICINE",
    might : "SKILL.MIGHT",
    nature : "SKILL.NATURE",
    reflexes : "SKILL.REFLEXES",
    stealth : "SKILL.STEALTH",
    survival : "SKILL.SURVIVAL",
    theology : "SKILL.THEOLOGY",
    weaponSkill : "SKILL.WEAPON_SKILL"
}

AOS.skillAttributes = {
    arcana : "mind",
    athletics : "body",
    awareness : "mind",
    ballisticSkill : "body",
    beastHandling : "soul",
    channelling : "mind",
    crafting : "mind",
    determination : "soul",
    devotion : "soul",
    dexterity : "body",
    entertain : "soul",
    fortitude : "body",
    guile : "mind",
    intimidation : "soul",
    intuition : "mind",
    lore : "mind",
    medicine : "mind",
    might : "body",
    nature : "mind",
    reflexes : "body",
    stealth : "body",
    survival : "mind",
    theology : "mind",
    weaponSkill : "body"
}

AOS.availability = {
    "" : "-",
    "common" : "AVAILABILITY.COMMON",
    "rare" : "AVAILABILITY.RARE",
    "exotic" : "AVAILABILITY.EXOTIC",
    "special" : "AVAILABILITY.SPECIAL"
}

AOS.armourType = {
   "light" : "TYPE.LIGHT",
   "medium" : "TYPE.MEDIUM",
   "heavy" : "TYPE.HEAVY",
   "shield" : "TYPE.SHIELD"
}

AOS.range = {
    "self" : "RANGE.SELF",
    "close" : "RANGE.CLOSE",
    "short" : "RANGE.SHORT",
    "medium" : "RANGE.MEDIUM",
    "long" : "RANGE.LONG"
}

AOS.actorSize = {
    0 : "ACTOR.NPC_SIZE_TINY",
    1 : "ACTOR.NPC_SIZE_SMALL",
    2 : "ACTOR.NPC_SIZE_MEDIUM",
    3 : "ACTOR.NPC_SIZE_LARGE",
    4 : "ACTOR.NPC_SIZE_ENOURMOUS",
    5 : "ACTOR.NPC_SIZE_MONSTROUS"
}

AOS.npcType = {
   0 : "ACTOR.NPC_SWARM",
   1 : "ACTOR.NPC_MINION",
   2 : "ACTOR.NPC_WARRIOR",
   3 : "ACTOR.NPC_CHAMPION",
   4 : "ACTOR.NPC_CHOSEN"
}

AOS.speed = {
    "none" : "ACTOR.SPEED_NONE",
    "slow" : "ACTOR.SPEED_SLOW",
    "normal" : "ACTOR.SPEED_NORMAL",
    "fast" : "ACTOR.SPEED_FAST"
}

AOS.woundType = {
    "minor" : "WOUND.LIGHT",
    "serious" : "WOUND.SERIOUS",
    "deadly" : "WOUND.DEADLY"
}

AOS.woundDamage = {
    "minor" : 1,
    "serious" : 2,
    "deadly" : 3
}

AOS.ratings = {
    1 : "ABILITIES.POOR_NUM",
    2 : "ABILITIES.AVERAGE_NUM",
    3 : "ABILITIES.GOOD_NUM",
    4 : "ABILITIES.GREAT_NUM",
    5 : "ABILITIES.SUPERB_NUM",
    6 : "ABILITIES.EXTRAORDINARY_NUM",
    7 : "ABILITIES.INCALCULABLE_NUM"
}

AOS.durations = {
    "instant" : "DURATION.INSTANT",
    "round"  : "DURATION.ROUND",
    "minute" :  "DURATION.MINUTE",
    "hour" : "DURATION.HOUR",
    "day" : "DURATION.DAY",
    "permanent" : "DURATION.PERMANENT",
    "special" : "DURATION.SPECIAL"
}

AOS.zoneCover = {
    "partial" : "ZONE.PARTIAL",
    "total" : "ZONE.TOTAL",
}

AOS.zoneCoverBenefit = {
    "partial" : 1,
    "total" : 2
}

AOS.zoneHazard = {
    "minor" : "ZONE.MINOR",
    "major" : "ZONE.MAJOR",
    "deadly" : "ZONE.DEADLY",
}

AOS.zoneHazardDamage = {
    "minor" : 1,
    "major" : 3,
    "deadly" : 5
}


AOS.zoneObscured = {
    "light" : "ZONE.LIGHTLY_OBSCURED",
    "heavy" : "ZONE.HEAVILY_OBSCURED",
}


AOS.Expcost = {
    talentsAndMiracles : 2,
    attributes : [0, 2, 7, 14, 23, 34, 47, 62],
    skillAndFocus : [0, 1, 3, 7]
}

AOS.partyItemCategories = {
    longGoal : "PARTY.LONG_TERM_GOAL",
    shortGoal : "PARTY.SHORT_TERM_GOAL",
    ally : "PARTY.ALLY",
    enemy : "PARTY.ENEMY",
    resource : "PARTY.RESOURCE",
    rumour : "PARTY.RUMOUR",
    fear : "PARTY.FEAR",
    threat : "PARTY.THREAT",
}
AOS.partyItemCategoryLabels = {
    longGoal : "PARTY.COMPLETED",
    shortGoal : "PARTY.COMPLETED",
    ally : "PARTY.ALIVE",
    enemy : "PARTY.ALIVE",
    resource : "PARTY.ACTIVE",
    rumour : "PARTY.ACTIVE",
    fear : "PARTY.ACTIVE",
    threat : "PARTY.ACTIVE",
}

AOS.traits = {
    aetheric : "TRAITS.AETHERIC",
    blast : "TRAITS.BLAST",
    cleave : "TRAITS.CLEAVE",
    close : "TRAITS.CLOSE",
    crushing : "TRAITS.CRUSHING",
    defensive : "TRAITS.DEFENSIVE",
    ineffective : "TRAITS.INEFFECTIVE",
    loud : "TRAITS.LOUD",
    magical : "TRAITS.MAGICAL",
    penetrating : "TRAITS.PENETRATING",
    piercing : "TRAITS.PIERCING",
    range : "TRAITS.RANGE",
    reach : "TRAITS.REACH",
    reload : "TRAITS.RELOAD",
    rend : "TRAITS.REND",
    restraining : "TRAITS.RESTRAINING",
    sigmarite : "TRAITS.SIGMARITE",
    slashing : "TRAITS.SLASHING",
    spread : "TRAITS.SPREAD",
    subtle : "TRAITS.SUBTLE",
    thrown : "TRAITS.THROWN",
    twohanded : "TRAITS.TWOHANDED"
}

AOS.dicePath = "systems/age-of-sigmar-soulbound/asset/image"
AOS.traitDescriptions = {}
AOS.conditionDescriptions = {}
AOS.traitsWithValue = ["range", "thrown", "blast"]

AOS.transferTypes = {
    document : "WH.EffectApplicationDocument",
    damage : "WH.EffectApplicationDamage",
    target : "WH.EffectApplicationTarget",
    zone : "WH.EffectApplicationZone",
    other : "WH.EffectApplicationOther"
},

AOS.scriptTriggers = {
    manual : "WH.TriggerManual",
    immediate : "WH.TriggerImmediate",
    prepareBaseData : "WH.TriggerPrepareBaseData",
    prePrepareDerivedData : "WH.TriggerPrePrepareDerivedData",
    postPrepareDerivedData : "WH.TriggerPostPrepareDerivedData",

    prepareOwnedItemBaseData : "WH.TriggerPrepareOwnedItemBaseData",
    prePrepareOwnedItemDerivedData : "WH.TriggerPrePrepareOwnedItemDerivedData",
    postPrepareOwnedItemDerivedData : "WH.TriggerPostPrepareOwnedItemDerivedData",

    computeCharacteristics : "Compute Characteristics",
    computeEncumbrance : "Compute Encumbrance",
    computeCombat : "Compute Combat",
    computeWarpState : "Compute Warp State",
    prepareOwnedItems : "Prepare Owned Items",
    prepareOwnedData : "Prepare Owned Data",

    dialog : "WH.TriggerDialog",

    preRollTest : "WH.TriggerPreRollTest",
    preRollSkillTest : "WH.TriggerPreRollSkillTest",
    preRollWeaponTest : "WH.TriggerPreRollWeaponTest",
    preRollTraitTest : "WH.TriggerPreRollTraitTest",
    preRollPowerTest : "WH.TriggerPreRollPowerTest",

    rollTest : "WH.TriggerRollTest",
    rollSkillTest : "WH.TriggerRollSkillTest",
    rollWeaponTest : "WH.TriggerRollWeaponTest",
    rollTraitTest : "WH.TriggerRollTraitTest",
    rollPowerTest : "WH.TriggerRollPowerTest",

    // preAttackerEvaluateOpposed : "WH.TriggerPreAttackerEvaluateOpposed",
    // preAttackerComputeOpposedDamage : "WH.TriggerPreAttackerComputeOpposedDamage",
    // postAttackerEvaluateOpposed : "WH.TriggerAttackerEvaluateOpposed",

    // preDefenderEvaluateOpposed : "WH.TriggerPreDefenderEvaluateOpposed",
    // preDefenderComputeOpposedDamage : "WH.TriggerPreDefenderComputeOpposedDamage",
    // postDefenderEvaluateOpposed : "WH.TriggerDefenderEvaluateOpposed",

    preApplyDamage : "WH.TriggerPreApplyDamage",
    applyDamage : "WH.TriggerApplyDamage",
    preTakeDamage : "WH.TriggerPreTakeDamage",
    takeDamage : "WH.TriggerTakeDamage",

    createToken : "WH.TriggerCreateToken",
    createItem : "WH.TriggerCreateItem",
    preUpdateDocument : "WH.TriggerPreUpdateDocument",
    updateDocument : "WH.TriggerUpdateDocument",
    createCondition : "WH.TriggerCreateCondition",
    deleteEffect : "WH.TriggerDeleteEffect",

    startRound : "WH.TriggerStartRound",
    endRound : "WH.TriggerEndRound",
    startTurn : "WH.TriggerStartTurn",
    endTurn : "WH.TriggerEndTurn",
    updateCombat  : "WH.UpdateCombat"
},

AOS.syncTriggers = ["prepareBaseData",
"prePrepareDerivedData",
"postPrepareDerivedData",
"prepareOwnedItemBaseData",
"prePrepareOwnedItemDerivedData",
"postPrepareOwnedItemDerivedData",
"computeCharacteristics",
"computeEncumbrance",
"computeCombat",
"computeWarpState",
"prepareOwnedItems",
"prepareOwnedData"]

AOS.effectKeysTemplate = "systems/age-of-sigmar-soulbound/template/apps/effect-key-options.hbs",
AOS.avoidTestTemplate = "systems/age-of-sigmar-soulbound/template/apps/effect-avoid-test.hbs",
AOS.effectScripts = [],

AOS.systemEffects = {
    "partial" : {
        id : "partial",
        name : "EFFECT.PartialCover",
        icon : "icons/svg/tower.svg",
        changes : [
            {key: "defence", mode : 7, value : 1},
            {key: "difficulty", mode : 6, value : -1}
        ],
        flags : { 
            "age-of-sigmar-soulbound.changeCondition" : { 
                0 : {description : "Ranged Attacks", script : "return data.weapon && data.weapon.traitList.range"},
                1 : {description : "Being Detected", script : ""}
            }
        }
    },
    "total" : {
        id : "total",
        name : "EFFECT.TotalCover",
        icon : "icons/svg/tower.svg",
        changes : [
            {key: "defence", mode : 7, value : 2},
            {key: "difficulty", mode : 6, value : -2}
        ],
        flags : { 
            "age-of-sigmar-soulbound.changeCondition" : { 
                0 : {description : "Ranged Attacks", script : "return !!(data.weapon && data.weapon.traitList.range)"},
                1 : {description : "Being Detected", script : ""}
            }
        }
    },
    "light" : {
        id : "light",
        name : "EFFECT.LightlyObscured",
        icon : "icons/svg/blind.svg",
        changes : [
            {key: "difficulty", mode : 6, value : 1},
        ],
        flags : { 
            "age-of-sigmar-soulbound.changeCondition" : { 
                0 : {description : "Mind (Awareness) Tests that rely on sight", script : ""}
            }
        }
    },
    "heavy" : {
        id : "heavy",
        name : "EFFECT.HeavilyObscured",
        icon : "icons/svg/blind.svg",
        changes : [
            {key: "difficulty", mode : 6, value : 2},
            {key: "system.combat.melee.bonus", mode : 2, value : -1},
            {key: "system.combat.accuracy.bonus", mode : 2, value : -1},
            {key: "system.combat.defence.bonus", mode : 2, value : -1}
        ],
        flags : { 
            "age-of-sigmar-soulbound.changeCondition" : { 
                0 : {description : "Mind (Awareness) Tests that rely on sight", script : ""}
            }
        }
    },
    "difficult" : {
        id : "difficult",
        name : "EFFECT.DifficultTerrain",
        icon : "icons/svg/downgrade.svg",
        changes : [
            {key: "difficulty", mode : 6, value : 1}
        ],
        flags : { 
            "age-of-sigmar-soulbound.changeCondition" : { 
                0 : {description : "Body (Reflexes) Tests", script : "return data.skillKey == 'reflexes'"}
            }
        }
    },
}


CONFIG.statusEffects = [
    {
        id : "blinded",
        name : "CONDITION.BLINDED",
        icon : "systems/age-of-sigmar-soulbound/asset/icons/blinded.svg",
        changes : [
            {key: "difficulty", mode : 6, value : 2},
            {key: "system.combat.melee.bonus", mode : 2, value : -1},
            {key: "system.combat.accuracy.bonus", mode : 2, value : -1},
            {key: "system.combat.defence.bonus", mode : 2, value : -1}
        ],
        flags : { 
            "age-of-sigmar-soulbound.changeCondition" : { 
                0 : {description : "Mind (Awareness) Tests that rely on sight", script : ""}
            }
        }
    },
    {
        id : "charmed",
        name : "CONDITION.CHARMED",
        icon : "systems/age-of-sigmar-soulbound/asset/icons/charmed.svg"
    },
    {
        id : "deafened",
        name : "CONDITION.DEAFENED",
        icon : "systems/age-of-sigmar-soulbound/asset/icons/deafened.svg",
        changes : [{key: "bonusDice", mode : 6, value : -1}],
        flags : { 
            "age-of-sigmar-soulbound.changeCondition" : { 
                0 : {description : "Requires Hearing", script : ""}
            }
        }
    },
    {
        id : "frightened",
        name : "CONDITION.FRIGHTENED",
        icon : "systems/age-of-sigmar-soulbound/asset/icons/frightened.svg",
        changes : [{key: "bonusDice", mode : 6, value : -1}],
        flags : { 
            "age-of-sigmar-soulbound.changeCondition" : { 
                0 : {description : "Within line of sight of the source of fear", script : ""}
            }
        }
    },
    {
        id : "incapacitated",
        name : "CONDITION.INCAPACITATED",
        icon : "systems/age-of-sigmar-soulbound/asset/icons/incapacitated.svg"
    },
    {
        id : "poisoned",
        name : "CONDITION.POISONED",
        icon : "systems/age-of-sigmar-soulbound/asset/icons/poisoned.svg",
        changes : [{key: "bonusDice", mode : 6, value : -1}],
        flags : { 
            "age-of-sigmar-soulbound.changeCondition" : { 
                0 : {description : "All Tests", script : "return true"}
            }
        }
    },
    {
        id : "prone",
        name : "CONDITION.PRONE",
        icon : "systems/age-of-sigmar-soulbound/asset/icons/prone.svg",
        changes : [
            {key: "system.combat.melee.bonus", mode : 2, value : -1},
            {key: "system.combat.accuracy.bonus", mode : 2, value : -1}
        ]
    },
    {
        id : "restrained",
        name : "CONDITION.RESTRAINED",
        icon : "systems/age-of-sigmar-soulbound/asset/icons/restrained.svg",
        changes : [
            {key: "system.combat.melee.bonus", mode : 2, value : -1},
            {key: "system.combat.accuracy.bonus", mode : 2, value : -1},
            {key: "system.combat.defence.bonus", mode : 2, value : -1}
        ]
    },
    {
        id : "stunned",
        name : "CONDITION.STUNNED",
        icon : "systems/age-of-sigmar-soulbound/asset/icons/stunned.svg",
        changes : [
            {key: "system.combat.speeds.foot", mode : 5, value : "slow"},
            {key: "system.combat.defence.bonus", mode : 2, value : -1}
        ]
    },
    {
        id : "unconscious",
        name : "CONDITION.UNCONSCIOUS",
        icon : "systems/age-of-sigmar-soulbound/asset/icons/unconscious.svg"
    },
    {       
        id: "dead",
        name: "EFFECT.StatusDead", // Foundry Default Text Key
        icon: "systems/age-of-sigmar-soulbound/asset/icons/dead.svg"
    }
]

export default AOS
