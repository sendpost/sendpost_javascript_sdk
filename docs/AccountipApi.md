# SendPostApi.AccountipApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iPRouterAllocateIP**](AccountipApi.md#iPRouterAllocateIP) | **POST** /account/ip/allocate | 
[**iPRouterCount**](AccountipApi.md#iPRouterCount) | **GET** /account/ip/count | 
[**iPRouterDelete**](AccountipApi.md#iPRouterDelete) | **DELETE** /account/ip/{ipid} | 
[**iPRouterGet**](AccountipApi.md#iPRouterGet) | **GET** /account/ip/{ipid} | 
[**iPRouterGetAll**](AccountipApi.md#iPRouterGetAll) | **GET** /account/ip/ | 
[**iPRouterUpdate**](AccountipApi.md#iPRouterUpdate) | **PUT** /account/ip/{ipid} | 


<a name="iPRouterAllocateIP"></a>
# **iPRouterAllocateIP**
> [ModelsIP] iPRouterAllocateIP(xAccountApiKey)



Allocate IP To Account

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iPRouterAllocateIP(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**[ModelsIP]**](ModelsIP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPRouterCount"></a>
# **iPRouterCount**
> ModelsCountStat iPRouterCount(xAccountApiKey, opts)



Count Total AccountIPs

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var opts = { 
  'search': "search_example" // String | search term
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iPRouterCount(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **search** | **String**| search term | [optional] 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPRouterDelete"></a>
# **iPRouterDelete**
> ModelsDeleteResponse iPRouterDelete(xAccountApiKey, ipid)



Delete IP

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | The IPId you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iPRouterDelete(xAccountApiKey, ipid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| The IPId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPRouterGet"></a>
# **iPRouterGet**
> ModelsIP iPRouterGet(xAccountApiKey, ipid)



Find IP by IPId

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | the IPId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iPRouterGet(xAccountApiKey, ipid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| the IPId you want to get | 

### Return type

[**ModelsIP**](ModelsIP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPRouterGetAll"></a>
# **iPRouterGetAll**
> [ModelsIP] iPRouterGetAll(xAccountApiKey, opts)



Get All IPs

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

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
apiInstance.iPRouterGetAll(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**[ModelsIP]**](ModelsIP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPRouterUpdate"></a>
# **iPRouterUpdate**
> ModelsIP iPRouterUpdate(xAccountApiKey, ipid, body)



Update an IP

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | The IP you want to update

var body = new SendPostApi.ModelsIIP(); // ModelsIIP | The IP Email Provider Settings


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.iPRouterUpdate(xAccountApiKey, ipid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| The IP you want to update | 
 **body** | [**ModelsIIP**](ModelsIIP.md)| The IP Email Provider Settings | 

### Return type

[**ModelsIP**](ModelsIP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

