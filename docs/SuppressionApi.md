# sendpost.SuppressionApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**count**](SuppressionApi.md#count) | **GET** /subaccount/suppression/count | 
[**createSuppressions**](SuppressionApi.md#createSuppressions) | **POST** /subaccount/suppression/ | 
[**deleteSuppression**](SuppressionApi.md#deleteSuppression) | **DELETE** /subaccount/suppression/ | 
[**getSuppressions**](SuppressionApi.md#getSuppressions) | **GET** /subaccount/suppression/ | 



## count

> CountStat count(xSubAccountApiKey, opts)



Count Total Suppressions

### Example

```javascript
import sendpost from 'sendpost_javascript_sdk';

let apiInstance = new sendpost.SuppressionApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let opts = {
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.count(xSubAccountApiKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**CountStat**](CountStat.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createSuppressions

> Suppression createSuppressions(xSubAccountApiKey, opts)



Add Email Addresses To Suppression List

### Example

```javascript
import sendpost from 'sendpost_javascript_sdk';

let apiInstance = new sendpost.SuppressionApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let opts = {
  'rSuppression': new sendpost.RSuppression() // RSuppression | Suppression content
};
apiInstance.createSuppressions(xSubAccountApiKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **rSuppression** | [**RSuppression**](RSuppression.md)| Suppression content | [optional] 

### Return type

[**Suppression**](Suppression.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSuppression

> Suppression deleteSuppression(xSubAccountApiKey, opts)



Delete specific emails which are in suppression list

### Example

```javascript
import sendpost from 'sendpost_javascript_sdk';

let apiInstance = new sendpost.SuppressionApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let opts = {
  'rDSuppression': new sendpost.RDSuppression() // RDSuppression | Suppression content
};
apiInstance.deleteSuppression(xSubAccountApiKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **rDSuppression** | [**RDSuppression**](RDSuppression.md)| Suppression content | [optional] 

### Return type

[**Suppression**](Suppression.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSuppressions

> [Suppression] getSuppressions(xSubAccountApiKey, opts)



Get all suppressions

### Example

```javascript
import sendpost from 'sendpost_javascript_sdk';

let apiInstance = new sendpost.SuppressionApi();
let xSubAccountApiKey = "xSubAccountApiKey_example"; // String | Sub-Account API Key
let opts = {
  'offset': 789, // Number | offset
  'limit': 789, // Number | limit
  'search': "search_example", // String | search
  'from': "from_example", // String | from date
  'to': "to_example" // String | to date
};
apiInstance.getSuppressions(xSubAccountApiKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSubAccountApiKey** | **String**| Sub-Account API Key | 
 **offset** | **Number**| offset | [optional] 
 **limit** | **Number**| limit | [optional] 
 **search** | **String**| search | [optional] 
 **from** | **String**| from date | [optional] 
 **to** | **String**| to date | [optional] 

### Return type

[**[Suppression]**](Suppression.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

