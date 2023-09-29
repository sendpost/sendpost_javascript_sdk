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
 * The City model module.
 * @module sendpost/model/City
 * @version 1.2.2
 */
class City {
    /**
     * Constructs a new <code>City</code>.
     * @alias module:sendpost/model/City
     */
    constructor() { 
        
        City.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>City</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sendpost/model/City} obj Optional instance to populate.
     * @return {module:sendpost/model/City} The populated <code>City</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new City();

            if (data.hasOwnProperty('cityID')) {
                obj['cityID'] = ApiClient.convertToType(data['cityID'], 'Number');
            }
            if (data.hasOwnProperty('continentCode')) {
                obj['continentCode'] = ApiClient.convertToType(data['continentCode'], 'String');
            }
            if (data.hasOwnProperty('countryCode')) {
                obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
            }
            if (data.hasOwnProperty('postalCode')) {
                obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
            }
            if (data.hasOwnProperty('timeZone')) {
                obj['timeZone'] = ApiClient.convertToType(data['timeZone'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>City</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>City</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['continentCode'] && !(typeof data['continentCode'] === 'string' || data['continentCode'] instanceof String)) {
            throw new Error("Expected the field `continentCode` to be a primitive type in the JSON string but got " + data['continentCode']);
        }
        // ensure the json data is a string
        if (data['countryCode'] && !(typeof data['countryCode'] === 'string' || data['countryCode'] instanceof String)) {
            throw new Error("Expected the field `countryCode` to be a primitive type in the JSON string but got " + data['countryCode']);
        }
        // ensure the json data is a string
        if (data['postalCode'] && !(typeof data['postalCode'] === 'string' || data['postalCode'] instanceof String)) {
            throw new Error("Expected the field `postalCode` to be a primitive type in the JSON string but got " + data['postalCode']);
        }
        // ensure the json data is a string
        if (data['timeZone'] && !(typeof data['timeZone'] === 'string' || data['timeZone'] instanceof String)) {
            throw new Error("Expected the field `timeZone` to be a primitive type in the JSON string but got " + data['timeZone']);
        }

        return true;
    }

/**
     * @return {Number}
     */
    getCityID() {
        return this.cityID;
    }

    /**
     * @param {Number} cityID
     */
    setCityID(cityID) {
        this['cityID'] = cityID;
    }
/**
     * @return {String}
     */
    getContinentCode() {
        return this.continentCode;
    }

    /**
     * @param {String} continentCode
     */
    setContinentCode(continentCode) {
        this['continentCode'] = continentCode;
    }
/**
     * @return {String}
     */
    getCountryCode() {
        return this.countryCode;
    }

    /**
     * @param {String} countryCode
     */
    setCountryCode(countryCode) {
        this['countryCode'] = countryCode;
    }
/**
     * @return {String}
     */
    getPostalCode() {
        return this.postalCode;
    }

    /**
     * @param {String} postalCode
     */
    setPostalCode(postalCode) {
        this['postalCode'] = postalCode;
    }
/**
     * @return {String}
     */
    getTimeZone() {
        return this.timeZone;
    }

    /**
     * @param {String} timeZone
     */
    setTimeZone(timeZone) {
        this['timeZone'] = timeZone;
    }

}



/**
 * @member {Number} cityID
 */
City.prototype['cityID'] = undefined;

/**
 * @member {String} continentCode
 */
City.prototype['continentCode'] = undefined;

/**
 * @member {String} countryCode
 */
City.prototype['countryCode'] = undefined;

/**
 * @member {String} postalCode
 */
City.prototype['postalCode'] = undefined;

/**
 * @member {String} timeZone
 */
City.prototype['timeZone'] = undefined;






export default City;

