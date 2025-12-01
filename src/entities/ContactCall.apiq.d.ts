import type { ContactCall } from './ContactCall.d.ts';
import type { CallFlow } from './CallFlow.d.ts'
import type { CommProviderAccount } from './CommProviderAccount.d.ts'
import type { Contact } from './Contact.d.ts'
import type { CallDirection } from '../CallDirection.d.ts'
import type { InboundNumber } from './InboundNumber.d.ts'
import type { VirtualAgentDetail } from './VirtualAgentDetail.d.ts'

interface ContactCall_Includes {
    readonly CallFlow?: CallFlow_Includes;
    readonly CommProviderAccount?: CommProviderAccount_Includes;
    readonly Contact?: Contact_Includes;
    readonly InboundNumber?: InboundNumber_Includes;
    readonly VirtualAgent?: VirtualAgent_Includes;
}


interface ContactCall_Conditions {
    readonly IdIn?: ReadonlyArray<Id<ContactCall>>;
    readonly AnswerTimeGreater?: Date; // None
    readonly AnswerTimeGreaterEqual?: Date; // None
    readonly AnswerTimeLess?: Date; // None
    readonly AnswerTimeLessEqual?: Date; // None
    readonly AnswerTimeIn?: ReadonlyArray<Date>;
    readonly AnswerTimeIsNull?: boolean;
    readonly CallConversationTimeGreater?: number; // System_Int32
    readonly CallConversationTimeGreaterEqual?: number; // System_Int32
    readonly CallConversationTimeLess?: number; // System_Int32
    readonly CallConversationTimeLessEqual?: number; // System_Int32
    readonly CallConversationTimeIn?: ReadonlyArray<number>;
    readonly CallDialingTimeGreater?: number; // System_Int32
    readonly CallDialingTimeGreaterEqual?: number; // System_Int32
    readonly CallDialingTimeLess?: number; // System_Int32
    readonly CallDialingTimeLessEqual?: number; // System_Int32
    readonly CallDialingTimeIn?: ReadonlyArray<number>;
    readonly CallFlowIdIn?: ReadonlyArray<Id<CallFlow>>;
    readonly CallFlowIdIsNull?: boolean;
    readonly CallMiscInfo1StartsWith?: string;
    readonly CallMiscInfo1In?: ReadonlyArray<string>;
    readonly CallMiscInfo1IsNull?: boolean;
    readonly CallMiscInfo2StartsWith?: string;
    readonly CallMiscInfo2In?: ReadonlyArray<string>;
    readonly CallMiscInfo2IsNull?: boolean;
    readonly CallMiscInfo3StartsWith?: string;
    readonly CallMiscInfo3In?: ReadonlyArray<string>;
    readonly CallMiscInfo3IsNull?: boolean;
    readonly CallMiscInfo4StartsWith?: string;
    readonly CallMiscInfo4In?: ReadonlyArray<string>;
    readonly CallMiscInfo4IsNull?: boolean;
    readonly CommProviderAccountIdIn?: ReadonlyArray<Id<CommProviderAccount>>;
    readonly CommProviderAccountIdIsNull?: boolean;
    readonly ContactIdIn?: ReadonlyArray<Id<Contact>>;
    readonly DirectionIn?: ReadonlyArray<CallDirection>;
    readonly EndTimeGreater?: Date; // None
    readonly EndTimeGreaterEqual?: Date; // None
    readonly EndTimeLess?: Date; // None
    readonly EndTimeLessEqual?: Date; // None
    readonly EndTimeIn?: ReadonlyArray<Date>;
    readonly EndTimeIsNull?: boolean;
    readonly ExternalCallIdStartsWith?: string;
    readonly ExternalCallIdIn?: ReadonlyArray<string>;
    readonly ExternalCallIdIsNull?: boolean;
    readonly ExternalStatusCodeIdIn?: ReadonlyArray<number>;
    readonly ExternalStatusCodeIdIsNull?: boolean;
    readonly InboundNumberIdIn?: ReadonlyArray<Id<InboundNumber>>;
    readonly InboundNumberIdIsNull?: boolean;
    readonly IsRecorded?: boolean;
    readonly RecordingUrlStartsWith?: string;
    readonly RecordingUrlIn?: ReadonlyArray<string>;
    readonly RecordingUrlIsNull?: boolean;
    readonly RemoteNumberStartsWith?: string;
    readonly RemoteNumberIn?: ReadonlyArray<string>;
    readonly StartCallRequestAsJsonStartsWith?: string;
    readonly StartCallRequestAsJsonIn?: ReadonlyArray<string>;
    readonly StartCallRequestAsJsonIsNull?: boolean;
    readonly StartCallResponseAsJsonStartsWith?: string;
    readonly StartCallResponseAsJsonIn?: ReadonlyArray<string>;
    readonly StartCallResponseAsJsonIsNull?: boolean;
    readonly StartTimeGreater?: Date; // None
    readonly StartTimeGreaterEqual?: Date; // None
    readonly StartTimeLess?: Date; // None
    readonly StartTimeLessEqual?: Date; // None
    readonly StartTimeIn?: ReadonlyArray<Date>;
    readonly TranscriptStartsWith?: string;
    readonly TranscriptIn?: ReadonlyArray<string>;
    readonly TranscriptIsNull?: boolean;
    readonly TransferNumberStartsWith?: string;
    readonly TransferNumberIn?: ReadonlyArray<string>;
    readonly TransferNumberIsNull?: boolean;
    readonly TransferTimeGreater?: Date; // None
    readonly TransferTimeGreaterEqual?: Date; // None
    readonly TransferTimeLess?: Date; // None
    readonly TransferTimeLessEqual?: Date; // None
    readonly TransferTimeIn?: ReadonlyArray<Date>;
    readonly TransferTimeIsNull?: boolean;
    readonly VirtualAgentIdIn?: ReadonlyArray<Id<VirtualAgentDetail>>;
}

