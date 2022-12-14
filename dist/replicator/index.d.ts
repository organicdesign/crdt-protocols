import type { Uint8ArrayList } from 'uint8arraylist';
import type { Codec } from 'protons-runtime';
export interface CRDTSync {
    name: string;
    data: Uint8Array;
}
export declare namespace CRDTSync {
    const codec: () => Codec<CRDTSync>;
    const encode: (obj: CRDTSync) => Uint8Array;
    const decode: (buf: Uint8Array | Uint8ArrayList) => CRDTSync;
}
