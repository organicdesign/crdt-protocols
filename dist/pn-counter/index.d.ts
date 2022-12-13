import type { Uint8ArrayList } from 'uint8arraylist';
import type { Codec } from 'protons-runtime';
export interface CounterData {
    pData?: Uint8Array;
    nData?: Uint8Array;
}
export declare namespace CounterData {
    const codec: () => Codec<CounterData>;
    const encode: (obj: CounterData) => Uint8Array;
    const decode: (buf: Uint8Array | Uint8ArrayList) => CounterData;
}
