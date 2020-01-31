// package: v1
// file: todo_service.proto

import * as todo_service_pb from "./todo_service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ToDoServiceCreate = {
  readonly methodName: string;
  readonly service: typeof ToDoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof todo_service_pb.CreateRequest;
  readonly responseType: typeof todo_service_pb.CreateResponse;
};

type ToDoServiceRead = {
  readonly methodName: string;
  readonly service: typeof ToDoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof todo_service_pb.ReadRequest;
  readonly responseType: typeof todo_service_pb.ReadResponse;
};

type ToDoServiceUpdate = {
  readonly methodName: string;
  readonly service: typeof ToDoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof todo_service_pb.UpdateRequest;
  readonly responseType: typeof todo_service_pb.UpdateResponse;
};

type ToDoServiceDelete = {
  readonly methodName: string;
  readonly service: typeof ToDoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof todo_service_pb.DeleteRequest;
  readonly responseType: typeof todo_service_pb.DeleteResponse;
};

type ToDoServiceReadAll = {
  readonly methodName: string;
  readonly service: typeof ToDoService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof todo_service_pb.ReadAllRequest;
  readonly responseType: typeof todo_service_pb.ReadAllResponse;
};

export class ToDoService {
  static readonly serviceName: string;
  static readonly Create: ToDoServiceCreate;
  static readonly Read: ToDoServiceRead;
  static readonly Update: ToDoServiceUpdate;
  static readonly Delete: ToDoServiceDelete;
  static readonly ReadAll: ToDoServiceReadAll;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ToDoServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  create(
    requestMessage: todo_service_pb.CreateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: todo_service_pb.CreateResponse|null) => void
  ): UnaryResponse;
  create(
    requestMessage: todo_service_pb.CreateRequest,
    callback: (error: ServiceError|null, responseMessage: todo_service_pb.CreateResponse|null) => void
  ): UnaryResponse;
  read(
    requestMessage: todo_service_pb.ReadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: todo_service_pb.ReadResponse|null) => void
  ): UnaryResponse;
  read(
    requestMessage: todo_service_pb.ReadRequest,
    callback: (error: ServiceError|null, responseMessage: todo_service_pb.ReadResponse|null) => void
  ): UnaryResponse;
  update(
    requestMessage: todo_service_pb.UpdateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: todo_service_pb.UpdateResponse|null) => void
  ): UnaryResponse;
  update(
    requestMessage: todo_service_pb.UpdateRequest,
    callback: (error: ServiceError|null, responseMessage: todo_service_pb.UpdateResponse|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: todo_service_pb.DeleteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: todo_service_pb.DeleteResponse|null) => void
  ): UnaryResponse;
  delete(
    requestMessage: todo_service_pb.DeleteRequest,
    callback: (error: ServiceError|null, responseMessage: todo_service_pb.DeleteResponse|null) => void
  ): UnaryResponse;
  readAll(
    requestMessage: todo_service_pb.ReadAllRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: todo_service_pb.ReadAllResponse|null) => void
  ): UnaryResponse;
  readAll(
    requestMessage: todo_service_pb.ReadAllRequest,
    callback: (error: ServiceError|null, responseMessage: todo_service_pb.ReadAllResponse|null) => void
  ): UnaryResponse;
}

