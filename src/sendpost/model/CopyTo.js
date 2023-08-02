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
 * The CopyTo model module.
 * @module sendpost/model/CopyTo
 * @version 1.1.1
 */
class CopyTo {
    /**
     * Constructs a new <code>CopyTo</code>.
     * @alias module:sendpost/model/CopyTo
     */
    constructor() { 
        
        CopyTo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CopyTo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sendpost/model/CopyTo} obj Optional instance to populate.
     * @return {module:sendpost/model/CopyTo} The populated <code>CopyTo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CopyTo();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('customFields')) {
                obj['customFields'] = ApiClient.convertToType(data['customFields'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CopyTo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CopyTo</code>.
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
CopyTo.prototype['name'] = undefined;

/**
 * @member {String} email
 */
CopyTo.prototype['email'] = undefined;

/**
 * @member {Object} customFields
 */
CopyTo.prototype['customFields'] = undefined;






export default CopyTo;

