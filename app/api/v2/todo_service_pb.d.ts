// package: v1
// file: todo_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ToDo extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasReminder(): boolean;
  clearReminder(): void;
  getReminder(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReminder(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToDo.AsObject;
  static toObject(includeInstance: boolean, msg: ToDo): ToDo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToDo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToDo;
  static deserializeBinaryFromReader(message: ToDo, reader: jspb.BinaryReader): ToDo;
}

export namespace ToDo {
  export type AsObject = {
    id: number,
    title: string,
    description: string,
    reminder?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): void;

  hasTodo(): boolean;
  clearTodo(): void;
  getTodo(): ToDo | undefined;
  setTodo(value?: ToDo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    api: string,
    todo?: ToDo.AsObject,
  }
}

export class CreateResponse extends jspb.Message {
  getApi(): string;
  setApi(value: string): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponse;
  static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
  export type AsObject = {
    api: string,
    id: number,
  }
}

export class ReadRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadRequest): ReadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadRequest;
  static deserializeBinaryFromReader(message: ReadRequest, reader: jspb.BinaryReader): ReadRequest;
}

export namespace ReadRequest {
  export type AsObject = {
    api: string,
    id: number,
  }
}

export class ReadResponse extends jspb.Message {
  getApi(): string;
  setApi(value: string): void;

  hasTodo(): boolean;
  clearTodo(): void;
  getTodo(): ToDo | undefined;
  setTodo(value?: ToDo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadResponse): ReadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadResponse;
  static deserializeBinaryFromReader(message: ReadResponse, reader: jspb.BinaryReader): ReadResponse;
}

export namespace ReadResponse {
  export type AsObject = {
    api: string,
    todo?: ToDo.AsObject,
  }
}

export class UpdateRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): void;

  hasTodo(): boolean;
  clearTodo(): void;
  getTodo(): ToDo | undefined;
  setTodo(value?: ToDo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
  export type AsObject = {
    api: string,
    todo?: ToDo.AsObject,
  }
}

export class UpdateResponse extends jspb.Message {
  getApi(): string;
  setApi(value: string): void;

  getUpdated(): number;
  setUpdated(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponse;
  static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
  export type AsObject = {
    api: string,
    updated: number,
  }
}

export class DeleteRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): void;

  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    api: string,
    id: number,
  }
}

export class DeleteResponse extends jspb.Message {
  getApi(): string;
  setApi(value: string): void;

  getDeleted(): number;
  setDeleted(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    api: string,
    deleted: number,
  }
}

export class ReadAllRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadAllRequest): ReadAllRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadAllRequest;
  static deserializeBinaryFromReader(message: ReadAllRequest, reader: jspb.BinaryReader): ReadAllRequest;
}

export namespace ReadAllRequest {
  export type AsObject = {
    api: string,
  }
}

export class ReadAllResponse extends jspb.Message {
  getApi(): string;
  setApi(value: string): void;

  clearTodosList(): void;
  getTodosList(): Array<ToDo>;
  setTodosList(value: Array<ToDo>): void;
  addTodos(value?: ToDo, index?: number): ToDo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadAllResponse): ReadAllResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadAllResponse;
  static deserializeBinaryFromReader(message: ReadAllResponse, reader: jspb.BinaryReader): ReadAllResponse;
}

export namespace ReadAllResponse {
  export type AsObject = {
    api: string,
    todosList: Array<ToDo.AsObject>,
  }
}

