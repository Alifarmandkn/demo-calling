import { DocumentType, DocumentTypeTypeInfo } from './DocumentType.ts'
import { User, UserTypeInfo } from './User.ts'

export interface DocumentUpdatableProperties {
}

export interface DocumentProperties extends DocumentUpdatableProperties {
   readonly CreatedAt: Date;
   readonly Image: string;
   readonly RecordId: string;
   readonly Status: boolean;
   readonly TypeId: Id<DocumentType>;
   readonly UploadById: Id<User>;
   readonly Url: string | null;
}

export interface DocumentAssociations {
   readonly Type?: DocumentType;
   readonly UploadBy?: User;
}

export interface Document extends DocumentProperties, DocumentAssociations {
   readonly Id: Id<Document>;
}

const defaultUpdatableProperties: DocumentUpdatableProperties = {

}

const defaultProperties: DocumentProperties = {
    ...defaultUpdatableProperties,
   CreatedAt: new Date(),
   Image: '',
   RecordId: '',
   Status: false,
   TypeId: 0 as Id<DocumentType>,
   UploadById: 0 as Id<User>,
   Url: null
}

export const DocumentTypeInfo: IEntityInfo<Document, DocumentProperties, DocumentUpdatableProperties, DocumentAssociations> = {
    Name: "Document",
    EntityType: {} as Document,
    PropertiesType: {} as DocumentProperties,
    UpdatablePropertiesType: {} as DocumentUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
        Type: () => DocumentTypeTypeInfo,
        UploadBy: () => UserTypeInfo,
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<Document>",
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
        Image: {
            Name: "Image", 
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
        RecordId: {
            Name: "RecordId", 
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
        Status: {
            Name: "Status", 
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
        TypeId: {
            Name: "TypeId", 
            Type: "Id<DocumentType>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "DocumentType",
            AssociationProp: "Type",
        },
        UploadById: {
            Name: "UploadById", 
            Type: "Id<User>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "User",
            AssociationProp: "UploadBy",
        },
        Url: {
            Name: "Url", 
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
            Type: "DocumentType",
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
        UploadBy: {
            Name: "UploadBy", 
            Type: "User",
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
