/*
 * SendPost API
 * SendPost API to send transactional emails reliably
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@sendx.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsMember = factory(root.SendPostApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModelsMember model module.
   * @module model/ModelsMember
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsMember</code>.
   * @alias module:model/ModelsMember
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsMember</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsMember} obj Optional instance to populate.
   * @return {module:model/ModelsMember} The populated <code>ModelsMember</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Email'))
        obj.email = ApiClient.convertToType(data['Email'], 'String');
      if (data.hasOwnProperty('Id'))
        obj.id = ApiClient.convertToType(data['Id'], 'Number');
      if (data.hasOwnProperty('IsForbidden'))
        obj.isForbidden = ApiClient.convertToType(data['IsForbidden'], 'Boolean');
      if (data.hasOwnProperty('IsVerified'))
        obj.isVerified = ApiClient.convertToType(data['IsVerified'], 'Boolean');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
    }
    return obj;
  }

  /**
   * @member {String} email
   */
  exports.prototype.email = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Boolean} isForbidden
   */
  exports.prototype.isForbidden = undefined;

  /**
   * @member {Boolean} isVerified
   */
  exports.prototype.isVerified = undefined;

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  return exports;

}));