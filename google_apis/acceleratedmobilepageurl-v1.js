module.exports = {"batchPath":"batch","id":"acceleratedmobilepageurl:v1","documentationLink":"https://developers.google.com/amp/cache/","revision":"20171025","title":"Accelerated Mobile Pages (AMP) URL API","ownerName":"Google","discoveryVersion":"v1","version_module":true,"resources":{"ampUrls":{"methods":{"batchGet":{"httpMethod":"POST","parameterOrder":[],"response":{"$ref":"BatchGetAmpUrlsResponse"},"parameters":{},"flatPath":"v1/ampUrls:batchGet","path":"v1/ampUrls:batchGet","id":"acceleratedmobilepageurl.ampUrls.batchGet","description":"Returns AMP URL(s) and equivalent\n[AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).","request":{"$ref":"BatchGetAmpUrlsRequest"}}}}},"parameters":{"key":{"description":"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.","type":"string","location":"query"},"access_token":{"description":"OAuth access token.","type":"string","location":"query"},"quotaUser":{"location":"query","description":"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.","type":"string"},"pp":{"description":"Pretty-print response.","default":"true","type":"boolean","location":"query"},"bearer_token":{"location":"query","description":"OAuth bearer token.","type":"string"},"oauth_token":{"location":"query","description":"OAuth 2.0 token for the current user.","type":"string"},"upload_protocol":{"type":"string","location":"query","description":"Upload protocol for media (e.g. \"raw\", \"multipart\")."},"prettyPrint":{"description":"Returns response with indentations and line breaks.","default":"true","type":"boolean","location":"query"},"fields":{"type":"string","location":"query","description":"Selector specifying which fields to include in a partial response."},"uploadType":{"type":"string","location":"query","description":"Legacy upload protocol for media (e.g. \"media\", \"multipart\")."},"$.xgafv":{"enumDescriptions":["v1 error format","v2 error format"],"location":"query","enum":["1","2"],"description":"V1 error format.","type":"string"},"callback":{"location":"query","description":"JSONP","type":"string"},"alt":{"enumDescriptions":["Responses with Content-Type of application/json","Media download with context-dependent Content-Type","Responses with Content-Type of application/x-protobuf"],"location":"query","description":"Data format for response.","default":"json","enum":["json","media","proto"],"type":"string"}},"schemas":{"BatchGetAmpUrlsResponse":{"description":"Batch AMP URL response.","type":"object","properties":{"urlErrors":{"description":"The errors for requested URLs that have no AMP URL.","items":{"$ref":"AmpUrlError"},"type":"array"},"ampUrls":{"items":{"$ref":"AmpUrl"},"type":"array","description":"For each URL in BatchAmpUrlsRequest, the URL response. The response might\nnot be in the same order as URLs in the batch request.\nIf BatchAmpUrlsRequest contains duplicate URLs, AmpUrl is generated\nonly once."}},"id":"BatchGetAmpUrlsResponse"},"AmpUrl":{"id":"AmpUrl","description":"AMP URL response for a requested URL.","type":"object","properties":{"cdnAmpUrl":{"description":"The [AMP Cache URL](/amp/cache/overview#amp-cache-url-format) pointing to\nthe cached document in the Google AMP Cache.","type":"string"},"ampUrl":{"description":"The AMP URL pointing to the publisher's web server.","type":"string"},"originalUrl":{"type":"string","description":"The original non-AMP URL."}}},"AmpUrlError":{"id":"AmpUrlError","description":"AMP URL Error resource for a requested URL that couldn't be found.","type":"object","properties":{"errorMessage":{"description":"An optional descriptive error message.","type":"string"},"errorCode":{"enum":["ERROR_CODE_UNSPECIFIED","INPUT_URL_NOT_FOUND","NO_AMP_URL","APPLICATION_ERROR","URL_IS_VALID_AMP","URL_IS_INVALID_AMP"],"description":"The error code of an API call.","type":"string","enumDescriptions":["Not specified error.","Indicates the requested URL is not found in the index, possibly because\nit's unable to be found, not able to be accessed by Googlebot, or some\nother error.","Indicates no AMP URL has been found that corresponds to the requested\nURL.","Indicates some kind of application error occurred at the server.\nClient advised to retry.","DEPRECATED: Indicates the requested URL is a valid AMP URL.  This is a\nnon-error state, should not be relied upon as a sign of success or\nfailure.  It will be removed in future versions of the API.","Indicates that an AMP URL has been found that corresponds to the request\nURL, but it is not valid AMP HTML."]},"originalUrl":{"description":"The original non-AMP URL.","type":"string"}}},"BatchGetAmpUrlsRequest":{"description":"AMP URL request for a batch of URLs.","type":"object","properties":{"lookupStrategy":{"enumDescriptions":["FETCH_LIVE_DOC strategy involves live document fetch of URLs not found in\nthe index. Any request URL not found in the index is crawled in realtime\nto validate if there is a corresponding AMP URL. This strategy has higher\ncoverage but with extra latency introduced by realtime crawling. This is\nthe default strategy. Applications using this strategy should set higher\nHTTP timeouts of the API calls.","IN_INDEX_DOC strategy skips fetching live documents of URL(s) not found\nin index. For applications which need low latency use of IN_INDEX_DOC\nstrategy is recommended."],"enum":["FETCH_LIVE_DOC","IN_INDEX_DOC"],"description":"The lookup_strategy being requested.","type":"string"},"urls":{"description":"List of URLs to look up for the paired AMP URLs.\nThe URLs are case-sensitive. Up to 50 URLs per lookup\n(see [Usage Limits](/amp/cache/reference/limits)).","items":{"type":"string"},"type":"array"}},"id":"BatchGetAmpUrlsRequest"}},"protocol":"rest","icons":{"x32":"http://www.google.com/images/icons/product/search-32.gif","x16":"http://www.google.com/images/icons/product/search-16.gif"},"version":"v1","baseUrl":"https://acceleratedmobilepageurl.googleapis.com/","servicePath":"","description":"Retrieves the list of AMP URLs (and equivalent AMP Cache URLs) for a given list of public URL(s).\n","kind":"discovery#restDescription","rootUrl":"https://acceleratedmobilepageurl.googleapis.com/","basePath":"","ownerDomain":"google.com","name":"acceleratedmobilepageurl"};