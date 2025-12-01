import type { User } from './User.d.ts';
import type { Country } from './Country.d.ts'
import type { Role } from './Role.d.ts'

interface User_Includes {
    readonly Country?: Country_Includes;
    readonly Role?: Role_Includes;
}


interface User_Conditions {
    readonly IdIn?: ReadonlyArray<Id<User>>;
    readonly CountryIdIn?: ReadonlyArray<Id<Country>>;
    readonly CreatedAtGreater?: Date; // None
    readonly CreatedAtGreaterEqual?: Date; // None
    readonly CreatedAtLess?: Date; // None
    readonly CreatedAtLessEqual?: Date; // None
    readonly CreatedAtIn?: ReadonlyArray<Date>;
    readonly DateJoinedGreater?: Date; // None
    readonly DateJoinedGreaterEqual?: Date; // None
    readonly DateJoinedLess?: Date; // None
    readonly DateJoinedLessEqual?: Date; // None
    readonly DateJoinedIn?: ReadonlyArray<Date>;
    readonly DisabledAtGreater?: Date; // None
    readonly DisabledAtGreaterEqual?: Date; // None
    readonly DisabledAtLess?: Date; // None
    readonly DisabledAtLessEqual?: Date; // None
    readonly DisabledAtIn?: ReadonlyArray<Date>;
    readonly DisabledAtIsNull?: boolean;
    readonly EmailStartsWith?: string;
    readonly EmailIn?: ReadonlyArray<string>;
    readonly FirstNameStartsWith?: string;
    readonly FirstNameIn?: ReadonlyArray<string>;
    readonly IsActive?: boolean;
    readonly LastLoginGreater?: Date; // None
    readonly LastLoginGreaterEqual?: Date; // None
    readonly LastLoginLess?: Date; // None
    readonly LastLoginLessEqual?: Date; // None
    readonly LastLoginIn?: ReadonlyArray<Date>;
    readonly LastLoginIsNull?: boolean;
    readonly LastNameStartsWith?: string;
    readonly LastNameIn?: ReadonlyArray<string>;
    readonly MfaEnable?: boolean;
    readonly MfaTypeStartsWith?: string;
    readonly MfaTypeIn?: ReadonlyArray<string>;
    readonly MfaTypeIsNull?: boolean;
    readonly NameStartsWith?: string;
    readonly NameIn?: ReadonlyArray<string>;
    readonly NameIsNull?: boolean;
    readonly PhoneNumberStartsWith?: string;
    readonly PhoneNumberIn?: ReadonlyArray<string>;
    readonly PhoneNumberIsNull?: boolean;
    readonly RoleIdIn?: ReadonlyArray<Id<Role>>;
    readonly UpdatedAtGreater?: Date; // None
    readonly UpdatedAtGreaterEqual?: Date; // None
    readonly UpdatedAtLess?: Date; // None
    readonly UpdatedAtLessEqual?: Date; // None
    readonly UpdatedAtIn?: ReadonlyArray<Date>;
    readonly UpdatedAtIsNull?: boolean;
    readonly UsernameStartsWith?: string;
    readonly UsernameIn?: ReadonlyArray<string>;
}

