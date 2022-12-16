export const encodeNumber = (data) => {
    if (Number.isInteger(data)) {
        return { int: data };
    }
    return { double: data };
};
export const decodeNumber = (data) => {
    for (const value of Object.values(data)) {
        if (value) {
            return value;
        }
    }
    return 0;
};
export const encodeUNumber = (data) => {
    if (data < 0) {
        data = 0;
    }
    return encodeNumber(data);
};
export const decodeUNumber = (data) => {
    const result = decodeNumber(data);
    return result < 0 ? 0 : result;
};
export const encodeAny = (data) => {
    if (typeof data === "number") {
        if (Number.isInteger(data)) {
            return { int: data };
        }
        return { double: data };
    }
    if (typeof data === "boolean") {
        return { bool: data };
    }
    if (typeof data === "string") {
        return { string: data };
    }
    if (data instanceof Uint8Array) {
        return { bytes: data };
    }
    return { json: JSON.stringify(data) };
};
export const decodeAny = (data) => {
    for (const [key, value] of Object.entries(data)) {
        if (value) {
            if (key === "json") {
                return JSON.parse(value);
            }
            return value;
        }
    }
};
