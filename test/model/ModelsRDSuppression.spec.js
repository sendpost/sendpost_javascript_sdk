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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SendPostApi);
  }
}(this, function(expect, SendPostApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ModelsRDSuppression', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsRDSuppression();
      });

      it('should create an instance of ModelsRDSuppression', function() {
        // TODO: update the code to test ModelsRDSuppression
        expect(instance).to.be.a(SendPostApi.ModelsRDSuppression);
      });

      it('should have the property suppressions (base name: "suppressions")', function() {
        // TODO: update the code to test the property suppressions
        expect(instance).to.have.property('suppressions');
        // expect(instance.suppressions).to.be(expectedValueLiteral);
      });

    });
  });

}));