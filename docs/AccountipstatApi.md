# SendPostApi.AccountipstatApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**iPStatRouterGetAllAggregateIPStats**](AccountipstatApi.md#iPStatRouterGetAllAggregateIPStats) | **GET** /account/ip/stat/{ipid}/aggregate | 
[**iPStatRouterGetAllAggregateIPStatsByGroup**](AccountipstatApi.md#iPStatRouterGetAllAggregateIPStatsByGroup) | **GET** /account/ip/stat/{ipid}/aggregate/provider | 
[**iPStatRouterGetAllAggregatedProviderStatsForAIP**](AccountipstatApi.md#iPStatRouterGetAllAggregatedProviderStatsForAIP) | **GET** /account/ip/stat/{ipid}/aggregate/providers | 
[**iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP**](AccountipstatApi.md#iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP) | **GET** /account/ip/stat/{ipid}/aggregate/sid/{sid}/providers | 
[**iPStatRouterGetAllAggregatedSubAccountStatsForAnIP**](AccountipstatApi.md#iPStatRouterGetAllAggregatedSubAccountStatsForAnIP) | **GET** /account/ip/stat/{ipid}/aggregate/subaccounts | 
[**iPStatRouterGetAllIPStats**](AccountipstatApi.md#iPStatRouterGetAllIPStats) | **GET** /account/ip/stat/{ipid} | 
[**iPStatRouterGetAllIPStatsByGroup**](AccountipstatApi.md#iPStatRouterGetAllIPStatsByGroup) | **GET** /account/ip/stat/{ipid}/provider | 


<a name="iPStatRouterGetAllAggregateIPStats"></a>
# **iPStatRouterGetAllAggregateIPStats**
> ModelsStat iPStatRouterGetAllAggregateIPStats(xAccountApiKey, ipid, opts)



Get All Aggregate Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | the IPId you want to get

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
apiInstance.iPStatRouterGetAllAggregateIPStats(xAccountApiKey, ipid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| the IPId you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsStat**](ModelsStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPStatRouterGetAllAggregateIPStatsByGroup"></a>
# **iPStatRouterGetAllAggregateIPStatsByGroup**
> ModelsStat iPStatRouterGetAllAggregateIPStatsByGroup(xAccountApiKey, ipid, provider, opts)



Get All Aggregate Stats by Group

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | the IPId you want to get

var provider = "provider_example"; // String | the group whose stats you want

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
apiInstance.iPStatRouterGetAllAggregateIPStatsByGroup(xAccountApiKey, ipid, provider, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| the IPId you want to get | 
 **provider** | **String**| the group whose stats you want | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**ModelsStat**](ModelsStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPStatRouterGetAllAggregatedProviderStatsForAIP"></a>
# **iPStatRouterGetAllAggregatedProviderStatsForAIP**
> [ModelsPIPStat] iPStatRouterGetAllAggregatedProviderStatsForAIP(xAccountApiKey, ipid, opts)



Get All Aggregated Provider Stats for a IP

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | the IPId you want to get

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
apiInstance.iPStatRouterGetAllAggregatedProviderStatsForAIP(xAccountApiKey, ipid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| the IPId you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsPIPStat]**](ModelsPIPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP"></a>
# **iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP**
> [ModelsPIPStat] iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP(xAccountApiKey, ipid, sid, opts)



Get All Aggregated Provider Stats for a Specific Sub-Account of a IP

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | the IPId you want to get

var sid = 789; // Number | the Sub Account Id you want to get

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
apiInstance.iPStatRouterGetAllAggregatedProviderStatsForASpecificSubAccountOfAIP(xAccountApiKey, ipid, sid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| the IPId you want to get | 
 **sid** | **Number**| the Sub Account Id you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsPIPStat]**](ModelsPIPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPStatRouterGetAllAggregatedSubAccountStatsForAnIP"></a>
# **iPStatRouterGetAllAggregatedSubAccountStatsForAnIP**
> [ModelsSIPStat] iPStatRouterGetAllAggregatedSubAccountStatsForAnIP(xAccountApiKey, ipid, opts)



Get All Aggregated Sub-Account Stats for an IP

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | the IPId you want to get

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
apiInstance.iPStatRouterGetAllAggregatedSubAccountStatsForAnIP(xAccountApiKey, ipid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| the IPId you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsSIPStat]**](ModelsSIPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPStatRouterGetAllIPStats"></a>
# **iPStatRouterGetAllIPStats**
> [ModelsRIPStat] iPStatRouterGetAllIPStats(xAccountApiKey, ipid, opts)



Get All IP Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | the IPId you want to get

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
apiInstance.iPStatRouterGetAllIPStats(xAccountApiKey, ipid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| the IPId you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsRIPStat]**](ModelsRIPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="iPStatRouterGetAllIPStatsByGroup"></a>
# **iPStatRouterGetAllIPStatsByGroup**
> [ModelsRIPStat] iPStatRouterGetAllIPStatsByGroup(ipid, xAccountApiKey, provider, opts)



Get All IP Stats by Group

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountipstatApi();

var ipid = 789; // Number | the IPId you want to get

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var provider = "provider_example"; // String | the provider whose stats you want

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
apiInstance.iPStatRouterGetAllIPStatsByGroup(ipid, xAccountApiKey, provider, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipid** | **Number**| the IPId you want to get | 
 **xAccountApiKey** | **String**| Account API Key | 
 **provider** | **String**| the provider whose stats you want | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsRIPStat]**](ModelsRIPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

