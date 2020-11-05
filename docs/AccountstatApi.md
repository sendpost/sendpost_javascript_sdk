# SendPostApi.AccountstatApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountStatRouterGetAllAccountStats**](AccountstatApi.md#accountStatRouterGetAllAccountStats) | **GET** /account/stat/ | 
[**accountStatRouterGetAllAccountStatsByGroup**](AccountstatApi.md#accountStatRouterGetAllAccountStatsByGroup) | **GET** /account/stat/group | 
[**accountStatRouterGetAllAggregateAccountStats**](AccountstatApi.md#accountStatRouterGetAllAggregateAccountStats) | **GET** /account/stat/aggregate | 
[**accountStatRouterGetAllAggregateAccountStatsByGroup**](AccountstatApi.md#accountStatRouterGetAllAggregateAccountStatsByGroup) | **GET** /account/stat/aggregate/group | 


<a name="accountStatRouterGetAllAccountStats"></a>
# **accountStatRouterGetAllAccountStats**
> [ModelsRStat] accountStatRouterGetAllAccountStats(xAccountApiKey, opts)



Get All Account Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key

var opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatRouterGetAllAccountStats(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Sub-Account API Key | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsRStat]**](ModelsRStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatRouterGetAllAccountStatsByGroup"></a>
# **accountStatRouterGetAllAccountStatsByGroup**
> [ModelsRStat] accountStatRouterGetAllAccountStatsByGroup(xAccountApiKey, group, opts)



Get All Account Stats by Group

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key

var group = "group_example"; // String | the group whose stats you want

var opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatRouterGetAllAccountStatsByGroup(xAccountApiKey, group, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Sub-Account API Key | 
 **group** | **String**| the group whose stats you want | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsRStat]**](ModelsRStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatRouterGetAllAggregateAccountStats"></a>
# **accountStatRouterGetAllAggregateAccountStats**
> ModelsStat accountStatRouterGetAllAggregateAccountStats(xAccountApiKey, opts)



Get All Aggregate Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key

var opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatRouterGetAllAggregateAccountStats(xAccountApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Sub-Account API Key | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsStat**](ModelsStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountStatRouterGetAllAggregateAccountStatsByGroup"></a>
# **accountStatRouterGetAllAggregateAccountStatsByGroup**
> ModelsStat accountStatRouterGetAllAggregateAccountStatsByGroup(xAccountApiKey, group, opts)



Get All Aggregate Stats by Group

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Sub-Account API Key

var group = "group_example"; // String | the group whose stats you want

var opts = { 
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountStatRouterGetAllAggregateAccountStatsByGroup(xAccountApiKey, group, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Sub-Account API Key | 
 **group** | **String**| the group whose stats you want | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsStat**](ModelsStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

