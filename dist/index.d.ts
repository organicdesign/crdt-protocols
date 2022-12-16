import { Number as ProtoNumber, UNumber as ProtoUNumber, Any as ProtoAny } from "@protobuf/types";
export declare const encodeNumber: (data: number) => ProtoNumber;
export declare const decodeNumber: (data: ProtoNumber) => number;
export declare const encodeUNumber: (data: number) => ProtoUNumber;
export declare const decodeUNumber: (data: ProtoNumber) => number;
export declare const encodeAny: (data: unknown) => ProtoAny;
export declare const decodeAny: (data: ProtoAny) => unknown;
