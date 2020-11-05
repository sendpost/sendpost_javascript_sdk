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
    instance = new SendPostApi.SubaccountdomainApi();
  });

  describe('(package)', function() {
    describe('SubaccountdomainApi', function() {
      describe('domainRouterCount', function() {
        it('should call domainRouterCount successfully', function(done) {
          // TODO: uncomment, update parameter values for domainRouterCount call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";

          instance.domainRouterCount(xSubAccountApiKey, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsCountStat);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('domainRouterCreate', function() {
        it('should call domainRouterCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for domainRouterCreate call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var body = new SendPostApi.ModelsEDomain();
          body.name = "";

          instance.domainRouterCreate(xSubAccountApiKey, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsDomain);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.dkim).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.dkim.host).to.be.a('string');
              expect(data.dkim.host).to.be("");
              expect(data.dkim.textValue).to.be.a('string');
              expect(data.dkim.textValue).to.be("");
              expect(data.dkim.type).to.be.a('string');
              expect(data.dkim.type).to.be("");
            expect(data.dkimConfig).to.be.a('string');
            expect(data.dkimConfig).to.be("");
            expect(data.dkimVerified).to.be.a('boolean');
            expect(data.dkimVerified).to.be(false);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.returnPath).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.returnPath.host).to.be.a('string');
              expect(data.returnPath.host).to.be("");
              expect(data.returnPath.textValue).to.be.a('string');
              expect(data.returnPath.textValue).to.be("");
              expect(data.returnPath.type).to.be.a('string');
              expect(data.returnPath.type).to.be("");
            expect(data.returnPathVerified).to.be.a('boolean');
            expect(data.returnPathVerified).to.be(false);
            expect(data.track).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.track.host).to.be.a('string');
              expect(data.track.host).to.be("");
              expect(data.track.textValue).to.be.a('string');
              expect(data.track.textValue).to.be("");
              expect(data.track.type).to.be.a('string');
              expect(data.track.type).to.be("");
            expect(data.trackVerified).to.be.a('boolean');
            expect(data.trackVerified).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('domainRouterDelete', function() {
        it('should call domainRouterDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for domainRouterDelete call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var domainId = 789;

          instance.domainRouterDelete(xSubAccountApiKey, domainId, function(error, data, response) {
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
      describe('domainRouterGet', function() {
        it('should call domainRouterGet successfully', function(done) {
          // TODO: uncomment, update parameter values for domainRouterGet call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var domainId = 789;

          instance.domainRouterGet(xSubAccountApiKey, domainId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsDomain);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.dkim).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.dkim.host).to.be.a('string');
              expect(data.dkim.host).to.be("");
              expect(data.dkim.textValue).to.be.a('string');
              expect(data.dkim.textValue).to.be("");
              expect(data.dkim.type).to.be.a('string');
              expect(data.dkim.type).to.be("");
            expect(data.dkimConfig).to.be.a('string');
            expect(data.dkimConfig).to.be("");
            expect(data.dkimVerified).to.be.a('boolean');
            expect(data.dkimVerified).to.be(false);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.returnPath).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.returnPath.host).to.be.a('string');
              expect(data.returnPath.host).to.be("");
              expect(data.returnPath.textValue).to.be.a('string');
              expect(data.returnPath.textValue).to.be("");
              expect(data.returnPath.type).to.be.a('string');
              expect(data.returnPath.type).to.be("");
            expect(data.returnPathVerified).to.be.a('boolean');
            expect(data.returnPathVerified).to.be(false);
            expect(data.track).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.track.host).to.be.a('string');
              expect(data.track.host).to.be("");
              expect(data.track.textValue).to.be.a('string');
              expect(data.track.textValue).to.be("");
              expect(data.track.type).to.be.a('string');
              expect(data.track.type).to.be("");
            expect(data.trackVerified).to.be.a('boolean');
            expect(data.trackVerified).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('domainRouterGetAll', function() {
        it('should call domainRouterGetAll successfully', function(done) {
          // TODO: uncomment, update parameter values for domainRouterGetAll call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var opts = {};
          opts.offset = 789;
          opts.limit = 789;
          opts.search = "search_example";

          instance.domainRouterGetAll(xSubAccountApiKey, opts, function(error, data, response) {
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
              expect(data).to.be.a(SendPostApi.ModelsDomain);
              expect(data.created).to.be.a('number');
              expect(data.created).to.be("0");
              expect(data.dkim).to.be.a(SendPostApi.ModelsDNSRecord);
                    expect(data.dkim.host).to.be.a('string');
                expect(data.dkim.host).to.be("");
                expect(data.dkim.textValue).to.be.a('string');
                expect(data.dkim.textValue).to.be("");
                expect(data.dkim.type).to.be.a('string');
                expect(data.dkim.type).to.be("");
              expect(data.dkimConfig).to.be.a('string');
              expect(data.dkimConfig).to.be("");
              expect(data.dkimVerified).to.be.a('boolean');
              expect(data.dkimVerified).to.be(false);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.returnPath).to.be.a(SendPostApi.ModelsDNSRecord);
                    expect(data.returnPath.host).to.be.a('string');
                expect(data.returnPath.host).to.be("");
                expect(data.returnPath.textValue).to.be.a('string');
                expect(data.returnPath.textValue).to.be("");
                expect(data.returnPath.type).to.be.a('string');
                expect(data.returnPath.type).to.be("");
              expect(data.returnPathVerified).to.be.a('boolean');
              expect(data.returnPathVerified).to.be(false);
              expect(data.track).to.be.a(SendPostApi.ModelsDNSRecord);
                    expect(data.track.host).to.be.a('string');
                expect(data.track.host).to.be("");
                expect(data.track.textValue).to.be.a('string');
                expect(data.track.textValue).to.be("");
                expect(data.track.type).to.be.a('string');
                expect(data.track.type).to.be("");
              expect(data.trackVerified).to.be.a('boolean');
              expect(data.trackVerified).to.be(false);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('domainRouterUpdate', function() {
        it('should call domainRouterUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for domainRouterUpdate call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var domainId = 789;
          var body = new SendPostApi.ModelsEDomain();
          body.name = "";

          instance.domainRouterUpdate(xSubAccountApiKey, domainId, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsDomain);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.dkim).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.dkim.host).to.be.a('string');
              expect(data.dkim.host).to.be("");
              expect(data.dkim.textValue).to.be.a('string');
              expect(data.dkim.textValue).to.be("");
              expect(data.dkim.type).to.be.a('string');
              expect(data.dkim.type).to.be("");
            expect(data.dkimConfig).to.be.a('string');
            expect(data.dkimConfig).to.be("");
            expect(data.dkimVerified).to.be.a('boolean');
            expect(data.dkimVerified).to.be(false);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.returnPath).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.returnPath.host).to.be.a('string');
              expect(data.returnPath.host).to.be("");
              expect(data.returnPath.textValue).to.be.a('string');
              expect(data.returnPath.textValue).to.be("");
              expect(data.returnPath.type).to.be.a('string');
              expect(data.returnPath.type).to.be("");
            expect(data.returnPathVerified).to.be.a('boolean');
            expect(data.returnPathVerified).to.be(false);
            expect(data.track).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.track.host).to.be.a('string');
              expect(data.track.host).to.be("");
              expect(data.track.textValue).to.be.a('string');
              expect(data.track.textValue).to.be("");
              expect(data.track.type).to.be.a('string');
              expect(data.track.type).to.be("");
            expect(data.trackVerified).to.be.a('boolean');
            expect(data.trackVerified).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('domainRouterVerify', function() {
        it('should call domainRouterVerify successfully', function(done) {
          // TODO: uncomment, update parameter values for domainRouterVerify call and complete the assertions
          /*
          var xSubAccountApiKey = "xSubAccountApiKey_example";
          var domainId = 789;

          instance.domainRouterVerify(xSubAccountApiKey, domainId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SendPostApi.ModelsDomain);
            expect(data.created).to.be.a('number');
            expect(data.created).to.be("0");
            expect(data.dkim).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.dkim.host).to.be.a('string');
              expect(data.dkim.host).to.be("");
              expect(data.dkim.textValue).to.be.a('string');
              expect(data.dkim.textValue).to.be("");
              expect(data.dkim.type).to.be.a('string');
              expect(data.dkim.type).to.be("");
            expect(data.dkimConfig).to.be.a('string');
            expect(data.dkimConfig).to.be("");
            expect(data.dkimVerified).to.be.a('boolean');
            expect(data.dkimVerified).to.be(false);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.returnPath).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.returnPath.host).to.be.a('string');
              expect(data.returnPath.host).to.be("");
              expect(data.returnPath.textValue).to.be.a('string');
              expect(data.returnPath.textValue).to.be("");
              expect(data.returnPath.type).to.be.a('string');
              expect(data.returnPath.type).to.be("");
            expect(data.returnPathVerified).to.be.a('boolean');
            expect(data.returnPathVerified).to.be(false);
            expect(data.track).to.be.a(SendPostApi.ModelsDNSRecord);
                  expect(data.track.host).to.be.a('string');
              expect(data.track.host).to.be("");
              expect(data.track.textValue).to.be.a('string');
              expect(data.track.textValue).to.be("");
              expect(data.track.type).to.be.a('string');
              expect(data.track.type).to.be("");
            expect(data.trackVerified).to.be.a('boolean');
            expect(data.trackVerified).to.be(false);

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