import { ContactCall, ContactCallTypeInfo } from './ContactCall.ts'
import { Contact, ContactTypeInfo } from './Contact.ts'
import { Phase, PhaseTypeInfo } from './Phase.ts'
import { ContactPhaseLogReferenceData, ContactPhaseLogReferenceDataTypeInfo } from './ContactPhaseLogReferenceData.ts'

export interface ContactPhaseLogUpdatableProperties {
}

export interface ContactPhaseLogProperties extends ContactPhaseLogUpdatableProperties {
   readonly CallId: Id<ContactCall> | null;
   readonly ContactId: Id<Contact>;
   readonly PhaseId: Id<Phase> | null;
   readonly PrevPhaseId: Id<Phase> | null;
   readonly ReceivedTimestamp: Date;
   readonly ReportedTimestamp: Date;
}

export interface ContactPhaseLogAssociations {
   readonly Call?: ContactCall;
   readonly Contact?: Contact;
   readonly Phase?: Phase;
   readonly PrevPhase?: Phase;
   readonly ReferenceData?: ContactPhaseLogReferenceData;
}

export interface ContactPhaseLog extends ContactPhaseLogProperties, ContactPhaseLogAssociations {
   readonly Id: Id<ContactPhaseLog>;
}

const defaultUpdatableProperties: ContactPhaseLogUpdatableProperties = {

}

const defaultProperties: ContactPhaseLogProperties = {
    ...defaultUpdatableProperties,
   CallId: null,
   ContactId: 0 as Id<Contact>,
   PhaseId: null,
   PrevPhaseId: null,
   ReceivedTimestamp: new Date(),
   ReportedTimestamp: new Date()
}

export const ContactPhaseLogTypeInfo: IEntityInfo<ContactPhaseLog, ContactPhaseLogProperties, ContactPhaseLogUpdatableProperties, ContactPhaseLogAssociations> = {
    Name: "ContactPhaseLog",
    EntityType: {} as ContactPhaseLog,
    PropertiesType: {} as ContactPhaseLogProperties,
    UpdatablePropertiesType: {} as ContactPhaseLogUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
        Call: () => ContactCallTypeInfo,
        Contact: () => ContactTypeInfo,
        Phase: () => PhaseTypeInfo,
        PrevPhase: () => PhaseTypeInfo,
        ReferenceData: () => ContactPhaseLogReferenceDataTypeInfo,
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<ContactPhaseLog>",
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
        PhaseId: {
            Name: "PhaseId", 
            Type: "Id<Phase>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "Phase",
            AssociationProp: "Phase",
        },
        PrevPhaseId: {
            Name: "PrevPhaseId", 
            Type: "Id<Phase>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "Phase",
            AssociationProp: "PrevPhase",
        },
        ReceivedTimestamp: {
            Name: "ReceivedTimestamp", 
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
        ReportedTimestamp: {
            Name: "ReportedTimestamp", 
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
        Phase: {
            Name: "Phase", 
            Type: "Phase",
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
        PrevPhase: {
            Name: "PrevPhase", 
            Type: "Phase",
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
        ReferenceData: {
            Name: "ReferenceData", 
            Type: "ContactPhaseLogReferenceData",
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
