# SendPostApi.SubaccountdomainApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainRouterCount**](SubaccountdomainApi.md#domainRouterCount) | **GET** /subaccount/domain/count | 
[**domainRouterCreate**](SubaccountdomainApi.md#domainRouterCreate) | **POST** /subaccount/domain/ | 
[**domainRouterDelete**](SubaccountdomainApi.md#domainRouterDelete) | **DELETE** /subaccount/domain/{domainId} | 
[**domainRouterGet**](SubaccountdomainApi.md#domainRouterGet) | **GET** /subaccount/domain/{domainId} | 
[**domainRouterGetAll**](SubaccountdomainApi.md#domainRouterGetAll) | **GET** /subaccount/domain/ | 
[**domainRouterUpdate**](SubaccountdomainApi.md#domainRouterUpdate) | **PUT** /subaccount/domain/{domainId} | 
[**domainRouterVerify**](SubaccountdomainApi.md#domainRouterVerify) | **POST** /subaccount/domain/{domainId}/verify | 


<a name="domainRouterCount"></a>
# **domainRouterCount**
> ModelsCountStat domainRouterCount(xSubAccountApiKey)



Count Total Domains

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountdomainApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainRouterCount(xSubAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainRouterCreate"></a>
# **domainRouterCreate**
> ModelsDomain domainRouterCreate(xSubAccountApiKey, body)



Create Domain

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountdomainApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var body = new SendPostApi.ModelsEDomain(); // ModelsEDomain | The Domain content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainRouterCreate(xSubAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **body** | [**ModelsEDomain**](ModelsEDomain.md)| The Domain content | 

### Return type

[**ModelsDomain**](ModelsDomain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainRouterDelete"></a>
# **domainRouterDelete**
> ModelsDeleteResponse domainRouterDelete(xSubAccountApiKey, domainId)



Delete Domain

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountdomainApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var domainId = 789; // Number | The DomainId you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainRouterDelete(xSubAccountApiKey, domainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **domainId** | **Number**| The DomainId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainRouterGet"></a>
# **domainRouterGet**
> ModelsDomain domainRouterGet(xSubAccountApiKey, domainId)



Find Domain by DomainId

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountdomainApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var domainId = 789; // Number | the DomainId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainRouterGet(xSubAccountApiKey, domainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **domainId** | **Number**| the DomainId you want to get | 

### Return type

[**ModelsDomain**](ModelsDomain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainRouterGetAll"></a>
# **domainRouterGetAll**
> [ModelsDomain] domainRouterGetAll(xSubAccountApiKey, opts)



Get All Domains

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountdomainApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example" // String | search term
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainRouterGetAll(xSubAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**[ModelsDomain]**](ModelsDomain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainRouterUpdate"></a>
# **domainRouterUpdate**
> ModelsDomain domainRouterUpdate(xSubAccountApiKey, domainId, body)



Update Domain

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountdomainApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var domainId = 789; // Number | The DomainId you want to update

var body = new SendPostApi.ModelsEDomain(); // ModelsEDomain | The body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainRouterUpdate(xSubAccountApiKey, domainId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **domainId** | **Number**| The DomainId you want to update | 
 **body** | [**ModelsEDomain**](ModelsEDomain.md)| The body | 

### Return type

[**ModelsDomain**](ModelsDomain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainRouterVerify"></a>
# **domainRouterVerify**
> ModelsDomain domainRouterVerify(xSubAccountApiKey, domainId)



Verify Domain By Domain Id

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SubaccountdomainApi();

var xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key

var domainId = 789; // Number | the DomainId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainRouterVerify(xSubAccountApiKey, domainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **domainId** | **Number**| the DomainId you want to get | 

### Return type

[**ModelsDomain**](ModelsDomain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

