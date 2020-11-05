# SendPostApi.AccountwebhookApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountWebhookRouterCount**](AccountwebhookApi.md#accountWebhookRouterCount) | **GET** /account/webhook/count | 
[**accountWebhookRouterCreate**](AccountwebhookApi.md#accountWebhookRouterCreate) | **POST** /account/webhook/ | 
[**accountWebhookRouterCreateAccountWebhookInAccountWebhookCache**](AccountwebhookApi.md#accountWebhookRouterCreateAccountWebhookInAccountWebhookCache) | **POST** /account/webhook/cache | 
[**accountWebhookRouterDelete**](AccountwebhookApi.md#accountWebhookRouterDelete) | **DELETE** /account/webhook/{webhookId} | 
[**accountWebhookRouterDeleteAccountWebhookInAccountWebhookCache**](AccountwebhookApi.md#accountWebhookRouterDeleteAccountWebhookInAccountWebhookCache) | **DELETE** /account/webhook/cache | 
[**accountWebhookRouterGet**](AccountwebhookApi.md#accountWebhookRouterGet) | **GET** /account/webhook/{webhookId} | 
[**accountWebhookRouterGetAll**](AccountwebhookApi.md#accountWebhookRouterGetAll) | **GET** /account/webhook/ | 
[**accountWebhookRouterUpdate**](AccountwebhookApi.md#accountWebhookRouterUpdate) | **PUT** /account/webhook/{webhookId} | 


<a name="accountWebhookRouterCount"></a>
# **accountWebhookRouterCount**
> ModelsCountStat accountWebhookRouterCount(xAccountApiKey)



Count Total AccountWebhooks

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountwebhookApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountWebhookRouterCount(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountWebhookRouterCreate"></a>
# **accountWebhookRouterCreate**
> ModelsAccountWebhook accountWebhookRouterCreate(xAccountApiKey, body)



Create AccountWebhook

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountwebhookApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsEWebhook(); // ModelsEWebhook | The AccountWebhook content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountWebhookRouterCreate(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsEWebhook**](ModelsEWebhook.md)| The AccountWebhook content | 

### Return type

[**ModelsAccountWebhook**](ModelsAccountWebhook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountWebhookRouterCreateAccountWebhookInAccountWebhookCache"></a>
# **accountWebhookRouterCreateAccountWebhookInAccountWebhookCache**
> accountWebhookRouterCreateAccountWebhookInAccountWebhookCache(body)



Add Account Webhook To AccountWebhook Cache

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountwebhookApi();

var body = new SendPostApi.ModelsAccountWebhook(); // ModelsAccountWebhook | Add account webhook to cache


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountWebhookRouterCreateAccountWebhookInAccountWebhookCache(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsAccountWebhook**](ModelsAccountWebhook.md)| Add account webhook to cache | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountWebhookRouterDelete"></a>
# **accountWebhookRouterDelete**
> ModelsDeleteResponse accountWebhookRouterDelete(xAccountApiKey, webhookId)



Delete AccountWebhook

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountwebhookApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var webhookId = 789; // Number | The AccountWebhookId you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountWebhookRouterDelete(xAccountApiKey, webhookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **webhookId** | **Number**| The AccountWebhookId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountWebhookRouterDeleteAccountWebhookInAccountWebhookCache"></a>
# **accountWebhookRouterDeleteAccountWebhookInAccountWebhookCache**
> accountWebhookRouterDeleteAccountWebhookInAccountWebhookCache(body)



Delete Account Webhook which is in AccountWebhook Cache

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountwebhookApi();

var body = new SendPostApi.ModelsAccountWebhook(); // ModelsAccountWebhook | AccountWebhook content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountWebhookRouterDeleteAccountWebhookInAccountWebhookCache(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsAccountWebhook**](ModelsAccountWebhook.md)| AccountWebhook content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountWebhookRouterGet"></a>
# **accountWebhookRouterGet**
> ModelsAccountWebhook accountWebhookRouterGet(xAccountApiKey, webhookId)



Find AccountWebhook by AccountWebhookId

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountwebhookApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var webhookId = 789; // Number | the AccountWebhookId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountWebhookRouterGet(xAccountApiKey, webhookId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **webhookId** | **Number**| the AccountWebhookId you want to get | 

### Return type

[**ModelsAccountWebhook**](ModelsAccountWebhook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountWebhookRouterGetAll"></a>
# **accountWebhookRouterGetAll**
> [ModelsAccountWebhook] accountWebhookRouterGetAll(xAccountApiKey, opts)



Get All AccountWebhooks

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountwebhookApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountWebhookRouterGetAll(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search | [optional] 

### Return type

[**[ModelsAccountWebhook]**](ModelsAccountWebhook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountWebhookRouterUpdate"></a>
# **accountWebhookRouterUpdate**
> ModelsAccountWebhook accountWebhookRouterUpdate(xAccountApiKey, webhookId, body)



Update AccountWebhook

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountwebhookApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var webhookId = 789; // Number | The AccountWebhookId you want to update

var body = new SendPostApi.ModelsEWebhook(); // ModelsEWebhook | The body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountWebhookRouterUpdate(xAccountApiKey, webhookId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **webhookId** | **Number**| The AccountWebhookId you want to update | 
 **body** | [**ModelsEWebhook**](ModelsEWebhook.md)| The body | 

### Return type

[**ModelsAccountWebhook**](ModelsAccountWebhook.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

