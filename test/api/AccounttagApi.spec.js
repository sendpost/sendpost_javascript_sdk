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

  beforeEach(function() {
    instance = new SendPostApi.AccounttagApi();
  });

  describe('(package)', function() {
    describe('AccounttagApi', function() {
      describe('tagRouterCreate', function() {
        it('should call tagRouterCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for tagRouterCreate call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var body = new SendPostApi.ModelsTag();
          body.color = "";
          body.created = "0";
          body.description = "";
          body.id = "0";
          body.name = "";
          body.updated = "0";

          instance.tagRouterCreate(xAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsTag);
            expect(data.color).to.be.a('string');
            expect(data.color).to.be("");
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.updated).to.be.a('number');
            expect(data.updated).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tagRouterDelete', function() {
        it('should call tagRouterDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for tagRouterDelete call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";
          var tagid = 789;

          instance.tagRouterDelete(xAccountApiKey, tagid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsDeleteResponse);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tagRouterGetAll', function() {
        it('should call tagRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for tagRouterGetAll call and complete the assertions
          /*
          var xAccountApiKey = "xAccountApiKey_example";

          instance.tagRouterGetAll(xAccountApiKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SendPostApi.ModelsTag);
              expect(data.color).to.be.a('string');
              expect(data.color).to.be("");
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.description).to.be.a('string');
              expect(data.description).to.be("");
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.updated).to.be.a('number');
              expect(data.updated).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
