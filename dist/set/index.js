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
                if (obj.strings != null) {
                    for (const value of obj.strings) {
                        w.uint32(10);
                        w.string(value);
                    }
                }
                if (obj.ints != null) {
                    for (const value of obj.ints) {
                        w.uint32(16);
                        w.int32(value);
                    }
                }
                if (obj.bytes != null) {
                    for (const value of obj.bytes) {
                        w.uint32(26);
                        w.bytes(value);
                    }
                }
                if (opts.lengthDelimited !== false) {
                    w.ldelim();
                }
            }, (reader, length) => {
                const obj = {
                    strings: [],
                    ints: [],
                    bytes: []
                };
                const end = length == null ? reader.len : reader.pos + length;
                while (reader.pos < end) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            obj.strings.push(reader.string());
                            break;
                        case 2:
                            obj.ints.push(reader.int32());
                            break;
                        case 3:
                            obj.bytes.push(reader.bytes());
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
