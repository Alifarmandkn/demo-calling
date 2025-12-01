import { ContactCall, ContactCallTypeInfo } from './ContactCall.ts'

export interface CallTracingUpdatableProperties {
}

export interface CallTracingProperties extends CallTracingUpdatableProperties {
   readonly CallLeg: string;
   readonly Category: string;
   readonly ContactCallId: Id<ContactCall>;
   readonly Data: string;
   readonly LogLevel: number;
   readonly Timestamp: Date;
}

export interface CallTracingAssociations {
   readonly ContactCall?: ContactCall;
}

export interface CallTracing extends CallTracingProperties, CallTracingAssociations {
   readonly Id: Id<CallTracing>;
}

const defaultUpdatableProperties: CallTracingUpdatableProperties = {

}

const defaultProperties: CallTracingProperties = {
    ...defaultUpdatableProperties,
   CallLeg: '',
   Category: '',
   ContactCallId: 0 as Id<ContactCall>,
   Data: '',
   LogLevel: 0,
   Timestamp: new Date()
}

export const CallTracingTypeInfo: IEntityInfo<CallTracing, CallTracingProperties, CallTracingUpdatableProperties, CallTracingAssociations> = {
    Name: "CallTracing",
    EntityType: {} as CallTracing,
    PropertiesType: {} as CallTracingProperties,
    UpdatablePropertiesType: {} as CallTracingUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
        ContactCall: () => ContactCallTypeInfo,
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<CallTracing>",
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

 
         CallLeg: {
            Name: "CallLeg", 
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
        Category: {
            Name: "Category", 
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
        ContactCallId: {
            Name: "ContactCallId", 
            Type: "Id<ContactCall>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "ContactCall",
            AssociationProp: "ContactCall",
        },
        Data: {
            Name: "Data", 
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
        LogLevel: {
            Name: "LogLevel", 
            Type: "number",
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
        Timestamp: {
            Name: "Timestamp", 
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

 
         ContactCall: {
            Name: "ContactCall", 
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

     }
}
