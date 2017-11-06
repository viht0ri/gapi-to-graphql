module.exports = {"ownerDomain":"google.com","name":"firebaseremoteconfig","batchPath":"batch","fullyEncodeReservedExpansion":true,"title":"Firebase Remote Config API","ownerName":"Google","resources":{"projects":{"methods":{"updateRemoteConfig":{"flatPath":"v1/projects/{projectsId}/remoteConfig","path":"v1/{+project}/remoteConfig","id":"firebaseremoteconfig.projects.updateRemoteConfig","request":{"$ref":"RemoteConfig"},"description":"Update a RemoteConfig. We treat this as an always-existing\nresource (when it is not found in our data store, we treat it as version\n0, a template with zero conditions and zero parameters). Hence there are\nno Create or Delete operations. Returns the updated template when\nsuccessful (and the updated eTag as a response header), or an error if\nthings go wrong.\nPossible error messages:\n* VALIDATION_ERROR (HTTP status 400) with additional details if the\ntemplate being passed in can not be validated.\n* AUTHENTICATION_ERROR (HTTP status 401) if the request can not be\nauthenticate (e.g. no access token, or invalid access token).\n* AUTHORIZATION_ERROR (HTTP status 403) if the request can not be\nauthorized (e.g. the user has no access to the specified project id).\n* VERSION_MISMATCH (HTTP status 412) when trying to update when the\nexpected eTag (passed in via the \"If-match\" header) is not specified, or\nis specified but does does not match the current eTag.\n* Internal error (HTTP status 500) for Database problems or other internal\nerrors.","httpMethod":"PUT","parameterOrder":["project"],"response":{"$ref":"RemoteConfig"},"parameters":{"validateOnly":{"description":"Optional. Defaults to <code>false</code> (UpdateRemoteConfig call should\nupdate the backend if there are no validation/interal errors). May be set\nto <code>true</code> to indicate that, should no validation errors occur,\nthe call should return a \"200 OK\" instead of performing the update. Note\nthat other error messages (500 Internal Error, 412 Version Mismatch, etc)\nmay still result after flipping to <code>false</code>, even if getting a\n\"200 OK\" when calling with <code>true</code>.","type":"boolean","location":"query"},"project":{"description":"The GMP project identifier. Required.\nSee note at the beginning of this file regarding project ids.","type":"string","required":true,"pattern":"^projects/[^/]+$","location":"path"}}},"getRemoteConfig":{"parameters":{"project":{"pattern":"^projects/[^/]+$","location":"path","description":"The GMP project identifier. Required.\nSee note at the beginning of this file regarding project ids.","type":"string","required":true}},"flatPath":"v1/projects/{projectsId}/remoteConfig","path":"v1/{+project}/remoteConfig","id":"firebaseremoteconfig.projects.getRemoteConfig","description":"Get the latest version Remote Configuration for a project.\nReturns the RemoteConfig as the payload, and also the eTag as a\nresponse header.","httpMethod":"GET","parameterOrder":["project"],"response":{"$ref":"RemoteConfig"}}}}},"parameters":{"uploadType":{"location":"query","description":"Legacy upload protocol for media (e.g. \"media\", \"multipart\").","type":"string"},"fields":{"type":"string","location":"query","description":"Selector specifying which fields to include in a partial response."},"$.xgafv":{"enumDescriptions":["v1 error format","v2 error format"],"location":"query","enum":["1","2"],"description":"V1 error format.","type":"string"},"callback":{"location":"query","description":"JSONP","type":"string"},"alt":{"description":"Data format for response.","default":"json","enum":["json","media","proto"],"type":"string","enumDescriptions":["Responses with Content-Type of application/json","Media download with context-dependent Content-Type","Responses with Content-Type of application/x-protobuf"],"location":"query"},"access_token":{"location":"query","description":"OAuth access token.","type":"string"},"key":{"description":"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.","type":"string","location":"query"},"quotaUser":{"description":"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.","type":"string","location":"query"},"pp":{"location":"query","description":"Pretty-print response.","default":"true","type":"boolean"},"bearer_token":{"description":"OAuth bearer token.","type":"string","location":"query"},"oauth_token":{"location":"query","description":"OAuth 2.0 token for the current user.","type":"string"},"upload_protocol":{"location":"query","description":"Upload protocol for media (e.g. \"raw\", \"multipart\").","type":"string"},"prettyPrint":{"description":"Returns response with indentations and line breaks.","default":"true","type":"boolean","location":"query"}},"version":"v1","baseUrl":"https://firebaseremoteconfig.googleapis.com/","servicePath":"","kind":"discovery#restDescription","description":"Firebase Remote Config API allows the 3P clients to manage Remote Config conditions and parameters for Firebase applications.","basePath":"","revision":"20171030","documentationLink":"https://firebase.google.com/docs/remote-config/","id":"firebaseremoteconfig:v1","discoveryVersion":"v1","version_module":true,"schemas":{"RemoteConfig":{"description":"*\nThe RemoteConfig consists of a list of conditions (which can be\nthought of as named \"if\" statements) and a map of parameters (parameter key\nto a structure containing an optional default value, as well as a optional\nsubmap of (condition name to value when that condition is true).","type":"object","properties":{"parameters":{"additionalProperties":{"$ref":"RemoteConfigParameter"},"description":"Map of parameter keys to their optional default values and optional submap\nof (condition name : value). Order doesn't affect semantics, and so is\nsorted by the server. The 'key' values of the params must be unique.","type":"object"},"conditions":{"description":"The list of named conditions. The order *does* affect the semantics.\nThe condition_name values of these entries must be unique.\n\nThe resolved value of a config parameter P is determined as follow:\n* Let Y be the set of values from the submap of P that refer to conditions\n  that evaluate to <code>true</code>.\n* If Y is non empty, the value is taken from the specific submap in Y whose\n  condition_name is the earliest in this condition list.\n* Else, if P has a default value option (condition_name is empty) then\n  the value is taken from that option.\n* Else, parameter P has no value and is omitted from the config result.\n\nExample: parameter key \"p1\", default value \"v1\", submap specified as\n{\"c1\": v2, \"c2\": v3} where \"c1\" and \"c2\" are names of conditions in the\ncondition list (where \"c1\" in this example appears before \"c2\").  The\nvalue of p1 would be v2 as long as c1 is true.  Otherwise, if c2 is true,\np1 would evaluate to v3, and if c1 and c2 are both false, p1 would evaluate\nto v1.  If no default value was specified, and c1 and c2 were both false,\nno value for p1 would be generated.","items":{"$ref":"RemoteConfigCondition"},"type":"array"}},"id":"RemoteConfig"},"RemoteConfigParameter":{"properties":{"defaultValue":{"$ref":"RemoteConfigParameterValue","description":"Optional - value to set the parameter to, when none of the named conditions\nevaluate to <code>true</code>."},"description":{"description":"Optional.\nA description for this Parameter. Length must be less than or equal to\n100 characters (or more precisely, unicode code points, which is defined in\njava/com/google/wireless/android/config/ConstsExporter.java).\nA description may contain any Unicode characters","type":"string"},"conditionalValues":{"additionalProperties":{"$ref":"RemoteConfigParameterValue"},"description":"Optional - a map of (condition_name, value). The condition_name of the\nhighest priority (the one listed first in the conditions array) determines\nthe value of this parameter.","type":"object"}},"id":"RemoteConfigParameter","description":"While default_value and conditional_values are each optional, at least one of\nthe two is required - otherwise, the parameter is meaningless (and an\nexception will be thrown by the validation logic).","type":"object"},"RemoteConfigCondition":{"description":"A single RemoteConfig Condition.  A list of these (because order matters) are\npart of a single RemoteConfig template.","type":"object","properties":{"name":{"description":"Required.\nA non empty and unique name of this condition.","type":"string"},"description":{"description":"Optional.\nA description for this Condition. Length must be less than or equal to\n100 characters (or more precisely, unicode code points, which is defined in\njava/com/google/wireless/android/config/ConstsExporter.java).\nA description may contain any Unicode characters","type":"string"},"expression":{"description":"Required.","type":"string"},"tagColor":{"enumDescriptions":["","Blue","Brown","Cyan","aka \"Red Orange\"","Green","Indigo\n*","Lime - Approved deviation from Material color palette","Orange","Pink","Purple","Teal"],"enum":["CONDITION_DISPLAY_COLOR_UNSPECIFIED","BLUE","BROWN","CYAN","DEEP_ORANGE","GREEN","INDIGO","LIME","ORANGE","PINK","PURPLE","TEAL"],"description":"Optional.\nThe display (tag) color of this condition. This serves as part of a tag\n(in the future, we may add tag text as well as tag color, but that is not\nyet implemented in the UI).\nThis value has no affect on the semantics of the delivered config and it\nis ignored by the backend, except for passing it through write/read\nrequests.\nNot having this value or having the \"CONDITION_DISPLAY_COLOR_UNSPECIFIED\"\nvalue (0) have the same meaning:  Let the UI choose any valid color when\ndisplaying the condition.","type":"string"}},"id":"RemoteConfigCondition"},"RemoteConfigParameterValue":{"description":"A RemoteConfigParameter's \"value\" (either the default value, or the value\nassociated with a condition name) is either a string, or the\n\"use_in_app_default\" indicator (which means to leave out the parameter from\nthe returned <key, value> map that is the output of the parameter fetch).\nWe represent the \"use_in_app_default\" as a bool, but (when using the boolean\ninstead of the string) it should always be <code>true</code>.","type":"object","properties":{"useInAppDefault":{"type":"boolean","description":"if true, omit the parameter from the map of fetched parameter values"},"value":{"type":"string","description":"the string to set the parameter to"}},"id":"RemoteConfigParameterValue"}},"icons":{"x32":"http://www.google.com/images/icons/product/search-32.gif","x16":"http://www.google.com/images/icons/product/search-16.gif"},"protocol":"rest","canonicalName":"Firebase Remote Config","rootUrl":"https://firebaseremoteconfig.googleapis.com/"};