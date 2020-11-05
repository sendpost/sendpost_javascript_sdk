# SendPostApi.SmtpApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sMTPRouterReceiveWebhooksRaisedFromSMTPServers**](SmtpApi.md#sMTPRouterReceiveWebhooksRaisedFromSMTPServers) | **POST** /smtp/webhook | 


<a name="sMTPRouterReceiveWebhooksRaisedFromSMTPServers"></a>
# **sMTPRouterReceiveWebhooksRaisedFromSMTPServers**
> sMTPRouterReceiveWebhooksRaisedFromSMTPServers(body)



Receive webhooks raised from SMTP servers

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.SmtpApi();

var body = new SendPostApi.ModelsWMessage(); // ModelsWMessage | The Webhook content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sMTPRouterReceiveWebhooksRaisedFromSMTPServers(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsWMessage**](ModelsWMessage.md)| The Webhook content | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

