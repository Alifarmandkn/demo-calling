import type { Phase } from './Phase.d.ts';

interface Phase_Includes {
    readonly Parent?: Parent_Includes;
}


interface Phase_Conditions {
    readonly IdIn?: ReadonlyArray<Id<Phase>>;
    readonly AltKeysIn?: ReadonlyArray<string[]>;
    readonly DisplayNameStartsWith?: string;
    readonly DisplayNameIn?: ReadonlyArray<string>;
    readonly IsDeleted?: boolean;
    readonly IsDynamic?: boolean;
    readonly OrderingGreater?: number; // System_Int64
    readonly OrderingGreaterEqual?: number; // System_Int64
    readonly OrderingLess?: number; // System_Int64
    readonly OrderingLessEqual?: number; // System_Int64
    readonly OrderingIn?: ReadonlyArray<number>;
    readonly ParentIdIn?: ReadonlyArray<Id<Phase>>;
    readonly ParentIdIsNull?: boolean;
    readonly ReferenceKeyStartsWith?: string;
    readonly ReferenceKeyIn?: ReadonlyArray<string>;
}

