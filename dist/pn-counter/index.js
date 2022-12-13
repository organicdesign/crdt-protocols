/* eslint-disable import/export */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
import { enumeration, encodeMessage, decodeMessage, message } from 'protons-runtime';
export var CounterType;
(function (CounterType) {
    CounterType["POSITIVE"] = "POSITIVE";
    CounterType["NEGATIVE"] = "NEGATIVE";
})(CounterType || (CounterType = {}));
var __CounterTypeValues;
(function (__CounterTypeValues) {
    __CounterTypeValues[__CounterTypeValues["POSITIVE"] = 0] = "POSITIVE";
    __CounterTypeValues[__CounterTypeValues["NEGATIVE"] = 1] = "NEGATIVE";
})(__CounterTypeValues || (__CounterTypeValues = {}));
(function (CounterType) {
    CounterType.codec = () => {
        return enumeration(__CounterTypeValues);
    };
})(CounterType || (CounterType = {}));
export var InstanceCount;
(function (InstanceCount) {
    let _codec;
    InstanceCount.codec = () => {
        if (_codec == null) {
            _codec = message((obj, w, opts = {}) => {
                if (opts.lengthDelimited !== false) {
                    w.fork();
                }
                if (opts.writeDefaults === true || (obj.id != null && obj.id.byteLength > 0)) {
                    w.uint32(10);
                    w.bytes(obj.id);
                }
                if (opts.writeDefaults === true || (obj.type != null && __CounterTypeValues[obj.type] !== 0)) {
                    w.uint32(16);
                    CounterType.codec().encode(obj.type, w);
                }
                if (obj.int != null) {
                    w.uint32(24);
                    w.uint32(obj.int);
                }
                if (obj.float != null) {
                    w.uint32(37);
                    w.float(obj.float);
                }
                if (obj.double != null) {
                    w.uint32(41);
                    w.double(obj.double);
                }
                if (opts.lengthDelimited !== false) {
                    w.ldelim();
                }
            }, (reader, length) => {
                const obj = {
                    id: new Uint8Array(0),
                    type: CounterType.POSITIVE
                };
                const end = length == null ? reader.len : reader.pos + length;
                while (reader.pos < end) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            obj.id = reader.bytes();
                            break;
                        case 2:
                            obj.type = CounterType.codec().decode(reader);
                            break;
                        case 3:
                            obj.int = reader.uint32();
                            break;
                        case 4:
                            obj.float = reader.float();
                            break;
                        case 5:
                            obj.double = reader.double();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return obj;
            });
        }
        return _codec;
    };
    InstanceCount.encode = (obj) => {
        return encodeMessage(obj, InstanceCount.codec());
    };
    InstanceCount.decode = (buf) => {
        return decodeMessage(buf, InstanceCount.codec());
    };
})(InstanceCount || (InstanceCount = {}));
export var CounterData;
(function (CounterData) {
    let _codec;
    CounterData.codec = () => {
        if (_codec == null) {
            _codec = message((obj, w, opts = {}) => {
                if (opts.lengthDelimited !== false) {
                    w.fork();
                }
                if (opts.writeDefaults === true || (obj.pData != null && obj.pData.byteLength > 0)) {
                    w.uint32(10);
                    w.bytes(obj.pData);
                }
                if (opts.writeDefaults === true || (obj.nData != null && obj.nData.byteLength > 0)) {
                    w.uint32(18);
                    w.bytes(obj.nData);
                }
                if (opts.lengthDelimited !== false) {
                    w.ldelim();
                }
            }, (reader, length) => {
                const obj = {
                    pData: new Uint8Array(0),
                    nData: new Uint8Array(0)
                };
                const end = length == null ? reader.len : reader.pos + length;
                while (reader.pos < end) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            obj.pData = reader.bytes();
                            break;
                        case 2:
                            obj.nData = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return obj;
            });
        }
        return _codec;
    };
    CounterData.encode = (obj) => {
        return encodeMessage(obj, CounterData.codec());
    };
    CounterData.decode = (buf) => {
        return decodeMessage(buf, CounterData.codec());
    };
})(CounterData || (CounterData = {}));
