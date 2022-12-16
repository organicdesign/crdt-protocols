/* eslint-disable import/export */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
import { encodeMessage, decodeMessage, message } from 'protons-runtime';
export var SetItem;
(function (SetItem) {
    let _codec;
    SetItem.codec = () => {
        if (_codec == null) {
            _codec = message((obj, w, opts = {}) => {
                if (opts.lengthDelimited !== false) {
                    w.fork();
                }
                if (obj.string != null) {
                    w.uint32(10);
                    w.string(obj.string);
                }
                if (obj.int != null) {
                    w.uint32(16);
                    w.int32(obj.int);
                }
                if (obj.double != null) {
                    w.uint32(25);
                    w.double(obj.double);
                }
                if (obj.bytes != null) {
                    w.uint32(34);
                    w.bytes(obj.bytes);
                }
                if (obj.json != null) {
                    w.uint32(42);
                    w.bytes(obj.json);
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
                            obj.string = reader.string();
                            break;
                        case 2:
                            obj.int = reader.int32();
                            break;
                        case 3:
                            obj.double = reader.double();
                            break;
                        case 4:
                            obj.bytes = reader.bytes();
                            break;
                        case 5:
                            obj.json = reader.bytes();
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
    SetItem.encode = (obj) => {
        return encodeMessage(obj, SetItem.codec());
    };
    SetItem.decode = (buf) => {
        return decodeMessage(buf, SetItem.codec());
    };
})(SetItem || (SetItem = {}));
export var SetItems;
(function (SetItems) {
    let _codec;
    SetItems.codec = () => {
        if (_codec == null) {
            _codec = message((obj, w, opts = {}) => {
                if (opts.lengthDelimited !== false) {
                    w.fork();
                }
                if (obj.data != null) {
                    for (const value of obj.data) {
                        w.uint32(10);
                        SetItem.codec().encode(value, w, {
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
                            obj.data.push(SetItem.codec().decode(reader, reader.uint32()));
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
