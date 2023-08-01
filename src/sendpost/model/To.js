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
import CopyTo from './CopyTo';

/**
 * The To model module.
 * @module sendpost/model/To
 * @version 1.1.0
 */
class To {
    /**
     * Constructs a new <code>To</code>.
     * @alias module:sendpost/model/To
     */
    constructor() { 
        
        To.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>To</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sendpost/model/To} obj Optional instance to populate.
     * @return {module:sendpost/model/To} The populated <code>To</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new To();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('cc')) {
                obj['cc'] = ApiClient.convertToType(data['cc'], [CopyTo]);
            }
            if (data.hasOwnProperty('bcc')) {
                obj['bcc'] = ApiClient.convertToType(data['bcc'], [CopyTo]);
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>To</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>To</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        if (data['cc']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['cc'])) {
                throw new Error("Expected the field `cc` to be an array in the JSON data but got " + data['cc']);
            }
            // validate the optional field `cc` (array)
            for (const item of data['cc']) {
                CopyTo.validateJSON(item);
            };
        }
        if (data['bcc']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['bcc'])) {
                throw new Error("Expected the field `bcc` to be an array in the JSON data but got " + data['bcc']);
            }
            // validate the optional field `bcc` (array)
            for (const item of data['bcc']) {
                CopyTo.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * @param {String} name
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * @return {String}
     */
    getEmail() {
        return this.email;
    }

    /**
     * @param {String} email
     */
    setEmail(email) {
        this['email'] = email;
    }
/**
     * @return {Array.<module:sendpost/model/CopyTo>}
     */
    getCc() {
        return this.cc;
    }

    /**
     * @param {Array.<module:sendpost/model/CopyTo>} cc
     */
    setCc(cc) {
        this['cc'] = cc;
    }
/**
     * @return {Array.<module:sendpost/model/CopyTo>}
     */
    getBcc() {
        return this.bcc;
    }

    /**
     * @param {Array.<module:sendpost/model/CopyTo>} bcc
     */
    setBcc(bcc) {
        this['bcc'] = bcc;
    }
/**
     * @return {Object}
     */
    getCustomFields() {
        return this.customFields;
    }

    /**
     * @param {Object} customFields
     */
    setCustomFields(customFields) {
        this['customFields'] = customFields;
    }

}



/**
 * @member {String} name
 */
To.prototype['name'] = undefined;

/**
 * @member {String} email
 */
To.prototype['email'] = undefined;

/**
 * @member {Array.<module:sendpost/model/CopyTo>} cc
 */
To.prototype['cc'] = undefined;

/**
 * @member {Array.<module:sendpost/model/CopyTo>} bcc
 */
To.prototype['bcc'] = undefined;

/**
 * @member {Object} customFields
 */
To.prototype['customFields'] = undefined;






export default To;

