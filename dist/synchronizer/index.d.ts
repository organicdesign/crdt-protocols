import type { Uint8ArrayList } from 'uint8arraylist';
import type { Codec } from 'protons-runtime';
export interface CRDTSynchronizer {
    name: string;
    data: Uint8Array;
    id: number;
    request?: boolean;
}
export declare namespace CRDTSynchronizer {
    const codec: () => Codec<CRDTSynchronizer>;
    const encode: (obj: CRDTSynchronizer) => Uint8Array;
    const decode: (buf: Uint8Array | Uint8ArrayList) => CRDTSynchronizer;
}
