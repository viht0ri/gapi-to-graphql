module.exports = {"resources":{"projects":{"methods":{"patchTraces":{"description":"Sends new traces to Stackdriver Trace or updates existing traces. If the ID\nof a trace that you send matches that of an existing trace, any fields\nin the existing trace and its spans are overwritten by the provided values,\nand any new fields provided are merged with the existing trace data. If the\nID does not match, a new trace is created.","request":{"$ref":"Traces"},"response":{"$ref":"Empty"},"parameterOrder":["projectId"],"httpMethod":"PATCH","parameters":{"projectId":{"description":"ID of the Cloud project where the trace data is stored.","type":"string","required":true,"location":"path"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/trace.append"],"flatPath":"v1/projects/{projectId}/traces","id":"cloudtrace.projects.patchTraces","path":"v1/projects/{projectId}/traces"}},"resources":{"traces":{"methods":{"get":{"httpMethod":"GET","response":{"$ref":"Trace"},"parameterOrder":["projectId","traceId"],"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/trace.readonly"],"parameters":{"projectId":{"description":"ID of the Cloud project where the trace data is stored.","type":"string","required":true,"location":"path"},"traceId":{"location":"path","description":"ID of the trace to return.","type":"string","required":true}},"flatPath":"v1/projects/{projectId}/traces/{traceId}","path":"v1/projects/{projectId}/traces/{traceId}","id":"cloudtrace.projects.traces.get","description":"Gets a single trace by its ID."},"list":{"id":"cloudtrace.projects.traces.list","path":"v1/projects/{projectId}/traces","description":"Returns of a list of traces that match the specified filter conditions.","response":{"$ref":"ListTracesResponse"},"parameterOrder":["projectId"],"httpMethod":"GET","scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/trace.readonly"],"parameters":{"startTime":{"format":"google-datetime","description":"Start of the time interval (inclusive) during which the trace data was\ncollected from the application.","type":"string","location":"query"},"pageToken":{"description":"Token identifying the page of results to return. If provided, use the\nvalue of the `next_page_token` field from a previous request. Optional.","type":"string","location":"query"},"pageSize":{"format":"int32","description":"Maximum number of traces to return. If not specified or <= 0, the\nimplementation selects a reasonable value.  The implementation may\nreturn fewer traces than the requested page size. Optional.","type":"integer","location":"query"},"view":{"description":"Type of data returned for traces in the list. Optional. Default is\n`MINIMAL`.","type":"string","location":"query","enum":["VIEW_TYPE_UNSPECIFIED","MINIMAL","ROOTSPAN","COMPLETE"]},"orderBy":{"description":"Field used to sort the returned traces. Optional.\nCan be one of the following:\n\n*   `trace_id`\n*   `name` (`name` field of root span in the trace)\n*   `duration` (difference between `end_time` and `start_time` fields of\n     the root span)\n*   `start` (`start_time` field of the root span)\n\nDescending order can be specified by appending `desc` to the sort field\n(for example, `name desc`).\n\nOnly one sort field is permitted.","type":"string","location":"query"},"projectId":{"description":"ID of the Cloud project where the trace data is stored.","type":"string","required":true,"location":"path"},"filter":{"description":"An optional filter against labels for the request.\n\nBy default, searches use prefix matching. To specify exact match, prepend\na plus symbol (`+`) to the search term.\nMultiple terms are ANDed. Syntax:\n\n*   `root:NAME_PREFIX` or `NAME_PREFIX`: Return traces where any root\n    span starts with `NAME_PREFIX`.\n*   `+root:NAME` or `+NAME`: Return traces where any root span's name is\n    exactly `NAME`.\n*   `span:NAME_PREFIX`: Return traces where any span starts with\n    `NAME_PREFIX`.\n*   `+span:NAME`: Return traces where any span's name is exactly\n    `NAME`.\n*   `latency:DURATION`: Return traces whose overall latency is\n    greater or equal to than `DURATION`. Accepted units are nanoseconds\n    (`ns`), milliseconds (`ms`), and seconds (`s`). Default is `ms`. For\n    example, `latency:24ms` returns traces whose overall latency\n    is greater than or equal to 24 milliseconds.\n*   `label:LABEL_KEY`: Return all traces containing the specified\n    label key (exact match, case-sensitive) regardless of the key:value\n    pair's value (including empty values).\n*   `LABEL_KEY:VALUE_PREFIX`: Return all traces containing the specified\n    label key (exact match, case-sensitive) whose value starts with\n    `VALUE_PREFIX`. Both a key and a value must be specified.\n*   `+LABEL_KEY:VALUE`: Return all traces containing a key:value pair\n    exactly matching the specified text. Both a key and a value must be\n    specified.\n*   `method:VALUE`: Equivalent to `/http/method:VALUE`.\n*   `url:VALUE`: Equivalent to `/http/url:VALUE`.","type":"string","location":"query"},"endTime":{"location":"query","format":"google-datetime","description":"End of the time interval (inclusive) during which the trace data was\ncollected from the application.","type":"string"}},"flatPath":"v1/projects/{projectId}/traces"}}}}}},"parameters":{"upload_protocol":{"location":"query","description":"Upload protocol for media (e.g. \"raw\", \"multipart\").","type":"string"},"prettyPrint":{"description":"Returns response with indentations and line breaks.","default":"true","type":"boolean","location":"query"},"uploadType":{"description":"Legacy upload protocol for media (e.g. \"media\", \"multipart\").","type":"string","location":"query"},"fields":{"description":"Selector specifying which fields to include in a partial response.","type":"string","location":"query"},"$.xgafv":{"enumDescriptions":["v1 error format","v2 error format"],"location":"query","enum":["1","2"],"description":"V1 error format.","type":"string"},"callback":{"description":"JSONP","type":"string","location":"query"},"alt":{"enumDescriptions":["Responses with Content-Type of application/json","Media download with context-dependent Content-Type","Responses with Content-Type of application/x-protobuf"],"location":"query","description":"Data format for response.","default":"json","enum":["json","media","proto"],"type":"string"},"access_token":{"description":"OAuth access token.","type":"string","location":"query"},"key":{"description":"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.","type":"string","location":"query"},"quotaUser":{"location":"query","description":"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.","type":"string"},"pp":{"description":"Pretty-print response.","default":"true","type":"boolean","location":"query"},"bearer_token":{"location":"query","description":"OAuth bearer token.","type":"string"},"oauth_token":{"location":"query","description":"OAuth 2.0 token for the current user.","type":"string"}},"version":"v1","baseUrl":"https://cloudtrace.googleapis.com/","servicePath":"","description":"Send and retrieve trace data from Stackdriver Trace. Data is generated and available by default for all App Engine applications. Data from other applications can be written to Stackdriver Trace for display, reporting, and analysis.\n","kind":"discovery#restDescription","basePath":"","id":"cloudtrace:v1","documentationLink":"https://cloud.google.com/trace","revision":"20171026","discoveryVersion":"v1","version_module":true,"schemas":{"Traces":{"description":"List of new or updated traces.","type":"object","properties":{"traces":{"description":"List of traces.","items":{"$ref":"Trace"},"type":"array"}},"id":"Traces"},"TraceSpan":{"properties":{"spanId":{"format":"uint64","description":"Identifier for the span. Must be a 64-bit integer other than 0 and\nunique within a trace.","type":"string"},"parentSpanId":{"format":"uint64","description":"ID of the parent span, if any. Optional.","type":"string"},"endTime":{"format":"google-datetime","description":"End time of the span in nanoseconds from the UNIX epoch.","type":"string"},"startTime":{"format":"google-datetime","description":"Start time of the span in nanoseconds from the UNIX epoch.","type":"string"},"kind":{"enumDescriptions":["Unspecified.","Indicates that the span covers server-side handling of an RPC or other\nremote network request.","Indicates that the span covers the client-side wrapper around an RPC or\nother remote request."],"enum":["SPAN_KIND_UNSPECIFIED","RPC_SERVER","RPC_CLIENT"],"description":"Distinguishes between spans generated in a particular context. For example,\ntwo spans with the same name may be distinguished using `RPC_CLIENT`\nand `RPC_SERVER` to identify queueing latency associated with the span.","type":"string"},"labels":{"additionalProperties":{"type":"string"},"description":"Collection of labels associated with the span. Label keys must be less than\n128 bytes. Label values must be less than 16 kilobytes (10MB for\n`/stacktrace` values).\n\nSome predefined label keys exist, or you may create your own. When creating\nyour own, we recommend the following formats:\n\n* `/category/product/key` for agents of well-known products (e.g.\n  `/db/mongodb/read_size`).\n* `short_host/path/key` for domain-specific keys (e.g.\n  `foo.com/myproduct/bar`)\n\nPredefined labels include:\n\n*   `/agent`\n*   `/component`\n*   `/error/message`\n*   `/error/name`\n*   `/http/client_city`\n*   `/http/client_country`\n*   `/http/client_protocol`\n*   `/http/client_region`\n*   `/http/host`\n*   `/http/method`\n*   `/http/redirected_url`\n*   `/http/request/size`\n*   `/http/response/size`\n*   `/http/status_code`\n*   `/http/url`\n*   `/http/user_agent`\n*   `/pid`\n*   `/stacktrace`\n*   `/tid`","type":"object"},"name":{"description":"Name of the span. Must be less than 128 bytes. The span name is sanitized\nand displayed in the Stackdriver Trace tool in the\n{% dynamic print site_values.console_name %}.\nThe name may be a method name or some other per-call site name.\nFor the same executable and the same call point, a best practice is\nto use a consistent name, which makes it easier to correlate\ncross-trace spans.","type":"string"}},"id":"TraceSpan","description":"A span represents a single timed event within a trace. Spans can be nested\nand form a trace tree. Often, a trace contains a root span that describes the\nend-to-end latency of an operation and, optionally, one or more subspans for\nits suboperations. Spans do not need to be contiguous. There may be gaps\nbetween spans in a trace.","type":"object"},"Empty":{"description":"A generic empty message that you can re-use to avoid defining duplicated\nempty messages in your APIs. A typical example is to use it as the request\nor the response type of an API method. For instance:\n\n    service Foo {\n      rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);\n    }\n\nThe JSON representation for `Empty` is empty JSON object `{}`.","type":"object","properties":{},"id":"Empty"},"ListTracesResponse":{"description":"The response message for the `ListTraces` method.","type":"object","properties":{"nextPageToken":{"description":"If defined, indicates that there are more traces that match the request\nand that this value should be passed to the next request to continue\nretrieving additional traces.","type":"string"},"traces":{"description":"List of trace records returned.","items":{"$ref":"Trace"},"type":"array"}},"id":"ListTracesResponse"},"Trace":{"properties":{"traceId":{"description":"Globally unique identifier for the trace. This identifier is a 128-bit\nnumeric value formatted as a 32-byte hex string.","type":"string"},"spans":{"description":"Collection of spans in the trace.","items":{"$ref":"TraceSpan"},"type":"array"},"projectId":{"description":"Project ID of the Cloud project where the trace data is stored.","type":"string"}},"id":"Trace","description":"A trace describes how long it takes for an application to perform an\noperation. It consists of a set of spans, each of which represent a single\ntimed event within the operation.","type":"object"}},"protocol":"rest","icons":{"x16":"http://www.google.com/images/icons/product/search-16.gif","x32":"http://www.google.com/images/icons/product/search-32.gif"},"canonicalName":"Cloud Trace","auth":{"oauth2":{"scopes":{"https://www.googleapis.com/auth/trace.append":{"description":"Write Trace data for a project or application"},"https://www.googleapis.com/auth/cloud-platform":{"description":"View and manage your data across Google Cloud Platform services"},"https://www.googleapis.com/auth/trace.readonly":{"description":"Read Trace data for a project or application"}}}},"rootUrl":"https://cloudtrace.googleapis.com/","ownerDomain":"google.com","name":"cloudtrace","batchPath":"batch","fullyEncodeReservedExpansion":true,"title":"Stackdriver Trace API","ownerName":"Google"};