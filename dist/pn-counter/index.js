/* eslint-disable import/export */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
import { encodeMessage, decodeMessage, message } from 'protons-runtime';
export var CounterData;
(function (CounterData) {
    let _codec;
    CounterData.codec = () => {
        if (_codec == null) {
            _codec = message((obj, w, opts = {}) => {
                if (opts.lengthDelimited !== false) {
                    w.fork();
                }
                if (obj.pData != null) {
                    w.uint32(10);
                    w.bytes(obj.pData);
                }
                if (obj.nData != null) {
                    w.uint32(18);
                    w.bytes(obj.nData);
                }
                if (opts.lengthDelimited !== false) {
                    w.ldelim();
                }
            }, (reader, length) => {
                const obj = {};
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
