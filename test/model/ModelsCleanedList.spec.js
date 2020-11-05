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
    describe('ModelsCleanedList', function() {
      beforeEach(function() {
        instance = new SendPostApi.ModelsCleanedList();
      });

      it('should create an instance of ModelsCleanedList', function() {
        // TODO: update the code to test ModelsCleanedList
        expect(instance).to.be.a(SendPostApi.ModelsCleanedList);
      });

      it('should have the property detailedResponse (base name: "detailedResponse")', function() {
        // TODO: update the code to test the property detailedResponse
        expect(instance).to.have.property('detailedResponse');
        // expect(instance.detailedResponse).to.be(expectedValueLiteral);
      });

      it('should have the property invalid (base name: "invalid")', function() {
        // TODO: update the code to test the property invalid
        expect(instance).to.have.property('invalid');
        // expect(instance.invalid).to.be(expectedValueLiteral);
      });

      it('should have the property valid (base name: "valid")', function() {
        // TODO: update the code to test the property valid
        expect(instance).to.have.property('valid');
        // expect(instance.valid).to.be(expectedValueLiteral);
      });

    });
  });

}));