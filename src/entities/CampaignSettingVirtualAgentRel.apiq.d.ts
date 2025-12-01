import type { CampaignSettingVirtualAgentRel } from './CampaignSettingVirtualAgentRel.d.ts';
import type { CampaignSetting } from './CampaignSetting.d.ts'
import type { VirtualAgentDetail } from './VirtualAgentDetail.d.ts'

interface CampaignSettingVirtualAgentRel_Includes {
    readonly CampaignSetting?: CampaignSetting_Includes;
    readonly VirtualAgent?: VirtualAgent_Includes;
}


interface CampaignSettingVirtualAgentRel_Conditions {
    readonly IdIn?: ReadonlyArray<Id<CampaignSettingVirtualAgentRel>>;
    readonly CampaignSettingIdIn?: ReadonlyArray<Id<CampaignSetting>>;
    readonly IsDeleted?: boolean;
    readonly VirtualAgentIdIn?: ReadonlyArray<Id<VirtualAgentDetail>>;
}

