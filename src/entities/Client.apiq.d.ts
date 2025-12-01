import type { Client } from './Client.d.ts';
import type { Country } from './Country.d.ts'
import type { ClientDialingConfig } from './ClientDialingConfig.d.ts'

interface Client_Includes {
    readonly Country?: Country_Includes;
    readonly DialingConfig?: DialingConfig_Includes;
}


interface Client_Conditions {
    readonly IdIn?: ReadonlyArray<Id<Client>>;
    readonly CountryIdIn?: ReadonlyArray<Id<Country>>;
    readonly CreatedAtGreater?: Date; // None
    readonly CreatedAtGreaterEqual?: Date; // None
    readonly CreatedAtLess?: Date; // None
    readonly CreatedAtLessEqual?: Date; // None
    readonly CreatedAtIn?: ReadonlyArray<Date>;
    readonly DisabledAtGreater?: Date; // None
    readonly DisabledAtGreaterEqual?: Date; // None
    readonly DisabledAtLess?: Date; // None
    readonly DisabledAtLessEqual?: Date; // None
    readonly DisabledAtIn?: ReadonlyArray<Date>;
    readonly DisabledAtIsNull?: boolean;
    readonly IsActive?: boolean;
    readonly IsDeleted?: boolean;
    readonly NameStartsWith?: string;
    readonly NameIn?: ReadonlyArray<string>;
    readonly UpdatedAtGreater?: Date; // None
    readonly UpdatedAtGreaterEqual?: Date; // None
    readonly UpdatedAtLess?: Date; // None
    readonly UpdatedAtLessEqual?: Date; // None
    readonly UpdatedAtIn?: ReadonlyArray<Date>;
    readonly UpdatedAtIsNull?: boolean;
}

