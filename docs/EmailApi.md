# sendpost.EmailApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendEmail**](EmailApi.md#sendEmail) | **POST** /subaccount/email/ | 
[**sendEmailWithTemplate**](EmailApi.md#sendEmailWithTemplate) | **POST** /subaccount/email/template | 



## sendEmail

> [EmailResponse] sendEmail(xSubAccountApiKey, opts)



Send Email To Contacts

### Example

```javascript
import sendpost from 'send_post_api';

let apiInstance = new sendpost.EmailApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let opts = {
  'emailMessage': new sendpost.EmailMessage() // EmailMessage | Email message
};
apiInstance.sendEmail(xSubAccountApiKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **emailMessage** | [**EmailMessage**](EmailMessage.md)| Email message | [optional] 

### Return type

[**[EmailResponse]**](EmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendEmailWithTemplate

> [EmailResponse] sendEmailWithTemplate(xSubAccountApiKey, opts)



Send Email To Contacts With Template

### Example

```javascript
import sendpost from 'send_post_api';

let apiInstance = new sendpost.EmailApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let opts = {
  'emailMessage': new sendpost.EmailMessage() // EmailMessage | Email message
};
apiInstance.sendEmailWithTemplate(xSubAccountApiKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **emailMessage** | [**EmailMessage**](EmailMessage.md)| Email message | [optional] 

### Return type

[**[EmailResponse]**](EmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

