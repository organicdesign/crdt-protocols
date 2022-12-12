#!/bin/bash

PROTOBUF_DIR="protobufs";
BUILD_DIR="build-ts";

FILES=($(ls "${PROTOBUF_DIR}"));

for i in ${!FILES[*]}; do
	FILE=${FILES[i]};

	if [[ "$FILE" =~ .+\.ts$ ]]; then
		FILENAME=$(echo "$FILE" | grep -Po "^[^.]+");

		mkdir -p "${BUILD_DIR}/${FILENAME}";
		mv "${PROTOBUF_DIR}/${FILE}" "${BUILD_DIR}/${FILENAME}/index.ts"
	fi
done
