# SendPostApi.EditorApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editorApiRouterGetToken**](EditorApi.md#editorApiRouterGetToken) | **GET** /editor/ | 


<a name="editorApiRouterGetToken"></a>
# **editorApiRouterGetToken**
> ModelsEditorTokenResponse editorApiRouterGetToken(xAccountApiKey)



fetch Bee editor token

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.EditorApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editorApiRouterGetToken(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsEditorTokenResponse**](ModelsEditorTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

