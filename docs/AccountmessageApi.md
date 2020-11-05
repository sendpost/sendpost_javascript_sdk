# SendPostApi.AccountmessageApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**messageRouterGet**](AccountmessageApi.md#messageRouterGet) | **GET** /account/message/{messageId} | 
[**messageRouterGetAllEventsForAMessageId**](AccountmessageApi.md#messageRouterGetAllEventsForAMessageId) | **GET** /account/message/{messageId}/events | 
[**messageRouterGetAllEventsForAMessageIdFromANode**](AccountmessageApi.md#messageRouterGetAllEventsForAMessageIdFromANode) | **GET** /account/message/node/{messageId}/events | 
[**messageRouterGetMessageFromNode**](AccountmessageApi.md#messageRouterGetMessageFromNode) | **GET** /account/message/node/{messageId} | 


<a name="messageRouterGet"></a>
# **messageRouterGet**
> ModelsQEmailMessage messageRouterGet(xAccountApiKey, messageId)



Find Message By Id

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountmessageApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key

var messageId = "messageId_example"; // String | the messageId that you want to retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.messageRouterGet(xAccountApiKey, messageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Sub-Account API Key | 
 **messageId** | **String**| the messageId that you want to retrieve | 

### Return type

[**ModelsQEmailMessage**](ModelsQEmailMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="messageRouterGetAllEventsForAMessageId"></a>
# **messageRouterGetAllEventsForAMessageId**
> [ModelsQEvent] messageRouterGetAllEventsForAMessageId(xAccountApiKey, messageId)



Find all events associated with a message id

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountmessageApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var messageId = "messageId_example"; // String | the messageId that you want to retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.messageRouterGetAllEventsForAMessageId(xAccountApiKey, messageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **messageId** | **String**| the messageId that you want to retrieve | 

### Return type

[**[ModelsQEvent]**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="messageRouterGetAllEventsForAMessageIdFromANode"></a>
# **messageRouterGetAllEventsForAMessageIdFromANode**
> [ModelsQEvent] messageRouterGetAllEventsForAMessageIdFromANode(xAccountApiKey, messageId)



Find all message events associated with a message id from a specific node

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountmessageApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var messageId = "messageId_example"; // String | the messageId that you want to retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.messageRouterGetAllEventsForAMessageIdFromANode(xAccountApiKey, messageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **messageId** | **String**| the messageId that you want to retrieve | 

### Return type

[**[ModelsQEvent]**](ModelsQEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="messageRouterGetMessageFromNode"></a>
# **messageRouterGetMessageFromNode**
> ModelsQEmailMessage messageRouterGetMessageFromNode(xAccountApiKey, messageId)



Find Message from node by specific Id

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountmessageApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var messageId = "messageId_example"; // String | the messageId that you want to retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.messageRouterGetMessageFromNode(xAccountApiKey, messageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **messageId** | **String**| the messageId that you want to retrieve | 

### Return type

[**ModelsQEmailMessage**](ModelsQEmailMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

