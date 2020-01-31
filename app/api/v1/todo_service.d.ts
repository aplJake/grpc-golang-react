import * as $protobuf from "protobufjs";
export namespace v1 {

    interface IToDo {
        id?: (number|Long|null);
        title?: (string|null);
        description?: (string|null);
        reminder?: (google.protobuf.ITimestamp|null);
    }

    class ToDo implements IToDo {
        constructor(properties?: v1.IToDo);
        public id: (number|Long);
        public title: string;
        public description: string;
        public reminder?: (google.protobuf.ITimestamp|null);
        public static create(properties?: v1.IToDo): v1.ToDo;
        public static encode(message: v1.IToDo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: v1.IToDo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v1.ToDo;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v1.ToDo;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): v1.ToDo;
        public static toObject(message: v1.ToDo, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICreateRequest {
        api?: (string|null);
        toDo?: (v1.IToDo|null);
    }

    class CreateRequest implements ICreateRequest {
        constructor(properties?: v1.ICreateRequest);
        public api: string;
        public toDo?: (v1.IToDo|null);
        public static create(properties?: v1.ICreateRequest): v1.CreateRequest;
        public static encode(message: v1.ICreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: v1.ICreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v1.CreateRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v1.CreateRequest;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): v1.CreateRequest;
        public static toObject(message: v1.CreateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface ICreateResponse {
        api?: (string|null);
        id?: (number|Long|null);
    }

    class CreateResponse implements ICreateResponse {
        constructor(properties?: v1.ICreateResponse);
        public api: string;
        public id: (number|Long);
        public static create(properties?: v1.ICreateResponse): v1.CreateResponse;
        public static encode(message: v1.ICreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: v1.ICreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v1.CreateResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v1.CreateResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): v1.CreateResponse;
        public static toObject(message: v1.CreateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IReadRequest {
        api?: (string|null);
        id?: (number|Long|null);
    }

    class ReadRequest implements IReadRequest {
        constructor(properties?: v1.IReadRequest);
        public api: string;
        public id: (number|Long);
        public static create(properties?: v1.IReadRequest): v1.ReadRequest;
        public static encode(message: v1.IReadRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: v1.IReadRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v1.ReadRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v1.ReadRequest;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): v1.ReadRequest;
        public static toObject(message: v1.ReadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IReadResponse {
        api?: (string|null);
        toDo?: (v1.IToDo|null);
    }

    class ReadResponse implements IReadResponse {
        constructor(properties?: v1.IReadResponse);
        public api: string;
        public toDo?: (v1.IToDo|null);
        public static create(properties?: v1.IReadResponse): v1.ReadResponse;
        public static encode(message: v1.IReadResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: v1.IReadResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v1.ReadResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v1.ReadResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): v1.ReadResponse;
        public static toObject(message: v1.ReadResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IUpdateRequest {
        api?: (string|null);
        toDo?: (v1.IToDo|null);
    }

    class UpdateRequest implements IUpdateRequest {
        constructor(properties?: v1.IUpdateRequest);
        public api: string;
        public toDo?: (v1.IToDo|null);
        public static create(properties?: v1.IUpdateRequest): v1.UpdateRequest;
        public static encode(message: v1.IUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: v1.IUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v1.UpdateRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v1.UpdateRequest;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): v1.UpdateRequest;
        public static toObject(message: v1.UpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IUpdateResponse {
        api?: (string|null);
        updated?: (number|Long|null);
    }

    class UpdateResponse implements IUpdateResponse {
        constructor(properties?: v1.IUpdateResponse);
        public api: string;
        public updated: (number|Long);
        public static create(properties?: v1.IUpdateResponse): v1.UpdateResponse;
        public static encode(message: v1.IUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: v1.IUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v1.UpdateResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v1.UpdateResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): v1.UpdateResponse;
        public static toObject(message: v1.UpdateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IDeleteRequest {
        api?: (string|null);
        id?: (number|Long|null);
    }

    class DeleteRequest implements IDeleteRequest {
        constructor(properties?: v1.IDeleteRequest);
        public api: string;
        public id: (number|Long);
        public static create(properties?: v1.IDeleteRequest): v1.DeleteRequest;
        public static encode(message: v1.IDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: v1.IDeleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v1.DeleteRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v1.DeleteRequest;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): v1.DeleteRequest;
        public static toObject(message: v1.DeleteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IDeleteResponse {
        api?: (string|null);
        deleted?: (number|Long|null);
    }

    class DeleteResponse implements IDeleteResponse {
        constructor(properties?: v1.IDeleteResponse);
        public api: string;
        public deleted: (number|Long);
        public static create(properties?: v1.IDeleteResponse): v1.DeleteResponse;
        public static encode(message: v1.IDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: v1.IDeleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v1.DeleteResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v1.DeleteResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): v1.DeleteResponse;
        public static toObject(message: v1.DeleteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IReadAllRequest {
        api?: (string|null);
    }

    class ReadAllRequest implements IReadAllRequest {
        constructor(properties?: v1.IReadAllRequest);
        public api: string;
        public static create(properties?: v1.IReadAllRequest): v1.ReadAllRequest;
        public static encode(message: v1.IReadAllRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: v1.IReadAllRequest, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v1.ReadAllRequest;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v1.ReadAllRequest;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): v1.ReadAllRequest;
        public static toObject(message: v1.ReadAllRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IReadAllResponse {
        api?: (string|null);
        toDos?: (v1.IToDo[]|null);
    }

    class ReadAllResponse implements IReadAllResponse {
        constructor(properties?: v1.IReadAllResponse);
        public api: string;
        public toDos: v1.IToDo[];
        public static create(properties?: v1.IReadAllResponse): v1.ReadAllResponse;
        public static encode(message: v1.IReadAllResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: v1.IReadAllResponse, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): v1.ReadAllResponse;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): v1.ReadAllResponse;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): v1.ReadAllResponse;
        public static toObject(message: v1.ReadAllResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    class ToDoService extends $protobuf.rpc.Service {
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ToDoService;
        public create(request: v1.ICreateRequest, callback: v1.ToDoService.CreateCallback): void;
        public create(request: v1.ICreateRequest): Promise<v1.CreateResponse>;
        public read(request: v1.IReadRequest, callback: v1.ToDoService.ReadCallback): void;
        public read(request: v1.IReadRequest): Promise<v1.ReadResponse>;
        public update(request: v1.IUpdateRequest, callback: v1.ToDoService.UpdateCallback): void;
        public update(request: v1.IUpdateRequest): Promise<v1.UpdateResponse>;
        public delete(request: v1.IDeleteRequest, callback: v1.ToDoService.DeleteCallback): void;
        public delete(request: v1.IDeleteRequest): Promise<v1.DeleteResponse>;
        public readAll(request: v1.IReadAllRequest, callback: v1.ToDoService.ReadAllCallback): void;
        public readAll(request: v1.IReadAllRequest): Promise<v1.ReadAllResponse>;
    }

    namespace ToDoService {

        type CreateCallback = (error: (Error|null), response?: v1.CreateResponse) => void;

        type ReadCallback = (error: (Error|null), response?: v1.ReadResponse) => void;

        type UpdateCallback = (error: (Error|null), response?: v1.UpdateResponse) => void;

        type DeleteCallback = (error: (Error|null), response?: v1.DeleteResponse) => void;

        type ReadAllCallback = (error: (Error|null), response?: v1.ReadAllResponse) => void;
    }
}

export namespace google {

    namespace protobuf {

        interface ITimestamp {
            seconds?: (number|Long|null);
            nanos?: (number|null);
        }

        class Timestamp implements ITimestamp {
            constructor(properties?: google.protobuf.ITimestamp);
            public seconds: (number|Long);
            public nanos: number;
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }
    }
}
