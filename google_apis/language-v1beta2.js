module.exports = {"name":"language","batchPath":"batch","title":"Google Cloud Natural Language API","ownerName":"Google","resources":{"documents":{"methods":{"analyzeSyntax":{"response":{"$ref":"AnalyzeSyntaxResponse"},"parameterOrder":[],"httpMethod":"POST","scopes":["https://www.googleapis.com/auth/cloud-language","https://www.googleapis.com/auth/cloud-platform"],"parameters":{},"flatPath":"v1beta2/documents:analyzeSyntax","id":"language.documents.analyzeSyntax","path":"v1beta2/documents:analyzeSyntax","request":{"$ref":"AnalyzeSyntaxRequest"},"description":"Analyzes the syntax of the text and provides sentence boundaries and\ntokenization along with part of speech tags, dependency trees, and other\nproperties."},"annotateText":{"description":"A convenience method that provides all syntax, sentiment, entity, and\nclassification features in one call.","request":{"$ref":"AnnotateTextRequest"},"response":{"$ref":"AnnotateTextResponse"},"parameterOrder":[],"httpMethod":"POST","parameters":{},"scopes":["https://www.googleapis.com/auth/cloud-language","https://www.googleapis.com/auth/cloud-platform"],"flatPath":"v1beta2/documents:annotateText","id":"language.documents.annotateText","path":"v1beta2/documents:annotateText"},"classifyText":{"scopes":["https://www.googleapis.com/auth/cloud-language","https://www.googleapis.com/auth/cloud-platform"],"parameters":{},"flatPath":"v1beta2/documents:classifyText","path":"v1beta2/documents:classifyText","id":"language.documents.classifyText","request":{"$ref":"ClassifyTextRequest"},"description":"Classifies a document into categories.","httpMethod":"POST","parameterOrder":[],"response":{"$ref":"ClassifyTextResponse"}},"analyzeSentiment":{"response":{"$ref":"AnalyzeSentimentResponse"},"parameterOrder":[],"httpMethod":"POST","parameters":{},"scopes":["https://www.googleapis.com/auth/cloud-language","https://www.googleapis.com/auth/cloud-platform"],"flatPath":"v1beta2/documents:analyzeSentiment","id":"language.documents.analyzeSentiment","path":"v1beta2/documents:analyzeSentiment","description":"Analyzes the sentiment of the provided text.","request":{"$ref":"AnalyzeSentimentRequest"}},"analyzeEntitySentiment":{"flatPath":"v1beta2/documents:analyzeEntitySentiment","id":"language.documents.analyzeEntitySentiment","path":"v1beta2/documents:analyzeEntitySentiment","request":{"$ref":"AnalyzeEntitySentimentRequest"},"description":"Finds entities, similar to AnalyzeEntities in the text and analyzes\nsentiment associated with each entity and its mentions.","response":{"$ref":"AnalyzeEntitySentimentResponse"},"parameterOrder":[],"httpMethod":"POST","scopes":["https://www.googleapis.com/auth/cloud-language","https://www.googleapis.com/auth/cloud-platform"],"parameters":{}},"analyzeEntities":{"description":"Finds named entities (currently proper names and common nouns) in the text\nalong with entity types, salience, mentions for each entity, and\nother properties.","request":{"$ref":"AnalyzeEntitiesRequest"},"response":{"$ref":"AnalyzeEntitiesResponse"},"parameterOrder":[],"httpMethod":"POST","parameters":{},"scopes":["https://www.googleapis.com/auth/cloud-language","https://www.googleapis.com/auth/cloud-platform"],"flatPath":"v1beta2/documents:analyzeEntities","id":"language.documents.analyzeEntities","path":"v1beta2/documents:analyzeEntities"}}}},"parameters":{"upload_protocol":{"description":"Upload protocol for media (e.g. \"raw\", \"multipart\").","type":"string","location":"query"},"prettyPrint":{"location":"query","description":"Returns response with indentations and line breaks.","default":"true","type":"boolean"},"fields":{"description":"Selector specifying which fields to include in a partial response.","type":"string","location":"query"},"uploadType":{"location":"query","description":"Legacy upload protocol for media (e.g. \"media\", \"multipart\").","type":"string"},"$.xgafv":{"description":"V1 error format.","type":"string","enumDescriptions":["v1 error format","v2 error format"],"location":"query","enum":["1","2"]},"callback":{"type":"string","location":"query","description":"JSONP"},"alt":{"enumDescriptions":["Responses with Content-Type of application/json","Media download with context-dependent Content-Type","Responses with Content-Type of application/x-protobuf"],"location":"query","description":"Data format for response.","default":"json","enum":["json","media","proto"],"type":"string"},"access_token":{"location":"query","description":"OAuth access token.","type":"string"},"key":{"location":"query","description":"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.","type":"string"},"quotaUser":{"type":"string","location":"query","description":"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."},"pp":{"location":"query","description":"Pretty-print response.","default":"true","type":"boolean"},"bearer_token":{"description":"OAuth bearer token.","type":"string","location":"query"},"oauth_token":{"location":"query","description":"OAuth 2.0 token for the current user.","type":"string"}},"version":"v1beta2","baseUrl":"https://language.googleapis.com/","servicePath":"","description":"Provides natural language understanding technologies to developers. Examples include sentiment analysis, entity recognition, entity sentiment analysis, and text annotations.","kind":"discovery#restDescription","basePath":"","id":"language:v1beta2","documentationLink":"https://cloud.google.com/natural-language/","revision":"20171031","discoveryVersion":"v1","version_module":true,"schemas":{"AnalyzeSyntaxRequest":{"description":"The syntax analysis request message.","type":"object","properties":{"document":{"$ref":"Document","description":"Input document."},"encodingType":{"enumDescriptions":["If `EncodingType` is not specified, encoding-dependent information (such as\n`begin_offset`) will be set at `-1`.","Encoding-dependent information (such as `begin_offset`) is calculated based\non the UTF-8 encoding of the input. C++ and Go are examples of languages\nthat use this encoding natively.","Encoding-dependent information (such as `begin_offset`) is calculated based\non the UTF-16 encoding of the input. Java and Javascript are examples of\nlanguages that use this encoding natively.","Encoding-dependent information (such as `begin_offset`) is calculated based\non the UTF-32 encoding of the input. Python is an example of a language\nthat uses this encoding natively."],"enum":["NONE","UTF8","UTF16","UTF32"],"description":"The encoding type used by the API to calculate offsets.","type":"string"}},"id":"AnalyzeSyntaxRequest"},"AnalyzeEntitiesResponse":{"description":"The entity analysis response message.","type":"object","properties":{"language":{"description":"The language of the text, which will be the same as the language specified\nin the request or, if not specified, the automatically-detected language.\nSee Document.language field for more details.","type":"string"},"entities":{"description":"The recognized entities in the input document.","items":{"$ref":"Entity"},"type":"array"}},"id":"AnalyzeEntitiesResponse"},"Entity":{"description":"Represents a phrase in the text that is a known entity, such as\na person, an organization, or location. The API associates information, such\nas salience and mentions, with entities.","type":"object","properties":{"name":{"description":"The representative name for the entity.","type":"string"},"type":{"enumDescriptions":["Unknown","Person","Location","Organization","Event","Work of art","Consumer goods","Other types"],"enum":["UNKNOWN","PERSON","LOCATION","ORGANIZATION","EVENT","WORK_OF_ART","CONSUMER_GOOD","OTHER"],"description":"The entity type.","type":"string"},"metadata":{"type":"object","additionalProperties":{"type":"string"},"description":"Metadata associated with the entity.\n\nCurrently, Wikipedia URLs and Knowledge Graph MIDs are provided, if\navailable. The associated keys are \"wikipedia_url\" and \"mid\", respectively."},"salience":{"format":"float","description":"The salience score associated with the entity in the [0, 1.0] range.\n\nThe salience score for an entity provides information about the\nimportance or centrality of that entity to the entire document text.\nScores closer to 0 are less salient, while scores closer to 1.0 are highly\nsalient.","type":"number"},"sentiment":{"$ref":"Sentiment","description":"For calls to AnalyzeEntitySentiment or if\nAnnotateTextRequest.Features.extract_entity_sentiment is set to\ntrue, this field will contain the aggregate sentiment expressed for this\nentity in the provided document."},"mentions":{"description":"The mentions of this entity in the input document. The API currently\nsupports proper noun mentions.","items":{"$ref":"EntityMention"},"type":"array"}},"id":"Entity"},"AnnotateTextRequest":{"id":"AnnotateTextRequest","description":"The request message for the text annotation API, which can perform multiple\nanalysis types (sentiment, entities, and syntax) in one call.","type":"object","properties":{"encodingType":{"enumDescriptions":["If `EncodingType` is not specified, encoding-dependent information (such as\n`begin_offset`) will be set at `-1`.","Encoding-dependent information (such as `begin_offset`) is calculated based\non the UTF-8 encoding of the input. C++ and Go are examples of languages\nthat use this encoding natively.","Encoding-dependent information (such as `begin_offset`) is calculated based\non the UTF-16 encoding of the input. Java and Javascript are examples of\nlanguages that use this encoding natively.","Encoding-dependent information (such as `begin_offset`) is calculated based\non the UTF-32 encoding of the input. Python is an example of a language\nthat uses this encoding natively."],"enum":["NONE","UTF8","UTF16","UTF32"],"description":"The encoding type used by the API to calculate offsets.","type":"string"},"document":{"$ref":"Document","description":"Input document."},"features":{"description":"The enabled features.","$ref":"Features"}}},"AnalyzeSentimentRequest":{"properties":{"encodingType":{"enumDescriptions":["If `EncodingType` is not specified, encoding-dependent information (such as\n`begin_offset`) will be set at `-1`.","Encoding-dependent information (such as `begin_offset`) is calculated based\non the UTF-8 encoding of the input. C++ and Go are examples of languages\nthat use this encoding natively.","Encoding-dependent information (such as `begin_offset`) is calculated based\non the UTF-16 encoding of the input. Java and Javascript are examples of\nlanguages that use this encoding natively.","Encoding-dependent information (such as `begin_offset`) is calculated based\non the UTF-32 encoding of the input. Python is an example of a language\nthat uses this encoding natively."],"enum":["NONE","UTF8","UTF16","UTF32"],"description":"The encoding type used by the API to calculate sentence offsets for the\nsentence sentiment.","type":"string"},"document":{"description":"Input document.","$ref":"Document"}},"id":"AnalyzeSentimentRequest","description":"The sentiment analysis request message.","type":"object"},"Status":{"id":"Status","description":"The `Status` type defines a logical error model that is suitable for different\nprogramming environments, including REST APIs and RPC APIs. It is used by\n[gRPC](https://github.com/grpc). The error model is designed to be:\n\n- Simple to use and understand for most users\n- Flexible enough to meet unexpected needs\n\n# Overview\n\nThe `Status` message contains three pieces of data: error code, error message,\nand error details. The error code should be an enum value of\ngoogle.rpc.Code, but it may accept additional error codes if needed.  The\nerror message should be a developer-facing English message that helps\ndevelopers *understand* and *resolve* the error. If a localized user-facing\nerror message is needed, put the localized message in the error details or\nlocalize it in the client. The optional error details may contain arbitrary\ninformation about the error. There is a predefined set of error detail types\nin the package `google.rpc` that can be used for common error conditions.\n\n# Language mapping\n\nThe `Status` message is the logical representation of the error model, but it\nis not necessarily the actual wire format. When the `Status` message is\nexposed in different client libraries and different wire protocols, it can be\nmapped differently. For example, it will likely be mapped to some exceptions\nin Java, but more likely mapped to some error codes in C.\n\n# Other uses\n\nThe error model and the `Status` message can be used in a variety of\nenvironments, either with or without APIs, to provide a\nconsistent developer experience across different environments.\n\nExample uses of this error model include:\n\n- Partial errors. If a service needs to return partial errors to the client,\n    it may embed the `Status` in the normal response to indicate the partial\n    errors.\n\n- Workflow errors. A typical workflow has multiple steps. Each step may\n    have a `Status` message for error reporting.\n\n- Batch operations. If a client uses batch request and batch response, the\n    `Status` message should be used directly inside batch response, one for\n    each error sub-response.\n\n- Asynchronous operations. If an API call embeds asynchronous operation\n    results in its response, the status of those operations should be\n    represented directly using the `Status` message.\n\n- Logging. If some API errors are stored in logs, the message `Status` could\n    be used directly after any stripping needed for security/privacy reasons.","type":"object","properties":{"details":{"description":"A list of messages that carry the error details.  There is a common set of\nmessage types for APIs to use.","items":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"type":"object"},"type":"array"},"code":{"format":"int32","description":"The status code, which should be an enum value of google.rpc.Code.","type":"integer"},"message":{"description":"A developer-facing error message, which should be in English. Any\nuser-facing error message should be localized and sent in the\ngoogle.rpc.Status.details field, or localized by the client.","type":"string"}}},"Features":{"description":"All available features for sentiment, syntax, and semantic analysis.\nSetting each one to true will enable that specific analysis for the input.","type":"object","properties":{"extractEntities":{"description":"Extract entities.","type":"boolean"},"classifyText":{"description":"Classify the full document into categories. If this is true,\nthe API will use the default model which classifies into a\n[predefined taxonomy](/natural-language/docs/categories).","type":"boolean"},"extractEntitySentiment":{"description":"Extract entities and their associated sentiment.","type":"boolean"},"extractDocumentSentiment":{"type":"boolean","description":"Extract document-level sentiment."},"extractSyntax":{"description":"Extract syntax information.","type":"boolean"}},"id":"Features"},"Document":{"type":"object","properties":{"language":{"description":"The language of the document (if not specified, the language is\nautomatically detected). Both ISO and BCP-47 language codes are\naccepted.<br>\n[Language Support](/natural-language/docs/languages)\nlists currently supported languages for each API method.\nIf the language (either specified by the caller or automatically detected)\nis not supported by the called API method, an `INVALID_ARGUMENT` error\nis returned.","type":"string"},"content":{"description":"The content of the input in string format.","type":"string"},"type":{"enumDescriptions":["The content type is not specified.","Plain text","HTML"],"enum":["TYPE_UNSPECIFIED","PLAIN_TEXT","HTML"],"description":"Required. If the type is not set or is `TYPE_UNSPECIFIED`,\nreturns an `INVALID_ARGUMENT` error.","type":"string"},"gcsContentUri":{"description":"The Google Cloud Storage URI where the file content is located.\nThis URI must be of the form: gs://bucket_name/object_name. For more\ndetails, see https://cloud.google.com/storage/docs/reference-uris.\nNOTE: Cloud Storage object versioning is not supported.","type":"string"}},"id":"Document","description":"################################################################ #\n\nRepresents the input to API methods."},"AnalyzeEntitiesRequest":{"description":"The entity analysis request message.","type":"object","properties":{"encodingType":{"type":"string","enumDescriptions":["If `EncodingType` is not specified, encoding-dependent information (such as\n`begin_offset`) will be set at `-1`.","Encoding-dependent information (such as `begin_offset`) is calculated based\non the UTF-8 encoding of the input. C++ and Go are examples of languages\nthat use this encoding natively.","Encoding-dependent information (such as `begin_offset`) is calculated based\non the UTF-16 encoding of the input. Java and Javascript are examples of\nlanguages that use this encoding natively.","Encoding-dependent information (such as `begin_offset`) is calculated based\non the UTF-32 encoding of the input. Python is an example of a language\nthat uses this encoding natively."],"enum":["NONE","UTF8","UTF16","UTF32"],"description":"The encoding type used by the API to calculate offsets."},"document":{"$ref":"Document","description":"Input document."}},"id":"AnalyzeEntitiesRequest"},"ClassifyTextRequest":{"id":"ClassifyTextRequest","description":"The document classification request message.","type":"object","properties":{"document":{"$ref":"Document","description":"Input document."}}},"AnalyzeEntitySentimentResponse":{"description":"The entity-level sentiment analysis response message.","type":"object","properties":{"entities":{"description":"The recognized entities in the input document with associated sentiments.","items":{"$ref":"Entity"},"type":"array"},"language":{"description":"The language of the text, which will be the same as the language specified\nin the request or, if not specified, the automatically-detected language.\nSee Document.language field for more details.","type":"string"}},"id":"AnalyzeEntitySentimentResponse"},"AnalyzeSentimentResponse":{"description":"The sentiment analysis response message.","type":"object","properties":{"language":{"description":"The language of the text, which will be the same as the language specified\nin the request or, if not specified, the automatically-detected language.\nSee Document.language field for more details.","type":"string"},"sentences":{"items":{"$ref":"Sentence"},"type":"array","description":"The sentiment for all the sentences in the document."},"documentSentiment":{"$ref":"Sentiment","description":"The overall sentiment of the input document."}},"id":"AnalyzeSentimentResponse"},"AnalyzeSyntaxResponse":{"description":"The syntax analysis response message.","type":"object","properties":{"language":{"description":"The language of the text, which will be the same as the language specified\nin the request or, if not specified, the automatically-detected language.\nSee Document.language field for more details.","type":"string"},"sentences":{"description":"Sentences in the input document.","items":{"$ref":"Sentence"},"type":"array"},"tokens":{"description":"Tokens, along with their syntactic information, in the input document.","items":{"$ref":"Token"},"type":"array"}},"id":"AnalyzeSyntaxResponse"},"AnnotateTextResponse":{"description":"The text annotations response message.","type":"object","properties":{"sentences":{"description":"Sentences in the input document. Populated if the user enables\nAnnotateTextRequest.Features.extract_syntax.","items":{"$ref":"Sentence"},"type":"array"},"tokens":{"description":"Tokens, along with their syntactic information, in the input document.\nPopulated if the user enables\nAnnotateTextRequest.Features.extract_syntax.","items":{"$ref":"Token"},"type":"array"},"categories":{"description":"Categories identified in the input document.","items":{"$ref":"ClassificationCategory"},"type":"array"},"documentSentiment":{"$ref":"Sentiment","description":"The overall sentiment for the document. Populated if the user enables\nAnnotateTextRequest.Features.extract_document_sentiment."},"language":{"description":"The language of the text, which will be the same as the language specified\nin the request or, if not specified, the automatically-detected language.\nSee Document.language field for more details.","type":"string"},"entities":{"description":"Entities, along with their semantic information, in the input document.\nPopulated if the user enables\nAnnotateTextRequest.Features.extract_entities.","items":{"$ref":"Entity"},"type":"array"}},"id":"AnnotateTextResponse"},"DependencyEdge":{"description":"Represents dependency parse tree information for a token.","type":"object","properties":{"label":{"enumDescriptions":["Unknown","Abbreviation modifier","Adjectival complement","Adverbial clause modifier","Adverbial modifier","Adjectival modifier of an NP","Appositional modifier of an NP","Attribute dependent of a copular verb","Auxiliary (non-main) verb","Passive auxiliary","Coordinating conjunction","Clausal complement of a verb or adjective","Conjunct","Clausal subject","Clausal passive subject","Dependency (unable to determine)","Determiner","Discourse","Direct object","Expletive","Goes with (part of a word in a text not well edited)","Indirect object","Marker (word introducing a subordinate clause)","Multi-word expression","Multi-word verbal expression","Negation modifier","Noun compound modifier","Noun phrase used as an adverbial modifier","Nominal subject","Passive nominal subject","Numeric modifier of a noun","Element of compound number","Punctuation mark","Parataxis relation","Participial modifier","The complement of a preposition is a clause","Object of a preposition","Possession modifier","Postverbal negative particle","Predicate complement","Preconjunt","Predeterminer","Prefix","Prepositional modifier","The relationship between a verb and verbal morpheme","Particle","Associative or possessive marker","Quantifier phrase modifier","Relative clause modifier","Complementizer in relative clause","Ellipsis without a preceding predicate","Referent","Remnant","Reparandum","Root","Suffix specifying a unit of number","Suffix","Temporal modifier","Topic marker","Clause headed by an infinite form of the verb that modifies a noun","Vocative","Open clausal complement","Name suffix","Name title","Adverbial phrase modifier","Causative auxiliary","Helper auxiliary","Rentaishi (Prenominal modifier)","Foreign words","Keyword","List for chains of comparable items","Nominalized clause","Nominalized clausal subject","Nominalized clausal passive","Compound of numeric modifier","Copula","Dislocated relation (for fronted/topicalized elements)","Aspect marker","Genitive modifier","Genitive object","Infinitival modifier","Measure","Nominal complement of a noun"],"enum":["UNKNOWN","ABBREV","ACOMP","ADVCL","ADVMOD","AMOD","APPOS","ATTR","AUX","AUXPASS","CC","CCOMP","CONJ","CSUBJ","CSUBJPASS","DEP","DET","DISCOURSE","DOBJ","EXPL","GOESWITH","IOBJ","MARK","MWE","MWV","NEG","NN","NPADVMOD","NSUBJ","NSUBJPASS","NUM","NUMBER","P","PARATAXIS","PARTMOD","PCOMP","POBJ","POSS","POSTNEG","PRECOMP","PRECONJ","PREDET","PREF","PREP","PRONL","PRT","PS","QUANTMOD","RCMOD","RCMODREL","RDROP","REF","REMNANT","REPARANDUM","ROOT","SNUM","SUFF","TMOD","TOPIC","VMOD","VOCATIVE","XCOMP","SUFFIX","TITLE","ADVPHMOD","AUXCAUS","AUXVV","DTMOD","FOREIGN","KW","LIST","NOMC","NOMCSUBJ","NOMCSUBJPASS","NUMC","COP","DISLOCATED","ASP","GMOD","GOBJ","INFMOD","MES","NCOMP"],"description":"The parse label for the token.","type":"string"},"headTokenIndex":{"format":"int32","description":"Represents the head of this token in the dependency tree.\nThis is the index of the token which has an arc going to this token.\nThe index is the position of the token in the array of tokens returned\nby the API method. If this token is a root token, then the\n`head_token_index` is its own index.","type":"integer"}},"id":"DependencyEdge"},"TextSpan":{"description":"Represents an output piece of text.","type":"object","properties":{"beginOffset":{"type":"integer","format":"int32","description":"The API calculates the beginning offset of the content in the original\ndocument according to the EncodingType specified in the API request."},"content":{"description":"The content of the output text.","type":"string"}},"id":"TextSpan"},"Token":{"description":"Represents the smallest syntactic building block of the text.","type":"object","properties":{"dependencyEdge":{"$ref":"DependencyEdge","description":"Dependency tree parse for this token."},"text":{"description":"The token text.","$ref":"TextSpan"},"lemma":{"description":"[Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token.","type":"string"},"partOfSpeech":{"$ref":"PartOfSpeech","description":"Parts of speech tag for this token."}},"id":"Token"},"EntityMention":{"description":"Represents a mention for an entity in the text. Currently, proper noun\nmentions are supported.","type":"object","properties":{"type":{"type":"string","enumDescriptions":["Unknown","Proper name","Common noun (or noun compound)"],"enum":["TYPE_UNKNOWN","PROPER","COMMON"],"description":"The type of the entity mention."},"text":{"$ref":"TextSpan","description":"The mention text."},"sentiment":{"$ref":"Sentiment","description":"For calls to AnalyzeEntitySentiment or if\nAnnotateTextRequest.Features.extract_entity_sentiment is set to\ntrue, this field will contain the sentiment expressed for this mention of\nthe entity in the provided document."}},"id":"EntityMention"},"ClassifyTextResponse":{"description":"The document classification response message.","type":"object","properties":{"categories":{"description":"Categories representing the input document.","items":{"$ref":"ClassificationCategory"},"type":"array"}},"id":"ClassifyTextResponse"},"Sentence":{"description":"Represents a sentence in the input document.","type":"object","properties":{"text":{"$ref":"TextSpan","description":"The sentence text."},"sentiment":{"description":"For calls to AnalyzeSentiment or if\nAnnotateTextRequest.Features.extract_document_sentiment is set to\ntrue, this field will contain the sentiment for the sentence.","$ref":"Sentiment"}},"id":"Sentence"},"Sentiment":{"properties":{"score":{"format":"float","description":"Sentiment score between -1.0 (negative sentiment) and 1.0\n(positive sentiment).","type":"number"},"magnitude":{"format":"float","description":"A non-negative number in the [0, +inf) range, which represents\nthe absolute magnitude of sentiment regardless of score (positive or\nnegative).","type":"number"}},"id":"Sentiment","description":"Represents the feeling associated with the entire text or entities in\nthe text.","type":"object"},"AnalyzeEntitySentimentRequest":{"type":"object","properties":{"document":{"$ref":"Document","description":"Input document."},"encodingType":{"description":"The encoding type used by the API to calculate offsets.","type":"string","enumDescriptions":["If `EncodingType` is not specified, encoding-dependent information (such as\n`begin_offset`) will be set at `-1`.","Encoding-dependent information (such as `begin_offset`) is calculated based\non the UTF-8 encoding of the input. C++ and Go are examples of languages\nthat use this encoding natively.","Encoding-dependent information (such as `begin_offset`) is calculated based\non the UTF-16 encoding of the input. Java and Javascript are examples of\nlanguages that use this encoding natively.","Encoding-dependent information (such as `begin_offset`) is calculated based\non the UTF-32 encoding of the input. Python is an example of a language\nthat uses this encoding natively."],"enum":["NONE","UTF8","UTF16","UTF32"]}},"id":"AnalyzeEntitySentimentRequest","description":"The entity-level sentiment analysis request message."},"PartOfSpeech":{"description":"Represents part of speech information for a token.","type":"object","properties":{"mood":{"description":"The grammatical mood.","type":"string","enumDescriptions":["Mood is not applicable in the analyzed language or is not predicted.","Conditional","Imperative","Indicative","Interrogative","Jussive","Subjunctive"],"enum":["MOOD_UNKNOWN","CONDITIONAL_MOOD","IMPERATIVE","INDICATIVE","INTERROGATIVE","JUSSIVE","SUBJUNCTIVE"]},"tag":{"enum":["UNKNOWN","ADJ","ADP","ADV","CONJ","DET","NOUN","NUM","PRON","PRT","PUNCT","VERB","X","AFFIX"],"description":"The part of speech tag.","type":"string","enumDescriptions":["Unknown","Adjective","Adposition (preposition and postposition)","Adverb","Conjunction","Determiner","Noun (common and proper)","Cardinal number","Pronoun","Particle or other function word","Punctuation","Verb (all tenses and modes)","Other: foreign words, typos, abbreviations","Affix"]},"gender":{"description":"The grammatical gender.","type":"string","enumDescriptions":["Gender is not applicable in the analyzed language or is not predicted.","Feminine","Masculine","Neuter"],"enum":["GENDER_UNKNOWN","FEMININE","MASCULINE","NEUTER"]},"person":{"type":"string","enumDescriptions":["Person is not applicable in the analyzed language or is not predicted.","First","Second","Third","Reflexive"],"enum":["PERSON_UNKNOWN","FIRST","SECOND","THIRD","REFLEXIVE_PERSON"],"description":"The grammatical person."},"proper":{"enumDescriptions":["Proper is not applicable in the analyzed language or is not predicted.","Proper","Not proper"],"enum":["PROPER_UNKNOWN","PROPER","NOT_PROPER"],"description":"The grammatical properness.","type":"string"},"case":{"enumDescriptions":["Case is not applicable in the analyzed language or is not predicted.","Accusative","Adverbial","Complementive","Dative","Genitive","Instrumental","Locative","Nominative","Oblique","Partitive","Prepositional","Reflexive","Relative","Vocative"],"enum":["CASE_UNKNOWN","ACCUSATIVE","ADVERBIAL","COMPLEMENTIVE","DATIVE","GENITIVE","INSTRUMENTAL","LOCATIVE","NOMINATIVE","OBLIQUE","PARTITIVE","PREPOSITIONAL","REFLEXIVE_CASE","RELATIVE_CASE","VOCATIVE"],"description":"The grammatical case.","type":"string"},"tense":{"description":"The grammatical tense.","type":"string","enumDescriptions":["Tense is not applicable in the analyzed language or is not predicted.","Conditional","Future","Past","Present","Imperfect","Pluperfect"],"enum":["TENSE_UNKNOWN","CONDITIONAL_TENSE","FUTURE","PAST","PRESENT","IMPERFECT","PLUPERFECT"]},"reciprocity":{"enumDescriptions":["Reciprocity is not applicable in the analyzed language or is not\npredicted.","Reciprocal","Non-reciprocal"],"enum":["RECIPROCITY_UNKNOWN","RECIPROCAL","NON_RECIPROCAL"],"description":"The grammatical reciprocity.","type":"string"},"form":{"enum":["FORM_UNKNOWN","ADNOMIAL","AUXILIARY","COMPLEMENTIZER","FINAL_ENDING","GERUND","REALIS","IRREALIS","SHORT","LONG","ORDER","SPECIFIC"],"description":"The grammatical form.","type":"string","enumDescriptions":["Form is not applicable in the analyzed language or is not predicted.","Adnomial","Auxiliary","Complementizer","Final ending","Gerund","Realis","Irrealis","Short form","Long form","Order form","Specific form"]},"number":{"enumDescriptions":["Number is not applicable in the analyzed language or is not predicted.","Singular","Plural","Dual"],"enum":["NUMBER_UNKNOWN","SINGULAR","PLURAL","DUAL"],"description":"The grammatical number.","type":"string"},"voice":{"enumDescriptions":["Voice is not applicable in the analyzed language or is not predicted.","Active","Causative","Passive"],"enum":["VOICE_UNKNOWN","ACTIVE","CAUSATIVE","PASSIVE"],"description":"The grammatical voice.","type":"string"},"aspect":{"description":"The grammatical aspect.","type":"string","enumDescriptions":["Aspect is not applicable in the analyzed language or is not predicted.","Perfective","Imperfective","Progressive"],"enum":["ASPECT_UNKNOWN","PERFECTIVE","IMPERFECTIVE","PROGRESSIVE"]}},"id":"PartOfSpeech"},"ClassificationCategory":{"description":"Represents a category returned from the text classifier.","type":"object","properties":{"confidence":{"format":"float","description":"The classifier's confidence of the category. Number represents how certain\nthe classifier is that this category represents the given text.","type":"number"},"name":{"description":"The name of the category representing the document.","type":"string"}},"id":"ClassificationCategory"}},"protocol":"rest","icons":{"x16":"http://www.google.com/images/icons/product/search-16.gif","x32":"http://www.google.com/images/icons/product/search-32.gif"},"canonicalName":"Cloud Natural Language","auth":{"oauth2":{"scopes":{"https://www.googleapis.com/auth/cloud-language":{"description":"Apply machine learning models to reveal the structure and meaning of text"},"https://www.googleapis.com/auth/cloud-platform":{"description":"View and manage your data across Google Cloud Platform services"}}}},"rootUrl":"https://language.googleapis.com/","ownerDomain":"google.com"};