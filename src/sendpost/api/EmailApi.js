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


import ApiClient from "../ApiClient";
import EmailMessage from '../model/EmailMessage';
import EmailResponse from '../model/EmailResponse';

/**
* Email service.
* @module sendpost/api/EmailApi
* @version 1.0.0
*/
export default class EmailApi {

    /**
    * Constructs a new EmailApi. 
    * @alias module:sendpost/api/EmailApi
    * @class
    * @param {module:sendpost/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sendpost/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Send Email To Contacts
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Object} opts Optional parameters
     * @param {module:sendpost/model/EmailMessage} [emailMessage] Email message
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:sendpost/model/EmailResponse>} and HTTP response
     */
    sendEmailWithHttpInfo(xSubAccountApiKey, opts) {
      opts = opts || {};
      let postBody = opts['emailMessage'];
      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling sendEmail");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [EmailResponse];
      return this.apiClient.callApi(
        '/subaccount/email/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Send Email To Contacts
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Object} opts Optional parameters
     * @param {module:sendpost/model/EmailMessage} opts.emailMessage Email message
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:sendpost/model/EmailResponse>}
     */
    sendEmail(xSubAccountApiKey, opts) {
      return this.sendEmailWithHttpInfo(xSubAccountApiKey, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send Email To Contacts With Template
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Object} opts Optional parameters
     * @param {module:sendpost/model/EmailMessage} [emailMessage] Email message
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:sendpost/model/EmailResponse>} and HTTP response
     */
    sendEmailWithTemplateWithHttpInfo(xSubAccountApiKey, opts) {
      opts = opts || {};
      let postBody = opts['emailMessage'];
      // verify the required parameter 'xSubAccountApiKey' is set
      if (xSubAccountApiKey === undefined || xSubAccountApiKey === null) {
        throw new Error("Missing the required parameter 'xSubAccountApiKey' when calling sendEmailWithTemplate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-SubAccount-ApiKey': xSubAccountApiKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [EmailResponse];
      return this.apiClient.callApi(
        '/subaccount/email/template', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Send Email To Contacts With Template
     * @param {String} xSubAccountApiKey Sub-Account API Key
     * @param {Object} opts Optional parameters
     * @param {module:sendpost/model/EmailMessage} opts.emailMessage Email message
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:sendpost/model/EmailResponse>}
     */
    sendEmailWithTemplate(xSubAccountApiKey, opts) {
      return this.sendEmailWithTemplateWithHttpInfo(xSubAccountApiKey, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
