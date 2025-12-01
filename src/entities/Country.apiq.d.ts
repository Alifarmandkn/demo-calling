import type { Country } from './Country.d.ts';

interface Country_Includes {
}


interface Country_Conditions {
    readonly IdIn?: ReadonlyArray<Id<Country>>;
    readonly CurrencyStartsWith?: string;
    readonly CurrencyIn?: ReadonlyArray<string>;
    readonly CurrencyIsNull?: boolean;
    readonly IsoCodeStartsWith?: string;
    readonly IsoCodeIn?: ReadonlyArray<string>;
    readonly IsoCodeIsNull?: boolean;
    readonly LanguageStartsWith?: string;
    readonly LanguageIn?: ReadonlyArray<string>;
    readonly LanguageIsNull?: boolean;
    readonly NameStartsWith?: string;
    readonly NameIn?: ReadonlyArray<string>;
    readonly PhoneExtensionStartsWith?: string;
    readonly PhoneExtensionIn?: ReadonlyArray<string>;
}

