import type { CommProviderType } from './CommProviderType.d.ts';

interface CommProviderType_Includes {
}


interface CommProviderType_Conditions {
    readonly IdIn?: ReadonlyArray<Id<CommProviderType>>;
    readonly DisplayNameStartsWith?: string;
    readonly DisplayNameIn?: ReadonlyArray<string>;
    readonly ReferenceKeyStartsWith?: string;
    readonly ReferenceKeyIn?: ReadonlyArray<string>;
}

