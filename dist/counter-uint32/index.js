/* eslint-disable import/export */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
import { encodeMessage, decodeMessage, message } from 'protons-runtime';
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
                if (opts.writeDefaults === true || obj.value !== 0) {
                    w.uint32(16);
                    w.uint32(obj.value);
                }
                if (opts.lengthDelimited !== false) {
                    w.ldelim();
                }
            }, (reader, length) => {
                const obj = {
                    id: new Uint8Array(0),
                    value: 0
                };
                const end = length == null ? reader.len : reader.pos + length;
                while (reader.pos < end) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            obj.id = reader.bytes();
                            break;
                        case 2:
                            obj.value = reader.uint32();
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
                if (obj.data != null) {
                    for (const value of obj.data) {
                        w.uint32(10);
                        InstanceCount.codec().encode(value, w, {
                            writeDefaults: true
                        });
                    }
                }
                if (opts.lengthDelimited !== false) {
                    w.ldelim();
                }
            }, (reader, length) => {
                const obj = {
                    data: []
                };
                const end = length == null ? reader.len : reader.pos + length;
                while (reader.pos < end) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            obj.data.push(InstanceCount.codec().decode(reader, reader.uint32()));
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
