import { ContactCall, ContactCallTypeInfo } from './ContactCall.ts'
import { Contact, ContactTypeInfo } from './Contact.ts'
import { MessageStatus, MessageStatusTypeInfo } from './MessageStatus.ts'

export interface ContactSmsUpdatableProperties {
   readonly StatusId: Id<MessageStatus>;
}

export interface ContactSmsProperties extends ContactSmsUpdatableProperties {
   readonly CallId: Id<ContactCall> | null;
   readonly ContactId: Id<Contact>;
   readonly From: string;
   readonly Reason: string;
   readonly SentTime: Date;
   readonly Text: string;
   readonly To: string;
}

export interface ContactSmsAssociations {
   readonly Call?: ContactCall;
   readonly Contact?: Contact;
   readonly Status?: MessageStatus;
}

export interface ContactSms extends ContactSmsProperties, ContactSmsAssociations {
   readonly Id: Id<ContactSms>;
   readonly UpdatedTime: Date;
   readonly ExternalUuid: string | null;
}

const defaultUpdatableProperties: ContactSmsUpdatableProperties = {
   StatusId: 0 as Id<MessageStatus>
}

const defaultProperties: ContactSmsProperties = {
    ...defaultUpdatableProperties,
   CallId: null,
   ContactId: 0 as Id<Contact>,
   From: '',
   Reason: '',
   SentTime: new Date(),
   Text: '',
   To: ''
}

export const ContactSmsTypeInfo: IEntityInfo<ContactSms, ContactSmsProperties, ContactSmsUpdatableProperties, ContactSmsAssociations> = {
    Name: "ContactSms",
    EntityType: {} as ContactSms,
    PropertiesType: {} as ContactSmsProperties,
    UpdatablePropertiesType: {} as ContactSmsUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
        Call: () => ContactCallTypeInfo,
        Contact: () => ContactTypeInfo,
        Status: () => MessageStatusTypeInfo,
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<ContactSms>",
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

         UpdatedTime: {
            Name: "UpdatedTime", 
            Type: "Date",
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
        ExternalUuid: {
            Name: "ExternalUuid", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: false,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },

         CallId: {
            Name: "CallId", 
            Type: "Id<ContactCall>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "ContactCall",
            AssociationProp: "Call",
        },
        ContactId: {
            Name: "ContactId", 
            Type: "Id<Contact>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "Contact",
            AssociationProp: "Contact",
        },
        From: {
            Name: "From", 
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
        Reason: {
            Name: "Reason", 
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
        SentTime: {
            Name: "SentTime", 
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
        Text: {
            Name: "Text", 
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
        To: {
            Name: "To", 
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

         StatusId: {
            Name: "StatusId", 
            Type: "Id<MessageStatus>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "MessageStatus",
            AssociationProp: "Status",
        },

         Call: {
            Name: "Call", 
            Type: "ContactCall",
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
        Contact: {
            Name: "Contact", 
            Type: "Contact",
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
        Status: {
            Name: "Status", 
            Type: "MessageStatus",
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
