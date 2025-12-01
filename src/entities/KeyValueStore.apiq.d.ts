import type { KeyValueStore } from './KeyValueStore.d.ts';

interface KeyValueStore_Includes {
}


interface KeyValueStore_Conditions {
    readonly ContentTypeStartsWith?: string;
    readonly ContentTypeIn?: ReadonlyArray<string>;
    readonly KeyStartsWith?: string;
    readonly KeyIn?: ReadonlyArray<string>;
    readonly ValueStartsWith?: string;
    readonly ValueIn?: ReadonlyArray<string>;
}

