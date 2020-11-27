# SendPostApi.AccountpaymentApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentRouterCreateCustomerPortal**](AccountpaymentApi.md#paymentRouterCreateCustomerPortal) | **POST** /account/payment/portal | 
[**paymentRouterCreatePaymentSubscription**](AccountpaymentApi.md#paymentRouterCreatePaymentSubscription) | **POST** /account/payment/subscription | 
[**paymentRouterHandlePaymentWebhook**](AccountpaymentApi.md#paymentRouterHandlePaymentWebhook) | **POST** /account/payment/webhook | 


<a name="paymentRouterCreateCustomerPortal"></a>
# **paymentRouterCreateCustomerPortal**
> ModelsBillingPortalSession paymentRouterCreateCustomerPortal(xAccountApiKey)



Create Customer Portal for account

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountpaymentApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentRouterCreateCustomerPortal(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsBillingPortalSession**](ModelsBillingPortalSession.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentRouterCreatePaymentSubscription"></a>
# **paymentRouterCreatePaymentSubscription**
> ModelsPaymentStatus paymentRouterCreatePaymentSubscription(xAccountApiKey, body)



Create Payment Subscription for Stripe

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountpaymentApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsPaymentOptions(); // ModelsPaymentOptions | PaymentOptions content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentRouterCreatePaymentSubscription(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsPaymentOptions**](ModelsPaymentOptions.md)| PaymentOptions content | 

### Return type

[**ModelsPaymentStatus**](ModelsPaymentStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="paymentRouterHandlePaymentWebhook"></a>
# **paymentRouterHandlePaymentWebhook**
> paymentRouterHandlePaymentWebhook()



Handle Payment Related Webhooks

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountpaymentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.paymentRouterHandlePaymentWebhook(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

