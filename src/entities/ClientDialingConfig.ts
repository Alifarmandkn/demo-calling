
export interface ClientDialingConfigUpdatableProperties {
}

export interface ClientDialingConfigProperties extends ClientDialingConfigUpdatableProperties {
}

export interface ClientDialingConfigAssociations {
}

export interface ClientDialingConfig extends ClientDialingConfigProperties, ClientDialingConfigAssociations {
   readonly IsOutboundDialingRunning: boolean;
   readonly LastSupervisionTimestamp: Date | null;
   readonly OutboundCallsRemaining: number | null;
   readonly OutboundCapacity: number;
   readonly OutboundDialingMode: DialingMode;
   readonly OutboundMillisecondsBetweenCalls: number | null;
   readonly SupervisionTimeout: string | null;
   readonly RateLimitOverride: string | null;
   readonly UseRealDialing: boolean;
   readonly UseTestContacts: boolean;
}

const defaultUpdatableProperties: ClientDialingConfigUpdatableProperties = {

}

const defaultProperties: ClientDialingConfigProperties = {
    ...defaultUpdatableProperties,

}

export const ClientDialingConfigTypeInfo: IEntityInfo<ClientDialingConfig, ClientDialingConfigProperties, ClientDialingConfigUpdatableProperties, ClientDialingConfigAssociations> = {
    Name: "ClientDialingConfig",
    EntityType: {} as ClientDialingConfig,
    PropertiesType: {} as ClientDialingConfigProperties,
    UpdatablePropertiesType: {} as ClientDialingConfigUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
     },
     Properties: {
 
         IsOutboundDialingRunning: {
            Name: "IsOutboundDialingRunning", 
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
        LastSupervisionTimestamp: {
            Name: "LastSupervisionTimestamp", 
            Type: "Date",
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
        OutboundCallsRemaining: {
            Name: "OutboundCallsRemaining", 
            Type: "number",
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
        OutboundCapacity: {
            Name: "OutboundCapacity", 
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
        OutboundDialingMode: {
            Name: "OutboundDialingMode", 
            Type: "DialingMode",
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
        OutboundMillisecondsBetweenCalls: {
            Name: "OutboundMillisecondsBetweenCalls", 
            Type: "number",
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
        SupervisionTimeout: {
            Name: "SupervisionTimeout", 
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
        RateLimitOverride: {
            Name: "RateLimitOverride", 
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
        UseRealDialing: {
            Name: "UseRealDialing", 
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
        UseTestContacts: {
            Name: "UseTestContacts", 
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

 
 
 
     }
}
