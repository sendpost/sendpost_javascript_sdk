/**
 * SendPost API
 * Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EmailResponse model module.
 * @module sendpost/model/EmailResponse
 * @version 1.2.2
 */
class EmailResponse {
    /**
     * Constructs a new <code>EmailResponse</code>.
     * @alias module:sendpost/model/EmailResponse
     */
    constructor() { 
        
        EmailResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sendpost/model/EmailResponse} obj Optional instance to populate.
     * @return {module:sendpost/model/EmailResponse} The populated <code>EmailResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailResponse();

            if (data.hasOwnProperty('errorCode')) {
                obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('messageId')) {
                obj['messageId'] = ApiClient.convertToType(data['messageId'], 'String');
            }
            if (data.hasOwnProperty('submittedAt')) {
                obj['submittedAt'] = ApiClient.convertToType(data['submittedAt'], 'Number');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['messageId'] && !(typeof data['messageId'] === 'string' || data['messageId'] instanceof String)) {
            throw new Error("Expected the field `messageId` to be a primitive type in the JSON string but got " + data['messageId']);
        }
        // ensure the json data is a string
        if (data['to'] && !(typeof data['to'] === 'string' || data['to'] instanceof String)) {
            throw new Error("Expected the field `to` to be a primitive type in the JSON string but got " + data['to']);
        }

        return true;
    }

/**
     * @return {Number}
     */
    getErrorCode() {
        return this.errorCode;
    }

    /**
     * @param {Number} errorCode
     */
    setErrorCode(errorCode) {
        this['errorCode'] = errorCode;
    }
/**
     * @return {String}
     */
    getMessage() {
        return this.message;
    }

    /**
     * @param {String} message
     */
    setMessage(message) {
        this['message'] = message;
    }
/**
     * @return {String}
     */
    getMessageId() {
        return this.messageId;
    }

    /**
     * @param {String} messageId
     */
    setMessageId(messageId) {
        this['messageId'] = messageId;
    }
/**
     * @return {Number}
     */
    getSubmittedAt() {
        return this.submittedAt;
    }

    /**
     * @param {Number} submittedAt
     */
    setSubmittedAt(submittedAt) {
        this['submittedAt'] = submittedAt;
    }
/**
     * @return {String}
     */
    getTo() {
        return this.to;
    }

    /**
     * @param {String} to
     */
    setTo(to) {
        this['to'] = to;
    }

}



/**
 * @member {Number} errorCode
 */
EmailResponse.prototype['errorCode'] = undefined;

/**
 * @member {String} message
 */
EmailResponse.prototype['message'] = undefined;

/**
 * @member {String} messageId
 */
EmailResponse.prototype['messageId'] = undefined;

/**
 * @member {Number} submittedAt
 */
EmailResponse.prototype['submittedAt'] = undefined;

/**
 * @member {String} to
 */
EmailResponse.prototype['to'] = undefined;






export default EmailResponse;

