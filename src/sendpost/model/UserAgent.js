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
 * The UserAgent model module.
 * @module sendpost/model/UserAgent
 * @version 1.1.0
 */
class UserAgent {
    /**
     * Constructs a new <code>UserAgent</code>.
     * @alias module:sendpost/model/UserAgent
     */
    constructor() { 
        
        UserAgent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserAgent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sendpost/model/UserAgent} obj Optional instance to populate.
     * @return {module:sendpost/model/UserAgent} The populated <code>UserAgent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserAgent();

            if (data.hasOwnProperty('Family')) {
                obj['Family'] = ApiClient.convertToType(data['Family'], 'String');
            }
            if (data.hasOwnProperty('Major')) {
                obj['Major'] = ApiClient.convertToType(data['Major'], 'String');
            }
            if (data.hasOwnProperty('Minor')) {
                obj['Minor'] = ApiClient.convertToType(data['Minor'], 'String');
            }
            if (data.hasOwnProperty('Patch')) {
                obj['Patch'] = ApiClient.convertToType(data['Patch'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserAgent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserAgent</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['Family'] && !(typeof data['Family'] === 'string' || data['Family'] instanceof String)) {
            throw new Error("Expected the field `Family` to be a primitive type in the JSON string but got " + data['Family']);
        }
        // ensure the json data is a string
        if (data['Major'] && !(typeof data['Major'] === 'string' || data['Major'] instanceof String)) {
            throw new Error("Expected the field `Major` to be a primitive type in the JSON string but got " + data['Major']);
        }
        // ensure the json data is a string
        if (data['Minor'] && !(typeof data['Minor'] === 'string' || data['Minor'] instanceof String)) {
            throw new Error("Expected the field `Minor` to be a primitive type in the JSON string but got " + data['Minor']);
        }
        // ensure the json data is a string
        if (data['Patch'] && !(typeof data['Patch'] === 'string' || data['Patch'] instanceof String)) {
            throw new Error("Expected the field `Patch` to be a primitive type in the JSON string but got " + data['Patch']);
        }

        return true;
    }

/**
     * @return {String}
     */
    getFamily() {
        return this.Family;
    }

    /**
     * @param {String} family
     */
    setFamily(family) {
        this['Family'] = family;
    }
/**
     * @return {String}
     */
    getMajor() {
        return this.Major;
    }

    /**
     * @param {String} major
     */
    setMajor(major) {
        this['Major'] = major;
    }
/**
     * @return {String}
     */
    getMinor() {
        return this.Minor;
    }

    /**
     * @param {String} minor
     */
    setMinor(minor) {
        this['Minor'] = minor;
    }
/**
     * @return {String}
     */
    getPatch() {
        return this.Patch;
    }

    /**
     * @param {String} patch
     */
    setPatch(patch) {
        this['Patch'] = patch;
    }

}



/**
 * @member {String} Family
 */
UserAgent.prototype['Family'] = undefined;

/**
 * @member {String} Major
 */
UserAgent.prototype['Major'] = undefined;

/**
 * @member {String} Minor
 */
UserAgent.prototype['Minor'] = undefined;

/**
 * @member {String} Patch
 */
UserAgent.prototype['Patch'] = undefined;






export default UserAgent;

