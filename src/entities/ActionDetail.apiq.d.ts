import type { ActionDetail } from './ActionDetail.d.ts';
import type { ActionType } from './ActionType.d.ts'
import type { Project } from './Project.d.ts'

interface ActionDetail_Includes {
    readonly ActionType?: ActionType_Includes;
    readonly Project?: Project_Includes;
}


interface ActionDetail_Conditions {
    readonly IdIn?: ReadonlyArray<Id<ActionDetail>>;
    readonly ActionTypeIdIn?: ReadonlyArray<Id<ActionType>>;
    readonly CallTransferMessageStartsWith?: string;
    readonly CallTransferMessageIn?: ReadonlyArray<string>;
    readonly CallTransferMessageIsNull?: boolean;
    readonly CallTransferModeStartsWith?: string;
    readonly CallTransferModeIn?: ReadonlyArray<string>;
    readonly CallTransferModeIsNull?: boolean;
    readonly CreatedAtGreater?: Date; // None
    readonly CreatedAtGreaterEqual?: Date; // None
    readonly CreatedAtLess?: Date; // None
    readonly CreatedAtLessEqual?: Date; // None
    readonly CreatedAtIn?: ReadonlyArray<Date>;
    readonly DescriptionStartsWith?: string;
    readonly DescriptionIn?: ReadonlyArray<string>;
    readonly DescriptionIsNull?: boolean;
    readonly FrontendNameStartsWith?: string;
    readonly FrontendNameIn?: ReadonlyArray<string>;
    readonly FrontendNameIsNull?: boolean;
    readonly GatewayIdIn?: ReadonlyArray<number>;
    readonly GatewayIdIsNull?: boolean;
    readonly HeadersAsJsonStartsWith?: string;
    readonly HeadersAsJsonIn?: ReadonlyArray<string>;
    readonly HeadersAsJsonIsNull?: boolean;
    readonly IsActive?: boolean;
    readonly MessageStartsWith?: string;
    readonly MessageIn?: ReadonlyArray<string>;
    readonly MessageIsNull?: boolean;
    readonly MethodStartsWith?: string;
    readonly MethodIn?: ReadonlyArray<string>;
    readonly ProjectIdIn?: ReadonlyArray<Id<Project>>;
    readonly ProjectIdIsNull?: boolean;
    readonly ReceiverStartsWith?: string;
    readonly ReceiverIn?: ReadonlyArray<string>;
    readonly ReceiverIsNull?: boolean;
    readonly RequestBodyAsJsonStartsWith?: string;
    readonly RequestBodyAsJsonIn?: ReadonlyArray<string>;
    readonly RequestBodyAsJsonIsNull?: boolean;
    readonly SenderStartsWith?: string;
    readonly SenderIn?: ReadonlyArray<string>;
    readonly SenderIsNull?: boolean;
    readonly SendingTimingStartsWith?: string;
    readonly SendingTimingIn?: ReadonlyArray<string>;
    readonly SendingTimingIsNull?: boolean;
    readonly SubjectStartsWith?: string;
    readonly SubjectIn?: ReadonlyArray<string>;
    readonly SubjectIsNull?: boolean;
    readonly TagStartsWith?: string;
    readonly TagIn?: ReadonlyArray<string>;
    readonly TagIsNull?: boolean;
    readonly UpdatedAtGreater?: Date; // None
    readonly UpdatedAtGreaterEqual?: Date; // None
    readonly UpdatedAtLess?: Date; // None
    readonly UpdatedAtLessEqual?: Date; // None
    readonly UpdatedAtIn?: ReadonlyArray<Date>;
    readonly UpdatedAtIsNull?: boolean;
}

