import type { CommProviderAccount } from './CommProviderAccount.d.ts';
import type { CommProviderType } from './CommProviderType.d.ts'

interface CommProviderAccount_Includes {
    readonly CommProviderType?: CommProviderType_Includes;
}


interface CommProviderAccount_Conditions {
    readonly IdIn?: ReadonlyArray<Id<CommProviderAccount>>;
    readonly CommProviderTypeIdIn?: ReadonlyArray<Id<CommProviderType>>;
    readonly CreatedTimeGreater?: Date; // None
    readonly CreatedTimeGreaterEqual?: Date; // None
    readonly CreatedTimeLess?: Date; // None
    readonly CreatedTimeLessEqual?: Date; // None
    readonly CreatedTimeIn?: ReadonlyArray<Date>;
    readonly DataVersionGreater?: number; // System_Int64
    readonly DataVersionGreaterEqual?: number; // System_Int64
    readonly DataVersionLess?: number; // System_Int64
    readonly DataVersionLessEqual?: number; // System_Int64
    readonly DataVersionIn?: ReadonlyArray<number>;
    readonly ExternalUuidStartsWith?: string;
    readonly ExternalUuidIn?: ReadonlyArray<string>;
    readonly IsActive?: boolean;
    readonly IsDeleted?: boolean;
    readonly PublicDataAsJsonStartsWith?: string;
    readonly PublicDataAsJsonIn?: ReadonlyArray<string>;
}

