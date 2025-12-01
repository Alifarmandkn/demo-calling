import type { CampaignSetting } from './CampaignSetting.d.ts';
import type { ActionDetail } from './ActionDetail.d.ts'
import type { CallFlow } from './CallFlow.d.ts'
import type { Campaign } from './Campaign.d.ts'
import type { Project } from './Project.d.ts'
import type { VirtualAgentDetail } from './VirtualAgentDetail.d.ts'

interface CampaignSetting_Includes {
    readonly ActionCrm?: ActionCrm_Includes;
    readonly ActionEmail?: ActionEmail_Includes;
    readonly ActionForwardNumber?: ActionForwardNumber_Includes;
    readonly ActionInstallmentPlan?: ActionInstallmentPlan_Includes;
    readonly ActionSms?: ActionSms_Includes;
    readonly CallFlow?: CallFlow_Includes;
    readonly Campaign?: Campaign_Includes;
    readonly Project?: Project_Includes;
    readonly VirtualAgent?: VirtualAgent_Includes;
}


interface CampaignSetting_Conditions {
    readonly IdIn?: ReadonlyArray<Id<CampaignSetting>>;
    readonly ActionCrmIdIn?: ReadonlyArray<Id<ActionDetail>>;
    readonly ActionCrmIdIsNull?: boolean;
    readonly ActionEmailIdIn?: ReadonlyArray<Id<ActionDetail>>;
    readonly ActionEmailIdIsNull?: boolean;
    readonly ActionForwardNumberIdIn?: ReadonlyArray<Id<ActionDetail>>;
    readonly ActionForwardNumberIdIsNull?: boolean;
    readonly ActionInstallmentPlanIdIn?: ReadonlyArray<Id<ActionDetail>>;
    readonly ActionInstallmentPlanIdIsNull?: boolean;
    readonly ActionSmsIdIn?: ReadonlyArray<Id<ActionDetail>>;
    readonly ActionSmsIdIsNull?: boolean;
    readonly ActiveFromGreater?: Date; // None
    readonly ActiveFromGreaterEqual?: Date; // None
    readonly ActiveFromLess?: Date; // None
    readonly ActiveFromLessEqual?: Date; // None
    readonly ActiveFromIn?: ReadonlyArray<Date>;
    readonly ActiveFromIsNull?: boolean;
    readonly ActiveTimeSlotFromStartsWith?: string;
    readonly ActiveTimeSlotFromIn?: ReadonlyArray<string>;
    readonly ActiveTimeSlotFromIsNull?: boolean;
    readonly ActiveTimeSlotToStartsWith?: string;
    readonly ActiveTimeSlotToIn?: ReadonlyArray<string>;
    readonly ActiveTimeSlotToIsNull?: boolean;
    readonly ActiveToGreater?: Date; // None
    readonly ActiveToGreaterEqual?: Date; // None
    readonly ActiveToLess?: Date; // None
    readonly ActiveToLessEqual?: Date; // None
    readonly ActiveToIn?: ReadonlyArray<Date>;
    readonly ActiveToIsNull?: boolean;
    readonly CallFlowIdIn?: ReadonlyArray<Id<CallFlow>>;
    readonly CallFlowIdIsNull?: boolean;
    readonly CampaignIdIn?: ReadonlyArray<Id<Campaign>>;
    readonly CampaignIdIsNull?: boolean;
    readonly DebtCollectorStartsWith?: string;
    readonly DebtCollectorIn?: ReadonlyArray<string>;
    readonly DebtCollectorIsNull?: boolean;
    readonly HourBetweenRedialGreater?: number; // System_Int32
    readonly HourBetweenRedialGreaterEqual?: number; // System_Int32
    readonly HourBetweenRedialLess?: number; // System_Int32
    readonly HourBetweenRedialLessEqual?: number; // System_Int32
    readonly HourBetweenRedialIn?: ReadonlyArray<number>;
    readonly MaxAttemptsGreater?: number; // System_Int32
    readonly MaxAttemptsGreaterEqual?: number; // System_Int32
    readonly MaxAttemptsLess?: number; // System_Int32
    readonly MaxAttemptsLessEqual?: number; // System_Int32
    readonly MaxAttemptsIn?: ReadonlyArray<number>;
    readonly MaxDaysGreater?: number; // System_Int32
    readonly MaxDaysGreaterEqual?: number; // System_Int32
    readonly MaxDaysLess?: number; // System_Int32
    readonly MaxDaysLessEqual?: number; // System_Int32
    readonly MaxDaysIn?: ReadonlyArray<number>;
    readonly NumberOfBotsGreater?: number; // System_Int32
    readonly NumberOfBotsGreaterEqual?: number; // System_Int32
    readonly NumberOfBotsLess?: number; // System_Int32
    readonly NumberOfBotsLessEqual?: number; // System_Int32
    readonly NumberOfBotsIn?: ReadonlyArray<number>;
    readonly NumberOfBotsIsNull?: boolean;
    readonly PriorityGreater?: number; // System_Int32
    readonly PriorityGreaterEqual?: number; // System_Int32
    readonly PriorityLess?: number; // System_Int32
    readonly PriorityLessEqual?: number; // System_Int32
    readonly PriorityIn?: ReadonlyArray<number>;
    readonly PriorityIsNull?: boolean;
    readonly ProjectIdIn?: ReadonlyArray<Id<Project>>;
    readonly ProjectIdIsNull?: boolean;
    readonly VirtualAgentIdIn?: ReadonlyArray<Id<VirtualAgentDetail>>;
    readonly VirtualAgentIdIsNull?: boolean;
    readonly VoiceBotEndpointOverrideStartsWith?: string;
    readonly VoiceBotEndpointOverrideIn?: ReadonlyArray<string>;
    readonly VoiceBotEndpointOverrideIsNull?: boolean;
}

