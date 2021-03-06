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
    define(['ApiClient', 'model/ModelsEIP'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsEIP'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsEIPPool = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsEIP);
  }
}(this, function(ApiClient, ModelsEIP) {
  'use strict';

  /**
   * The ModelsEIPPool model module.
   * @module model/ModelsEIPPool
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsEIPPool</code>.
   * @alias module:model/ModelsEIPPool
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsEIPPool</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsEIPPool} obj Optional instance to populate.
   * @return {module:model/ModelsEIPPool} The populated <code>ModelsEIPPool</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ips'))
        obj.ips = ApiClient.convertToType(data['ips'], [ModelsEIP]);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('routingMapping'))
        obj.routingMapping = ApiClient.convertToType(data['routingMapping'], Object);
      if (data.hasOwnProperty('routingStrategy'))
        obj.routingStrategy = ApiClient.convertToType(data['routingStrategy'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ModelsEIP>} ips
   */
  exports.prototype.ips = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Object} routingMapping
   */
  exports.prototype.routingMapping = undefined;

  /**
   * @member {Number} routingStrategy
   */
  exports.prototype.routingStrategy = undefined;

  return exports;

}));
