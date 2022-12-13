import type { Uint8ArrayList } from 'uint8arraylist';
import type { Codec } from 'protons-runtime';
export declare enum CounterType {
    POSITIVE = "POSITIVE",
    NEGATIVE = "NEGATIVE"
}
export declare namespace CounterType {
    const codec: () => Codec<CounterType>;
}
export interface InstanceCount {
    id: Uint8Array;
    type: CounterType;
    int?: number;
    float?: number;
    double?: number;
}
export declare namespace InstanceCount {
    const codec: () => Codec<InstanceCount>;
    const encode: (obj: InstanceCount) => Uint8Array;
    const decode: (buf: Uint8Array | Uint8ArrayList) => InstanceCount;
}
export interface CounterData {
    pData: Uint8Array;
    nData: Uint8Array;
}
export declare namespace CounterData {
    const codec: () => Codec<CounterData>;
    const encode: (obj: CounterData) => Uint8Array;
    const decode: (buf: Uint8Array | Uint8ArrayList) => CounterData;
}
