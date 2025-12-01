
export interface MessageStatusUpdatableProperties {
}

export interface MessageStatusProperties extends MessageStatusUpdatableProperties {
   readonly Id: Id<MessageStatus>;
   readonly ReferenceKey: string;
}

export interface MessageStatusAssociations {
}

export interface MessageStatus extends MessageStatusProperties, MessageStatusAssociations {
}

const defaultUpdatableProperties: MessageStatusUpdatableProperties = {

}

const defaultProperties: MessageStatusProperties = {
    ...defaultUpdatableProperties,
   Id: 0 as Id<MessageStatus>,
   ReferenceKey: ''
}

export const MessageStatusTypeInfo: IEntityInfo<MessageStatus, MessageStatusProperties, MessageStatusUpdatableProperties, MessageStatusAssociations> = {
    Name: "MessageStatus",
    EntityType: {} as MessageStatus,
    PropertiesType: {} as MessageStatusProperties,
    UpdatablePropertiesType: {} as MessageStatusUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
     },
     Properties: {
 
 
         Id: {
            Name: "Id", 
            Type: "Id<MessageStatus>",
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
        ReferenceKey: {
            Name: "ReferenceKey", 
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
