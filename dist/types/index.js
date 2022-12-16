/* eslint-disable import/export */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
import { encodeMessage, decodeMessage, message } from 'protons-runtime';
export var Number;
(function (Number) {
    let _codec;
    Number.codec = () => {
        if (_codec == null) {
            _codec = message((obj, w, opts = {}) => {
                if (opts.lengthDelimited !== false) {
                    w.fork();
                }
                if (obj.int != null) {
                    w.uint32(8);
                    w.sint32(obj.int);
                }
                if (obj.float != null) {
                    w.uint32(21);
                    w.float(obj.float);
                }
                if (obj.double != null) {
                    w.uint32(25);
                    w.double(obj.double);
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
                            obj.int = reader.sint32();
                            break;
                        case 2:
                            obj.float = reader.float();
                            break;
                        case 3:
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
    Number.encode = (obj) => {
        return encodeMessage(obj, Number.codec());
    };
    Number.decode = (buf) => {
        return decodeMessage(buf, Number.codec());
    };
})(Number || (Number = {}));
export var UNumber;
(function (UNumber) {
    let _codec;
    UNumber.codec = () => {
        if (_codec == null) {
            _codec = message((obj, w, opts = {}) => {
                if (opts.lengthDelimited !== false) {
                    w.fork();
                }
                if (obj.int != null) {
                    w.uint32(8);
                    w.uint32(obj.int);
                }
                if (obj.float != null) {
                    w.uint32(21);
                    w.float(obj.float);
                }
                if (obj.double != null) {
                    w.uint32(25);
                    w.double(obj.double);
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
                            obj.int = reader.uint32();
                            break;
                        case 2:
                            obj.float = reader.float();
                            break;
                        case 3:
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
    UNumber.encode = (obj) => {
        return encodeMessage(obj, UNumber.codec());
    };
    UNumber.decode = (buf) => {
        return decodeMessage(buf, UNumber.codec());
    };
})(UNumber || (UNumber = {}));
export var Any;
(function (Any) {
    let _codec;
    Any.codec = () => {
        if (_codec == null) {
            _codec = message((obj, w, opts = {}) => {
                if (opts.lengthDelimited !== false) {
                    w.fork();
                }
                if (obj.int != null) {
                    w.uint32(8);
                    w.sint32(obj.int);
                }
                if (obj.float != null) {
                    w.uint32(21);
                    w.float(obj.float);
                }
                if (obj.double != null) {
                    w.uint32(25);
                    w.double(obj.double);
                }
                if (obj.string != null) {
                    w.uint32(34);
                    w.string(obj.string);
                }
                if (obj.bool != null) {
                    w.uint32(40);
                    w.bool(obj.bool);
                }
                if (obj.bytes != null) {
                    w.uint32(50);
                    w.bytes(obj.bytes);
                }
                if (obj.json != null) {
                    w.uint32(58);
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
                            obj.int = reader.sint32();
                            break;
                        case 2:
                            obj.float = reader.float();
                            break;
                        case 3:
                            obj.double = reader.double();
                            break;
                        case 4:
                            obj.string = reader.string();
                            break;
                        case 5:
                            obj.bool = reader.bool();
                            break;
                        case 6:
                            obj.bytes = reader.bytes();
                            break;
                        case 7:
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
    Any.encode = (obj) => {
        return encodeMessage(obj, Any.codec());
    };
    Any.decode = (buf) => {
        return decodeMessage(buf, Any.codec());
    };
})(Any || (Any = {}));
