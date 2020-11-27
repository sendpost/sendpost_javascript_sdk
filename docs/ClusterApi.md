# SendPostApi.ClusterApi

All URIs are relative to *https://api.sendpost.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clusterRouterDeleteItemFromCacheOfEveryNodeInCluster**](ClusterApi.md#clusterRouterDeleteItemFromCacheOfEveryNodeInCluster) | **DELETE** /cluster/cache | 
[**clusterRouterDeleteItemFromCacheOfSpecificNodeInCluster**](ClusterApi.md#clusterRouterDeleteItemFromCacheOfSpecificNodeInCluster) | **DELETE** /cluster/cache/node | 


<a name="clusterRouterDeleteItemFromCacheOfEveryNodeInCluster"></a>
# **clusterRouterDeleteItemFromCacheOfEveryNodeInCluster**
> clusterRouterDeleteItemFromCacheOfEveryNodeInCluster(xSystemApiKey, opts)



Delete item from cache of every node in cluster

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.ClusterApi();

var xSystemApiKey = "xSystemApiKey_example"; // String | System API Key

var opts = { 
  'name': "name_example", // String | cache name
  'key': "key_example" // String | cache item key to delete
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clusterRouterDeleteItemFromCacheOfEveryNodeInCluster(xSystemApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSystemApiKey** | **String**| System API Key | 
 **name** | **String**| cache name | [optional] 
 **key** | **String**| cache item key to delete | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="clusterRouterDeleteItemFromCacheOfSpecificNodeInCluster"></a>
# **clusterRouterDeleteItemFromCacheOfSpecificNodeInCluster**
> clusterRouterDeleteItemFromCacheOfSpecificNodeInCluster(xSystemApiKey, opts)



Delete item from cache of specific node in cluster

### Example
```javascript
var SendPostApi = require('send_post_api');

var apiInstance = new SendPostApi.ClusterApi();

var xSystemApiKey = "xSystemApiKey_example"; // String | System API Key

var opts = { 
  'name': "name_example", // String | cache name
  'key': "key_example" // String | cache item key to delete
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.clusterRouterDeleteItemFromCacheOfSpecificNodeInCluster(xSystemApiKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSystemApiKey** | **String**| System API Key | 
 **name** | **String**| cache name | [optional] 
 **key** | **String**| cache item key to delete | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

