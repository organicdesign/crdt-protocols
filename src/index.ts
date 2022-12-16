import { Number as ProtoNumber, UNumber as ProtoUNumber, Any as ProtoAny } from "@protobuf/types";

export const encodeNumber = (data: number): ProtoNumber => {
	if (Number.isInteger(data)) {
		return { int: data };
	}

	return { double: data };
};

export const decodeNumber = (data: ProtoNumber): number => {
	for (const value of Object.values(data)) {
		if (value) {
			return value as number;
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

export const encodeAny = (data: unknown): ProtoAny => {
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

export const decodeAny = (data: ProtoAny): unknown => {
	for (const [key, value] of Object.entries(data)) {
		if (value) {
			if (key === "json") {
				return JSON.parse(value as string);
			}

			return value;
		}
	}
};
