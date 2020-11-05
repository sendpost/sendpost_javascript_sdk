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
    define(['ApiClient', 'model/ModelsDNSRecord'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsDNSRecord'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsDomain = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsDNSRecord);
  }
}(this, function(ApiClient, ModelsDNSRecord) {
  'use strict';

  /**
   * The ModelsDomain model module.
   * @module model/ModelsDomain
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsDomain</code>.
   * @alias module:model/ModelsDomain
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsDomain</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsDomain} obj Optional instance to populate.
   * @return {module:model/ModelsDomain} The populated <code>ModelsDomain</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('dkim'))
        obj.dkim = ModelsDNSRecord.constructFromObject(data['dkim']);
      if (data.hasOwnProperty('dkimConfig'))
        obj.dkimConfig = ApiClient.convertToType(data['dkimConfig'], 'String');
      if (data.hasOwnProperty('dkimVerified'))
        obj.dkimVerified = ApiClient.convertToType(data['dkimVerified'], 'Boolean');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('returnPath'))
        obj.returnPath = ModelsDNSRecord.constructFromObject(data['returnPath']);
      if (data.hasOwnProperty('returnPathVerified'))
        obj.returnPathVerified = ApiClient.convertToType(data['returnPathVerified'], 'Boolean');
      if (data.hasOwnProperty('track'))
        obj.track = ModelsDNSRecord.constructFromObject(data['track']);
      if (data.hasOwnProperty('trackVerified'))
        obj.trackVerified = ApiClient.convertToType(data['trackVerified'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {module:model/ModelsDNSRecord} dkim
   */
  exports.prototype.dkim = undefined;

  /**
   * @member {String} dkimConfig
   */
  exports.prototype.dkimConfig = undefined;

  /**
   * @member {Boolean} dkimVerified
   */
  exports.prototype.dkimVerified = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {module:model/ModelsDNSRecord} returnPath
   */
  exports.prototype.returnPath = undefined;

  /**
   * @member {Boolean} returnPathVerified
   */
  exports.prototype.returnPathVerified = undefined;

  /**
   * @member {module:model/ModelsDNSRecord} track
   */
  exports.prototype.track = undefined;

  /**
   * @member {Boolean} trackVerified
   */
  exports.prototype.trackVerified = undefined;

  return exports;

}));