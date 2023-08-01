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
 * The CountStat model module.
 * @module sendpost/model/CountStat
 * @version 1.1.0
 */
class CountStat {
    /**
     * Constructs a new <code>CountStat</code>.
     * @alias module:sendpost/model/CountStat
     */
    constructor() { 
        
        CountStat.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CountStat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sendpost/model/CountStat} obj Optional instance to populate.
     * @return {module:sendpost/model/CountStat} The populated <code>CountStat</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CountStat();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CountStat</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CountStat</code>.
     */
    static validateJSON(data) {

        return true;
    }

/**
     * @return {Number}
     */
    getCount() {
        return this.count;
    }

    /**
     * @param {Number} count
     */
    setCount(count) {
        this['count'] = count;
    }

}



/**
 * @member {Number} count
 */
CountStat.prototype['count'] = undefined;






export default CountStat;

