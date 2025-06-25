// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.MEXCDeltaProtocolV3 = (function() {

    /**
     * Properties of a MEXCDeltaProtocolV3.
     * @exports IMEXCDeltaProtocolV3
     * @interface IMEXCDeltaProtocolV3
     * @property {string|null} [stream] MEXCDeltaProtocolV3 stream
     * @property {string|null} [symbol] MEXCDeltaProtocolV3 symbol
     * @property {number|Long|null} [timestamp] MEXCDeltaProtocolV3 timestamp
     * @property {Array.<IDepthEntry>|null} [depths] MEXCDeltaProtocolV3 depths
     * @property {string|null} [channel] MEXCDeltaProtocolV3 channel
     * @property {string|null} [firstSequence] MEXCDeltaProtocolV3 firstSequence
     * @property {string|null} [lastSequence] MEXCDeltaProtocolV3 lastSequence
     */

    /**
     * Constructs a new MEXCDeltaProtocolV3.
     * @exports MEXCDeltaProtocolV3
     * @classdesc Represents a MEXCDeltaProtocolV3.
     * @implements IMEXCDeltaProtocolV3
     * @constructor
     * @param {IMEXCDeltaProtocolV3=} [properties] Properties to set
     */
    function MEXCDeltaProtocolV3(properties) {
        this.depths = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MEXCDeltaProtocolV3 stream.
     * @member {string} stream
     * @memberof MEXCDeltaProtocolV3
     * @instance
     */
    MEXCDeltaProtocolV3.prototype.stream = "";

    /**
     * MEXCDeltaProtocolV3 symbol.
     * @member {string} symbol
     * @memberof MEXCDeltaProtocolV3
     * @instance
     */
    MEXCDeltaProtocolV3.prototype.symbol = "";

    /**
     * MEXCDeltaProtocolV3 timestamp.
     * @member {number|Long} timestamp
     * @memberof MEXCDeltaProtocolV3
     * @instance
     */
    MEXCDeltaProtocolV3.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MEXCDeltaProtocolV3 depths.
     * @member {Array.<IDepthEntry>} depths
     * @memberof MEXCDeltaProtocolV3
     * @instance
     */
    MEXCDeltaProtocolV3.prototype.depths = $util.emptyArray;

    /**
     * MEXCDeltaProtocolV3 channel.
     * @member {string} channel
     * @memberof MEXCDeltaProtocolV3
     * @instance
     */
    MEXCDeltaProtocolV3.prototype.channel = "";

    /**
     * MEXCDeltaProtocolV3 firstSequence.
     * @member {string} firstSequence
     * @memberof MEXCDeltaProtocolV3
     * @instance
     */
    MEXCDeltaProtocolV3.prototype.firstSequence = "";

    /**
     * MEXCDeltaProtocolV3 lastSequence.
     * @member {string} lastSequence
     * @memberof MEXCDeltaProtocolV3
     * @instance
     */
    MEXCDeltaProtocolV3.prototype.lastSequence = "";

    /**
     * Creates a new MEXCDeltaProtocolV3 instance using the specified properties.
     * @function create
     * @memberof MEXCDeltaProtocolV3
     * @static
     * @param {IMEXCDeltaProtocolV3=} [properties] Properties to set
     * @returns {MEXCDeltaProtocolV3} MEXCDeltaProtocolV3 instance
     */
    MEXCDeltaProtocolV3.create = function create(properties) {
        return new MEXCDeltaProtocolV3(properties);
    };

    /**
     * Encodes the specified MEXCDeltaProtocolV3 message. Does not implicitly {@link MEXCDeltaProtocolV3.verify|verify} messages.
     * @function encode
     * @memberof MEXCDeltaProtocolV3
     * @static
     * @param {IMEXCDeltaProtocolV3} message MEXCDeltaProtocolV3 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MEXCDeltaProtocolV3.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.stream != null && Object.hasOwnProperty.call(message, "stream"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.stream);
        if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.symbol);
        if (message.firstSequence != null && Object.hasOwnProperty.call(message, "firstSequence"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.firstSequence);
        if (message.lastSequence != null && Object.hasOwnProperty.call(message, "lastSequence"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.lastSequence);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.timestamp);
        if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
            writer.uint32(/* id 27, wireType 2 =*/218).string(message.channel);
        if (message.depths != null && message.depths.length)
            for (var i = 0; i < message.depths.length; ++i)
                $root.DepthEntry.encode(message.depths[i], writer.uint32(/* id 313, wireType 2 =*/2506).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified MEXCDeltaProtocolV3 message, length delimited. Does not implicitly {@link MEXCDeltaProtocolV3.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MEXCDeltaProtocolV3
     * @static
     * @param {IMEXCDeltaProtocolV3} message MEXCDeltaProtocolV3 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MEXCDeltaProtocolV3.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MEXCDeltaProtocolV3 message from the specified reader or buffer.
     * @function decode
     * @memberof MEXCDeltaProtocolV3
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MEXCDeltaProtocolV3} MEXCDeltaProtocolV3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MEXCDeltaProtocolV3.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MEXCDeltaProtocolV3();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.stream = reader.string();
                    break;
                }
            case 3: {
                    message.symbol = reader.string();
                    break;
                }
            case 6: {
                    message.timestamp = reader.int64();
                    break;
                }
            case 313: {
                    if (!(message.depths && message.depths.length))
                        message.depths = [];
                    message.depths.push($root.DepthEntry.decode(reader, reader.uint32()));
                    break;
                }
            case 27: {
                    message.channel = reader.string();
                    break;
                }
            case 4: {
                    message.firstSequence = reader.string();
                    break;
                }
            case 5: {
                    message.lastSequence = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MEXCDeltaProtocolV3 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MEXCDeltaProtocolV3
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MEXCDeltaProtocolV3} MEXCDeltaProtocolV3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MEXCDeltaProtocolV3.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MEXCDeltaProtocolV3 message.
     * @function verify
     * @memberof MEXCDeltaProtocolV3
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MEXCDeltaProtocolV3.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.stream != null && message.hasOwnProperty("stream"))
            if (!$util.isString(message.stream))
                return "stream: string expected";
        if (message.symbol != null && message.hasOwnProperty("symbol"))
            if (!$util.isString(message.symbol))
                return "symbol: string expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        if (message.depths != null && message.hasOwnProperty("depths")) {
            if (!Array.isArray(message.depths))
                return "depths: array expected";
            for (var i = 0; i < message.depths.length; ++i) {
                var error = $root.DepthEntry.verify(message.depths[i]);
                if (error)
                    return "depths." + error;
            }
        }
        if (message.channel != null && message.hasOwnProperty("channel"))
            if (!$util.isString(message.channel))
                return "channel: string expected";
        if (message.firstSequence != null && message.hasOwnProperty("firstSequence"))
            if (!$util.isString(message.firstSequence))
                return "firstSequence: string expected";
        if (message.lastSequence != null && message.hasOwnProperty("lastSequence"))
            if (!$util.isString(message.lastSequence))
                return "lastSequence: string expected";
        return null;
    };

    /**
     * Creates a MEXCDeltaProtocolV3 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MEXCDeltaProtocolV3
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MEXCDeltaProtocolV3} MEXCDeltaProtocolV3
     */
    MEXCDeltaProtocolV3.fromObject = function fromObject(object) {
        if (object instanceof $root.MEXCDeltaProtocolV3)
            return object;
        var message = new $root.MEXCDeltaProtocolV3();
        if (object.stream != null)
            message.stream = String(object.stream);
        if (object.symbol != null)
            message.symbol = String(object.symbol);
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
        if (object.depths) {
            if (!Array.isArray(object.depths))
                throw TypeError(".MEXCDeltaProtocolV3.depths: array expected");
            message.depths = [];
            for (var i = 0; i < object.depths.length; ++i) {
                if (typeof object.depths[i] !== "object")
                    throw TypeError(".MEXCDeltaProtocolV3.depths: object expected");
                message.depths[i] = $root.DepthEntry.fromObject(object.depths[i]);
            }
        }
        if (object.channel != null)
            message.channel = String(object.channel);
        if (object.firstSequence != null)
            message.firstSequence = String(object.firstSequence);
        if (object.lastSequence != null)
            message.lastSequence = String(object.lastSequence);
        return message;
    };

    /**
     * Creates a plain object from a MEXCDeltaProtocolV3 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MEXCDeltaProtocolV3
     * @static
     * @param {MEXCDeltaProtocolV3} message MEXCDeltaProtocolV3
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MEXCDeltaProtocolV3.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.depths = [];
        if (options.defaults) {
            object.stream = "";
            object.symbol = "";
            object.firstSequence = "";
            object.lastSequence = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
            object.channel = "";
        }
        if (message.stream != null && message.hasOwnProperty("stream"))
            object.stream = message.stream;
        if (message.symbol != null && message.hasOwnProperty("symbol"))
            object.symbol = message.symbol;
        if (message.firstSequence != null && message.hasOwnProperty("firstSequence"))
            object.firstSequence = message.firstSequence;
        if (message.lastSequence != null && message.hasOwnProperty("lastSequence"))
            object.lastSequence = message.lastSequence;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
        if (message.channel != null && message.hasOwnProperty("channel"))
            object.channel = message.channel;
        if (message.depths && message.depths.length) {
            object.depths = [];
            for (var j = 0; j < message.depths.length; ++j)
                object.depths[j] = $root.DepthEntry.toObject(message.depths[j], options);
        }
        return object;
    };

    /**
     * Converts this MEXCDeltaProtocolV3 to JSON.
     * @function toJSON
     * @memberof MEXCDeltaProtocolV3
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MEXCDeltaProtocolV3.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MEXCDeltaProtocolV3
     * @function getTypeUrl
     * @memberof MEXCDeltaProtocolV3
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MEXCDeltaProtocolV3.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MEXCDeltaProtocolV3";
    };

    return MEXCDeltaProtocolV3;
})();

$root.DepthEntry = (function() {

    /**
     * Properties of a DepthEntry.
     * @exports IDepthEntry
     * @interface IDepthEntry
     * @property {string|null} [price] DepthEntry price
     * @property {string|null} [quantity] DepthEntry quantity
     */

    /**
     * Constructs a new DepthEntry.
     * @exports DepthEntry
     * @classdesc Represents a DepthEntry.
     * @implements IDepthEntry
     * @constructor
     * @param {IDepthEntry=} [properties] Properties to set
     */
    function DepthEntry(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DepthEntry price.
     * @member {string} price
     * @memberof DepthEntry
     * @instance
     */
    DepthEntry.prototype.price = "";

    /**
     * DepthEntry quantity.
     * @member {string} quantity
     * @memberof DepthEntry
     * @instance
     */
    DepthEntry.prototype.quantity = "";

    /**
     * Creates a new DepthEntry instance using the specified properties.
     * @function create
     * @memberof DepthEntry
     * @static
     * @param {IDepthEntry=} [properties] Properties to set
     * @returns {DepthEntry} DepthEntry instance
     */
    DepthEntry.create = function create(properties) {
        return new DepthEntry(properties);
    };

    /**
     * Encodes the specified DepthEntry message. Does not implicitly {@link DepthEntry.verify|verify} messages.
     * @function encode
     * @memberof DepthEntry
     * @static
     * @param {IDepthEntry} message DepthEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DepthEntry.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.price != null && Object.hasOwnProperty.call(message, "price"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.price);
        if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.quantity);
        return writer;
    };

    /**
     * Encodes the specified DepthEntry message, length delimited. Does not implicitly {@link DepthEntry.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DepthEntry
     * @static
     * @param {IDepthEntry} message DepthEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DepthEntry.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DepthEntry message from the specified reader or buffer.
     * @function decode
     * @memberof DepthEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DepthEntry} DepthEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DepthEntry.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DepthEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.price = reader.string();
                    break;
                }
            case 2: {
                    message.quantity = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DepthEntry message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DepthEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DepthEntry} DepthEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DepthEntry.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DepthEntry message.
     * @function verify
     * @memberof DepthEntry
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DepthEntry.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.price != null && message.hasOwnProperty("price"))
            if (!$util.isString(message.price))
                return "price: string expected";
        if (message.quantity != null && message.hasOwnProperty("quantity"))
            if (!$util.isString(message.quantity))
                return "quantity: string expected";
        return null;
    };

    /**
     * Creates a DepthEntry message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DepthEntry
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DepthEntry} DepthEntry
     */
    DepthEntry.fromObject = function fromObject(object) {
        if (object instanceof $root.DepthEntry)
            return object;
        var message = new $root.DepthEntry();
        if (object.price != null)
            message.price = String(object.price);
        if (object.quantity != null)
            message.quantity = String(object.quantity);
        return message;
    };

    /**
     * Creates a plain object from a DepthEntry message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DepthEntry
     * @static
     * @param {DepthEntry} message DepthEntry
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DepthEntry.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.price = "";
            object.quantity = "";
        }
        if (message.price != null && message.hasOwnProperty("price"))
            object.price = message.price;
        if (message.quantity != null && message.hasOwnProperty("quantity"))
            object.quantity = message.quantity;
        return object;
    };

    /**
     * Converts this DepthEntry to JSON.
     * @function toJSON
     * @memberof DepthEntry
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DepthEntry.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DepthEntry
     * @function getTypeUrl
     * @memberof DepthEntry
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DepthEntry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DepthEntry";
    };

    return DepthEntry;
})();