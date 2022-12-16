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
