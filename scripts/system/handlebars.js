export const initializeHandlebars = () => {
    registerHandlebarsHelpers();
    preloadHandlebarsTemplates();
};

function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/age-of-sigmar-soulbound/template/sheet/tab/player-stats.hbs",
        "systems/age-of-sigmar-soulbound/template/sheet/tab/player-combat.hbs",
        "systems/age-of-sigmar-soulbound/template/sheet/tab/player-talents.hbs",
        "systems/age-of-sigmar-soulbound/template/sheet/tab/player-gear.hbs",
        "systems/age-of-sigmar-soulbound/template/sheet/tab/player-bio.hbs",
        "systems/age-of-sigmar-soulbound/template/sheet/tab/player-notes.hbs",
        "systems/age-of-sigmar-soulbound/template/sheet/tab/actor-effects.hbs",
        "systems/age-of-sigmar-soulbound/template/sheet/tab/party-main.hbs",
        "systems/age-of-sigmar-soulbound/template/sheet/tab/party-members.hbs",
        "systems/age-of-sigmar-soulbound/template/sheet/tab/item-effects.hbs",
        "systems/age-of-sigmar-soulbound/template/chat/base/base-result.hbs",
        "systems/age-of-sigmar-soulbound/template/chat/base/base-targets.hbs",
        "systems/age-of-sigmar-soulbound/template/chat/base/dice-container.hbs",
        "systems/age-of-sigmar-soulbound/template/chat/weapon/weapon-result.hbs",
        "systems/age-of-sigmar-soulbound/template/chat/weapon/weapon-buttons.hbs",
        "systems/age-of-sigmar-soulbound/template/chat/weapon/secondary-weapon-buttons.hbs",
        "systems/age-of-sigmar-soulbound/template/chat/spell/spell-result.hbs",
        "systems/age-of-sigmar-soulbound/template/chat/spell/spell-buttons.hbs",
        "systems/age-of-sigmar-soulbound/template/chat/miracle/miracle-result.hbs",
        "systems/age-of-sigmar-soulbound/template/chat/miracle/miracle-buttons.hbs"
    ];
    return loadTemplates(templatePaths);
}

function registerHandlebarsHelpers() {
    Handlebars.registerHelper("removeMarkup", function (text) {
        const markup = /<(.*?)>/gi;
        return text.replace(markup, "");
    });

    Handlebars.registerHelper("ifIsGM", function (options) {
        return game.user.isGM ? options.fn(this) : options.inverse(this)
    })

    Handlebars.registerHelper("isGM", function (options) {
        return game.user.isGM
    })

    Handlebars.registerHelper("config", function (key) {
        return game.aos.config[key]
    })

    Handlebars.registerHelper("configLookup", function (obj, key) {
        return game.aos.config[obj][key]
    })

    Handlebars.registerHelper("lookup", function (obj, key) {
        return getProperty(obj, key)
    })


    Handlebars.registerHelper("enrich", function (string) {
        return TextEditor.enrichHTML(string, {async: false})
    })

    Handlebars.registerHelper("arrayDisplay", function (array, cls) {
        if (typeof cls == "string")
            return array.map(i => `<a class="${cls}">${i}</a>`).join(`,`)
        else
            return array.join(", ")
    })
}