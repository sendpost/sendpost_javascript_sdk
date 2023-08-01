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
    instance = new sendpost.Suppression();
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

  describe('Suppression', function() {
    it('should create an instance of Suppression', function() {
      // uncomment below and update the code to test Suppression
      //var instance = new sendpost.Suppression();
      //expect(instance).to.be.a(sendpost.Suppression);
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new sendpost.Suppression();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new sendpost.Suppression();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new sendpost.Suppression();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instance = new sendpost.Suppression();
      //expect(instance).to.be();
    });

    it('should have the property smtpError (base name: "smtp_error")', function() {
      // uncomment below and update the code to test the property smtpError
      //var instance = new sendpost.Suppression();
      //expect(instance).to.be();
    });

  });

}));
