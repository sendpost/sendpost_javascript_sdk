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
    define(['ApiClient', 'model/ModelsCity', 'model/UaparserDevice', 'model/UaparserOs', 'model/UaparserUserAgent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsCity'), require('./UaparserDevice'), require('./UaparserOs'), require('./UaparserUserAgent'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsEventMetadata = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsCity, root.SendPostApi.UaparserDevice, root.SendPostApi.UaparserOs, root.SendPostApi.UaparserUserAgent);
  }
}(this, function(ApiClient, ModelsCity, UaparserDevice, UaparserOs, UaparserUserAgent) {
  'use strict';

  /**
   * The ModelsEventMetadata model module.
   * @module model/ModelsEventMetadata
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsEventMetadata</code>.
   * @alias module:model/ModelsEventMetadata
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsEventMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsEventMetadata} obj Optional instance to populate.
   * @return {module:model/ModelsEventMetadata} The populated <code>ModelsEventMetadata</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('clickedURL'))
        obj.clickedURL = ApiClient.convertToType(data['clickedURL'], 'String');
      if (data.hasOwnProperty('device'))
        obj.device = UaparserDevice.constructFromObject(data['device']);
      if (data.hasOwnProperty('geo'))
        obj.geo = ModelsCity.constructFromObject(data['geo']);
      if (data.hasOwnProperty('os'))
        obj.os = UaparserOs.constructFromObject(data['os']);
      if (data.hasOwnProperty('smtpCode'))
        obj.smtpCode = ApiClient.convertToType(data['smtpCode'], 'Number');
      if (data.hasOwnProperty('smtpDescription'))
        obj.smtpDescription = ApiClient.convertToType(data['smtpDescription'], 'String');
      if (data.hasOwnProperty('userAgent'))
        obj.userAgent = UaparserUserAgent.constructFromObject(data['userAgent']);
    }
    return obj;
  }

  /**
   * @member {String} clickedURL
   */
  exports.prototype.clickedURL = undefined;

  /**
   * @member {module:model/UaparserDevice} device
   */
  exports.prototype.device = undefined;

  /**
   * @member {module:model/ModelsCity} geo
   */
  exports.prototype.geo = undefined;

  /**
   * @member {module:model/UaparserOs} os
   */
  exports.prototype.os = undefined;

  /**
   * @member {Number} smtpCode
   */
  exports.prototype.smtpCode = undefined;

  /**
   * @member {String} smtpDescription
   */
  exports.prototype.smtpDescription = undefined;

  /**
   * @member {module:model/UaparserUserAgent} userAgent
   */
  exports.prototype.userAgent = undefined;

  return exports;

}));
