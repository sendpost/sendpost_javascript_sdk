# SendPostApi.AccountsmtpstatApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sMTPStatRouterGetAllAggregateIPProviderSMTPStats**](AccountsmtpstatApi.md#sMTPStatRouterGetAllAggregateIPProviderSMTPStats) | **GET** /account/smtp/stat/ip/{ipid}/provider/{pname}/aggregate | 
[**sMTPStatRouterGetAllAggregateIPSMTPStats**](AccountsmtpstatApi.md#sMTPStatRouterGetAllAggregateIPSMTPStats) | **GET** /account/smtp/stat/ip/{ipid}/aggregate | 
[**sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount**](AccountsmtpstatApi.md#sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount) | **GET** /account/smtp/stat/ip/{ipid}/subaccount/{sid}/aggregate | 
[**sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats**](AccountsmtpstatApi.md#sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats) | **GET** /account/smtp/stat/subaccount/{sid}/provider/{pname}/aggregate | 
[**sMTPStatRouterGetAllAggregateSubAccountSMTPStats**](AccountsmtpstatApi.md#sMTPStatRouterGetAllAggregateSubAccountSMTPStats) | **GET** /account/smtp/stat/subaccount/{sid}/aggregate | 
[**sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP**](AccountsmtpstatApi.md#sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP) | **GET** /account/smtp/stat/subaccount/{sid}/ip/{ipid}/aggregate | 


<a name="sMTPStatRouterGetAllAggregateIPProviderSMTPStats"></a>
# **sMTPStatRouterGetAllAggregateIPProviderSMTPStats**
> [ModelsSMTPStat] sMTPStatRouterGetAllAggregateIPProviderSMTPStats(xAccountApiKey, ipid, pname, opts)



Get All Aggregate IP Provider SMTP Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsmtpstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | the IP ID you want to get

var pname = "pname_example"; // String | the provider name

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
apiInstance.sMTPStatRouterGetAllAggregateIPProviderSMTPStats(xAccountApiKey, ipid, pname, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| the IP ID you want to get | 
 **pname** | **String**| the provider name | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsSMTPStat]**](ModelsSMTPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sMTPStatRouterGetAllAggregateIPSMTPStats"></a>
# **sMTPStatRouterGetAllAggregateIPSMTPStats**
> [ModelsSMTPStat] sMTPStatRouterGetAllAggregateIPSMTPStats(xAccountApiKey, ipid, opts)



Get All Aggregate IP SMTP Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsmtpstatApi();

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
apiInstance.sMTPStatRouterGetAllAggregateIPSMTPStats(xAccountApiKey, ipid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| the IPId you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsSMTPStat]**](ModelsSMTPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount"></a>
# **sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount**
> [ModelsSMTPStat] sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount(xAccountApiKey, ipid, sid, opts)



Get All Aggregate IP SMTP Stats For SubAccount

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsmtpstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var ipid = 789; // Number | the IP ID you want to get

var sid = 789; // Number | the SubAccount ID you want to get

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
apiInstance.sMTPStatRouterGetAllAggregateIPSMTPStatsForSubAccount(xAccountApiKey, ipid, sid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **ipid** | **Number**| the IP ID you want to get | 
 **sid** | **Number**| the SubAccount ID you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsSMTPStat]**](ModelsSMTPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats"></a>
# **sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats**
> [ModelsSMTPStat] sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats(xAccountApiKey, sid, pname, opts)



Get All Aggregate SubAccount Provider SMTP Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsmtpstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var sid = 789; // Number | the SubAccount ID you want to get

var pname = "pname_example"; // String | the provider name

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
apiInstance.sMTPStatRouterGetAllAggregateSubAccountProviderSMTPStats(xAccountApiKey, sid, pname, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **sid** | **Number**| the SubAccount ID you want to get | 
 **pname** | **String**| the provider name | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsSMTPStat]**](ModelsSMTPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sMTPStatRouterGetAllAggregateSubAccountSMTPStats"></a>
# **sMTPStatRouterGetAllAggregateSubAccountSMTPStats**
> [ModelsSMTPStat] sMTPStatRouterGetAllAggregateSubAccountSMTPStats(xAccountApiKey, sid, opts)



Get All Aggregate SubAccount SMTP Stats

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsmtpstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var sid = 789; // Number | the Sub-Account ID you want to get

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
apiInstance.sMTPStatRouterGetAllAggregateSubAccountSMTPStats(xAccountApiKey, sid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **sid** | **Number**| the Sub-Account ID you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsSMTPStat]**](ModelsSMTPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP"></a>
# **sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP**
> [ModelsSMTPStat] sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP(xAccountApiKey, sid, ipid, opts)



Get All Aggregate SubAccount SMTP Stats For IP

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountsmtpstatApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key

var sid = 789; // Number | the Sub-Account ID you want to get

var ipid = 789; // Number | the IP  ID you want to get

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
apiInstance.sMTPStatRouterGetAllAggregateSubAccountSMTPStatsForIP(xAccountApiKey, sid, ipid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 
 **sid** | **Number**| the Sub-Account ID you want to get | 
 **ipid** | **Number**| the IP  ID you want to get | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[ModelsSMTPStat]**](ModelsSMTPStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

