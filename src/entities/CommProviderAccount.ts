import { CommProviderType, CommProviderTypeTypeInfo } from './CommProviderType.ts'

export interface CommProviderAccountUpdatableProperties {
}

export interface CommProviderAccountProperties extends CommProviderAccountUpdatableProperties {
   readonly CommProviderTypeId: Id<CommProviderType>;
   readonly CreatedTime: Date;
   readonly ExternalUuid: string;
}

export interface CommProviderAccountAssociations {
   readonly CommProviderType?: CommProviderType;
}

export interface CommProviderAccount extends CommProviderAccountProperties, CommProviderAccountAssociations {
   readonly Id: Id<CommProviderAccount>;
   readonly DataVersion: number;
   readonly IsActive: boolean;
   readonly IsDeleted: boolean;
   readonly PublicDataAsJson: string;
}

const defaultUpdatableProperties: CommProviderAccountUpdatableProperties = {

}

const defaultProperties: CommProviderAccountProperties = {
    ...defaultUpdatableProperties,
   CommProviderTypeId: 0 as Id<CommProviderType>,
   CreatedTime: new Date(),
   ExternalUuid: ''
}

export const CommProviderAccountTypeInfo: IEntityInfo<CommProviderAccount, CommProviderAccountProperties, CommProviderAccountUpdatableProperties, CommProviderAccountAssociations> = {
    Name: "CommProviderAccount",
    EntityType: {} as CommProviderAccount,
    PropertiesType: {} as CommProviderAccountProperties,
    UpdatablePropertiesType: {} as CommProviderAccountUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
        CommProviderType: () => CommProviderTypeTypeInfo,
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<CommProviderAccount>",
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

         DataVersion: {
            Name: "DataVersion", 
            Type: "number",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: false,
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
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        IsDeleted: {
            Name: "IsDeleted", 
            Type: "boolean",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        PublicDataAsJson: {
            Name: "PublicDataAsJson", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },

         CommProviderTypeId: {
            Name: "CommProviderTypeId", 
            Type: "Id<CommProviderType>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "CommProviderType",
            AssociationProp: "CommProviderType",
        },
        CreatedTime: {
            Name: "CreatedTime", 
            Type: "Date",
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
        ExternalUuid: {
            Name: "ExternalUuid", 
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

 
         CommProviderType: {
            Name: "CommProviderType", 
            Type: "CommProviderType",
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
