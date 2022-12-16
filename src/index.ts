import { Number as ProtoNumber, UNumber as ProtoUNumber, Any as ProtoAny } from "../dist/types";

export const encodeNumber = (data: number): ProtoNumber => {
	if (Number.isInteger(data)) {
		return { int: data };
	}

	return { double: data };
};

export const decodeNumber = (data: ProtoNumber): number => {
	for (const value of Object.values(data)) {
		if (value) {
			return value;
		}
	}

	return 0;
};

export const encodeUNumber = (data: number): ProtoUNumber => {
	if (data < 0) {
		data = 0;
	}

	return encodeNumber(data);
};

export const decodeUNumber = (data: ProtoNumber): number => {
	const result = decodeNumber(data);

	return result < 0 ? 0 : result;
};
