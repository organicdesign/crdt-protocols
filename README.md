# crdt-protocols

Protocols for encoding and decoding CRDT data. This only contains definitions for the specific types of crdts, for example a string set.

## Status

Currently none of these protocols are in use by `@organicdesign/crdts` but are being developed to improve efficiency of them.

## Usage

Use any of the protobuf definitions in the `protobufs` directory in your project.

## Templates

To make it easy to generate protobuf files for a variety of types, template files are used. The template files start by specifying the types to generate for at the beginning of the file:

```
type = int32 | bytes | string;
```

Then the type generic type can be used in the place of specific types in the rest of the protobuf definition:

```
message Example {
	:type: value = 1;
}
```

You can generate the protobuf files from the templates by running the script:

```bash
./generate-protobufs.sh
```

This script will convert all the template files contained in the `templates` directory into protobuf definitions in the `protobufs` directory.
