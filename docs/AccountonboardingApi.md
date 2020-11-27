# SendPostApi.AccountonboardingApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onboardingRouterGetOnboardingChecklist**](AccountonboardingApi.md#onboardingRouterGetOnboardingChecklist) | **GET** /account/onboarding/checklist | 


<a name="onboardingRouterGetOnboardingChecklist"></a>
# **onboardingRouterGetOnboardingChecklist**
> ModelsOnboardingChecklist onboardingRouterGetOnboardingChecklist(xAccountApiKey)



Gets Onboarding Checklist data for account if not present creates a default entry

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.AccountonboardingApi();

var xAccountApiKey = "xAccountApiKey_example"; // String | Account API Key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.onboardingRouterGetOnboardingChecklist(xAccountApiKey, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountApiKey** | **String**| Account API Key | 

### Return type

[**ModelsOnboardingChecklist**](ModelsOnboardingChecklist.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

