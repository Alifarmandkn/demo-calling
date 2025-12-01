
export interface VoicebotServerUpdatableProperties {
   readonly CallDirection: CallDirection;
   readonly Capacity: number;
}

export interface VoicebotServerProperties extends VoicebotServerUpdatableProperties {
   readonly Host: string;
}

export interface VoicebotServerAssociations {
}

export interface VoicebotServer extends VoicebotServerProperties, VoicebotServerAssociations {
}

const defaultUpdatableProperties: VoicebotServerUpdatableProperties = {
   CallDirection: '',
   Capacity: 0
}

const defaultProperties: VoicebotServerProperties = {
    ...defaultUpdatableProperties,
   Host: ''
}

export const VoicebotServerTypeInfo: IEntityInfo<VoicebotServer, VoicebotServerProperties, VoicebotServerUpdatableProperties, VoicebotServerAssociations> = {
    Name: "VoicebotServer",
    EntityType: {} as VoicebotServer,
    PropertiesType: {} as VoicebotServerProperties,
    UpdatablePropertiesType: {} as VoicebotServerUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
     },
     Properties: {
 
 
         Host: {
            Name: "Host", 
            Type: "string",
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

         CallDirection: {
            Name: "CallDirection", 
            Type: "CallDirection",
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
        Capacity: {
            Name: "Capacity", 
            Type: "number",
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

 
     }
}
