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
    define(['ApiClient', 'model/ModelsIPType', 'model/ModelsSystemDomain'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelsIPType'), require('./ModelsSystemDomain'));
  } else {
    // Browser globals (root is window)
    if (!root.SendPostApi) {
      root.SendPostApi = {};
    }
    root.SendPostApi.ModelsIP = factory(root.SendPostApi.ApiClient, root.SendPostApi.ModelsIPType, root.SendPostApi.ModelsSystemDomain);
  }
}(this, function(ApiClient, ModelsIPType, ModelsSystemDomain) {
  'use strict';

  /**
   * The ModelsIP model module.
   * @module model/ModelsIP
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ModelsIP</code>.
   * @alias module:model/ModelsIP
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ModelsIP</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelsIP} obj Optional instance to populate.
   * @return {module:model/ModelsIP} The populated <code>ModelsIP</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('aolSettings'))
        obj.aolSettings = ApiClient.convertToType(data['aolSettings'], 'String');
      if (data.hasOwnProperty('autoWarmupEnabled'))
        obj.autoWarmupEnabled = ApiClient.convertToType(data['autoWarmupEnabled'], 'Boolean');
      if (data.hasOwnProperty('autoWarmupStage'))
        obj.autoWarmupStage = ApiClient.convertToType(data['autoWarmupStage'], 'Number');
      if (data.hasOwnProperty('comcastSettings'))
        obj.comcastSettings = ApiClient.convertToType(data['comcastSettings'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('defaultSettings'))
        obj.defaultSettings = ApiClient.convertToType(data['defaultSettings'], 'String');
      if (data.hasOwnProperty('gmailSettings'))
        obj.gmailSettings = ApiClient.convertToType(data['gmailSettings'], 'String');
      if (data.hasOwnProperty('gmxSettings'))
        obj.gmxSettings = ApiClient.convertToType(data['gmxSettings'], 'String');
      if (data.hasOwnProperty('icloudSettings'))
        obj.icloudSettings = ApiClient.convertToType(data['icloudSettings'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('mailruSettings'))
        obj.mailruSettings = ApiClient.convertToType(data['mailruSettings'], 'String');
      if (data.hasOwnProperty('microsoftSettings'))
        obj.microsoftSettings = ApiClient.convertToType(data['microsoftSettings'], 'String');
      if (data.hasOwnProperty('publicIP'))
        obj.publicIP = ApiClient.convertToType(data['publicIP'], 'String');
      if (data.hasOwnProperty('qqSettings'))
        obj.qqSettings = ApiClient.convertToType(data['qqSettings'], 'String');
      if (data.hasOwnProperty('reverseDNSHostname'))
        obj.reverseDNSHostname = ApiClient.convertToType(data['reverseDNSHostname'], 'String');
      if (data.hasOwnProperty('systemDomain'))
        obj.systemDomain = ModelsSystemDomain.constructFromObject(data['systemDomain']);
      if (data.hasOwnProperty('type'))
        obj.type = ModelsIPType.constructFromObject(data['type']);
      if (data.hasOwnProperty('yahooSettings'))
        obj.yahooSettings = ApiClient.convertToType(data['yahooSettings'], 'String');
      if (data.hasOwnProperty('yandexSettings'))
        obj.yandexSettings = ApiClient.convertToType(data['yandexSettings'], 'String');
      if (data.hasOwnProperty('zohoSettings'))
        obj.zohoSettings = ApiClient.convertToType(data['zohoSettings'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} aolSettings
   */
  exports.prototype.aolSettings = undefined;

  /**
   * @member {Boolean} autoWarmupEnabled
   */
  exports.prototype.autoWarmupEnabled = undefined;

  /**
   * @member {Number} autoWarmupStage
   */
  exports.prototype.autoWarmupStage = undefined;

  /**
   * @member {String} comcastSettings
   */
  exports.prototype.comcastSettings = undefined;

  /**
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {String} defaultSettings
   */
  exports.prototype.defaultSettings = undefined;

  /**
   * @member {String} gmailSettings
   */
  exports.prototype.gmailSettings = undefined;

  /**
   * @member {String} gmxSettings
   */
  exports.prototype.gmxSettings = undefined;

  /**
   * @member {String} icloudSettings
   */
  exports.prototype.icloudSettings = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} mailruSettings
   */
  exports.prototype.mailruSettings = undefined;

  /**
   * @member {String} microsoftSettings
   */
  exports.prototype.microsoftSettings = undefined;

  /**
   * @member {String} publicIP
   */
  exports.prototype.publicIP = undefined;

  /**
   * @member {String} qqSettings
   */
  exports.prototype.qqSettings = undefined;

  /**
   * @member {String} reverseDNSHostname
   */
  exports.prototype.reverseDNSHostname = undefined;

  /**
   * @member {module:model/ModelsSystemDomain} systemDomain
   */
  exports.prototype.systemDomain = undefined;

  /**
   * @member {module:model/ModelsIPType} type
   */
  exports.prototype.type = undefined;

  /**
   * @member {String} yahooSettings
   */
  exports.prototype.yahooSettings = undefined;

  /**
   * @member {String} yandexSettings
   */
  exports.prototype.yandexSettings = undefined;

  /**
   * @member {String} zohoSettings
   */
  exports.prototype.zohoSettings = undefined;

  return exports;

}));
