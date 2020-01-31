/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.v1 = (function() {

    /**
     * Namespace v1.
     * @exports v1
     * @namespace
     */
    var v1 = {};

    v1.ToDo = (function() {

        /**
         * Properties of a ToDo.
         * @memberof v1
         * @interface IToDo
         * @property {number|Long|null} [id] ToDo id
         * @property {string|null} [title] ToDo title
         * @property {string|null} [description] ToDo description
         * @property {google.protobuf.ITimestamp|null} [reminder] ToDo reminder
         */

        /**
         * Constructs a new ToDo.
         * @memberof v1
         * @classdesc Represents a ToDo.
         * @implements IToDo
         * @constructor
         * @param {v1.IToDo=} [properties] Properties to set
         */
        function ToDo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ToDo id.
         * @member {number|Long} id
         * @memberof v1.ToDo
         * @instance
         */
        ToDo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ToDo title.
         * @member {string} title
         * @memberof v1.ToDo
         * @instance
         */
        ToDo.prototype.title = "";

        /**
         * ToDo description.
         * @member {string} description
         * @memberof v1.ToDo
         * @instance
         */
        ToDo.prototype.description = "";

        /**
         * ToDo reminder.
         * @member {google.protobuf.ITimestamp|null|undefined} reminder
         * @memberof v1.ToDo
         * @instance
         */
        ToDo.prototype.reminder = null;

        /**
         * Creates a new ToDo instance using the specified properties.
         * @function create
         * @memberof v1.ToDo
         * @static
         * @param {v1.IToDo=} [properties] Properties to set
         * @returns {v1.ToDo} ToDo instance
         */
        ToDo.create = function create(properties) {
            return new ToDo(properties);
        };

        /**
         * Encodes the specified ToDo message. Does not implicitly {@link v1.ToDo.verify|verify} messages.
         * @function encode
         * @memberof v1.ToDo
         * @static
         * @param {v1.IToDo} message ToDo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ToDo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.reminder != null && message.hasOwnProperty("reminder"))
                $root.google.protobuf.Timestamp.encode(message.reminder, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ToDo message, length delimited. Does not implicitly {@link v1.ToDo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v1.ToDo
         * @static
         * @param {v1.IToDo} message ToDo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ToDo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ToDo message from the specified reader or buffer.
         * @function decode
         * @memberof v1.ToDo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v1.ToDo} ToDo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ToDo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v1.ToDo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.reminder = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ToDo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v1.ToDo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v1.ToDo} ToDo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ToDo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ToDo message.
         * @function verify
         * @memberof v1.ToDo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ToDo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.reminder != null && message.hasOwnProperty("reminder")) {
                var error = $root.google.protobuf.Timestamp.verify(message.reminder);
                if (error)
                    return "reminder." + error;
            }
            return null;
        };

        /**
         * Creates a ToDo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v1.ToDo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v1.ToDo} ToDo
         */
        ToDo.fromObject = function fromObject(object) {
            if (object instanceof $root.v1.ToDo)
                return object;
            var message = new $root.v1.ToDo();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.title != null)
                message.title = String(object.title);
            if (object.description != null)
                message.description = String(object.description);
            if (object.reminder != null) {
                if (typeof object.reminder !== "object")
                    throw TypeError(".v1.ToDo.reminder: object expected");
                message.reminder = $root.google.protobuf.Timestamp.fromObject(object.reminder);
            }
            return message;
        };

        /**
         * Creates a plain object from a ToDo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v1.ToDo
         * @static
         * @param {v1.ToDo} message ToDo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ToDo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.title = "";
                object.description = "";
                object.reminder = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.reminder != null && message.hasOwnProperty("reminder"))
                object.reminder = $root.google.protobuf.Timestamp.toObject(message.reminder, options);
            return object;
        };

        /**
         * Converts this ToDo to JSON.
         * @function toJSON
         * @memberof v1.ToDo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ToDo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ToDo;
    })();

    v1.CreateRequest = (function() {

        /**
         * Properties of a CreateRequest.
         * @memberof v1
         * @interface ICreateRequest
         * @property {string|null} [api] CreateRequest api
         * @property {v1.IToDo|null} [toDo] CreateRequest toDo
         */

        /**
         * Constructs a new CreateRequest.
         * @memberof v1
         * @classdesc Represents a CreateRequest.
         * @implements ICreateRequest
         * @constructor
         * @param {v1.ICreateRequest=} [properties] Properties to set
         */
        function CreateRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRequest api.
         * @member {string} api
         * @memberof v1.CreateRequest
         * @instance
         */
        CreateRequest.prototype.api = "";

        /**
         * CreateRequest toDo.
         * @member {v1.IToDo|null|undefined} toDo
         * @memberof v1.CreateRequest
         * @instance
         */
        CreateRequest.prototype.toDo = null;

        /**
         * Creates a new CreateRequest instance using the specified properties.
         * @function create
         * @memberof v1.CreateRequest
         * @static
         * @param {v1.ICreateRequest=} [properties] Properties to set
         * @returns {v1.CreateRequest} CreateRequest instance
         */
        CreateRequest.create = function create(properties) {
            return new CreateRequest(properties);
        };

        /**
         * Encodes the specified CreateRequest message. Does not implicitly {@link v1.CreateRequest.verify|verify} messages.
         * @function encode
         * @memberof v1.CreateRequest
         * @static
         * @param {v1.ICreateRequest} message CreateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.api != null && message.hasOwnProperty("api"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.api);
            if (message.toDo != null && message.hasOwnProperty("toDo"))
                $root.v1.ToDo.encode(message.toDo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateRequest message, length delimited. Does not implicitly {@link v1.CreateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v1.CreateRequest
         * @static
         * @param {v1.ICreateRequest} message CreateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof v1.CreateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v1.CreateRequest} CreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v1.CreateRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.api = reader.string();
                    break;
                case 2:
                    message.toDo = $root.v1.ToDo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v1.CreateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v1.CreateRequest} CreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRequest message.
         * @function verify
         * @memberof v1.CreateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.api != null && message.hasOwnProperty("api"))
                if (!$util.isString(message.api))
                    return "api: string expected";
            if (message.toDo != null && message.hasOwnProperty("toDo")) {
                var error = $root.v1.ToDo.verify(message.toDo);
                if (error)
                    return "toDo." + error;
            }
            return null;
        };

        /**
         * Creates a CreateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v1.CreateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v1.CreateRequest} CreateRequest
         */
        CreateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.v1.CreateRequest)
                return object;
            var message = new $root.v1.CreateRequest();
            if (object.api != null)
                message.api = String(object.api);
            if (object.toDo != null) {
                if (typeof object.toDo !== "object")
                    throw TypeError(".v1.CreateRequest.toDo: object expected");
                message.toDo = $root.v1.ToDo.fromObject(object.toDo);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v1.CreateRequest
         * @static
         * @param {v1.CreateRequest} message CreateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.api = "";
                object.toDo = null;
            }
            if (message.api != null && message.hasOwnProperty("api"))
                object.api = message.api;
            if (message.toDo != null && message.hasOwnProperty("toDo"))
                object.toDo = $root.v1.ToDo.toObject(message.toDo, options);
            return object;
        };

        /**
         * Converts this CreateRequest to JSON.
         * @function toJSON
         * @memberof v1.CreateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRequest;
    })();

    v1.CreateResponse = (function() {

        /**
         * Properties of a CreateResponse.
         * @memberof v1
         * @interface ICreateResponse
         * @property {string|null} [api] CreateResponse api
         * @property {number|Long|null} [id] CreateResponse id
         */

        /**
         * Constructs a new CreateResponse.
         * @memberof v1
         * @classdesc Represents a CreateResponse.
         * @implements ICreateResponse
         * @constructor
         * @param {v1.ICreateResponse=} [properties] Properties to set
         */
        function CreateResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateResponse api.
         * @member {string} api
         * @memberof v1.CreateResponse
         * @instance
         */
        CreateResponse.prototype.api = "";

        /**
         * CreateResponse id.
         * @member {number|Long} id
         * @memberof v1.CreateResponse
         * @instance
         */
        CreateResponse.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new CreateResponse instance using the specified properties.
         * @function create
         * @memberof v1.CreateResponse
         * @static
         * @param {v1.ICreateResponse=} [properties] Properties to set
         * @returns {v1.CreateResponse} CreateResponse instance
         */
        CreateResponse.create = function create(properties) {
            return new CreateResponse(properties);
        };

        /**
         * Encodes the specified CreateResponse message. Does not implicitly {@link v1.CreateResponse.verify|verify} messages.
         * @function encode
         * @memberof v1.CreateResponse
         * @static
         * @param {v1.ICreateResponse} message CreateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.api != null && message.hasOwnProperty("api"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.api);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.id);
            return writer;
        };

        /**
         * Encodes the specified CreateResponse message, length delimited. Does not implicitly {@link v1.CreateResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v1.CreateResponse
         * @static
         * @param {v1.ICreateResponse} message CreateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof v1.CreateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v1.CreateResponse} CreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v1.CreateResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.api = reader.string();
                    break;
                case 2:
                    message.id = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v1.CreateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v1.CreateResponse} CreateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateResponse message.
         * @function verify
         * @memberof v1.CreateResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.api != null && message.hasOwnProperty("api"))
                if (!$util.isString(message.api))
                    return "api: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            return null;
        };

        /**
         * Creates a CreateResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v1.CreateResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v1.CreateResponse} CreateResponse
         */
        CreateResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.v1.CreateResponse)
                return object;
            var message = new $root.v1.CreateResponse();
            if (object.api != null)
                message.api = String(object.api);
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a CreateResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v1.CreateResponse
         * @static
         * @param {v1.CreateResponse} message CreateResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.api = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
            }
            if (message.api != null && message.hasOwnProperty("api"))
                object.api = message.api;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            return object;
        };

        /**
         * Converts this CreateResponse to JSON.
         * @function toJSON
         * @memberof v1.CreateResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateResponse;
    })();

    v1.ReadRequest = (function() {

        /**
         * Properties of a ReadRequest.
         * @memberof v1
         * @interface IReadRequest
         * @property {string|null} [api] ReadRequest api
         * @property {number|Long|null} [id] ReadRequest id
         */

        /**
         * Constructs a new ReadRequest.
         * @memberof v1
         * @classdesc Represents a ReadRequest.
         * @implements IReadRequest
         * @constructor
         * @param {v1.IReadRequest=} [properties] Properties to set
         */
        function ReadRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadRequest api.
         * @member {string} api
         * @memberof v1.ReadRequest
         * @instance
         */
        ReadRequest.prototype.api = "";

        /**
         * ReadRequest id.
         * @member {number|Long} id
         * @memberof v1.ReadRequest
         * @instance
         */
        ReadRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ReadRequest instance using the specified properties.
         * @function create
         * @memberof v1.ReadRequest
         * @static
         * @param {v1.IReadRequest=} [properties] Properties to set
         * @returns {v1.ReadRequest} ReadRequest instance
         */
        ReadRequest.create = function create(properties) {
            return new ReadRequest(properties);
        };

        /**
         * Encodes the specified ReadRequest message. Does not implicitly {@link v1.ReadRequest.verify|verify} messages.
         * @function encode
         * @memberof v1.ReadRequest
         * @static
         * @param {v1.IReadRequest} message ReadRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.api != null && message.hasOwnProperty("api"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.api);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.id);
            return writer;
        };

        /**
         * Encodes the specified ReadRequest message, length delimited. Does not implicitly {@link v1.ReadRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v1.ReadRequest
         * @static
         * @param {v1.IReadRequest} message ReadRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadRequest message from the specified reader or buffer.
         * @function decode
         * @memberof v1.ReadRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v1.ReadRequest} ReadRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v1.ReadRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.api = reader.string();
                    break;
                case 2:
                    message.id = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v1.ReadRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v1.ReadRequest} ReadRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadRequest message.
         * @function verify
         * @memberof v1.ReadRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.api != null && message.hasOwnProperty("api"))
                if (!$util.isString(message.api))
                    return "api: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            return null;
        };

        /**
         * Creates a ReadRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v1.ReadRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v1.ReadRequest} ReadRequest
         */
        ReadRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.v1.ReadRequest)
                return object;
            var message = new $root.v1.ReadRequest();
            if (object.api != null)
                message.api = String(object.api);
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ReadRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v1.ReadRequest
         * @static
         * @param {v1.ReadRequest} message ReadRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.api = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
            }
            if (message.api != null && message.hasOwnProperty("api"))
                object.api = message.api;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            return object;
        };

        /**
         * Converts this ReadRequest to JSON.
         * @function toJSON
         * @memberof v1.ReadRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReadRequest;
    })();

    v1.ReadResponse = (function() {

        /**
         * Properties of a ReadResponse.
         * @memberof v1
         * @interface IReadResponse
         * @property {string|null} [api] ReadResponse api
         * @property {v1.IToDo|null} [toDo] ReadResponse toDo
         */

        /**
         * Constructs a new ReadResponse.
         * @memberof v1
         * @classdesc Represents a ReadResponse.
         * @implements IReadResponse
         * @constructor
         * @param {v1.IReadResponse=} [properties] Properties to set
         */
        function ReadResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadResponse api.
         * @member {string} api
         * @memberof v1.ReadResponse
         * @instance
         */
        ReadResponse.prototype.api = "";

        /**
         * ReadResponse toDo.
         * @member {v1.IToDo|null|undefined} toDo
         * @memberof v1.ReadResponse
         * @instance
         */
        ReadResponse.prototype.toDo = null;

        /**
         * Creates a new ReadResponse instance using the specified properties.
         * @function create
         * @memberof v1.ReadResponse
         * @static
         * @param {v1.IReadResponse=} [properties] Properties to set
         * @returns {v1.ReadResponse} ReadResponse instance
         */
        ReadResponse.create = function create(properties) {
            return new ReadResponse(properties);
        };

        /**
         * Encodes the specified ReadResponse message. Does not implicitly {@link v1.ReadResponse.verify|verify} messages.
         * @function encode
         * @memberof v1.ReadResponse
         * @static
         * @param {v1.IReadResponse} message ReadResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.api != null && message.hasOwnProperty("api"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.api);
            if (message.toDo != null && message.hasOwnProperty("toDo"))
                $root.v1.ToDo.encode(message.toDo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReadResponse message, length delimited. Does not implicitly {@link v1.ReadResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v1.ReadResponse
         * @static
         * @param {v1.IReadResponse} message ReadResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadResponse message from the specified reader or buffer.
         * @function decode
         * @memberof v1.ReadResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v1.ReadResponse} ReadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v1.ReadResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.api = reader.string();
                    break;
                case 2:
                    message.toDo = $root.v1.ToDo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v1.ReadResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v1.ReadResponse} ReadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadResponse message.
         * @function verify
         * @memberof v1.ReadResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.api != null && message.hasOwnProperty("api"))
                if (!$util.isString(message.api))
                    return "api: string expected";
            if (message.toDo != null && message.hasOwnProperty("toDo")) {
                var error = $root.v1.ToDo.verify(message.toDo);
                if (error)
                    return "toDo." + error;
            }
            return null;
        };

        /**
         * Creates a ReadResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v1.ReadResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v1.ReadResponse} ReadResponse
         */
        ReadResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.v1.ReadResponse)
                return object;
            var message = new $root.v1.ReadResponse();
            if (object.api != null)
                message.api = String(object.api);
            if (object.toDo != null) {
                if (typeof object.toDo !== "object")
                    throw TypeError(".v1.ReadResponse.toDo: object expected");
                message.toDo = $root.v1.ToDo.fromObject(object.toDo);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReadResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v1.ReadResponse
         * @static
         * @param {v1.ReadResponse} message ReadResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.api = "";
                object.toDo = null;
            }
            if (message.api != null && message.hasOwnProperty("api"))
                object.api = message.api;
            if (message.toDo != null && message.hasOwnProperty("toDo"))
                object.toDo = $root.v1.ToDo.toObject(message.toDo, options);
            return object;
        };

        /**
         * Converts this ReadResponse to JSON.
         * @function toJSON
         * @memberof v1.ReadResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReadResponse;
    })();

    v1.UpdateRequest = (function() {

        /**
         * Properties of an UpdateRequest.
         * @memberof v1
         * @interface IUpdateRequest
         * @property {string|null} [api] UpdateRequest api
         * @property {v1.IToDo|null} [toDo] UpdateRequest toDo
         */

        /**
         * Constructs a new UpdateRequest.
         * @memberof v1
         * @classdesc Represents an UpdateRequest.
         * @implements IUpdateRequest
         * @constructor
         * @param {v1.IUpdateRequest=} [properties] Properties to set
         */
        function UpdateRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateRequest api.
         * @member {string} api
         * @memberof v1.UpdateRequest
         * @instance
         */
        UpdateRequest.prototype.api = "";

        /**
         * UpdateRequest toDo.
         * @member {v1.IToDo|null|undefined} toDo
         * @memberof v1.UpdateRequest
         * @instance
         */
        UpdateRequest.prototype.toDo = null;

        /**
         * Creates a new UpdateRequest instance using the specified properties.
         * @function create
         * @memberof v1.UpdateRequest
         * @static
         * @param {v1.IUpdateRequest=} [properties] Properties to set
         * @returns {v1.UpdateRequest} UpdateRequest instance
         */
        UpdateRequest.create = function create(properties) {
            return new UpdateRequest(properties);
        };

        /**
         * Encodes the specified UpdateRequest message. Does not implicitly {@link v1.UpdateRequest.verify|verify} messages.
         * @function encode
         * @memberof v1.UpdateRequest
         * @static
         * @param {v1.IUpdateRequest} message UpdateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.api != null && message.hasOwnProperty("api"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.api);
            if (message.toDo != null && message.hasOwnProperty("toDo"))
                $root.v1.ToDo.encode(message.toDo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateRequest message, length delimited. Does not implicitly {@link v1.UpdateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v1.UpdateRequest
         * @static
         * @param {v1.IUpdateRequest} message UpdateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof v1.UpdateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v1.UpdateRequest} UpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v1.UpdateRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.api = reader.string();
                    break;
                case 2:
                    message.toDo = $root.v1.ToDo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v1.UpdateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v1.UpdateRequest} UpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateRequest message.
         * @function verify
         * @memberof v1.UpdateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.api != null && message.hasOwnProperty("api"))
                if (!$util.isString(message.api))
                    return "api: string expected";
            if (message.toDo != null && message.hasOwnProperty("toDo")) {
                var error = $root.v1.ToDo.verify(message.toDo);
                if (error)
                    return "toDo." + error;
            }
            return null;
        };

        /**
         * Creates an UpdateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v1.UpdateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v1.UpdateRequest} UpdateRequest
         */
        UpdateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.v1.UpdateRequest)
                return object;
            var message = new $root.v1.UpdateRequest();
            if (object.api != null)
                message.api = String(object.api);
            if (object.toDo != null) {
                if (typeof object.toDo !== "object")
                    throw TypeError(".v1.UpdateRequest.toDo: object expected");
                message.toDo = $root.v1.ToDo.fromObject(object.toDo);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v1.UpdateRequest
         * @static
         * @param {v1.UpdateRequest} message UpdateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.api = "";
                object.toDo = null;
            }
            if (message.api != null && message.hasOwnProperty("api"))
                object.api = message.api;
            if (message.toDo != null && message.hasOwnProperty("toDo"))
                object.toDo = $root.v1.ToDo.toObject(message.toDo, options);
            return object;
        };

        /**
         * Converts this UpdateRequest to JSON.
         * @function toJSON
         * @memberof v1.UpdateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateRequest;
    })();

    v1.UpdateResponse = (function() {

        /**
         * Properties of an UpdateResponse.
         * @memberof v1
         * @interface IUpdateResponse
         * @property {string|null} [api] UpdateResponse api
         * @property {number|Long|null} [updated] UpdateResponse updated
         */

        /**
         * Constructs a new UpdateResponse.
         * @memberof v1
         * @classdesc Represents an UpdateResponse.
         * @implements IUpdateResponse
         * @constructor
         * @param {v1.IUpdateResponse=} [properties] Properties to set
         */
        function UpdateResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateResponse api.
         * @member {string} api
         * @memberof v1.UpdateResponse
         * @instance
         */
        UpdateResponse.prototype.api = "";

        /**
         * UpdateResponse updated.
         * @member {number|Long} updated
         * @memberof v1.UpdateResponse
         * @instance
         */
        UpdateResponse.prototype.updated = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UpdateResponse instance using the specified properties.
         * @function create
         * @memberof v1.UpdateResponse
         * @static
         * @param {v1.IUpdateResponse=} [properties] Properties to set
         * @returns {v1.UpdateResponse} UpdateResponse instance
         */
        UpdateResponse.create = function create(properties) {
            return new UpdateResponse(properties);
        };

        /**
         * Encodes the specified UpdateResponse message. Does not implicitly {@link v1.UpdateResponse.verify|verify} messages.
         * @function encode
         * @memberof v1.UpdateResponse
         * @static
         * @param {v1.IUpdateResponse} message UpdateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.api != null && message.hasOwnProperty("api"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.api);
            if (message.updated != null && message.hasOwnProperty("updated"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.updated);
            return writer;
        };

        /**
         * Encodes the specified UpdateResponse message, length delimited. Does not implicitly {@link v1.UpdateResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v1.UpdateResponse
         * @static
         * @param {v1.IUpdateResponse} message UpdateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof v1.UpdateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v1.UpdateResponse} UpdateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v1.UpdateResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.api = reader.string();
                    break;
                case 2:
                    message.updated = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v1.UpdateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v1.UpdateResponse} UpdateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateResponse message.
         * @function verify
         * @memberof v1.UpdateResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.api != null && message.hasOwnProperty("api"))
                if (!$util.isString(message.api))
                    return "api: string expected";
            if (message.updated != null && message.hasOwnProperty("updated"))
                if (!$util.isInteger(message.updated) && !(message.updated && $util.isInteger(message.updated.low) && $util.isInteger(message.updated.high)))
                    return "updated: integer|Long expected";
            return null;
        };

        /**
         * Creates an UpdateResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v1.UpdateResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v1.UpdateResponse} UpdateResponse
         */
        UpdateResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.v1.UpdateResponse)
                return object;
            var message = new $root.v1.UpdateResponse();
            if (object.api != null)
                message.api = String(object.api);
            if (object.updated != null)
                if ($util.Long)
                    (message.updated = $util.Long.fromValue(object.updated)).unsigned = false;
                else if (typeof object.updated === "string")
                    message.updated = parseInt(object.updated, 10);
                else if (typeof object.updated === "number")
                    message.updated = object.updated;
                else if (typeof object.updated === "object")
                    message.updated = new $util.LongBits(object.updated.low >>> 0, object.updated.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an UpdateResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v1.UpdateResponse
         * @static
         * @param {v1.UpdateResponse} message UpdateResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.api = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.updated = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.updated = options.longs === String ? "0" : 0;
            }
            if (message.api != null && message.hasOwnProperty("api"))
                object.api = message.api;
            if (message.updated != null && message.hasOwnProperty("updated"))
                if (typeof message.updated === "number")
                    object.updated = options.longs === String ? String(message.updated) : message.updated;
                else
                    object.updated = options.longs === String ? $util.Long.prototype.toString.call(message.updated) : options.longs === Number ? new $util.LongBits(message.updated.low >>> 0, message.updated.high >>> 0).toNumber() : message.updated;
            return object;
        };

        /**
         * Converts this UpdateResponse to JSON.
         * @function toJSON
         * @memberof v1.UpdateResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateResponse;
    })();

    v1.DeleteRequest = (function() {

        /**
         * Properties of a DeleteRequest.
         * @memberof v1
         * @interface IDeleteRequest
         * @property {string|null} [api] DeleteRequest api
         * @property {number|Long|null} [id] DeleteRequest id
         */

        /**
         * Constructs a new DeleteRequest.
         * @memberof v1
         * @classdesc Represents a DeleteRequest.
         * @implements IDeleteRequest
         * @constructor
         * @param {v1.IDeleteRequest=} [properties] Properties to set
         */
        function DeleteRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteRequest api.
         * @member {string} api
         * @memberof v1.DeleteRequest
         * @instance
         */
        DeleteRequest.prototype.api = "";

        /**
         * DeleteRequest id.
         * @member {number|Long} id
         * @memberof v1.DeleteRequest
         * @instance
         */
        DeleteRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DeleteRequest instance using the specified properties.
         * @function create
         * @memberof v1.DeleteRequest
         * @static
         * @param {v1.IDeleteRequest=} [properties] Properties to set
         * @returns {v1.DeleteRequest} DeleteRequest instance
         */
        DeleteRequest.create = function create(properties) {
            return new DeleteRequest(properties);
        };

        /**
         * Encodes the specified DeleteRequest message. Does not implicitly {@link v1.DeleteRequest.verify|verify} messages.
         * @function encode
         * @memberof v1.DeleteRequest
         * @static
         * @param {v1.IDeleteRequest} message DeleteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.api != null && message.hasOwnProperty("api"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.api);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.id);
            return writer;
        };

        /**
         * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link v1.DeleteRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v1.DeleteRequest
         * @static
         * @param {v1.IDeleteRequest} message DeleteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteRequest message from the specified reader or buffer.
         * @function decode
         * @memberof v1.DeleteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v1.DeleteRequest} DeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v1.DeleteRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.api = reader.string();
                    break;
                case 2:
                    message.id = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v1.DeleteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v1.DeleteRequest} DeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteRequest message.
         * @function verify
         * @memberof v1.DeleteRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.api != null && message.hasOwnProperty("api"))
                if (!$util.isString(message.api))
                    return "api: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            return null;
        };

        /**
         * Creates a DeleteRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v1.DeleteRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v1.DeleteRequest} DeleteRequest
         */
        DeleteRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.v1.DeleteRequest)
                return object;
            var message = new $root.v1.DeleteRequest();
            if (object.api != null)
                message.api = String(object.api);
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a DeleteRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v1.DeleteRequest
         * @static
         * @param {v1.DeleteRequest} message DeleteRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.api = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
            }
            if (message.api != null && message.hasOwnProperty("api"))
                object.api = message.api;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            return object;
        };

        /**
         * Converts this DeleteRequest to JSON.
         * @function toJSON
         * @memberof v1.DeleteRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteRequest;
    })();

    v1.DeleteResponse = (function() {

        /**
         * Properties of a DeleteResponse.
         * @memberof v1
         * @interface IDeleteResponse
         * @property {string|null} [api] DeleteResponse api
         * @property {number|Long|null} [deleted] DeleteResponse deleted
         */

        /**
         * Constructs a new DeleteResponse.
         * @memberof v1
         * @classdesc Represents a DeleteResponse.
         * @implements IDeleteResponse
         * @constructor
         * @param {v1.IDeleteResponse=} [properties] Properties to set
         */
        function DeleteResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteResponse api.
         * @member {string} api
         * @memberof v1.DeleteResponse
         * @instance
         */
        DeleteResponse.prototype.api = "";

        /**
         * DeleteResponse deleted.
         * @member {number|Long} deleted
         * @memberof v1.DeleteResponse
         * @instance
         */
        DeleteResponse.prototype.deleted = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DeleteResponse instance using the specified properties.
         * @function create
         * @memberof v1.DeleteResponse
         * @static
         * @param {v1.IDeleteResponse=} [properties] Properties to set
         * @returns {v1.DeleteResponse} DeleteResponse instance
         */
        DeleteResponse.create = function create(properties) {
            return new DeleteResponse(properties);
        };

        /**
         * Encodes the specified DeleteResponse message. Does not implicitly {@link v1.DeleteResponse.verify|verify} messages.
         * @function encode
         * @memberof v1.DeleteResponse
         * @static
         * @param {v1.IDeleteResponse} message DeleteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.api != null && message.hasOwnProperty("api"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.api);
            if (message.deleted != null && message.hasOwnProperty("deleted"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.deleted);
            return writer;
        };

        /**
         * Encodes the specified DeleteResponse message, length delimited. Does not implicitly {@link v1.DeleteResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v1.DeleteResponse
         * @static
         * @param {v1.IDeleteResponse} message DeleteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteResponse message from the specified reader or buffer.
         * @function decode
         * @memberof v1.DeleteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v1.DeleteResponse} DeleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v1.DeleteResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.api = reader.string();
                    break;
                case 2:
                    message.deleted = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v1.DeleteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v1.DeleteResponse} DeleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteResponse message.
         * @function verify
         * @memberof v1.DeleteResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.api != null && message.hasOwnProperty("api"))
                if (!$util.isString(message.api))
                    return "api: string expected";
            if (message.deleted != null && message.hasOwnProperty("deleted"))
                if (!$util.isInteger(message.deleted) && !(message.deleted && $util.isInteger(message.deleted.low) && $util.isInteger(message.deleted.high)))
                    return "deleted: integer|Long expected";
            return null;
        };

        /**
         * Creates a DeleteResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v1.DeleteResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v1.DeleteResponse} DeleteResponse
         */
        DeleteResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.v1.DeleteResponse)
                return object;
            var message = new $root.v1.DeleteResponse();
            if (object.api != null)
                message.api = String(object.api);
            if (object.deleted != null)
                if ($util.Long)
                    (message.deleted = $util.Long.fromValue(object.deleted)).unsigned = false;
                else if (typeof object.deleted === "string")
                    message.deleted = parseInt(object.deleted, 10);
                else if (typeof object.deleted === "number")
                    message.deleted = object.deleted;
                else if (typeof object.deleted === "object")
                    message.deleted = new $util.LongBits(object.deleted.low >>> 0, object.deleted.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a DeleteResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v1.DeleteResponse
         * @static
         * @param {v1.DeleteResponse} message DeleteResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.api = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deleted = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deleted = options.longs === String ? "0" : 0;
            }
            if (message.api != null && message.hasOwnProperty("api"))
                object.api = message.api;
            if (message.deleted != null && message.hasOwnProperty("deleted"))
                if (typeof message.deleted === "number")
                    object.deleted = options.longs === String ? String(message.deleted) : message.deleted;
                else
                    object.deleted = options.longs === String ? $util.Long.prototype.toString.call(message.deleted) : options.longs === Number ? new $util.LongBits(message.deleted.low >>> 0, message.deleted.high >>> 0).toNumber() : message.deleted;
            return object;
        };

        /**
         * Converts this DeleteResponse to JSON.
         * @function toJSON
         * @memberof v1.DeleteResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteResponse;
    })();

    v1.ReadAllRequest = (function() {

        /**
         * Properties of a ReadAllRequest.
         * @memberof v1
         * @interface IReadAllRequest
         * @property {string|null} [api] ReadAllRequest api
         */

        /**
         * Constructs a new ReadAllRequest.
         * @memberof v1
         * @classdesc Represents a ReadAllRequest.
         * @implements IReadAllRequest
         * @constructor
         * @param {v1.IReadAllRequest=} [properties] Properties to set
         */
        function ReadAllRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadAllRequest api.
         * @member {string} api
         * @memberof v1.ReadAllRequest
         * @instance
         */
        ReadAllRequest.prototype.api = "";

        /**
         * Creates a new ReadAllRequest instance using the specified properties.
         * @function create
         * @memberof v1.ReadAllRequest
         * @static
         * @param {v1.IReadAllRequest=} [properties] Properties to set
         * @returns {v1.ReadAllRequest} ReadAllRequest instance
         */
        ReadAllRequest.create = function create(properties) {
            return new ReadAllRequest(properties);
        };

        /**
         * Encodes the specified ReadAllRequest message. Does not implicitly {@link v1.ReadAllRequest.verify|verify} messages.
         * @function encode
         * @memberof v1.ReadAllRequest
         * @static
         * @param {v1.IReadAllRequest} message ReadAllRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadAllRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.api != null && message.hasOwnProperty("api"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.api);
            return writer;
        };

        /**
         * Encodes the specified ReadAllRequest message, length delimited. Does not implicitly {@link v1.ReadAllRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v1.ReadAllRequest
         * @static
         * @param {v1.IReadAllRequest} message ReadAllRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadAllRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadAllRequest message from the specified reader or buffer.
         * @function decode
         * @memberof v1.ReadAllRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v1.ReadAllRequest} ReadAllRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadAllRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v1.ReadAllRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.api = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadAllRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v1.ReadAllRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v1.ReadAllRequest} ReadAllRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadAllRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadAllRequest message.
         * @function verify
         * @memberof v1.ReadAllRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadAllRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.api != null && message.hasOwnProperty("api"))
                if (!$util.isString(message.api))
                    return "api: string expected";
            return null;
        };

        /**
         * Creates a ReadAllRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v1.ReadAllRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v1.ReadAllRequest} ReadAllRequest
         */
        ReadAllRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.v1.ReadAllRequest)
                return object;
            var message = new $root.v1.ReadAllRequest();
            if (object.api != null)
                message.api = String(object.api);
            return message;
        };

        /**
         * Creates a plain object from a ReadAllRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v1.ReadAllRequest
         * @static
         * @param {v1.ReadAllRequest} message ReadAllRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadAllRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.api = "";
            if (message.api != null && message.hasOwnProperty("api"))
                object.api = message.api;
            return object;
        };

        /**
         * Converts this ReadAllRequest to JSON.
         * @function toJSON
         * @memberof v1.ReadAllRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadAllRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReadAllRequest;
    })();

    v1.ReadAllResponse = (function() {

        /**
         * Properties of a ReadAllResponse.
         * @memberof v1
         * @interface IReadAllResponse
         * @property {string|null} [api] ReadAllResponse api
         * @property {Array.<v1.IToDo>|null} [toDos] ReadAllResponse toDos
         */

        /**
         * Constructs a new ReadAllResponse.
         * @memberof v1
         * @classdesc Represents a ReadAllResponse.
         * @implements IReadAllResponse
         * @constructor
         * @param {v1.IReadAllResponse=} [properties] Properties to set
         */
        function ReadAllResponse(properties) {
            this.toDos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadAllResponse api.
         * @member {string} api
         * @memberof v1.ReadAllResponse
         * @instance
         */
        ReadAllResponse.prototype.api = "";

        /**
         * ReadAllResponse toDos.
         * @member {Array.<v1.IToDo>} toDos
         * @memberof v1.ReadAllResponse
         * @instance
         */
        ReadAllResponse.prototype.toDos = $util.emptyArray;

        /**
         * Creates a new ReadAllResponse instance using the specified properties.
         * @function create
         * @memberof v1.ReadAllResponse
         * @static
         * @param {v1.IReadAllResponse=} [properties] Properties to set
         * @returns {v1.ReadAllResponse} ReadAllResponse instance
         */
        ReadAllResponse.create = function create(properties) {
            return new ReadAllResponse(properties);
        };

        /**
         * Encodes the specified ReadAllResponse message. Does not implicitly {@link v1.ReadAllResponse.verify|verify} messages.
         * @function encode
         * @memberof v1.ReadAllResponse
         * @static
         * @param {v1.IReadAllResponse} message ReadAllResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadAllResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.api != null && message.hasOwnProperty("api"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.api);
            if (message.toDos != null && message.toDos.length)
                for (var i = 0; i < message.toDos.length; ++i)
                    $root.v1.ToDo.encode(message.toDos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReadAllResponse message, length delimited. Does not implicitly {@link v1.ReadAllResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof v1.ReadAllResponse
         * @static
         * @param {v1.IReadAllResponse} message ReadAllResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadAllResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadAllResponse message from the specified reader or buffer.
         * @function decode
         * @memberof v1.ReadAllResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {v1.ReadAllResponse} ReadAllResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadAllResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.v1.ReadAllResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.api = reader.string();
                    break;
                case 2:
                    if (!(message.toDos && message.toDos.length))
                        message.toDos = [];
                    message.toDos.push($root.v1.ToDo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadAllResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof v1.ReadAllResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {v1.ReadAllResponse} ReadAllResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadAllResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadAllResponse message.
         * @function verify
         * @memberof v1.ReadAllResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadAllResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.api != null && message.hasOwnProperty("api"))
                if (!$util.isString(message.api))
                    return "api: string expected";
            if (message.toDos != null && message.hasOwnProperty("toDos")) {
                if (!Array.isArray(message.toDos))
                    return "toDos: array expected";
                for (var i = 0; i < message.toDos.length; ++i) {
                    var error = $root.v1.ToDo.verify(message.toDos[i]);
                    if (error)
                        return "toDos." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ReadAllResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof v1.ReadAllResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {v1.ReadAllResponse} ReadAllResponse
         */
        ReadAllResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.v1.ReadAllResponse)
                return object;
            var message = new $root.v1.ReadAllResponse();
            if (object.api != null)
                message.api = String(object.api);
            if (object.toDos) {
                if (!Array.isArray(object.toDos))
                    throw TypeError(".v1.ReadAllResponse.toDos: array expected");
                message.toDos = [];
                for (var i = 0; i < object.toDos.length; ++i) {
                    if (typeof object.toDos[i] !== "object")
                        throw TypeError(".v1.ReadAllResponse.toDos: object expected");
                    message.toDos[i] = $root.v1.ToDo.fromObject(object.toDos[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ReadAllResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof v1.ReadAllResponse
         * @static
         * @param {v1.ReadAllResponse} message ReadAllResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadAllResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.toDos = [];
            if (options.defaults)
                object.api = "";
            if (message.api != null && message.hasOwnProperty("api"))
                object.api = message.api;
            if (message.toDos && message.toDos.length) {
                object.toDos = [];
                for (var j = 0; j < message.toDos.length; ++j)
                    object.toDos[j] = $root.v1.ToDo.toObject(message.toDos[j], options);
            }
            return object;
        };

        /**
         * Converts this ReadAllResponse to JSON.
         * @function toJSON
         * @memberof v1.ReadAllResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadAllResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReadAllResponse;
    })();

    v1.ToDoService = (function() {

        /**
         * Constructs a new ToDoService service.
         * @memberof v1
         * @classdesc Represents a ToDoService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function ToDoService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (ToDoService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ToDoService;

        /**
         * Creates new ToDoService service using the specified rpc implementation.
         * @function create
         * @memberof v1.ToDoService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {ToDoService} RPC service. Useful where requests and/or responses are streamed.
         */
        ToDoService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link v1.ToDoService#create}.
         * @memberof v1.ToDoService
         * @typedef CreateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {v1.CreateResponse} [response] CreateResponse
         */

        /**
         * Calls Create.
         * @function create
         * @memberof v1.ToDoService
         * @instance
         * @param {v1.ICreateRequest} request CreateRequest message or plain object
         * @param {v1.ToDoService.CreateCallback} callback Node-style callback called with the error, if any, and CreateResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ToDoService.prototype.create = function create(request, callback) {
            return this.rpcCall(create, $root.v1.CreateRequest, $root.v1.CreateResponse, request, callback);
        }, "name", { value: "Create" });

        /**
         * Calls Create.
         * @function create
         * @memberof v1.ToDoService
         * @instance
         * @param {v1.ICreateRequest} request CreateRequest message or plain object
         * @returns {Promise<v1.CreateResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link v1.ToDoService#read}.
         * @memberof v1.ToDoService
         * @typedef ReadCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {v1.ReadResponse} [response] ReadResponse
         */

        /**
         * Calls Read.
         * @function read
         * @memberof v1.ToDoService
         * @instance
         * @param {v1.IReadRequest} request ReadRequest message or plain object
         * @param {v1.ToDoService.ReadCallback} callback Node-style callback called with the error, if any, and ReadResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ToDoService.prototype.read = function read(request, callback) {
            return this.rpcCall(read, $root.v1.ReadRequest, $root.v1.ReadResponse, request, callback);
        }, "name", { value: "Read" });

        /**
         * Calls Read.
         * @function read
         * @memberof v1.ToDoService
         * @instance
         * @param {v1.IReadRequest} request ReadRequest message or plain object
         * @returns {Promise<v1.ReadResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link v1.ToDoService#update}.
         * @memberof v1.ToDoService
         * @typedef UpdateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {v1.UpdateResponse} [response] UpdateResponse
         */

        /**
         * Calls Update.
         * @function update
         * @memberof v1.ToDoService
         * @instance
         * @param {v1.IUpdateRequest} request UpdateRequest message or plain object
         * @param {v1.ToDoService.UpdateCallback} callback Node-style callback called with the error, if any, and UpdateResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ToDoService.prototype.update = function update(request, callback) {
            return this.rpcCall(update, $root.v1.UpdateRequest, $root.v1.UpdateResponse, request, callback);
        }, "name", { value: "Update" });

        /**
         * Calls Update.
         * @function update
         * @memberof v1.ToDoService
         * @instance
         * @param {v1.IUpdateRequest} request UpdateRequest message or plain object
         * @returns {Promise<v1.UpdateResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link v1.ToDoService#delete_}.
         * @memberof v1.ToDoService
         * @typedef DeleteCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {v1.DeleteResponse} [response] DeleteResponse
         */

        /**
         * Calls Delete.
         * @function delete
         * @memberof v1.ToDoService
         * @instance
         * @param {v1.IDeleteRequest} request DeleteRequest message or plain object
         * @param {v1.ToDoService.DeleteCallback} callback Node-style callback called with the error, if any, and DeleteResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ToDoService.prototype["delete"] = function delete_(request, callback) {
            return this.rpcCall(delete_, $root.v1.DeleteRequest, $root.v1.DeleteResponse, request, callback);
        }, "name", { value: "Delete" });

        /**
         * Calls Delete.
         * @function delete
         * @memberof v1.ToDoService
         * @instance
         * @param {v1.IDeleteRequest} request DeleteRequest message or plain object
         * @returns {Promise<v1.DeleteResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link v1.ToDoService#readAll}.
         * @memberof v1.ToDoService
         * @typedef ReadAllCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {v1.ReadAllResponse} [response] ReadAllResponse
         */

        /**
         * Calls ReadAll.
         * @function readAll
         * @memberof v1.ToDoService
         * @instance
         * @param {v1.IReadAllRequest} request ReadAllRequest message or plain object
         * @param {v1.ToDoService.ReadAllCallback} callback Node-style callback called with the error, if any, and ReadAllResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ToDoService.prototype.readAll = function readAll(request, callback) {
            return this.rpcCall(readAll, $root.v1.ReadAllRequest, $root.v1.ReadAllResponse, request, callback);
        }, "name", { value: "ReadAll" });

        /**
         * Calls ReadAll.
         * @function readAll
         * @memberof v1.ToDoService
         * @instance
         * @param {v1.IReadAllRequest} request ReadAllRequest message or plain object
         * @returns {Promise<v1.ReadAllResponse>} Promise
         * @variation 2
         */

        return ToDoService;
    })();

    return v1;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
