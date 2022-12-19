/* eslint-disable import/export */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
import { encodeMessage, decodeMessage, message } from 'protons-runtime';
export var SetItems;
(function (SetItems) {
    let _codec;
    SetItems.codec = () => {
        if (_codec == null) {
            _codec = message((obj, w, opts = {}) => {
                if (opts.lengthDelimited !== false) {
                    w.fork();
                }
                if (obj.values != null) {
                    for (const value of obj.values) {
                        w.uint32(10);
                        w.bytes(value);
                    }
                }
                if (opts.lengthDelimited !== false) {
                    w.ldelim();
                }
            }, (reader, length) => {
                const obj = {
                    values: []
                };
                const end = length == null ? reader.len : reader.pos + length;
                while (reader.pos < end) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            obj.values.push(reader.bytes());
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
    SetItems.encode = (obj) => {
        return encodeMessage(obj, SetItems.codec());
    };
    SetItems.decode = (buf) => {
        return decodeMessage(buf, SetItems.codec());
    };
})(SetItems || (SetItems = {}));
