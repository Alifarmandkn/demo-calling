import { ActionType, ActionTypeTypeInfo } from './ActionType.ts'
import { Project, ProjectTypeInfo } from './Project.ts'

export interface ActionDetailUpdatableProperties {
   readonly ProjectId: Id<Project> | null;
   readonly Description: string | null;
   readonly FrontendName: string | null;
   readonly GatewayId: number | null;
   readonly IsActive: boolean;
   readonly Message: string | null;
   readonly Method: string;
   readonly Receiver: string | null;
   readonly Sender: string | null;
   readonly SendingTiming: string | null;
   readonly Subject: string | null;
}

export interface ActionDetailProperties extends ActionDetailUpdatableProperties {
   readonly ActionTypeId: Id<ActionType>;
   readonly CallTransferMessage: string | null;
   readonly CallTransferMode: string | null;
   readonly CreatedAt: Date;
   readonly HeadersAsJson: string | null;
   readonly RequestBodyAsJson: string | null;
   readonly Tag: string | null;
}

export interface ActionDetailAssociations {
   readonly ActionType?: ActionType;
   readonly Project?: Project;
}

export interface ActionDetail extends ActionDetailProperties, ActionDetailAssociations {
   readonly Id: Id<ActionDetail>;
   readonly UpdatedAt: Date | null;
}

const defaultUpdatableProperties: ActionDetailUpdatableProperties = {
   ProjectId: null,
   Description: null,
   FrontendName: null,
   GatewayId: null,
   IsActive: false,
   Message: null,
   Method: '',
   Receiver: null,
   Sender: null,
   SendingTiming: null,
   Subject: null
}

const defaultProperties: ActionDetailProperties = {
    ...defaultUpdatableProperties,
   ActionTypeId: 0 as Id<ActionType>,
   CallTransferMessage: null,
   CallTransferMode: null,
   CreatedAt: new Date(),
   HeadersAsJson: null,
   RequestBodyAsJson: null,
   Tag: null
}

export const ActionDetailTypeInfo: IEntityInfo<ActionDetail, ActionDetailProperties, ActionDetailUpdatableProperties, ActionDetailAssociations> = {
    Name: "ActionDetail",
    EntityType: {} as ActionDetail,
    PropertiesType: {} as ActionDetailProperties,
    UpdatablePropertiesType: {} as ActionDetailUpdatableProperties,
    Default: defaultProperties,
    DefaultUpdatable: defaultUpdatableProperties,
    AssociationTypeInfos: {
        ActionType: () => ActionTypeTypeInfo,
        Project: () => ProjectTypeInfo,
     },
     Properties: {
         Id: {
            Name: "Id", 
            Type: "Id<ActionDetail>",
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

         UpdatedAt: {
            Name: "UpdatedAt", 
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

         ActionTypeId: {
            Name: "ActionTypeId", 
            Type: "Id<ActionType>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: false,
            IsUpdatable: false,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "ActionType",
            AssociationProp: "ActionType",
        },
        CallTransferMessage: {
            Name: "CallTransferMessage", 
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
        CallTransferMode: {
            Name: "CallTransferMode", 
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
        HeadersAsJson: {
            Name: "HeadersAsJson", 
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
        RequestBodyAsJson: {
            Name: "RequestBodyAsJson", 
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
        Tag: {
            Name: "Tag", 
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

         ProjectId: {
            Name: "ProjectId", 
            Type: "Id<Project>",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: true,
            IsAssociation: false,
            AssociationType: "Project",
            AssociationProp: "Project",
        },
        Description: {
            Name: "Description", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        FrontendName: {
            Name: "FrontendName", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        GatewayId: {
            Name: "GatewayId", 
            Type: "number",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
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
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        Message: {
            Name: "Message", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        Method: {
            Name: "Method", 
            Type: "string",
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
        Receiver: {
            Name: "Receiver", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        Sender: {
            Name: "Sender", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        SendingTiming: {
            Name: "SendingTiming", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },
        Subject: {
            Name: "Subject", 
            Type: "string",
            PrimaryKeyOrder: null,
            IsGeneratedKey: false,
            IsNullable: true,
            IsUpdatable: true,
            IsInsertable: true,
            IsAssociationId: false,
            IsAssociation: false,
            AssociationType: undefined,
            AssociationProp: undefined,
        },

         ActionType: {
            Name: "ActionType", 
            Type: "ActionType",
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
        Project: {
            Name: "Project", 
            Type: "Project",
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
