
export interface GlobalDialingConfigUpdatableProperties {
}

export interface GlobalDialingConfigProperties extends GlobalDialingConfigUpdatableProperties {
   readonly IsOutboundDialingRunning: boolean;
}

export interface GlobalDialingConfigAssociations {
}

export interface GlobalDialingConfig extends GlobalDialingConfigProperties, GlobalDialingConfigAssociations {
}

const defaultUpdatableProperties: GlobalDialingConfigUpdatableProperties = {

}

const defaultProperties: GlobalDialingConfigProperties = {
    ...defaultUpdatableProperties,
   IsOutboundDialingRunning: false
}

export const GlobalDialingConfigTypeInfo: IEntityInfo<GlobalDialingConfig, GlobalDialingConfigProperties, GlobalDialingConfigUpdatableProperties, GlobalDialingConfigAssociations> = {
    Name: "GlobalDialingConfig",
    EntityType: {} as GlobalDialingConfig,
    PropertiesType: {} as GlobalDialingConfigProperties,
    UpdatablePropertiesType: {} as GlobalDialingConfigUpdatableProperties,
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
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },

 
 
     }
}
