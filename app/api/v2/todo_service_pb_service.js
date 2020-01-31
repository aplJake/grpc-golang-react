// package: v1
// file: todo_service.proto

var todo_service_pb = require("./todo_service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ToDoService = (function () {
  function ToDoService() {}
  ToDoService.serviceName = "v1.ToDoService";
  return ToDoService;
}());

ToDoService.Create = {
  methodName: "Create",
  service: ToDoService,
  requestStream: false,
  responseStream: false,
  requestType: todo_service_pb.CreateRequest,
  responseType: todo_service_pb.CreateResponse
};

ToDoService.Read = {
  methodName: "Read",
  service: ToDoService,
  requestStream: false,
  responseStream: false,
  requestType: todo_service_pb.ReadRequest,
  responseType: todo_service_pb.ReadResponse
};

ToDoService.Update = {
  methodName: "Update",
  service: ToDoService,
  requestStream: false,
  responseStream: false,
  requestType: todo_service_pb.UpdateRequest,
  responseType: todo_service_pb.UpdateResponse
};

ToDoService.Delete = {
  methodName: "Delete",
  service: ToDoService,
  requestStream: false,
  responseStream: false,
  requestType: todo_service_pb.DeleteRequest,
  responseType: todo_service_pb.DeleteResponse
};

ToDoService.ReadAll = {
  methodName: "ReadAll",
  service: ToDoService,
  requestStream: false,
  responseStream: false,
  requestType: todo_service_pb.ReadAllRequest,
  responseType: todo_service_pb.ReadAllResponse
};

exports.ToDoService = ToDoService;

function ToDoServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ToDoServiceClient.prototype.create = function create(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ToDoService.Create, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ToDoServiceClient.prototype.read = function read(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ToDoService.Read, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ToDoServiceClient.prototype.update = function update(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ToDoService.Update, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ToDoServiceClient.prototype.delete = function pb_delete(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ToDoService.Delete, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ToDoServiceClient.prototype.readAll = function readAll(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ToDoService.ReadAll, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ToDoServiceClient = ToDoServiceClient;

