
export interface CampaignTypeUpdatableProperties {
}

export interface CampaignTypeProperties extends CampaignTypeUpdatableProperties {
   readonly Id: Id<CampaignType>;
   readonly Description: string | null;
   readonly Name: string;
   readonly ReferenceKey: string;
}

export interface CampaignTypeAssociations {
}

export interface CampaignType extends CampaignTypeProperties, CampaignTypeAssociations {
}

const defaultUpdatableProperties: CampaignTypeUpdatableProperties = {

}

const defaultProperties: CampaignTypeProperties = {
    ...defaultUpdatableProperties,
   Id: 0 as Id<CampaignType>,
   Description: null,
   Name: '',
   ReferenceKey: ''
}

export const CampaignTypeTypeInfo: IEntityInfo<CampaignType, CampaignTypeProperties, CampaignTypeUpdatableProperties, CampaignTypeAssociations> = {
    Name: "CampaignType",
    EntityType: {} as CampaignType,
    PropertiesType: {} as CampaignTypeProperties,
    UpdatablePropertiesType: {} as CampaignTypeUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
     },
     Properties: {
 
 
         Id: {
            Name: "Id", 
            Type: "Id<CampaignType>",
            PrimaryKeyOrder: 0,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
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
        Name: {
            Name: "Name", 
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
        ReferenceKey: {
            Name: "ReferenceKey", 
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
