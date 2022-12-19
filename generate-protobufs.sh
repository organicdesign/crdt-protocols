#!/bin/bash

TEMPLATE_DIR="templates";
OUTPUT_DIR="protobufs";
MATCH_STR="type=";
REPLACE_STR=":type:";

FILES=($(ls "${TEMPLATE_DIR}"));

for i in ${!FILES[*]}; do
	FILE=${FILES[i]};
	FILENAME=$(echo "$FILE" | grep -Po "^[^.]+");

	LINE=$(head -n 1 "$TEMPLATE_DIR/$FILE" | tr -d "[:space:][=;=][=\"=][='=][=\`=]\n");

	if [[ ${LINE:0:5} != $MATCH_STR ]]; then
		echo "Skipping $TEMPLATE_DIR/$FILE";
		continue;
	fi

	LINE=$(echo -n $LINE | grep -Po "(?<=type=).*");

	readarray -d "|" -t TYPES<<<"$LINE";

	for TYPE in "${TYPES[@]}"; do
		TYPE=$(echo -n $TYPE | tr -d "\n");
		sed "s/$REPLACE_STR/$TYPE/g" "$TEMPLATE_DIR/$FILE" | tail -n +2 > "$OUTPUT_DIR/$FILENAME-$TYPE.proto";
	done
done
