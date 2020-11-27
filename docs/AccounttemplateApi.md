# SendPostApi.AccounttemplateApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountTemplateRouterCreate**](AccounttemplateApi.md#accountTemplateRouterCreate) | **POST** /account/template/ | 
[**accountTemplateRouterDelete**](AccounttemplateApi.md#accountTemplateRouterDelete) | **DELETE** /account/template/{templateid} | 
[**accountTemplateRouterGet**](AccounttemplateApi.md#accountTemplateRouterGet) | **GET** /account/template/{templateid} | 
[**accountTemplateRouterGetAll**](AccounttemplateApi.md#accountTemplateRouterGetAll) | **GET** /account/template/ | 
[**accountTemplateRouterUpdate**](AccounttemplateApi.md#accountTemplateRouterUpdate) | **PUT** /account/template/{templateid} | 


<a name="accountTemplateRouterCreate"></a>
# **accountTemplateRouterCreate**
> ModelsAccountTemplate accountTemplateRouterCreate(xAccountApiKey, body)



Create a new template

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttemplateApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsAccountTemplate(); // ModelsAccountTemplate | The AccountTemplate content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountTemplateRouterCreate(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsAccountTemplate**](ModelsAccountTemplate.md)| The AccountTemplate content | 

### Return type

[**ModelsAccountTemplate**](ModelsAccountTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountTemplateRouterDelete"></a>
# **accountTemplateRouterDelete**
> ModelsDeleteResponse accountTemplateRouterDelete(xAccountApiKey, templateid)



Delete AccountTemplate

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttemplateApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var templateid = 789; // Number | The id of the template you want to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountTemplateRouterDelete(xAccountApiKey, templateid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **templateid** | **Number**| The id of the template you want to delete | 

### Return type

[**ModelsDeleteResponse**](ModelsDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountTemplateRouterGet"></a>
# **accountTemplateRouterGet**
> ModelsAccountTemplate accountTemplateRouterGet(xAccountApiKey, templateid)



Get single template

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttemplateApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var templateid = 789; // Number | ID of the template required


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountTemplateRouterGet(xAccountApiKey, templateid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **templateid** | **Number**| ID of the template required | 

### Return type

[**ModelsAccountTemplate**](ModelsAccountTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountTemplateRouterGetAll"></a>
# **accountTemplateRouterGetAll**
> [ModelsAccountTemplate] accountTemplateRouterGetAll(xAccountApiKey)



Get all templates

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttemplateApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountTemplateRouterGetAll(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**[ModelsAccountTemplate]**](ModelsAccountTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountTemplateRouterUpdate"></a>
# **accountTemplateRouterUpdate**
> ModelsAccountTemplate accountTemplateRouterUpdate(xAccountApiKey, templateid, body)



update template

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccounttemplateApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var templateid = 789; // Number | The id of the template you want to update

var body = new SendPostApi.ModelsAccountTemplate(); // ModelsAccountTemplate | The template content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountTemplateRouterUpdate(xAccountApiKey, templateid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **templateid** | **Number**| The id of the template you want to update | 
 **body** | [**ModelsAccountTemplate**](ModelsAccountTemplate.md)| The template content | 

### Return type

[**ModelsAccountTemplate**](ModelsAccountTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

