import type { ActionType } from './ActionType.d.ts';

interface ActionType_Includes {
}


interface ActionType_Conditions {
    readonly IdIn?: ReadonlyArray<Id<ActionType>>;
    readonly DescriptionStartsWith?: string;
    readonly DescriptionIn?: ReadonlyArray<string>;
    readonly DescriptionIsNull?: boolean;
    readonly TypeStartsWith?: string;
    readonly TypeIn?: ReadonlyArray<string>;
}

