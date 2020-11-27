# SendPostApi.SystemApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**systemTemplateRouterGetAllSystemTemplates**](SystemApi.md#systemTemplateRouterGetAllSystemTemplates) | **GET** /system/template | 


<a name="systemTemplateRouterGetAllSystemTemplates"></a>
# **systemTemplateRouterGetAllSystemTemplates**
> [ModelsSystemTemplate] systemTemplateRouterGetAllSystemTemplates(xAccountApiKey)



Get all System Templates

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SystemApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.systemTemplateRouterGetAllSystemTemplates(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**[ModelsSystemTemplate]**](ModelsSystemTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

