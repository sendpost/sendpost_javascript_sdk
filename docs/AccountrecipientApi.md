# SendPostApi.AccountrecipientApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipientRouterGetAllMessagesForARecipient**](AccountrecipientApi.md#recipientRouterGetAllMessagesForARecipient) | **GET** /account/recipient/{recipient}/messages | 
[**recipientRouterGetAllMessagesForARecipientFromANode**](AccountrecipientApi.md#recipientRouterGetAllMessagesForARecipientFromANode) | **GET** /account/recipient/node/{recipient}/messages | 


<a name="recipientRouterGetAllMessagesForARecipient"></a>
# **recipientRouterGetAllMessagesForARecipient**
> [ModelsQEmailMessage] recipientRouterGetAllMessagesForARecipient(xAccountApiKey, recipient)



Find all messages sent to a specific recipient

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountrecipientApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var recipient = "recipient_example"; // String | email of the recipient


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recipientRouterGetAllMessagesForARecipient(xAccountApiKey, recipient, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **recipient** | **String**| email of the recipient | 

### Return type

[**[ModelsQEmailMessage]**](ModelsQEmailMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="recipientRouterGetAllMessagesForARecipientFromANode"></a>
# **recipientRouterGetAllMessagesForARecipientFromANode**
> [ModelsQEmailMessage] recipientRouterGetAllMessagesForARecipientFromANode(xAccountApiKey, recipient)



Find all message sent to a recipient from a specific node

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountrecipientApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var recipient = "recipient_example"; // String | email of the recipient


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recipientRouterGetAllMessagesForARecipientFromANode(xAccountApiKey, recipient, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **recipient** | **String**| email of the recipient | 

### Return type

[**[ModelsQEmailMessage]**](ModelsQEmailMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

