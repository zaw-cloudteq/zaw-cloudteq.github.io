// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.PublicDealsV3Api = (function() {

    /**
     * Properties of a PublicDealsV3Api.
     * @exports IPublicDealsV3Api
     * @interface IPublicDealsV3Api
     * @property {string|null} [topic] PublicDealsV3Api topic
     * @property {string|null} [symbol] PublicDealsV3Api symbol
     * @property {number|Long|null} [timestamp] PublicDealsV3Api timestamp
     * @property {Array.<IDealItem>|null} [deals] PublicDealsV3Api deals
     */

    /**
     * Constructs a new PublicDealsV3Api.
     * @exports PublicDealsV3Api
     * @classdesc Represents a PublicDealsV3Api.
     * @implements IPublicDealsV3Api
     * @constructor
     * @param {IPublicDealsV3Api=} [properties] Properties to set
     */
    function PublicDealsV3Api(properties) {
        this.deals = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PublicDealsV3Api topic.
     * @member {string} topic
     * @memberof PublicDealsV3Api
     * @instance
     */
    PublicDealsV3Api.prototype.topic = "";

    /**
     * PublicDealsV3Api symbol.
     * @member {string} symbol
     * @memberof PublicDealsV3Api
     * @instance
     */
    PublicDealsV3Api.prototype.symbol = "";

    /**
     * PublicDealsV3Api timestamp.
     * @member {number|Long} timestamp
     * @memberof PublicDealsV3Api
     * @instance
     */
    PublicDealsV3Api.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PublicDealsV3Api deals.
     * @member {Array.<IDealItem>} deals
     * @memberof PublicDealsV3Api
     * @instance
     */
    PublicDealsV3Api.prototype.deals = $util.emptyArray;

    /**
     * Creates a new PublicDealsV3Api instance using the specified properties.
     * @function create
     * @memberof PublicDealsV3Api
     * @static
     * @param {IPublicDealsV3Api=} [properties] Properties to set
     * @returns {PublicDealsV3Api} PublicDealsV3Api instance
     */
    PublicDealsV3Api.create = function create(properties) {
        return new PublicDealsV3Api(properties);
    };

    /**
     * Encodes the specified PublicDealsV3Api message. Does not implicitly {@link PublicDealsV3Api.verify|verify} messages.
     * @function encode
     * @memberof PublicDealsV3Api
     * @static
     * @param {IPublicDealsV3Api} message PublicDealsV3Api message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PublicDealsV3Api.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.topic != null && Object.hasOwnProperty.call(message, "topic"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.topic);
        if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.symbol);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.timestamp);
        if (message.deals != null && message.deals.length)
            for (var i = 0; i < message.deals.length; ++i)
                $root.DealItem.encode(message.deals[i], writer.uint32(/* id 301, wireType 2 =*/2410).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PublicDealsV3Api message, length delimited. Does not implicitly {@link PublicDealsV3Api.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PublicDealsV3Api
     * @static
     * @param {IPublicDealsV3Api} message PublicDealsV3Api message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PublicDealsV3Api.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PublicDealsV3Api message from the specified reader or buffer.
     * @function decode
     * @memberof PublicDealsV3Api
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PublicDealsV3Api} PublicDealsV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PublicDealsV3Api.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PublicDealsV3Api();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.topic = reader.string();
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
            case 301: {
                    if (!(message.deals && message.deals.length))
                        message.deals = [];
                    message.deals.push($root.DealItem.decode(reader, reader.uint32()));
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
     * Decodes a PublicDealsV3Api message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PublicDealsV3Api
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PublicDealsV3Api} PublicDealsV3Api
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PublicDealsV3Api.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PublicDealsV3Api message.
     * @function verify
     * @memberof PublicDealsV3Api
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PublicDealsV3Api.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.topic != null && message.hasOwnProperty("topic"))
            if (!$util.isString(message.topic))
                return "topic: string expected";
        if (message.symbol != null && message.hasOwnProperty("symbol"))
            if (!$util.isString(message.symbol))
                return "symbol: string expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        if (message.deals != null && message.hasOwnProperty("deals")) {
            if (!Array.isArray(message.deals))
                return "deals: array expected";
            for (var i = 0; i < message.deals.length; ++i) {
                var error = $root.DealItem.verify(message.deals[i]);
                if (error)
                    return "deals." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PublicDealsV3Api message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PublicDealsV3Api
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PublicDealsV3Api} PublicDealsV3Api
     */
    PublicDealsV3Api.fromObject = function fromObject(object) {
        if (object instanceof $root.PublicDealsV3Api)
            return object;
        var message = new $root.PublicDealsV3Api();
        if (object.topic != null)
            message.topic = String(object.topic);
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
        if (object.deals) {
            if (!Array.isArray(object.deals))
                throw TypeError(".PublicDealsV3Api.deals: array expected");
            message.deals = [];
            for (var i = 0; i < object.deals.length; ++i) {
                if (typeof object.deals[i] !== "object")
                    throw TypeError(".PublicDealsV3Api.deals: object expected");
                message.deals[i] = $root.DealItem.fromObject(object.deals[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PublicDealsV3Api message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PublicDealsV3Api
     * @static
     * @param {PublicDealsV3Api} message PublicDealsV3Api
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PublicDealsV3Api.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.deals = [];
        if (options.defaults) {
            object.topic = "";
            object.symbol = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
        }
        if (message.topic != null && message.hasOwnProperty("topic"))
            object.topic = message.topic;
        if (message.symbol != null && message.hasOwnProperty("symbol"))
            object.symbol = message.symbol;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
        if (message.deals && message.deals.length) {
            object.deals = [];
            for (var j = 0; j < message.deals.length; ++j)
                object.deals[j] = $root.DealItem.toObject(message.deals[j], options);
        }
        return object;
    };

    /**
     * Converts this PublicDealsV3Api to JSON.
     * @function toJSON
     * @memberof PublicDealsV3Api
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PublicDealsV3Api.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PublicDealsV3Api
     * @function getTypeUrl
     * @memberof PublicDealsV3Api
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PublicDealsV3Api.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PublicDealsV3Api";
    };

    return PublicDealsV3Api;
})();

$root.DealItem = (function() {

    /**
     * Properties of a DealItem.
     * @exports IDealItem
     * @interface IDealItem
     * @property {IDealDetail|null} [detail] DealItem detail
     * @property {string|null} [topic] DealItem topic
     */

    /**
     * Constructs a new DealItem.
     * @exports DealItem
     * @classdesc Represents a DealItem.
     * @implements IDealItem
     * @constructor
     * @param {IDealItem=} [properties] Properties to set
     */
    function DealItem(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DealItem detail.
     * @member {IDealDetail|null|undefined} detail
     * @memberof DealItem
     * @instance
     */
    DealItem.prototype.detail = null;

    /**
     * DealItem topic.
     * @member {string} topic
     * @memberof DealItem
     * @instance
     */
    DealItem.prototype.topic = "";

    /**
     * Creates a new DealItem instance using the specified properties.
     * @function create
     * @memberof DealItem
     * @static
     * @param {IDealItem=} [properties] Properties to set
     * @returns {DealItem} DealItem instance
     */
    DealItem.create = function create(properties) {
        return new DealItem(properties);
    };

    /**
     * Encodes the specified DealItem message. Does not implicitly {@link DealItem.verify|verify} messages.
     * @function encode
     * @memberof DealItem
     * @static
     * @param {IDealItem} message DealItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DealItem.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
            $root.DealDetail.encode(message.detail, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.topic != null && Object.hasOwnProperty.call(message, "topic"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.topic);
        return writer;
    };

    /**
     * Encodes the specified DealItem message, length delimited. Does not implicitly {@link DealItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DealItem
     * @static
     * @param {IDealItem} message DealItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DealItem.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DealItem message from the specified reader or buffer.
     * @function decode
     * @memberof DealItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DealItem} DealItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DealItem.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DealItem();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.detail = $root.DealDetail.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.topic = reader.string();
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
     * Decodes a DealItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DealItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DealItem} DealItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DealItem.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DealItem message.
     * @function verify
     * @memberof DealItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DealItem.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.detail != null && message.hasOwnProperty("detail")) {
            var error = $root.DealDetail.verify(message.detail);
            if (error)
                return "detail." + error;
        }
        if (message.topic != null && message.hasOwnProperty("topic"))
            if (!$util.isString(message.topic))
                return "topic: string expected";
        return null;
    };

    /**
     * Creates a DealItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DealItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DealItem} DealItem
     */
    DealItem.fromObject = function fromObject(object) {
        if (object instanceof $root.DealItem)
            return object;
        var message = new $root.DealItem();
        if (object.detail != null) {
            if (typeof object.detail !== "object")
                throw TypeError(".DealItem.detail: object expected");
            message.detail = $root.DealDetail.fromObject(object.detail);
        }
        if (object.topic != null)
            message.topic = String(object.topic);
        return message;
    };

    /**
     * Creates a plain object from a DealItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DealItem
     * @static
     * @param {DealItem} message DealItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DealItem.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.detail = null;
            object.topic = "";
        }
        if (message.detail != null && message.hasOwnProperty("detail"))
            object.detail = $root.DealDetail.toObject(message.detail, options);
        if (message.topic != null && message.hasOwnProperty("topic"))
            object.topic = message.topic;
        return object;
    };

    /**
     * Converts this DealItem to JSON.
     * @function toJSON
     * @memberof DealItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DealItem.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DealItem
     * @function getTypeUrl
     * @memberof DealItem
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DealItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DealItem";
    };

    return DealItem;
})();

$root.DealDetail = (function() {

    /**
     * Properties of a DealDetail.
     * @exports IDealDetail
     * @interface IDealDetail
     * @property {string|null} [price] DealDetail price
     * @property {string|null} [quantity] DealDetail quantity
     * @property {number|null} [isBuyerMaker] DealDetail isBuyerMaker
     * @property {number|Long|null} [timestamp] DealDetail timestamp
     */

    /**
     * Constructs a new DealDetail.
     * @exports DealDetail
     * @classdesc Represents a DealDetail.
     * @implements IDealDetail
     * @constructor
     * @param {IDealDetail=} [properties] Properties to set
     */
    function DealDetail(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DealDetail price.
     * @member {string} price
     * @memberof DealDetail
     * @instance
     */
    DealDetail.prototype.price = "";

    /**
     * DealDetail quantity.
     * @member {string} quantity
     * @memberof DealDetail
     * @instance
     */
    DealDetail.prototype.quantity = "";

    /**
     * DealDetail isBuyerMaker.
     * @member {number} isBuyerMaker
     * @memberof DealDetail
     * @instance
     */
    DealDetail.prototype.isBuyerMaker = 0;

    /**
     * DealDetail timestamp.
     * @member {number|Long} timestamp
     * @memberof DealDetail
     * @instance
     */
    DealDetail.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new DealDetail instance using the specified properties.
     * @function create
     * @memberof DealDetail
     * @static
     * @param {IDealDetail=} [properties] Properties to set
     * @returns {DealDetail} DealDetail instance
     */
    DealDetail.create = function create(properties) {
        return new DealDetail(properties);
    };

    /**
     * Encodes the specified DealDetail message. Does not implicitly {@link DealDetail.verify|verify} messages.
     * @function encode
     * @memberof DealDetail
     * @static
     * @param {IDealDetail} message DealDetail message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DealDetail.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.price != null && Object.hasOwnProperty.call(message, "price"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.price);
        if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.quantity);
        if (message.isBuyerMaker != null && Object.hasOwnProperty.call(message, "isBuyerMaker"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.isBuyerMaker);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.timestamp);
        return writer;
    };

    /**
     * Encodes the specified DealDetail message, length delimited. Does not implicitly {@link DealDetail.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DealDetail
     * @static
     * @param {IDealDetail} message DealDetail message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DealDetail.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DealDetail message from the specified reader or buffer.
     * @function decode
     * @memberof DealDetail
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DealDetail} DealDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DealDetail.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DealDetail();
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
            case 3: {
                    message.isBuyerMaker = reader.int32();
                    break;
                }
            case 4: {
                    message.timestamp = reader.int64();
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
     * Decodes a DealDetail message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DealDetail
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DealDetail} DealDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DealDetail.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DealDetail message.
     * @function verify
     * @memberof DealDetail
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DealDetail.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.price != null && message.hasOwnProperty("price"))
            if (!$util.isString(message.price))
                return "price: string expected";
        if (message.quantity != null && message.hasOwnProperty("quantity"))
            if (!$util.isString(message.quantity))
                return "quantity: string expected";
        if (message.isBuyerMaker != null && message.hasOwnProperty("isBuyerMaker"))
            if (!$util.isInteger(message.isBuyerMaker))
                return "isBuyerMaker: integer expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        return null;
    };

    /**
     * Creates a DealDetail message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DealDetail
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DealDetail} DealDetail
     */
    DealDetail.fromObject = function fromObject(object) {
        if (object instanceof $root.DealDetail)
            return object;
        var message = new $root.DealDetail();
        if (object.price != null)
            message.price = String(object.price);
        if (object.quantity != null)
            message.quantity = String(object.quantity);
        if (object.isBuyerMaker != null)
            message.isBuyerMaker = object.isBuyerMaker | 0;
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a DealDetail message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DealDetail
     * @static
     * @param {DealDetail} message DealDetail
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DealDetail.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.price = "";
            object.quantity = "";
            object.isBuyerMaker = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
        }
        if (message.price != null && message.hasOwnProperty("price"))
            object.price = message.price;
        if (message.quantity != null && message.hasOwnProperty("quantity"))
            object.quantity = message.quantity;
        if (message.isBuyerMaker != null && message.hasOwnProperty("isBuyerMaker"))
            object.isBuyerMaker = message.isBuyerMaker;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
        return object;
    };

    /**
     * Converts this DealDetail to JSON.
     * @function toJSON
     * @memberof DealDetail
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DealDetail.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DealDetail
     * @function getTypeUrl
     * @memberof DealDetail
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DealDetail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DealDetail";
    };

    return DealDetail;
})();
