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
