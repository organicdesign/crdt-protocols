/* eslint-disable import/export */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unnecessary-boolean-literal-compare */
import { encodeMessage, decodeMessage, message } from 'protons-runtime';
export var CRDTSynchronizer;
(function (CRDTSynchronizer) {
    let _codec;
    CRDTSynchronizer.codec = () => {
        if (_codec == null) {
            _codec = message((obj, w, opts = {}) => {
                if (opts.lengthDelimited !== false) {
                    w.fork();
                }
                if (opts.writeDefaults === true || obj.name !== '') {
                    w.uint32(10);
                    w.string(obj.name);
                }
                if (opts.writeDefaults === true || (obj.data != null && obj.data.byteLength > 0)) {
                    w.uint32(18);
                    w.bytes(obj.data);
                }
                if (opts.lengthDelimited !== false) {
                    w.ldelim();
                }
            }, (reader, length) => {
                const obj = {
                    name: '',
                    data: new Uint8Array(0)
                };
                const end = length == null ? reader.len : reader.pos + length;
                while (reader.pos < end) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            obj.name = reader.string();
                            break;
                        case 2:
                            obj.data = reader.bytes();
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
    CRDTSynchronizer.encode = (obj) => {
        return encodeMessage(obj, CRDTSynchronizer.codec());
    };
    CRDTSynchronizer.decode = (buf) => {
        return decodeMessage(buf, CRDTSynchronizer.codec());
    };
})(CRDTSynchronizer || (CRDTSynchronizer = {}));
