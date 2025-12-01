import type { Role } from './Role.d.ts';

interface Role_Includes {
}


interface Role_Conditions {
    readonly IdIn?: ReadonlyArray<Id<Role>>;
    readonly DescriptionStartsWith?: string;
    readonly DescriptionIn?: ReadonlyArray<string>;
    readonly DescriptionIsNull?: boolean;
    readonly NameStartsWith?: string;
    readonly NameIn?: ReadonlyArray<string>;
}

