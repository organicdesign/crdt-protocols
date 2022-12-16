import type { Uint8ArrayList } from 'uint8arraylist';
import type { Codec } from 'protons-runtime';
export interface InstanceCount {
    id: Uint8Array;
    count?: UNumber;
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
export interface Number {
    int?: bigint;
    float?: number;
    double?: number;
}
export declare namespace Number {
    const codec: () => Codec<Number>;
    const encode: (obj: Number) => Uint8Array;
    const decode: (buf: Uint8Array | Uint8ArrayList) => Number;
}
export interface UNumber {
    int?: bigint;
    float?: number;
    double?: number;
}
export declare namespace UNumber {
    const codec: () => Codec<UNumber>;
    const encode: (obj: UNumber) => Uint8Array;
    const decode: (buf: Uint8Array | Uint8ArrayList) => UNumber;
}
export interface Any {
    int?: bigint;
    float?: number;
    double?: number;
    string?: string;
    bool?: boolean;
    bytes?: Uint8Array;
    json?: Uint8Array;
}
export declare namespace Any {
    const codec: () => Codec<Any>;
    const encode: (obj: Any) => Uint8Array;
    const decode: (buf: Uint8Array | Uint8ArrayList) => Any;
}
