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
    instance = new sendpost.SuppressionApi();
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

  describe('SuppressionApi', function() {
    describe('count', function() {
      it('should call count successfully', function(done) {
        //uncomment below and update the code to test count
        //instance.count(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSuppressions', function() {
      it('should call createSuppressions successfully', function(done) {
        //uncomment below and update the code to test createSuppressions
        //instance.createSuppressions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSuppression', function() {
      it('should call deleteSuppression successfully', function(done) {
        //uncomment below and update the code to test deleteSuppression
        //instance.deleteSuppression(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSuppressions', function() {
      it('should call getSuppressions successfully', function(done) {
        //uncomment below and update the code to test getSuppressions
        //instance.getSuppressions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
