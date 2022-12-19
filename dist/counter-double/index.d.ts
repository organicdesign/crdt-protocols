import type { Uint8ArrayList } from 'uint8arraylist';
import type { Codec } from 'protons-runtime';
export interface InstanceCount {
    id: Uint8Array;
    value: number;
}
export declare namespace InstanceCount {
    const codec: () => Codec<InstanceCount>;
    const encode: (obj: InstanceCount) => Uint8Array;
    const decode: (buf: Uint8Array | Uint8ArrayList) => InstanceCount;
}
export interface CounterData {
    data: InstanceCount[];
}
export declare namespace CounterData {
    const codec: () => Codec<CounterData>;
    const encode: (obj: CounterData) => Uint8Array;
    const decode: (buf: Uint8Array | Uint8ArrayList) => CounterData;
}
