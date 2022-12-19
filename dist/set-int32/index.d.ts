import type { Uint8ArrayList } from 'uint8arraylist';
import type { Codec } from 'protons-runtime';
export interface SetItems {
    values: number[];
}
export declare namespace SetItems {
    const codec: () => Codec<SetItems>;
    const encode: (obj: SetItems) => Uint8Array;
    const decode: (buf: Uint8Array | Uint8ArrayList) => SetItems;
}
