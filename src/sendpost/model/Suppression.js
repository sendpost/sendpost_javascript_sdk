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
 * The Suppression model module.
 * @module sendpost/model/Suppression
 * @version 1.1.2
 */
class Suppression {
    /**
     * Constructs a new <code>Suppression</code>.
     * @alias module:sendpost/model/Suppression
     */
    constructor() { 
        
        Suppression.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Suppression</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sendpost/model/Suppression} obj Optional instance to populate.
     * @return {module:sendpost/model/Suppression} The populated <code>Suppression</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Suppression();

            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'Number');
            }
            if (data.hasOwnProperty('smtp_error')) {
                obj['smtp_error'] = ApiClient.convertToType(data['smtp_error'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Suppression</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Suppression</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['smtp_error'] && !(typeof data['smtp_error'] === 'string' || data['smtp_error'] instanceof String)) {
            throw new Error("Expected the field `smtp_error` to be a primitive type in the JSON string but got " + data['smtp_error']);
        }

        return true;
    }

/**
     * @return {Number}
     */
    getCreated() {
        return this.created;
    }

    /**
     * @param {Number} created
     */
    setCreated(created) {
        this['created'] = created;
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
     * @return {Number}
     */
    getId() {
        return this.id;
    }

    /**
     * @param {Number} id
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * @return {Number}
     */
    getReason() {
        return this.reason;
    }

    /**
     * @param {Number} reason
     */
    setReason(reason) {
        this['reason'] = reason;
    }
/**
     * @return {String}
     */
    getSmtpError() {
        return this.smtp_error;
    }

    /**
     * @param {String} smtpError
     */
    setSmtpError(smtpError) {
        this['smtp_error'] = smtpError;
    }

}



/**
 * @member {Number} created
 */
Suppression.prototype['created'] = undefined;

/**
 * @member {String} email
 */
Suppression.prototype['email'] = undefined;

/**
 * @member {Number} id
 */
Suppression.prototype['id'] = undefined;

/**
 * @member {Number} reason
 */
Suppression.prototype['reason'] = undefined;

/**
 * @member {String} smtp_error
 */
Suppression.prototype['smtp_error'] = undefined;






export default Suppression;

