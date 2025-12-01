
export interface DocumentTypeUpdatableProperties {
}

export interface DocumentTypeProperties extends DocumentTypeUpdatableProperties {
   readonly Id: Id<DocumentType>;
   readonly CreatedAt: Date;
   readonly DbTable: string;
   readonly IsActive: boolean;
   readonly Type: string;
}

export interface DocumentTypeAssociations {
}

export interface DocumentType extends DocumentTypeProperties, DocumentTypeAssociations {
}

const defaultUpdatableProperties: DocumentTypeUpdatableProperties = {

}

const defaultProperties: DocumentTypeProperties = {
    ...defaultUpdatableProperties,
   Id: 0 as Id<DocumentType>,
   CreatedAt: new Date(),
   DbTable: '',
   IsActive: false,
   Type: ''
}

export const DocumentTypeTypeInfo: IEntityInfo<DocumentType, DocumentTypeProperties, DocumentTypeUpdatableProperties, DocumentTypeAssociations> = {
    Name: "DocumentType",
    EntityType: {} as DocumentType,
    PropertiesType: {} as DocumentTypeProperties,
    UpdatablePropertiesType: {} as DocumentTypeUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
     },
     Properties: {
 
 
         Id: {
            Name: "Id", 
            Type: "Id<DocumentType>",
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
        CreatedAt: {
            Name: "CreatedAt", 
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
        DbTable: {
            Name: "DbTable", 
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
        IsActive: {
            Name: "IsActive", 
            Type: "boolean",
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
