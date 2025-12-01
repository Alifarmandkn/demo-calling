import { ContactPhaseLog, ContactPhaseLogTypeInfo } from './ContactPhaseLog.ts'

export interface ContactPhaseLogReferenceDataUpdatableProperties {
}

export interface ContactPhaseLogReferenceDataProperties extends ContactPhaseLogReferenceDataUpdatableProperties {
   readonly ContactPhaseLogId: Id<ContactPhaseLog>;
   readonly PhaseReference: string;
   readonly PrevPhaseReference: string | null;
}

export interface ContactPhaseLogReferenceDataAssociations {
   readonly ContactPhaseLog?: ContactPhaseLog;
}

export interface ContactPhaseLogReferenceData extends ContactPhaseLogReferenceDataProperties, ContactPhaseLogReferenceDataAssociations {
}

const defaultUpdatableProperties: ContactPhaseLogReferenceDataUpdatableProperties = {

}

const defaultProperties: ContactPhaseLogReferenceDataProperties = {
    ...defaultUpdatableProperties,
   ContactPhaseLogId: 0 as Id<ContactPhaseLog>,
   PhaseReference: '',
   PrevPhaseReference: null
}

export const ContactPhaseLogReferenceDataTypeInfo: IEntityInfo<ContactPhaseLogReferenceData, ContactPhaseLogReferenceDataProperties, ContactPhaseLogReferenceDataUpdatableProperties, ContactPhaseLogReferenceDataAssociations> = {
    Name: "ContactPhaseLogReferenceData",
    EntityType: {} as ContactPhaseLogReferenceData,
    PropertiesType: {} as ContactPhaseLogReferenceDataProperties,
    UpdatablePropertiesType: {} as ContactPhaseLogReferenceDataUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
        ContactPhaseLog: () => ContactPhaseLogTypeInfo,
     },
     Properties: {
 
 
         ContactPhaseLogId: {
            Name: "ContactPhaseLogId", 
            Type: "Id<ContactPhaseLog>",
            PrimaryKeyOrder: 0,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "ContactPhaseLog",
            AssociationProp: "ContactPhaseLog",
        },
        PhaseReference: {
            Name: "PhaseReference", 
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
        PrevPhaseReference: {
            Name: "PrevPhaseReference", 
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

 
         ContactPhaseLog: {
            Name: "ContactPhaseLog", 
            Type: "ContactPhaseLog",
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
