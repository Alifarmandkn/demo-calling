import { Campaign, CampaignTypeInfo } from './Campaign.ts'

export interface ContactListUpdatableProperties {
   readonly ActiveFrom: Date | null;
   readonly ActiveTo: Date | null;
   readonly CampaignId: Id<Campaign> | null;
   readonly Description: string | null;
   readonly IsActive: boolean;
   readonly IsTest: boolean;
   readonly Name: string;
}

export interface ContactListProperties extends ContactListUpdatableProperties {
}

export interface ContactListAssociations {
   readonly Campaign?: Campaign;
}

export interface ContactList extends ContactListProperties, ContactListAssociations {
   readonly Id: Id<ContactList>;
}

const defaultUpdatableProperties: ContactListUpdatableProperties = {
   ActiveFrom: null,
   ActiveTo: null,
   CampaignId: null,
   Description: null,
   IsActive: false,
   IsTest: false,
   Name: ''
}

const defaultProperties: ContactListProperties = {
    ...defaultUpdatableProperties,

}

export const ContactListTypeInfo: IEntityInfo<ContactList, ContactListProperties, ContactListUpdatableProperties, ContactListAssociations> = {
    Name: "ContactList",
    EntityType: {} as ContactList,
    PropertiesType: {} as ContactListProperties,
    UpdatablePropertiesType: {} as ContactListUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
        Campaign: () => CampaignTypeInfo,
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<ContactList>",
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

 
 
         ActiveFrom: {
            Name: "ActiveFrom", 
            Type: "Date",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        ActiveTo: {
            Name: "ActiveTo", 
            Type: "Date",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        CampaignId: {
            Name: "CampaignId", 
            Type: "Id<Campaign>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "Campaign",
            AssociationProp: "Campaign",
        },
        Description: {
            Name: "Description", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        IsActive: {
            Name: "IsActive", 
            Type: "boolean",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        IsTest: {
            Name: "IsTest", 
            Type: "boolean",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: true,
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
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },

         Campaign: {
            Name: "Campaign", 
            Type: "Campaign",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: true,
            AssociationType: undefined,
            AssociationProp: undefined,
        },

     }
}
