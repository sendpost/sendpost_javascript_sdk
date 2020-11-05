# SendPostApi.AccountvalidateApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validateRouterValidateEmailBulk**](AccountvalidateApi.md#validateRouterValidateEmailBulk) | **POST** /account/validate/bulk | 
[**validateRouterValidateEmailList**](AccountvalidateApi.md#validateRouterValidateEmailList) | **POST** /account/validate/ | 


<a name="validateRouterValidateEmailBulk"></a>
# **validateRouterValidateEmailBulk**
> ModelsBulkResponse validateRouterValidateEmailBulk(fileinput, xAccountApiKey)



Validate Emails In File Asynchronously

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountvalidateApi();

var fileinput = "/path/to/file.txt"; // File | CSV whose emails need to be validated

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateRouterValidateEmailBulk(fileinput, xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileinput** | **File**| CSV whose emails need to be validated | 
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsBulkResponse**](ModelsBulkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="validateRouterValidateEmailList"></a>
# **validateRouterValidateEmailList**
> ModelsCleanedList validateRouterValidateEmailList(xAccountApiKey, body)



Validate Email List Synchronously

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountvalidateApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsEmailList(); // ModelsEmailList | The email list to be sent for being validated


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateRouterValidateEmailList(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsEmailList**](ModelsEmailList.md)| The email list to be sent for being validated | 

### Return type

[**ModelsCleanedList**](ModelsCleanedList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

