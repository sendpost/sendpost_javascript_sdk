# SendPostApi.AccountlabelApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**labelRouterCount**](AccountlabelApi.md#labelRouterCount) | **GET** /account/label/count | 
[**labelRouterCreate**](AccountlabelApi.md#labelRouterCreate) | **POST** /account/label/ | 
[**labelRouterDelete**](AccountlabelApi.md#labelRouterDelete) | **DELETE** /account/label/{labelId} | 
[**labelRouterGet**](AccountlabelApi.md#labelRouterGet) | **GET** /account/label/{labelId} | 
[**labelRouterGetAll**](AccountlabelApi.md#labelRouterGetAll) | **GET** /account/label/ | 
[**labelRouterUpdate**](AccountlabelApi.md#labelRouterUpdate) | **PUT** /account/label/{labelId} | 


<a name="labelRouterCount"></a>
# **labelRouterCount**
> ModelsCountStat labelRouterCount(xAccountApiKey)



Count Total Labels

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountlabelApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.labelRouterCount(xAccountApiKey, callback);
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

<a name="labelRouterCreate"></a>
# **labelRouterCreate**
> ModelsLabel labelRouterCreate(xAccountApiKey, body)



Create Label

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountlabelApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsLabel(); // ModelsLabel | The Label content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.labelRouterCreate(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsLabel**](ModelsLabel.md)| The Label content | 

### Return type

[**ModelsLabel**](ModelsLabel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="labelRouterDelete"></a>
# **labelRouterDelete**
> ModelsDeleteResponse labelRouterDelete(xAccountApiKey, labelId)



Delete Label

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountlabelApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var labelId = 789; // Number | The LabelId you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.labelRouterDelete(xAccountApiKey, labelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **labelId** | **Number**| The LabelId you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="labelRouterGet"></a>
# **labelRouterGet**
> ModelsLabel labelRouterGet(xAccountApiKey, labelId)



Find Label by LabelId

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountlabelApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var labelId = 789; // Number | the LabelId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.labelRouterGet(xAccountApiKey, labelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **labelId** | **Number**| the LabelId you want to get | 

### Return type

[**ModelsLabel**](ModelsLabel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="labelRouterGetAll"></a>
# **labelRouterGetAll**
> [ModelsLabel] labelRouterGetAll(xAccountApiKey)



Get All Labels

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountlabelApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.labelRouterGetAll(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**[ModelsLabel]**](ModelsLabel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="labelRouterUpdate"></a>
# **labelRouterUpdate**
> ModelsLabel labelRouterUpdate(xAccountApiKey, labelId, body)



Update Label

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountlabelApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var labelId = 789; // Number | The LabelId you want to update

var body = new SendPostApi.ModelsLabel(); // ModelsLabel | The body


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.labelRouterUpdate(xAccountApiKey, labelId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **labelId** | **Number**| The LabelId you want to update | 
 **body** | [**ModelsLabel**](ModelsLabel.md)| The body | 

### Return type

[**ModelsLabel**](ModelsLabel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

