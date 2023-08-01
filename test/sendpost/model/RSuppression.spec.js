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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/sendpost/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/sendpost/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.sendpost);
  }
}(this, function(expect, sendpost) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new sendpost.RSuppression();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RSuppression', function() {
    it('should create an instance of RSuppression', function() {
      // uncomment below and update the code to test RSuppression
      //var instance = new sendpost.RSuppression();
      //expect(instance).to.be.a(sendpost.RSuppression);
    });

    it('should have the property hardBounce (base name: "hardBounce")', function() {
      // uncomment below and update the code to test the property hardBounce
      //var instance = new sendpost.RSuppression();
      //expect(instance).to.be();
    });

    it('should have the property manual (base name: "manual")', function() {
      // uncomment below and update the code to test the property manual
      //var instance = new sendpost.RSuppression();
      //expect(instance).to.be();
    });

    it('should have the property spamComplaint (base name: "spamComplaint")', function() {
      // uncomment below and update the code to test the property spamComplaint
      //var instance = new sendpost.RSuppression();
      //expect(instance).to.be();
    });

    it('should have the property unsubscribe (base name: "unsubscribe")', function() {
      // uncomment below and update the code to test the property unsubscribe
      //var instance = new sendpost.RSuppression();
      //expect(instance).to.be();
    });

  });

}));