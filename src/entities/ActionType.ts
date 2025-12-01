
export interface ActionTypeUpdatableProperties {
}

export interface ActionTypeProperties extends ActionTypeUpdatableProperties {
   readonly Description: string | null;
   readonly Type: string;
}

export interface ActionTypeAssociations {
}

export interface ActionType extends ActionTypeProperties, ActionTypeAssociations {
   readonly Id: Id<ActionType>;
}

const defaultUpdatableProperties: ActionTypeUpdatableProperties = {

}

const defaultProperties: ActionTypeProperties = {
    ...defaultUpdatableProperties,
   Description: null,
   Type: ''
}

export const ActionTypeTypeInfo: IEntityInfo<ActionType, ActionTypeProperties, ActionTypeUpdatableProperties, ActionTypeAssociations> = {
    Name: "ActionType",
    EntityType: {} as ActionType,
    PropertiesType: {} as ActionTypeProperties,
    UpdatablePropertiesType: {} as ActionTypeUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<ActionType>",
            PrimaryKeyOrder: 0,
            IsGeneratedKey: true,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },

 
         Description: {
            Name: "Description", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        Type: {
            Name: "Type", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },

 
 
     }
}
