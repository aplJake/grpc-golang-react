import {grpc} from "@improbable-eng/grpc-web";
import { ToDoService } from "../api/v2/todo_service_pb_service";
import { ToDo, ReadRequest } from "../api/v2/todo_service_pb";

const HOST =  "http://localhost:9090";

export const getToDo = () => {
    const getToDoRequest = new ReadRequest();
    grpc.unary(ToDoService.Read, {
        request: getToDoRequest,
        host: HOST,
        onEnd: res => {
            const { status, statusMessage, headers, message, trailers } = res;
            console.log("getBook.onEnd.status", status, statusMessage);
            console.log("getBook.onEnd.headers", headers);
            if (status === grpc.Code.OK && message) {
                console.log("getBook.onEnd.message", message.toObject());
            }
            console.log("getBook.onEnd.trailers", trailers);
            // queryBooks();
        }
    })
};