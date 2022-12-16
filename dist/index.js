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
