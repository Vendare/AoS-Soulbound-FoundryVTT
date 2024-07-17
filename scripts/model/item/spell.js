import { TestDataModel } from "./components/test";
import { StandardItemModel } from "./standard";

let fields = foundry.data.fields;


export class SpellModel extends StandardItemModel
{
    static defineSchema() 
    {
        let schema = super.defineSchema();
        schema.target = new fields.StringField();
        schema.dn = new fields.StringField();
        schema.attribute = new fields.StringField({initial : "mind"});
        schema.range = new fields.StringField({initial: "you"});
        schema.duration = new fields.SchemaField({
            value : new fields.StringField({nullable : true}),
            unit : new fields.StringField({initial : "instant"})
        });
        schema.damage = new fields.StringField();
        schema.overcast = new fields.StringField();
        schema.overcasts = new fields.ArrayField(new fields.SchemaField({
            ratio : new fields.SchemaField({
                success : new fields.NumberField({min: 0, initial : 1}),
                value : new fields.NumberField({initial : 1}),
            }),
            initial : new fields.NumberField(),
            property : new fields.StringField(),
            description : new fields.StringField(),
            title : new fields.StringField()
        }));
        schema.effect = new fields.StringField();
        schema.lore = new fields.StringField();
        schema.test = new fields.EmbeddedDataField(TestDataModel);

        return schema;
    }

    get difficulty()
    {
        return game.aos.utility.DNToObject(this.dn)
    }

}