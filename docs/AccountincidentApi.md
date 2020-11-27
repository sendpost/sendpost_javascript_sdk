# SendPostApi.AccountincidentApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**incidentRouterAdd**](AccountincidentApi.md#incidentRouterAdd) | **POST** /account/incident/{incidentId}/comment | 
[**incidentRouterCount**](AccountincidentApi.md#incidentRouterCount) | **GET** /account/incident/count | 
[**incidentRouterCreate**](AccountincidentApi.md#incidentRouterCreate) | **POST** /account/incident/ | 
[**incidentRouterGetAll**](AccountincidentApi.md#incidentRouterGetAll) | **GET** /account/incident/ | 
[**incidentRouterGetAllComments**](AccountincidentApi.md#incidentRouterGetAllComments) | **GET** /account/incident/{incidentId}/comment | 
[**incidentRouterGetIncident**](AccountincidentApi.md#incidentRouterGetIncident) | **GET** /account/incident/{incidentId} | 
[**incidentRouterUpdate**](AccountincidentApi.md#incidentRouterUpdate) | **PUT** /account/incident/{incidentId} | 


<a name="incidentRouterAdd"></a>
# **incidentRouterAdd**
> ModelsComment incidentRouterAdd(xAccountApiKey, incidentId, body)



Add comment to Incident

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountincidentApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var incidentId = 789; // Number | the incident id

var body = new SendPostApi.ModelsEComment(); // ModelsEComment | The Comment content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.incidentRouterAdd(xAccountApiKey, incidentId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **incidentId** | **Number**| the incident id | 
 **body** | [**ModelsEComment**](ModelsEComment.md)| The Comment content | 

### Return type

[**ModelsComment**](ModelsComment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="incidentRouterCount"></a>
# **incidentRouterCount**
> ModelsCountStat incidentRouterCount(xAccountApiKey, opts)



Count Total Incidents

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountincidentApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var opts = { 
  'status': 789, // Number | status
  'tag': 789, // Number | status
  'search': "search_example" // String | search term
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.incidentRouterCount(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **status** | **Number**| status | [optional] 
 **tag** | **Number**| status | [optional] 
 **search** | **String**| search term | [optional] 

### Return type

[**ModelsCountStat**](ModelsCountStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="incidentRouterCreate"></a>
# **incidentRouterCreate**
> ModelsIncident incidentRouterCreate(xAccountApiKey, body)



Create Incident

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountincidentApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var body = new SendPostApi.ModelsEIncident(); // ModelsEIncident | The Incident content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.incidentRouterCreate(xAccountApiKey, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **body** | [**ModelsEIncident**](ModelsEIncident.md)| The Incident content | 

### Return type

[**ModelsIncident**](ModelsIncident.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="incidentRouterGetAll"></a>
# **incidentRouterGetAll**
> [ModelsIncident] incidentRouterGetAll(xAccountApiKey, opts)



Get All Incidents

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountincidentApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var opts = { 
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example", // String | search term
  'status': 789, // Number | status
  'tag': 789 // Number | status
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.incidentRouterGetAll(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search term | [optional] 
 **status** | **Number**| status | [optional] 
 **tag** | **Number**| status | [optional] 

### Return type

[**[ModelsIncident]**](ModelsIncident.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="incidentRouterGetAllComments"></a>
# **incidentRouterGetAllComments**
> [ModelsComment] incidentRouterGetAllComments(xAccountApiKey, incidentId)



Get All Comments Associated with Incident

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountincidentApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var incidentId = 789; // Number | the IncidentId you want to get comments for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.incidentRouterGetAllComments(xAccountApiKey, incidentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **incidentId** | **Number**| the IncidentId you want to get comments for | 

### Return type

[**[ModelsComment]**](ModelsComment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="incidentRouterGetIncident"></a>
# **incidentRouterGetIncident**
> ModelsIncident incidentRouterGetIncident(xAccountApiKey, incidentId)



Find Incident by incidentId

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountincidentApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var incidentId = 789; // Number | the IncidentId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.incidentRouterGetIncident(xAccountApiKey, incidentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **incidentId** | **Number**| the IncidentId you want to get | 

### Return type

[**ModelsIncident**](ModelsIncident.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="incidentRouterUpdate"></a>
# **incidentRouterUpdate**
> ModelsIncident incidentRouterUpdate(xAccountApiKey, incidentId, body)



Update Incident

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountincidentApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var incidentId = 789; // Number | the Incident Id you want to update

var body = new SendPostApi.ModelsEIncident(); // ModelsEIncident | The Incident content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.incidentRouterUpdate(xAccountApiKey, incidentId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **incidentId** | **Number**| the Incident Id you want to update | 
 **body** | [**ModelsEIncident**](ModelsEIncident.md)| The Incident content | 

### Return type

[**ModelsIncident**](ModelsIncident.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

