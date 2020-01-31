#!/usr/bin/env bash
cd ..
protoc --proto_path=api/proto/v1 --proto_path=third_party --go_out=plugins=grpc:pkg/api/v1 todo_service.proto

# working js compile
protoc --proto_path=api/proto/v1 --ts_out=import_style=typescript:pkg/api todo_service.proto
protoc --proto_path=api/proto/v1 --grpc-web_out=import_style=typescript,mode=grpcwebtext:pkg/api todo_service.proto


# convert to TypeScript
protoc --proto_path=api/proto/v1 --proto_path=third_party --js_out=import_style=commonjs:pkg/api todo_service.proto
protoc --proto_path=api/proto/v1 --proto_path=third_party --grpc-web_out=import_style=commonjs,mode=grpcwebtext:pkg/api todo_service.proto

# unchecked version for compilation
#protoc --proto_path=api/proto/v1 --proto_path=third_party \
#    --js_out=import_style=commonjs:pkg/api/v1 todo_service.proto\
#    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:pkg/api/v1 todo_service.proto

# example
#protoc todos.proto \
#  --js_out=import_style=commonjs:./output \
#  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./output