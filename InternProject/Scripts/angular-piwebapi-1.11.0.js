/**
PI Web API client library for AngularJS 2017 R2 (1.1.0)
*/

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>

var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var AnalysisApi = (function () {
        function AnalysisApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        AnalysisApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        AnalysisApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analyses';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analyses/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisApi.prototype.update = function (webId, analysis, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analyses/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (analysis === null || analysis === undefined) {
                throw new Error('Required parameter analysis was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: analysis,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analyses/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisApi.prototype.getCategories = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analyses/{webId}/categories'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getCategories.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisApi.prototype.getSecurity = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analyses/{webId}/security'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
            }
            if (userIdentity === null || userIdentity === undefined) {
                throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
            }
            if ((userIdentity !== undefined) && (userIdentity !== null)) {
                queryParameters['userIdentity'] = userIdentity;
            }
            if ((forceRefresh !== undefined) && (forceRefresh !== null)) {
                queryParameters['forceRefresh'] = forceRefresh;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisApi.prototype.getSecurityEntries = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analyses/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisApi.prototype.createSecurityEntry = function (webId, securityEntry, applyToChildren, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analyses/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling createSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisApi.prototype.getSecurityEntryByName = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analyses/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling getSecurityEntryByName.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntryByName.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisApi.prototype.updateSecurityEntry = function (name, webId, securityEntry, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analyses/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling updateSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling updateSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisApi.prototype.deleteSecurityEntry = function (name, webId, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analyses/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling deleteSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling deleteSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisApi.prototype.getAnalysesQuery = function (databaseWebId, maxCount, query, selectedFields, startIndex, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analyses/search';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if ((databaseWebId !== undefined) && (databaseWebId !== null)) {
                queryParameters['databaseWebId'] = databaseWebId;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((query !== undefined) && (query !== null)) {
                queryParameters['query'] = query;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return AnalysisApi;
    }());
    AnalysisApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.AnalysisApi = AnalysisApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var AnalysisCategoryApi = (function () {
        function AnalysisCategoryApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        AnalysisCategoryApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        AnalysisCategoryApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysiscategories';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisCategoryApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysiscategories/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisCategoryApi.prototype.update = function (webId, category, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysiscategories/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (category === null || category === undefined) {
                throw new Error('Required parameter category was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: category,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisCategoryApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysiscategories/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisCategoryApi.prototype.getSecurity = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysiscategories/{webId}/security'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
            }
            if (userIdentity === null || userIdentity === undefined) {
                throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
            }
            if ((userIdentity !== undefined) && (userIdentity !== null)) {
                queryParameters['userIdentity'] = userIdentity;
            }
            if ((forceRefresh !== undefined) && (forceRefresh !== null)) {
                queryParameters['forceRefresh'] = forceRefresh;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisCategoryApi.prototype.getSecurityEntries = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysiscategories/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisCategoryApi.prototype.createSecurityEntry = function (webId, securityEntry, applyToChildren, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysiscategories/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling createSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisCategoryApi.prototype.getSecurityEntryByName = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysiscategories/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling getSecurityEntryByName.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntryByName.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisCategoryApi.prototype.updateSecurityEntry = function (name, webId, securityEntry, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysiscategories/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling updateSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling updateSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisCategoryApi.prototype.deleteSecurityEntry = function (name, webId, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysiscategories/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling deleteSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling deleteSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return AnalysisCategoryApi;
    }());
    AnalysisCategoryApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.AnalysisCategoryApi = AnalysisCategoryApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var AnalysisRuleApi = (function () {
        function AnalysisRuleApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        AnalysisRuleApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        AnalysisRuleApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysisrules';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisRuleApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysisrules/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisRuleApi.prototype.update = function (webId, analysisRule, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysisrules/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (analysisRule === null || analysisRule === undefined) {
                throw new Error('Required parameter analysisRule was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: analysisRule,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisRuleApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysisrules/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisRuleApi.prototype.getAnalysisRules = function (webId, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysisrules/{webId}/analysisrules'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getAnalysisRules.');
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisRuleApi.prototype.createAnalysisRule = function (webId, analysisRule, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysisrules/{webId}/analysisrules'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createAnalysisRule.');
            }
            if (analysisRule === null || analysisRule === undefined) {
                throw new Error('Required parameter analysisRule was null or undefined when calling createAnalysisRule.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: analysisRule,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return AnalysisRuleApi;
    }());
    AnalysisRuleApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.AnalysisRuleApi = AnalysisRuleApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var AnalysisRulePlugInApi = (function () {
        function AnalysisRulePlugInApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        AnalysisRulePlugInApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        AnalysisRulePlugInApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysisruleplugins';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisRulePlugInApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysisruleplugins/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return AnalysisRulePlugInApi;
    }());
    AnalysisRulePlugInApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.AnalysisRulePlugInApi = AnalysisRulePlugInApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var AnalysisTemplateApi = (function () {
        function AnalysisTemplateApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        AnalysisTemplateApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        AnalysisTemplateApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysistemplates';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisTemplateApi.prototype.createFromAnalysis = function (analysisWebId, name, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysistemplates';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (analysisWebId === null || analysisWebId === undefined) {
                throw new Error('Required parameter analysisWebId was null or undefined when calling createFromAnalysis.');
            }
            if ((analysisWebId !== undefined) && (analysisWebId !== null)) {
                queryParameters['analysisWebId'] = analysisWebId;
            }
            if ((name !== undefined) && (name !== null)) {
                queryParameters['name'] = name;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisTemplateApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysistemplates/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisTemplateApi.prototype.update = function (webId, template, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysistemplates/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (template === null || template === undefined) {
                throw new Error('Required parameter template was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: template,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisTemplateApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysistemplates/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisTemplateApi.prototype.getCategories = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysistemplates/{webId}/categories'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getCategories.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisTemplateApi.prototype.getSecurity = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysistemplates/{webId}/security'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
            }
            if (userIdentity === null || userIdentity === undefined) {
                throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
            }
            if ((userIdentity !== undefined) && (userIdentity !== null)) {
                queryParameters['userIdentity'] = userIdentity;
            }
            if ((forceRefresh !== undefined) && (forceRefresh !== null)) {
                queryParameters['forceRefresh'] = forceRefresh;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisTemplateApi.prototype.getSecurityEntries = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysistemplates/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisTemplateApi.prototype.createSecurityEntry = function (webId, securityEntry, applyToChildren, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysistemplates/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling createSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisTemplateApi.prototype.getSecurityEntryByName = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysistemplates/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling getSecurityEntryByName.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntryByName.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisTemplateApi.prototype.updateSecurityEntry = function (name, webId, securityEntry, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysistemplates/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling updateSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling updateSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisTemplateApi.prototype.deleteSecurityEntry = function (name, webId, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysistemplates/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling deleteSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling deleteSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AnalysisTemplateApi.prototype.getAnalysisTemplatesQuery = function (databaseWebId, maxCount, query, selectedFields, startIndex, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/analysistemplates/search';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if ((databaseWebId !== undefined) && (databaseWebId !== null)) {
                queryParameters['databaseWebId'] = databaseWebId;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((query !== undefined) && (query !== null)) {
                queryParameters['query'] = query;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return AnalysisTemplateApi;
    }());
    AnalysisTemplateApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.AnalysisTemplateApi = AnalysisTemplateApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var AssetDatabaseApi = (function () {
        function AssetDatabaseApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        AssetDatabaseApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        AssetDatabaseApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.update = function (webId, database, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (database === null || database === undefined) {
                throw new Error('Required parameter database was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: database,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.findAnalyses = function (webId, field, maxCount, query, selectedFields, sortField, sortOrder, startIndex, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/analyses'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling findAnalyses.');
            }
            if (field === null || field === undefined) {
                throw new Error('Required parameter field was null or undefined when calling findAnalyses.');
            }
            if ((field !== undefined) && (field !== null)) {
                queryParameters['field'] = field;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((query !== undefined) && (query !== null)) {
                queryParameters['query'] = query;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.getAnalysisCategories = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/analysiscategories'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getAnalysisCategories.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.createAnalysisCategory = function (webId, analysisCategory, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/analysiscategories'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createAnalysisCategory.');
            }
            if (analysisCategory === null || analysisCategory === undefined) {
                throw new Error('Required parameter analysisCategory was null or undefined when calling createAnalysisCategory.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: analysisCategory,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.getAnalysisTemplates = function (webId, field, maxCount, query, selectedFields, sortField, sortOrder, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/analysistemplates'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getAnalysisTemplates.');
            }
            if (field === null || field === undefined) {
                throw new Error('Required parameter field was null or undefined when calling getAnalysisTemplates.');
            }
            if ((field !== undefined) && (field !== null)) {
                queryParameters['field'] = field;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((query !== undefined) && (query !== null)) {
                queryParameters['query'] = query;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.createAnalysisTemplate = function (webId, template, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/analysistemplates'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createAnalysisTemplate.');
            }
            if (template === null || template === undefined) {
                throw new Error('Required parameter template was null or undefined when calling createAnalysisTemplate.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: template,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.getAttributeCategories = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/attributecategories'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getAttributeCategories.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.createAttributeCategory = function (webId, attributeCategory, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/attributecategories'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createAttributeCategory.');
            }
            if (attributeCategory === null || attributeCategory === undefined) {
                throw new Error('Required parameter attributeCategory was null or undefined when calling createAttributeCategory.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: attributeCategory,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.findElementAttributes = function (webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, elementCategory, elementDescriptionFilter, elementNameFilter, elementTemplate, elementType, maxCount, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/elementattributes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling findElementAttributes.');
            }
            if ((attributeCategory !== undefined) && (attributeCategory !== null)) {
                queryParameters['attributeCategory'] = attributeCategory;
            }
            if ((attributeDescriptionFilter !== undefined) && (attributeDescriptionFilter !== null)) {
                queryParameters['attributeDescriptionFilter'] = attributeDescriptionFilter;
            }
            if ((attributeNameFilter !== undefined) && (attributeNameFilter !== null)) {
                queryParameters['attributeNameFilter'] = attributeNameFilter;
            }
            if ((attributeType !== undefined) && (attributeType !== null)) {
                queryParameters['attributeType'] = attributeType;
            }
            if ((elementCategory !== undefined) && (elementCategory !== null)) {
                queryParameters['elementCategory'] = elementCategory;
            }
            if ((elementDescriptionFilter !== undefined) && (elementDescriptionFilter !== null)) {
                queryParameters['elementDescriptionFilter'] = elementDescriptionFilter;
            }
            if ((elementNameFilter !== undefined) && (elementNameFilter !== null)) {
                queryParameters['elementNameFilter'] = elementNameFilter;
            }
            if ((elementTemplate !== undefined) && (elementTemplate !== null)) {
                queryParameters['elementTemplate'] = elementTemplate;
            }
            if ((elementType !== undefined) && (elementType !== null)) {
                queryParameters['elementType'] = elementType;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.getElementCategories = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/elementcategories'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getElementCategories.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.createElementCategory = function (webId, elementCategory, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/elementcategories'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createElementCategory.');
            }
            if (elementCategory === null || elementCategory === undefined) {
                throw new Error('Required parameter elementCategory was null or undefined when calling createElementCategory.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: elementCategory,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.getElements = function (webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, templateName, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/elements'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getElements.');
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((descriptionFilter !== undefined) && (descriptionFilter !== null)) {
                queryParameters['descriptionFilter'] = descriptionFilter;
            }
            if ((elementType !== undefined) && (elementType !== null)) {
                queryParameters['elementType'] = elementType;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.createElement = function (webId, element, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/elements'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createElement.');
            }
            if (element === null || element === undefined) {
                throw new Error('Required parameter element was null or undefined when calling createElement.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: element,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.getElementTemplates = function (webId, field, maxCount, query, selectedFields, sortField, sortOrder, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/elementtemplates'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getElementTemplates.');
            }
            if (field === null || field === undefined) {
                throw new Error('Required parameter field was null or undefined when calling getElementTemplates.');
            }
            if ((field !== undefined) && (field !== null)) {
                queryParameters['field'] = field;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((query !== undefined) && (query !== null)) {
                queryParameters['query'] = query;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.createElementTemplate = function (webId, template, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/elementtemplates'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createElementTemplate.');
            }
            if (template === null || template === undefined) {
                throw new Error('Required parameter template was null or undefined when calling createElementTemplate.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: template,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.getEnumerationSets = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/enumerationsets'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getEnumerationSets.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.createEnumerationSet = function (webId, enumerationSet, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/enumerationsets'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createEnumerationSet.');
            }
            if (enumerationSet === null || enumerationSet === undefined) {
                throw new Error('Required parameter enumerationSet was null or undefined when calling createEnumerationSet.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: enumerationSet,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.findEventFrameAttributes = function (webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, endTime, eventFrameCategory, eventFrameDescriptionFilter, eventFrameNameFilter, eventFrameTemplate, maxCount, referencedElementNameFilter, searchFullHierarchy, searchMode, selectedFields, sortField, sortOrder, startIndex, startTime, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/eventframeattributes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling findEventFrameAttributes.');
            }
            if ((attributeCategory !== undefined) && (attributeCategory !== null)) {
                queryParameters['attributeCategory'] = attributeCategory;
            }
            if ((attributeDescriptionFilter !== undefined) && (attributeDescriptionFilter !== null)) {
                queryParameters['attributeDescriptionFilter'] = attributeDescriptionFilter;
            }
            if ((attributeNameFilter !== undefined) && (attributeNameFilter !== null)) {
                queryParameters['attributeNameFilter'] = attributeNameFilter;
            }
            if ((attributeType !== undefined) && (attributeType !== null)) {
                queryParameters['attributeType'] = attributeType;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((eventFrameCategory !== undefined) && (eventFrameCategory !== null)) {
                queryParameters['eventFrameCategory'] = eventFrameCategory;
            }
            if ((eventFrameDescriptionFilter !== undefined) && (eventFrameDescriptionFilter !== null)) {
                queryParameters['eventFrameDescriptionFilter'] = eventFrameDescriptionFilter;
            }
            if ((eventFrameNameFilter !== undefined) && (eventFrameNameFilter !== null)) {
                queryParameters['eventFrameNameFilter'] = eventFrameNameFilter;
            }
            if ((eventFrameTemplate !== undefined) && (eventFrameTemplate !== null)) {
                queryParameters['eventFrameTemplate'] = eventFrameTemplate;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((referencedElementNameFilter !== undefined) && (referencedElementNameFilter !== null)) {
                queryParameters['referencedElementNameFilter'] = referencedElementNameFilter;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((searchMode !== undefined) && (searchMode !== null)) {
                queryParameters['searchMode'] = searchMode;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.getEventFrames = function (webId, canBeAcknowledged, categoryName, endTime, isAcknowledged, maxCount, nameFilter, referencedElementNameFilter, referencedElementTemplateName, searchFullHierarchy, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, templateName, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/eventframes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getEventFrames.');
            }
            if ((canBeAcknowledged !== undefined) && (canBeAcknowledged !== null)) {
                queryParameters['canBeAcknowledged'] = canBeAcknowledged;
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((isAcknowledged !== undefined) && (isAcknowledged !== null)) {
                queryParameters['isAcknowledged'] = isAcknowledged;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((referencedElementNameFilter !== undefined) && (referencedElementNameFilter !== null)) {
                queryParameters['referencedElementNameFilter'] = referencedElementNameFilter;
            }
            if ((referencedElementTemplateName !== undefined) && (referencedElementTemplateName !== null)) {
                queryParameters['referencedElementTemplateName'] = referencedElementTemplateName;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((searchMode !== undefined) && (searchMode !== null)) {
                queryParameters['searchMode'] = searchMode;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((severity !== undefined) && (severity !== null)) {
                queryParameters['severity'] = severity;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.createEventFrame = function (webId, eventFrame, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/eventframes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createEventFrame.');
            }
            if (eventFrame === null || eventFrame === undefined) {
                throw new Error('Required parameter eventFrame was null or undefined when calling createEventFrame.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: eventFrame,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.export = function (webId, endTime, exportMode, startTime, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/export'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling export.');
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((exportMode !== undefined) && (exportMode !== null)) {
                queryParameters['exportMode'] = exportMode;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.import = function (webId, importMode, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/import'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling importData.');
            }
            if ((importMode !== undefined) && (importMode !== null)) {
                queryParameters['importMode'] = importMode;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.getReferencedElements = function (webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, selectedFields, sortField, sortOrder, startIndex, templateName, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/referencedelements'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getReferencedElements.');
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((descriptionFilter !== undefined) && (descriptionFilter !== null)) {
                queryParameters['descriptionFilter'] = descriptionFilter;
            }
            if ((elementType !== undefined) && (elementType !== null)) {
                queryParameters['elementType'] = elementType;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.addReferencedElement = function (webId, referencedElementWebId, referenceType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/referencedelements'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling addReferencedElement.');
            }
            if (referencedElementWebId === null || referencedElementWebId === undefined) {
                throw new Error('Required parameter referencedElementWebId was null or undefined when calling addReferencedElement.');
            }
            if ((referencedElementWebId !== undefined) && (referencedElementWebId !== null)) {
                queryParameters['referencedElementWebId'] = referencedElementWebId;
            }
            if ((referenceType !== undefined) && (referenceType !== null)) {
                queryParameters['referenceType'] = referenceType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.removeReferencedElement = function (webId, referencedElementWebId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/referencedelements'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling removeReferencedElement.');
            }
            if (referencedElementWebId === null || referencedElementWebId === undefined) {
                throw new Error('Required parameter referencedElementWebId was null or undefined when calling removeReferencedElement.');
            }
            if ((referencedElementWebId !== undefined) && (referencedElementWebId !== null)) {
                queryParameters['referencedElementWebId'] = referencedElementWebId;
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.getSecurity = function (webId, securityItem, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/security'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
            }
            if (securityItem === null || securityItem === undefined) {
                throw new Error('Required parameter securityItem was null or undefined when calling getSecurity.');
            }
            if (userIdentity === null || userIdentity === undefined) {
                throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
            }
            if ((securityItem !== undefined) && (securityItem !== null)) {
                queryParameters['securityItem'] = securityItem;
            }
            if ((userIdentity !== undefined) && (userIdentity !== null)) {
                queryParameters['userIdentity'] = userIdentity;
            }
            if ((forceRefresh !== undefined) && (forceRefresh !== null)) {
                queryParameters['forceRefresh'] = forceRefresh;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.getSecurityEntries = function (webId, nameFilter, securityItem, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((securityItem !== undefined) && (securityItem !== null)) {
                queryParameters['securityItem'] = securityItem;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.createSecurityEntry = function (webId, securityEntry, applyToChildren, securityItem, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling createSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            if ((securityItem !== undefined) && (securityItem !== null)) {
                queryParameters['securityItem'] = securityItem;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.getSecurityEntryByName = function (name, webId, securityItem, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling getSecurityEntryByName.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntryByName.');
            }
            if ((securityItem !== undefined) && (securityItem !== null)) {
                queryParameters['securityItem'] = securityItem;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.updateSecurityEntry = function (name, webId, securityEntry, applyToChildren, securityItem, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling updateSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling updateSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            if ((securityItem !== undefined) && (securityItem !== null)) {
                queryParameters['securityItem'] = securityItem;
            }
            var httpRequestParams = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.deleteSecurityEntry = function (name, webId, applyToChildren, securityItem, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling deleteSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling deleteSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            if ((securityItem !== undefined) && (securityItem !== null)) {
                queryParameters['securityItem'] = securityItem;
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.getTableCategories = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/tablecategories'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getTableCategories.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.createTableCategory = function (webId, tableCategory, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/tablecategories'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createTableCategory.');
            }
            if (tableCategory === null || tableCategory === undefined) {
                throw new Error('Required parameter tableCategory was null or undefined when calling createTableCategory.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: tableCategory,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.getTables = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/tables'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getTables.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetDatabaseApi.prototype.createTable = function (webId, table, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetdatabases/{webId}/tables'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createTable.');
            }
            if (table === null || table === undefined) {
                throw new Error('Required parameter table was null or undefined when calling createTable.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: table,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return AssetDatabaseApi;
    }());
    AssetDatabaseApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.AssetDatabaseApi = AssetDatabaseApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var AssetServerApi = (function () {
        function AssetServerApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        AssetServerApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        AssetServerApi.prototype.list = function (selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.getByName = function (name, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling getByName.');
            }
            if ((name !== undefined) && (name !== null)) {
                queryParameters['name'] = name;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.getAnalysisRulePlugIns = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}/analysisruleplugins'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getAnalysisRulePlugIns.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.getDatabases = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}/assetdatabases'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getDatabases.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.createAssetDatabase = function (webId, database, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}/assetdatabases'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createAssetDatabase.');
            }
            if (database === null || database === undefined) {
                throw new Error('Required parameter database was null or undefined when calling createAssetDatabase.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: database,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.getNotificationContactTemplates = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}/notificationcontacttemplates'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getNotificationContactTemplates.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.getSecurity = function (webId, securityItem, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}/security'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
            }
            if (securityItem === null || securityItem === undefined) {
                throw new Error('Required parameter securityItem was null or undefined when calling getSecurity.');
            }
            if (userIdentity === null || userIdentity === undefined) {
                throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
            }
            if ((securityItem !== undefined) && (securityItem !== null)) {
                queryParameters['securityItem'] = securityItem;
            }
            if ((userIdentity !== undefined) && (userIdentity !== null)) {
                queryParameters['userIdentity'] = userIdentity;
            }
            if ((forceRefresh !== undefined) && (forceRefresh !== null)) {
                queryParameters['forceRefresh'] = forceRefresh;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.getSecurityEntries = function (webId, nameFilter, securityItem, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((securityItem !== undefined) && (securityItem !== null)) {
                queryParameters['securityItem'] = securityItem;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.createSecurityEntry = function (webId, securityEntry, applyToChildren, securityItem, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling createSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            if ((securityItem !== undefined) && (securityItem !== null)) {
                queryParameters['securityItem'] = securityItem;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.getSecurityEntryByName = function (name, webId, securityItem, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling getSecurityEntryByName.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntryByName.');
            }
            if ((securityItem !== undefined) && (securityItem !== null)) {
                queryParameters['securityItem'] = securityItem;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.updateSecurityEntry = function (name, webId, securityEntry, applyToChildren, securityItem, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling updateSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling updateSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            if ((securityItem !== undefined) && (securityItem !== null)) {
                queryParameters['securityItem'] = securityItem;
            }
            var httpRequestParams = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.deleteSecurityEntry = function (name, webId, applyToChildren, securityItem, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling deleteSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling deleteSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            if ((securityItem !== undefined) && (securityItem !== null)) {
                queryParameters['securityItem'] = securityItem;
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.getSecurityIdentities = function (webId, field, maxCount, query, selectedFields, sortField, sortOrder, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}/securityidentities'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityIdentities.');
            }
            if ((field !== undefined) && (field !== null)) {
                queryParameters['field'] = field;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((query !== undefined) && (query !== null)) {
                queryParameters['query'] = query;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.createSecurityIdentity = function (webId, securityIdentity, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}/securityidentities'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createSecurityIdentity.');
            }
            if (securityIdentity === null || securityIdentity === undefined) {
                throw new Error('Required parameter securityIdentity was null or undefined when calling createSecurityIdentity.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: securityIdentity,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.getSecurityIdentitiesForUser = function (webId, userIdentity, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}/securityidentities'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityIdentitiesForUser.');
            }
            if (userIdentity === null || userIdentity === undefined) {
                throw new Error('Required parameter userIdentity was null or undefined when calling getSecurityIdentitiesForUser.');
            }
            if ((userIdentity !== undefined) && (userIdentity !== null)) {
                queryParameters['userIdentity'] = userIdentity;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.getSecurityMappings = function (webId, field, maxCount, query, selectedFields, sortField, sortOrder, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}/securitymappings'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityMappings.');
            }
            if ((field !== undefined) && (field !== null)) {
                queryParameters['field'] = field;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((query !== undefined) && (query !== null)) {
                queryParameters['query'] = query;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.createSecurityMapping = function (webId, securityMapping, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}/securitymappings'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createSecurityMapping.');
            }
            if (securityMapping === null || securityMapping === undefined) {
                throw new Error('Required parameter securityMapping was null or undefined when calling createSecurityMapping.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: securityMapping,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.getTimeRulePlugIns = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}/timeruleplugins'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getTimeRulePlugIns.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.getUnitClasses = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}/unitclasses'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getUnitClasses.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AssetServerApi.prototype.createUnitClass = function (webId, unitClass, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/assetservers/{webId}/unitclasses'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createUnitClass.');
            }
            if (unitClass === null || unitClass === undefined) {
                throw new Error('Required parameter unitClass was null or undefined when calling createUnitClass.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: unitClass,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return AssetServerApi;
    }());
    AssetServerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.AssetServerApi = AssetServerApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var AttributeApi = (function () {
        function AttributeApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        AttributeApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        AttributeApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributes';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributes/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeApi.prototype.update = function (webId, attribute, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributes/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (attribute === null || attribute === undefined) {
                throw new Error('Required parameter attribute was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: attribute,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributes/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeApi.prototype.getAttributes = function (webId, categoryName, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startIndex, templateName, trait, traitCategory, valueType, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributes/{webId}/attributes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getAttributes.');
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((showExcluded !== undefined) && (showExcluded !== null)) {
                queryParameters['showExcluded'] = showExcluded;
            }
            if ((showHidden !== undefined) && (showHidden !== null)) {
                queryParameters['showHidden'] = showHidden;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((trait !== undefined) && (trait !== null)) {
                queryParameters['trait'] = trait;
            }
            if ((traitCategory !== undefined) && (traitCategory !== null)) {
                queryParameters['traitCategory'] = traitCategory;
            }
            if ((valueType !== undefined) && (valueType !== null)) {
                queryParameters['valueType'] = valueType;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeApi.prototype.createAttribute = function (webId, attribute, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributes/{webId}/attributes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createAttribute.');
            }
            if (attribute === null || attribute === undefined) {
                throw new Error('Required parameter attribute was null or undefined when calling createAttribute.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: attribute,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeApi.prototype.getCategories = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributes/{webId}/categories'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getCategories.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeApi.prototype.createConfig = function (webId, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributes/{webId}/config'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createConfig.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeApi.prototype.getValue = function (webId, selectedFields, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributes/{webId}/value'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getValue.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeApi.prototype.setValue = function (webId, value, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributes/{webId}/value'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling setValue.');
            }
            if (value === null || value === undefined) {
                throw new Error('Required parameter value was null or undefined when calling setValue.');
            }
            var httpRequestParams = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: value,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeApi.prototype.getMultiple = function (asParallel, includeMode, path, selectedFields, webId, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributes/multiple';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if ((asParallel !== undefined) && (asParallel !== null)) {
                queryParameters['asParallel'] = asParallel;
            }
            if ((includeMode !== undefined) && (includeMode !== null)) {
                queryParameters['includeMode'] = includeMode;
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeApi.prototype.getAttributesQuery = function (databaseWebId, maxCount, query, selectedFields, startIndex, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributes/search';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if ((databaseWebId !== undefined) && (databaseWebId !== null)) {
                queryParameters['databaseWebId'] = databaseWebId;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((query !== undefined) && (query !== null)) {
                queryParameters['query'] = query;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return AttributeApi;
    }());
    AttributeApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.AttributeApi = AttributeApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var AttributeCategoryApi = (function () {
        function AttributeCategoryApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        AttributeCategoryApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        AttributeCategoryApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributecategories';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeCategoryApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributecategories/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeCategoryApi.prototype.update = function (webId, category, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributecategories/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (category === null || category === undefined) {
                throw new Error('Required parameter category was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: category,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeCategoryApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributecategories/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeCategoryApi.prototype.getSecurity = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributecategories/{webId}/security'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
            }
            if (userIdentity === null || userIdentity === undefined) {
                throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
            }
            if ((userIdentity !== undefined) && (userIdentity !== null)) {
                queryParameters['userIdentity'] = userIdentity;
            }
            if ((forceRefresh !== undefined) && (forceRefresh !== null)) {
                queryParameters['forceRefresh'] = forceRefresh;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeCategoryApi.prototype.getSecurityEntries = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributecategories/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeCategoryApi.prototype.createSecurityEntry = function (webId, securityEntry, applyToChildren, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributecategories/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling createSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeCategoryApi.prototype.getSecurityEntryByName = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributecategories/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling getSecurityEntryByName.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntryByName.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeCategoryApi.prototype.updateSecurityEntry = function (name, webId, securityEntry, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributecategories/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling updateSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling updateSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeCategoryApi.prototype.deleteSecurityEntry = function (name, webId, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributecategories/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling deleteSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling deleteSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return AttributeCategoryApi;
    }());
    AttributeCategoryApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.AttributeCategoryApi = AttributeCategoryApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var AttributeTemplateApi = (function () {
        function AttributeTemplateApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        AttributeTemplateApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        AttributeTemplateApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributetemplates';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeTemplateApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributetemplates/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeTemplateApi.prototype.update = function (webId, template, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributetemplates/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (template === null || template === undefined) {
                throw new Error('Required parameter template was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: template,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeTemplateApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributetemplates/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeTemplateApi.prototype.getAttributeTemplates = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributetemplates/{webId}/attributetemplates'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getAttributeTemplates.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeTemplateApi.prototype.createAttributeTemplate = function (webId, template, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributetemplates/{webId}/attributetemplates'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createAttributeTemplate.');
            }
            if (template === null || template === undefined) {
                throw new Error('Required parameter template was null or undefined when calling createAttributeTemplate.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: template,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeTemplateApi.prototype.getCategories = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributetemplates/{webId}/categories'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getCategories.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return AttributeTemplateApi;
    }());
    AttributeTemplateApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.AttributeTemplateApi = AttributeTemplateApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var AttributeTraitApi = (function () {
        function AttributeTraitApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        AttributeTraitApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        AttributeTraitApi.prototype.getByCategory = function (category, selectedFields, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributetraits';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (category === null || category === undefined) {
                throw new Error('Required parameter category was null or undefined when calling getByCategory.');
            }
            if ((category !== undefined) && (category !== null)) {
                queryParameters['category'] = category;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        AttributeTraitApi.prototype.get = function (name, selectedFields, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/attributetraits/{name}'
                .replace('{' + 'name' + '}', String(name));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return AttributeTraitApi;
    }());
    AttributeTraitApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.AttributeTraitApi = AttributeTraitApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var BatchApi = (function () {
        function BatchApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        BatchApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        BatchApi.prototype.execute = function (batch, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/batch';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (batch === null || batch === undefined) {
                throw new Error('Required parameter batch was null or undefined when calling execute.');
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: batch,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return BatchApi;
    }());
    BatchApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.BatchApi = BatchApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var CalculationApi = (function () {
        function CalculationApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        CalculationApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        CalculationApi.prototype.getAtIntervals = function (endTime, expression, sampleInterval, selectedFields, startTime, webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/calculation/intervals';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((expression !== undefined) && (expression !== null)) {
                queryParameters['expression'] = expression;
            }
            if ((sampleInterval !== undefined) && (sampleInterval !== null)) {
                queryParameters['sampleInterval'] = sampleInterval;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        CalculationApi.prototype.getAtRecorded = function (endTime, expression, selectedFields, startTime, webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/calculation/recorded';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((expression !== undefined) && (expression !== null)) {
                queryParameters['expression'] = expression;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        CalculationApi.prototype.getSummary = function (calculationBasis, endTime, expression, sampleInterval, sampleType, selectedFields, startTime, summaryDuration, summaryType, timeType, webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/calculation/summary';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if ((calculationBasis !== undefined) && (calculationBasis !== null)) {
                queryParameters['calculationBasis'] = calculationBasis;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((expression !== undefined) && (expression !== null)) {
                queryParameters['expression'] = expression;
            }
            if ((sampleInterval !== undefined) && (sampleInterval !== null)) {
                queryParameters['sampleInterval'] = sampleInterval;
            }
            if ((sampleType !== undefined) && (sampleType !== null)) {
                queryParameters['sampleType'] = sampleType;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((summaryDuration !== undefined) && (summaryDuration !== null)) {
                queryParameters['summaryDuration'] = summaryDuration;
            }
            if ((summaryType !== undefined) && (summaryType !== null)) {
                queryParameters['summaryType'] = summaryType;
            }
            if ((timeType !== undefined) && (timeType !== null)) {
                queryParameters['timeType'] = timeType;
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        CalculationApi.prototype.getAtTimes = function (expression, selectedFields, sortOrder, time, webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/calculation/times';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if ((expression !== undefined) && (expression !== null)) {
                queryParameters['expression'] = expression;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((time !== undefined) && (time !== null)) {
                queryParameters['time'] = time;
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return CalculationApi;
    }());
    CalculationApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.CalculationApi = CalculationApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var ChannelApi = (function () {
        function ChannelApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        ChannelApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        ChannelApi.prototype.instances = function (extraHttpRequestParams) {
            var localVarPath = this.basePath + '/channels/instances';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return ChannelApi;
    }());
    ChannelApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.ChannelApi = ChannelApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var ConfigurationApi = (function () {
        function ConfigurationApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        ConfigurationApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        ConfigurationApi.prototype.list = function (extraHttpRequestParams) {
            var localVarPath = this.basePath + '/system/configuration';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ConfigurationApi.prototype.get = function (key, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/system/configuration/{key}'
                .replace('{' + 'key' + '}', String(key));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (key === null || key === undefined) {
                throw new Error('Required parameter key was null or undefined when calling get.');
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ConfigurationApi.prototype.delete = function (key, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/system/configuration/{key}'
                .replace('{' + 'key' + '}', String(key));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (key === null || key === undefined) {
                throw new Error('Required parameter key was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return ConfigurationApi;
    }());
    ConfigurationApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.ConfigurationApi = ConfigurationApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var DataServerApi = (function () {
        function DataServerApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        DataServerApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        DataServerApi.prototype.list = function (selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/dataservers';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        DataServerApi.prototype.getByName = function (name, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/dataservers';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling getByName.');
            }
            if ((name !== undefined) && (name !== null)) {
                queryParameters['name'] = name;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        DataServerApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/dataservers';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        DataServerApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/dataservers/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        DataServerApi.prototype.getEnumerationSets = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/dataservers/{webId}/enumerationsets'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getEnumerationSets.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        DataServerApi.prototype.createEnumerationSet = function (webId, enumerationSet, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/dataservers/{webId}/enumerationsets'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createEnumerationSet.');
            }
            if (enumerationSet === null || enumerationSet === undefined) {
                throw new Error('Required parameter enumerationSet was null or undefined when calling createEnumerationSet.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: enumerationSet,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        DataServerApi.prototype.getLicense = function (webId, module, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/dataservers/{webId}/license'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getLicense.');
            }
            if ((module !== undefined) && (module !== null)) {
                queryParameters['module'] = module;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        DataServerApi.prototype.getPoints = function (webId, maxCount, nameFilter, selectedFields, startIndex, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/dataservers/{webId}/points'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getPoints.');
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        DataServerApi.prototype.createPoint = function (webId, pointDTO, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/dataservers/{webId}/points'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createPoint.');
            }
            if (pointDTO === null || pointDTO === undefined) {
                throw new Error('Required parameter pointDTO was null or undefined when calling createPoint.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: pointDTO,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return DataServerApi;
    }());
    DataServerApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.DataServerApi = DataServerApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var ElementApi = (function () {
        function ElementApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        ElementApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        ElementApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.update = function (webId, element, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (element === null || element === undefined) {
                throw new Error('Required parameter element was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: element,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.getAnalyses = function (webId, maxCount, selectedFields, sortField, sortOrder, startIndex, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/analyses'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getAnalyses.');
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.createAnalysis = function (webId, analysis, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/analyses'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createAnalysis.');
            }
            if (analysis === null || analysis === undefined) {
                throw new Error('Required parameter analysis was null or undefined when calling createAnalysis.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: analysis,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.getAttributes = function (webId, categoryName, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startIndex, templateName, trait, traitCategory, valueType, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/attributes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getAttributes.');
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((showExcluded !== undefined) && (showExcluded !== null)) {
                queryParameters['showExcluded'] = showExcluded;
            }
            if ((showHidden !== undefined) && (showHidden !== null)) {
                queryParameters['showHidden'] = showHidden;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((trait !== undefined) && (trait !== null)) {
                queryParameters['trait'] = trait;
            }
            if ((traitCategory !== undefined) && (traitCategory !== null)) {
                queryParameters['traitCategory'] = traitCategory;
            }
            if ((valueType !== undefined) && (valueType !== null)) {
                queryParameters['valueType'] = valueType;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.createAttribute = function (webId, attribute, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/attributes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createAttribute.');
            }
            if (attribute === null || attribute === undefined) {
                throw new Error('Required parameter attribute was null or undefined when calling createAttribute.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: attribute,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.getCategories = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/categories'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getCategories.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.createConfig = function (webId, includeChildElements, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/config'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createConfig.');
            }
            if ((includeChildElements !== undefined) && (includeChildElements !== null)) {
                queryParameters['includeChildElements'] = includeChildElements;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.findElementAttributes = function (webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, elementCategory, elementDescriptionFilter, elementNameFilter, elementTemplate, elementType, maxCount, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/elementattributes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling findElementAttributes.');
            }
            if ((attributeCategory !== undefined) && (attributeCategory !== null)) {
                queryParameters['attributeCategory'] = attributeCategory;
            }
            if ((attributeDescriptionFilter !== undefined) && (attributeDescriptionFilter !== null)) {
                queryParameters['attributeDescriptionFilter'] = attributeDescriptionFilter;
            }
            if ((attributeNameFilter !== undefined) && (attributeNameFilter !== null)) {
                queryParameters['attributeNameFilter'] = attributeNameFilter;
            }
            if ((attributeType !== undefined) && (attributeType !== null)) {
                queryParameters['attributeType'] = attributeType;
            }
            if ((elementCategory !== undefined) && (elementCategory !== null)) {
                queryParameters['elementCategory'] = elementCategory;
            }
            if ((elementDescriptionFilter !== undefined) && (elementDescriptionFilter !== null)) {
                queryParameters['elementDescriptionFilter'] = elementDescriptionFilter;
            }
            if ((elementNameFilter !== undefined) && (elementNameFilter !== null)) {
                queryParameters['elementNameFilter'] = elementNameFilter;
            }
            if ((elementTemplate !== undefined) && (elementTemplate !== null)) {
                queryParameters['elementTemplate'] = elementTemplate;
            }
            if ((elementType !== undefined) && (elementType !== null)) {
                queryParameters['elementType'] = elementType;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.getElements = function (webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, templateName, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/elements'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getElements.');
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((descriptionFilter !== undefined) && (descriptionFilter !== null)) {
                queryParameters['descriptionFilter'] = descriptionFilter;
            }
            if ((elementType !== undefined) && (elementType !== null)) {
                queryParameters['elementType'] = elementType;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.createElement = function (webId, element, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/elements'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createElement.');
            }
            if (element === null || element === undefined) {
                throw new Error('Required parameter element was null or undefined when calling createElement.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: element,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.getEventFrames = function (webId, canBeAcknowledged, categoryName, endTime, isAcknowledged, maxCount, nameFilter, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, templateName, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/eventframes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getEventFrames.');
            }
            if ((canBeAcknowledged !== undefined) && (canBeAcknowledged !== null)) {
                queryParameters['canBeAcknowledged'] = canBeAcknowledged;
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((isAcknowledged !== undefined) && (isAcknowledged !== null)) {
                queryParameters['isAcknowledged'] = isAcknowledged;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((searchMode !== undefined) && (searchMode !== null)) {
                queryParameters['searchMode'] = searchMode;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((severity !== undefined) && (severity !== null)) {
                queryParameters['severity'] = severity;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.getNotificationRules = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/notificationrules'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getNotificationRules.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.getPaths = function (webId, relativePath, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/paths'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getPaths.');
            }
            if ((relativePath !== undefined) && (relativePath !== null)) {
                queryParameters['relativePath'] = relativePath;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.getReferencedElements = function (webId, categoryName, descriptionFilter, elementType, maxCount, nameFilter, selectedFields, sortField, sortOrder, startIndex, templateName, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/referencedelements'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getReferencedElements.');
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((descriptionFilter !== undefined) && (descriptionFilter !== null)) {
                queryParameters['descriptionFilter'] = descriptionFilter;
            }
            if ((elementType !== undefined) && (elementType !== null)) {
                queryParameters['elementType'] = elementType;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.addReferencedElement = function (webId, referencedElementWebId, referenceType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/referencedelements'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling addReferencedElement.');
            }
            if (referencedElementWebId === null || referencedElementWebId === undefined) {
                throw new Error('Required parameter referencedElementWebId was null or undefined when calling addReferencedElement.');
            }
            if ((referencedElementWebId !== undefined) && (referencedElementWebId !== null)) {
                queryParameters['referencedElementWebId'] = referencedElementWebId;
            }
            if ((referenceType !== undefined) && (referenceType !== null)) {
                queryParameters['referenceType'] = referenceType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.removeReferencedElement = function (webId, referencedElementWebId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/referencedelements'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling removeReferencedElement.');
            }
            if (referencedElementWebId === null || referencedElementWebId === undefined) {
                throw new Error('Required parameter referencedElementWebId was null or undefined when calling removeReferencedElement.');
            }
            if ((referencedElementWebId !== undefined) && (referencedElementWebId !== null)) {
                queryParameters['referencedElementWebId'] = referencedElementWebId;
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.getSecurity = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/security'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
            }
            if (userIdentity === null || userIdentity === undefined) {
                throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
            }
            if ((userIdentity !== undefined) && (userIdentity !== null)) {
                queryParameters['userIdentity'] = userIdentity;
            }
            if ((forceRefresh !== undefined) && (forceRefresh !== null)) {
                queryParameters['forceRefresh'] = forceRefresh;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.getSecurityEntries = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.createSecurityEntry = function (webId, securityEntry, applyToChildren, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling createSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.getSecurityEntryByName = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling getSecurityEntryByName.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntryByName.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.updateSecurityEntry = function (name, webId, securityEntry, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling updateSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling updateSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.deleteSecurityEntry = function (name, webId, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling deleteSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling deleteSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.getMultiple = function (asParallel, includeMode, path, selectedFields, webId, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/multiple';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if ((asParallel !== undefined) && (asParallel !== null)) {
                queryParameters['asParallel'] = asParallel;
            }
            if ((includeMode !== undefined) && (includeMode !== null)) {
                queryParameters['includeMode'] = includeMode;
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.getElementsQuery = function (databaseWebId, maxCount, query, selectedFields, startIndex, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/search';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if ((databaseWebId !== undefined) && (databaseWebId !== null)) {
                queryParameters['databaseWebId'] = databaseWebId;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((query !== undefined) && (query !== null)) {
                queryParameters['query'] = query;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.createSearchByAttribute = function (query, noResults, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/searchbyattribute';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (query === null || query === undefined) {
                throw new Error('Required parameter query was null or undefined when calling createSearchByAttribute.');
            }
            if ((noResults !== undefined) && (noResults !== null)) {
                queryParameters['noResults'] = noResults;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: query,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementApi.prototype.executeSearchByAttribute = function (searchId, categoryName, descriptionFilter, maxCount, nameFilter, searchFullHierarchy, selectedFields, sortField, sortOrder, startIndex, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elements/searchbyattribute/{searchId}'
                .replace('{' + 'searchId' + '}', String(searchId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (searchId === null || searchId === undefined) {
                throw new Error('Required parameter searchId was null or undefined when calling executeSearchByAttribute.');
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((descriptionFilter !== undefined) && (descriptionFilter !== null)) {
                queryParameters['descriptionFilter'] = descriptionFilter;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return ElementApi;
    }());
    ElementApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.ElementApi = ElementApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var ElementCategoryApi = (function () {
        function ElementCategoryApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        ElementCategoryApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        ElementCategoryApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementcategories';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementCategoryApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementcategories/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementCategoryApi.prototype.update = function (webId, elementCategory, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementcategories/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (elementCategory === null || elementCategory === undefined) {
                throw new Error('Required parameter elementCategory was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: elementCategory,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementCategoryApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementcategories/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementCategoryApi.prototype.getSecurity = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementcategories/{webId}/security'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
            }
            if (userIdentity === null || userIdentity === undefined) {
                throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
            }
            if ((userIdentity !== undefined) && (userIdentity !== null)) {
                queryParameters['userIdentity'] = userIdentity;
            }
            if ((forceRefresh !== undefined) && (forceRefresh !== null)) {
                queryParameters['forceRefresh'] = forceRefresh;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementCategoryApi.prototype.getSecurityEntries = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementcategories/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementCategoryApi.prototype.createSecurityEntry = function (webId, securityEntry, applyToChildren, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementcategories/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling createSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementCategoryApi.prototype.getSecurityEntryByName = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementcategories/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling getSecurityEntryByName.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntryByName.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementCategoryApi.prototype.updateSecurityEntry = function (name, webId, securityEntry, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementcategories/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling updateSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling updateSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementCategoryApi.prototype.deleteSecurityEntry = function (name, webId, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementcategories/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling deleteSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling deleteSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return ElementCategoryApi;
    }());
    ElementCategoryApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.ElementCategoryApi = ElementCategoryApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var ElementTemplateApi = (function () {
        function ElementTemplateApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        ElementTemplateApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        ElementTemplateApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementtemplates';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementTemplateApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementtemplates/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementTemplateApi.prototype.update = function (webId, template, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementtemplates/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (template === null || template === undefined) {
                throw new Error('Required parameter template was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: template,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementTemplateApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementtemplates/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementTemplateApi.prototype.getAnalysisTemplates = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementtemplates/{webId}/analysistemplates'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getAnalysisTemplates.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementTemplateApi.prototype.getAttributeTemplates = function (webId, depthFirstTraverse, maxCount, selectedFields, showDescendants, showInherited, startIndex, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementtemplates/{webId}/attributetemplates'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getAttributeTemplates.');
            }
            if ((depthFirstTraverse !== undefined) && (depthFirstTraverse !== null)) {
                queryParameters['depthFirstTraverse'] = depthFirstTraverse;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((showDescendants !== undefined) && (showDescendants !== null)) {
                queryParameters['showDescendants'] = showDescendants;
            }
            if ((showInherited !== undefined) && (showInherited !== null)) {
                queryParameters['showInherited'] = showInherited;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementTemplateApi.prototype.createAttributeTemplate = function (webId, template, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementtemplates/{webId}/attributetemplates'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createAttributeTemplate.');
            }
            if (template === null || template === undefined) {
                throw new Error('Required parameter template was null or undefined when calling createAttributeTemplate.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: template,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementTemplateApi.prototype.getBaseElementTemplates = function (webId, maxCount, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementtemplates/{webId}/baseelementtemplates'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getBaseElementTemplates.');
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementTemplateApi.prototype.getCategories = function (webId, selectedFields, showInherited, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementtemplates/{webId}/categories'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getCategories.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((showInherited !== undefined) && (showInherited !== null)) {
                queryParameters['showInherited'] = showInherited;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementTemplateApi.prototype.getDerivedElementTemplates = function (webId, maxCount, selectedFields, showDescendants, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementtemplates/{webId}/derivedelementtemplates'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getDerivedElementTemplates.');
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((showDescendants !== undefined) && (showDescendants !== null)) {
                queryParameters['showDescendants'] = showDescendants;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementTemplateApi.prototype.getNotificationRuleTemplates = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementtemplates/{webId}/notificationruletemplates'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getNotificationRuleTemplates.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementTemplateApi.prototype.getSecurity = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementtemplates/{webId}/security'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
            }
            if (userIdentity === null || userIdentity === undefined) {
                throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
            }
            if ((userIdentity !== undefined) && (userIdentity !== null)) {
                queryParameters['userIdentity'] = userIdentity;
            }
            if ((forceRefresh !== undefined) && (forceRefresh !== null)) {
                queryParameters['forceRefresh'] = forceRefresh;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementTemplateApi.prototype.getSecurityEntries = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementtemplates/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementTemplateApi.prototype.createSecurityEntry = function (webId, securityEntry, applyToChildren, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementtemplates/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling createSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementTemplateApi.prototype.getSecurityEntryByName = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementtemplates/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling getSecurityEntryByName.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntryByName.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementTemplateApi.prototype.updateSecurityEntry = function (name, webId, securityEntry, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementtemplates/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling updateSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling updateSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        ElementTemplateApi.prototype.deleteSecurityEntry = function (name, webId, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/elementtemplates/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling deleteSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling deleteSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return ElementTemplateApi;
    }());
    ElementTemplateApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.ElementTemplateApi = ElementTemplateApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var EnumerationSetApi = (function () {
        function EnumerationSetApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        EnumerationSetApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        EnumerationSetApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/enumerationsets';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EnumerationSetApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/enumerationsets/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EnumerationSetApi.prototype.update = function (webId, enumerationSet, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/enumerationsets/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (enumerationSet === null || enumerationSet === undefined) {
                throw new Error('Required parameter enumerationSet was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: enumerationSet,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EnumerationSetApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/enumerationsets/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EnumerationSetApi.prototype.getValues = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/enumerationsets/{webId}/enumerationvalues'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getValues.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EnumerationSetApi.prototype.createValue = function (webId, enumerationValue, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/enumerationsets/{webId}/enumerationvalues'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createValue.');
            }
            if (enumerationValue === null || enumerationValue === undefined) {
                throw new Error('Required parameter enumerationValue was null or undefined when calling createValue.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: enumerationValue,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EnumerationSetApi.prototype.getSecurity = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/enumerationsets/{webId}/security'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
            }
            if (userIdentity === null || userIdentity === undefined) {
                throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
            }
            if ((userIdentity !== undefined) && (userIdentity !== null)) {
                queryParameters['userIdentity'] = userIdentity;
            }
            if ((forceRefresh !== undefined) && (forceRefresh !== null)) {
                queryParameters['forceRefresh'] = forceRefresh;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EnumerationSetApi.prototype.getSecurityEntries = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/enumerationsets/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EnumerationSetApi.prototype.createSecurityEntry = function (webId, securityEntry, applyToChildren, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/enumerationsets/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling createSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EnumerationSetApi.prototype.getSecurityEntryByName = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/enumerationsets/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling getSecurityEntryByName.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntryByName.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EnumerationSetApi.prototype.updateSecurityEntry = function (name, webId, securityEntry, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/enumerationsets/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling updateSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling updateSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EnumerationSetApi.prototype.deleteSecurityEntry = function (name, webId, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/enumerationsets/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling deleteSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling deleteSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return EnumerationSetApi;
    }());
    EnumerationSetApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.EnumerationSetApi = EnumerationSetApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var EnumerationValueApi = (function () {
        function EnumerationValueApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        EnumerationValueApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        EnumerationValueApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/enumerationvalues';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EnumerationValueApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/enumerationvalues/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EnumerationValueApi.prototype.updateEnumerationValue = function (webId, enumerationValue, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/enumerationvalues/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateEnumerationValue.');
            }
            if (enumerationValue === null || enumerationValue === undefined) {
                throw new Error('Required parameter enumerationValue was null or undefined when calling updateEnumerationValue.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: enumerationValue,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EnumerationValueApi.prototype.deleteEnumerationValue = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/enumerationvalues/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling deleteEnumerationValue.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return EnumerationValueApi;
    }());
    EnumerationValueApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.EnumerationValueApi = EnumerationValueApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var EventFrameApi = (function () {
        function EventFrameApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        EventFrameApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        EventFrameApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.update = function (webId, eventFrame, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (eventFrame === null || eventFrame === undefined) {
                throw new Error('Required parameter eventFrame was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: eventFrame,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.acknowledge = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/acknowledge'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling acknowledge.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.getAnnotations = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/annotations'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getAnnotations.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.createAnnotation = function (webId, annotation, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/annotations'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createAnnotation.');
            }
            if (annotation === null || annotation === undefined) {
                throw new Error('Required parameter annotation was null or undefined when calling createAnnotation.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: annotation,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.getAnnotationById = function (id, webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}'
                .replace('{' + 'id' + '}', String(id))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getAnnotationById.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getAnnotationById.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.updateAnnotation = function (id, webId, annotation, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}'
                .replace('{' + 'id' + '}', String(id))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling updateAnnotation.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateAnnotation.');
            }
            if (annotation === null || annotation === undefined) {
                throw new Error('Required parameter annotation was null or undefined when calling updateAnnotation.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: annotation,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.deleteAnnotation = function (id, webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}'
                .replace('{' + 'id' + '}', String(id))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling deleteAnnotation.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling deleteAnnotation.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.deleteAnnotationAttachmentMediaById = function (id, webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}/attachment/media'
                .replace('{' + 'id' + '}', String(id))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling deleteAnnotationAttachmentMediaById.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling deleteAnnotationAttachmentMediaById.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.getAnnotationAttachmentMediaMetadataById = function (id, webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/annotations/{id}/attachment/media/metadata'
                .replace('{' + 'id' + '}', String(id))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling getAnnotationAttachmentMediaMetadataById.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getAnnotationAttachmentMediaMetadataById.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.getAttributes = function (webId, categoryName, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startIndex, templateName, trait, traitCategory, valueType, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/attributes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getAttributes.');
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((showExcluded !== undefined) && (showExcluded !== null)) {
                queryParameters['showExcluded'] = showExcluded;
            }
            if ((showHidden !== undefined) && (showHidden !== null)) {
                queryParameters['showHidden'] = showHidden;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((trait !== undefined) && (trait !== null)) {
                queryParameters['trait'] = trait;
            }
            if ((traitCategory !== undefined) && (traitCategory !== null)) {
                queryParameters['traitCategory'] = traitCategory;
            }
            if ((valueType !== undefined) && (valueType !== null)) {
                queryParameters['valueType'] = valueType;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.createAttribute = function (webId, attribute, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/attributes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createAttribute.');
            }
            if (attribute === null || attribute === undefined) {
                throw new Error('Required parameter attribute was null or undefined when calling createAttribute.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: attribute,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.captureValues = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/attributes/capture'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling captureValues.');
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.getCategories = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/categories'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getCategories.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.createConfig = function (webId, includeChildElements, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/config'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createConfig.');
            }
            if ((includeChildElements !== undefined) && (includeChildElements !== null)) {
                queryParameters['includeChildElements'] = includeChildElements;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.findEventFrameAttributes = function (webId, attributeCategory, attributeDescriptionFilter, attributeNameFilter, attributeType, endTime, eventFrameCategory, eventFrameDescriptionFilter, eventFrameNameFilter, eventFrameTemplate, maxCount, referencedElementNameFilter, searchFullHierarchy, searchMode, selectedFields, sortField, sortOrder, startIndex, startTime, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/eventframeattributes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling findEventFrameAttributes.');
            }
            if ((attributeCategory !== undefined) && (attributeCategory !== null)) {
                queryParameters['attributeCategory'] = attributeCategory;
            }
            if ((attributeDescriptionFilter !== undefined) && (attributeDescriptionFilter !== null)) {
                queryParameters['attributeDescriptionFilter'] = attributeDescriptionFilter;
            }
            if ((attributeNameFilter !== undefined) && (attributeNameFilter !== null)) {
                queryParameters['attributeNameFilter'] = attributeNameFilter;
            }
            if ((attributeType !== undefined) && (attributeType !== null)) {
                queryParameters['attributeType'] = attributeType;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((eventFrameCategory !== undefined) && (eventFrameCategory !== null)) {
                queryParameters['eventFrameCategory'] = eventFrameCategory;
            }
            if ((eventFrameDescriptionFilter !== undefined) && (eventFrameDescriptionFilter !== null)) {
                queryParameters['eventFrameDescriptionFilter'] = eventFrameDescriptionFilter;
            }
            if ((eventFrameNameFilter !== undefined) && (eventFrameNameFilter !== null)) {
                queryParameters['eventFrameNameFilter'] = eventFrameNameFilter;
            }
            if ((eventFrameTemplate !== undefined) && (eventFrameTemplate !== null)) {
                queryParameters['eventFrameTemplate'] = eventFrameTemplate;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((referencedElementNameFilter !== undefined) && (referencedElementNameFilter !== null)) {
                queryParameters['referencedElementNameFilter'] = referencedElementNameFilter;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((searchMode !== undefined) && (searchMode !== null)) {
                queryParameters['searchMode'] = searchMode;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.getEventFrames = function (webId, canBeAcknowledged, categoryName, endTime, isAcknowledged, maxCount, nameFilter, referencedElementNameFilter, referencedElementTemplateName, searchFullHierarchy, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, templateName, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/eventframes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getEventFrames.');
            }
            if ((canBeAcknowledged !== undefined) && (canBeAcknowledged !== null)) {
                queryParameters['canBeAcknowledged'] = canBeAcknowledged;
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((isAcknowledged !== undefined) && (isAcknowledged !== null)) {
                queryParameters['isAcknowledged'] = isAcknowledged;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((referencedElementNameFilter !== undefined) && (referencedElementNameFilter !== null)) {
                queryParameters['referencedElementNameFilter'] = referencedElementNameFilter;
            }
            if ((referencedElementTemplateName !== undefined) && (referencedElementTemplateName !== null)) {
                queryParameters['referencedElementTemplateName'] = referencedElementTemplateName;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((searchMode !== undefined) && (searchMode !== null)) {
                queryParameters['searchMode'] = searchMode;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((severity !== undefined) && (severity !== null)) {
                queryParameters['severity'] = severity;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.createEventFrame = function (webId, eventFrame, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/eventframes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createEventFrame.');
            }
            if (eventFrame === null || eventFrame === undefined) {
                throw new Error('Required parameter eventFrame was null or undefined when calling createEventFrame.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: eventFrame,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.getReferencedElements = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/referencedelements'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getReferencedElements.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.getSecurity = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/security'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
            }
            if (userIdentity === null || userIdentity === undefined) {
                throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
            }
            if ((userIdentity !== undefined) && (userIdentity !== null)) {
                queryParameters['userIdentity'] = userIdentity;
            }
            if ((forceRefresh !== undefined) && (forceRefresh !== null)) {
                queryParameters['forceRefresh'] = forceRefresh;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.getSecurityEntries = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.createSecurityEntry = function (webId, securityEntry, applyToChildren, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling createSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.getSecurityEntryByName = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling getSecurityEntryByName.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntryByName.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.updateSecurityEntry = function (name, webId, securityEntry, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling updateSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling updateSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.deleteSecurityEntry = function (name, webId, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling deleteSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling deleteSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.getMultiple = function (asParallel, includeMode, path, selectedFields, webId, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/multiple';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if ((asParallel !== undefined) && (asParallel !== null)) {
                queryParameters['asParallel'] = asParallel;
            }
            if ((includeMode !== undefined) && (includeMode !== null)) {
                queryParameters['includeMode'] = includeMode;
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.getEventFramesQuery = function (databaseWebId, maxCount, query, selectedFields, startIndex, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/search';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if ((databaseWebId !== undefined) && (databaseWebId !== null)) {
                queryParameters['databaseWebId'] = databaseWebId;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((query !== undefined) && (query !== null)) {
                queryParameters['query'] = query;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.createSearchByAttribute = function (query, noResults, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/searchbyattribute';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (query === null || query === undefined) {
                throw new Error('Required parameter query was null or undefined when calling createSearchByAttribute.');
            }
            if ((noResults !== undefined) && (noResults !== null)) {
                queryParameters['noResults'] = noResults;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: query,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        EventFrameApi.prototype.executeSearchByAttribute = function (searchId, canBeAcknowledged, endTime, isAcknowledged, maxCount, nameFilter, referencedElementNameFilter, searchFullHierarchy, searchMode, selectedFields, severity, sortField, sortOrder, startIndex, startTime, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/eventframes/searchbyattribute/{searchId}'
                .replace('{' + 'searchId' + '}', String(searchId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (searchId === null || searchId === undefined) {
                throw new Error('Required parameter searchId was null or undefined when calling executeSearchByAttribute.');
            }
            if ((canBeAcknowledged !== undefined) && (canBeAcknowledged !== null)) {
                queryParameters['canBeAcknowledged'] = canBeAcknowledged;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((isAcknowledged !== undefined) && (isAcknowledged !== null)) {
                queryParameters['isAcknowledged'] = isAcknowledged;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((referencedElementNameFilter !== undefined) && (referencedElementNameFilter !== null)) {
                queryParameters['referencedElementNameFilter'] = referencedElementNameFilter;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((searchMode !== undefined) && (searchMode !== null)) {
                queryParameters['searchMode'] = searchMode;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((severity !== undefined) && (severity !== null)) {
                queryParameters['severity'] = severity;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return EventFrameApi;
    }());
    EventFrameApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.EventFrameApi = EventFrameApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var HomeApi = (function () {
        function HomeApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        HomeApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        HomeApi.prototype.get = function (extraHttpRequestParams) {
            var localVarPath = this.basePath + '/';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return HomeApi;
    }());
    HomeApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.HomeApi = HomeApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var NotificationContactTemplateApi = (function () {
        function NotificationContactTemplateApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        NotificationContactTemplateApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        NotificationContactTemplateApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/notificationcontacttemplates/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return NotificationContactTemplateApi;
    }());
    NotificationContactTemplateApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.NotificationContactTemplateApi = NotificationContactTemplateApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var NotificationRuleApi = (function () {
        function NotificationRuleApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        NotificationRuleApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        NotificationRuleApi.prototype.getNotificationRules = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/notificationrules/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getNotificationRules.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        NotificationRuleApi.prototype.getNotificationRuleSubscribers = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/notificationrules/{webId}/notificationrulesubscribers'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getNotificationRuleSubscribers.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        NotificationRuleApi.prototype.getNotificationRulesQuery = function (databaseWebId, maxCount, query, selectedFields, startIndex, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/notificationrules/search';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if ((databaseWebId !== undefined) && (databaseWebId !== null)) {
                queryParameters['databaseWebId'] = databaseWebId;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((query !== undefined) && (query !== null)) {
                queryParameters['query'] = query;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return NotificationRuleApi;
    }());
    NotificationRuleApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.NotificationRuleApi = NotificationRuleApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var NotificationRuleSubscriberApi = (function () {
        function NotificationRuleSubscriberApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        NotificationRuleSubscriberApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        NotificationRuleSubscriberApi.prototype.getNotificationRuleSubscriberByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/notificationrulesubscribers';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getNotificationRuleSubscriberByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        NotificationRuleSubscriberApi.prototype.getNotificationRuleSubscriber = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/notificationrulesubscribers/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getNotificationRuleSubscriber.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        NotificationRuleSubscriberApi.prototype.getNotificationRuleSubscribers = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/notificationrulesubscribers/{webId}/notificationrulesubscribers'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getNotificationRuleSubscribers.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return NotificationRuleSubscriberApi;
    }());
    NotificationRuleSubscriberApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.NotificationRuleSubscriberApi = NotificationRuleSubscriberApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var NotificationRuleTemplateApi = (function () {
        function NotificationRuleTemplateApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        NotificationRuleTemplateApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        NotificationRuleTemplateApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/notificationruletemplates/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        NotificationRuleTemplateApi.prototype.getNotificationRuleTemplateSubscribers = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/notificationruletemplates/{webId}/notificationrulesubscribers'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getNotificationRuleTemplateSubscribers.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        NotificationRuleTemplateApi.prototype.getNotificationRuleTemplatesQuery = function (databaseWebId, maxCount, query, selectedFields, startIndex, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/notificationruletemplates/search';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if ((databaseWebId !== undefined) && (databaseWebId !== null)) {
                queryParameters['databaseWebId'] = databaseWebId;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((query !== undefined) && (query !== null)) {
                queryParameters['query'] = query;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((startIndex !== undefined) && (startIndex !== null)) {
                queryParameters['startIndex'] = startIndex;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return NotificationRuleTemplateApi;
    }());
    NotificationRuleTemplateApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.NotificationRuleTemplateApi = NotificationRuleTemplateApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PointApi = (function () {
        function PointApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        PointApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        PointApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/points';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        PointApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/points/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        PointApi.prototype.update = function (webId, pointDTO, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/points/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (pointDTO === null || pointDTO === undefined) {
                throw new Error('Required parameter pointDTO was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: pointDTO,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        PointApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/points/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        PointApi.prototype.getAttributes = function (webId, name, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/points/{webId}/attributes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getAttributes.');
            }
            if ((name !== undefined) && (name !== null)) {
                queryParameters['name'] = name;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        PointApi.prototype.getAttributeByName = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/points/{webId}/attributes/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling getAttributeByName.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getAttributeByName.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        PointApi.prototype.getMultiple = function (asParallel, includeMode, path, selectedFields, webId, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/points/multiple';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if ((asParallel !== undefined) && (asParallel !== null)) {
                queryParameters['asParallel'] = asParallel;
            }
            if ((includeMode !== undefined) && (includeMode !== null)) {
                queryParameters['includeMode'] = includeMode;
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return PointApi;
    }());
    PointApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.PointApi = PointApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var SecurityIdentityApi = (function () {
        function SecurityIdentityApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        SecurityIdentityApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        SecurityIdentityApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/securityidentities';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        SecurityIdentityApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/securityidentities/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        SecurityIdentityApi.prototype.update = function (webId, securityIdentity, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/securityidentities/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (securityIdentity === null || securityIdentity === undefined) {
                throw new Error('Required parameter securityIdentity was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: securityIdentity,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        SecurityIdentityApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/securityidentities/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        SecurityIdentityApi.prototype.getSecurity = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/securityidentities/{webId}/security'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
            }
            if (userIdentity === null || userIdentity === undefined) {
                throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
            }
            if ((userIdentity !== undefined) && (userIdentity !== null)) {
                queryParameters['userIdentity'] = userIdentity;
            }
            if ((forceRefresh !== undefined) && (forceRefresh !== null)) {
                queryParameters['forceRefresh'] = forceRefresh;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        SecurityIdentityApi.prototype.getSecurityEntries = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/securityidentities/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        SecurityIdentityApi.prototype.getSecurityEntryByName = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/securityidentities/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling getSecurityEntryByName.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntryByName.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        SecurityIdentityApi.prototype.getSecurityMappings = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/securityidentities/{webId}/securitymappings'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityMappings.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return SecurityIdentityApi;
    }());
    SecurityIdentityApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.SecurityIdentityApi = SecurityIdentityApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var SecurityMappingApi = (function () {
        function SecurityMappingApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        SecurityMappingApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        SecurityMappingApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/securitymappings';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        SecurityMappingApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/securitymappings/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        SecurityMappingApi.prototype.update = function (webId, securityMapping, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/securitymappings/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (securityMapping === null || securityMapping === undefined) {
                throw new Error('Required parameter securityMapping was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: securityMapping,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        SecurityMappingApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/securitymappings/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        SecurityMappingApi.prototype.getSecurity = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/securitymappings/{webId}/security'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
            }
            if (userIdentity === null || userIdentity === undefined) {
                throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
            }
            if ((userIdentity !== undefined) && (userIdentity !== null)) {
                queryParameters['userIdentity'] = userIdentity;
            }
            if ((forceRefresh !== undefined) && (forceRefresh !== null)) {
                queryParameters['forceRefresh'] = forceRefresh;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        SecurityMappingApi.prototype.getSecurityEntries = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/securitymappings/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        SecurityMappingApi.prototype.getSecurityEntryByName = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/securitymappings/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling getSecurityEntryByName.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntryByName.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return SecurityMappingApi;
    }());
    SecurityMappingApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.SecurityMappingApi = SecurityMappingApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var StreamApi = (function () {
        function StreamApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        StreamApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        StreamApi.prototype.getChannel = function (webId, heartbeatRate, includeInitialValues, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streams/{webId}/channel'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getChannel.');
            }
            if ((heartbeatRate !== undefined) && (heartbeatRate !== null)) {
                queryParameters['heartbeatRate'] = heartbeatRate;
            }
            if ((includeInitialValues !== undefined) && (includeInitialValues !== null)) {
                queryParameters['includeInitialValues'] = includeInitialValues;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamApi.prototype.getEnd = function (webId, desiredUnits, selectedFields, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streams/{webId}/end'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getEnd.');
            }
            if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
                queryParameters['desiredUnits'] = desiredUnits;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamApi.prototype.getInterpolated = function (webId, desiredUnits, endTime, filterExpression, includeFilteredValues, interval, selectedFields, startTime, syncTime, syncTimeBoundaryType, timeZone, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streams/{webId}/interpolated'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getInterpolated.');
            }
            if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
                queryParameters['desiredUnits'] = desiredUnits;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((filterExpression !== undefined) && (filterExpression !== null)) {
                queryParameters['filterExpression'] = filterExpression;
            }
            if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
                queryParameters['includeFilteredValues'] = includeFilteredValues;
            }
            if ((interval !== undefined) && (interval !== null)) {
                queryParameters['interval'] = interval;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((syncTime !== undefined) && (syncTime !== null)) {
                queryParameters['syncTime'] = syncTime;
            }
            if ((syncTimeBoundaryType !== undefined) && (syncTimeBoundaryType !== null)) {
                queryParameters['syncTimeBoundaryType'] = syncTimeBoundaryType;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamApi.prototype.getInterpolatedAtTimes = function (webId, desiredUnits, filterExpression, includeFilteredValues, selectedFields, sortOrder, time, timeZone, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streams/{webId}/interpolatedattimes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getInterpolatedAtTimes.');
            }
            if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
                queryParameters['desiredUnits'] = desiredUnits;
            }
            if ((filterExpression !== undefined) && (filterExpression !== null)) {
                queryParameters['filterExpression'] = filterExpression;
            }
            if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
                queryParameters['includeFilteredValues'] = includeFilteredValues;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((time !== undefined) && (time !== null)) {
                queryParameters['time'] = time;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamApi.prototype.getPlot = function (webId, desiredUnits, endTime, intervals, selectedFields, startTime, timeZone, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streams/{webId}/plot'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getPlot.');
            }
            if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
                queryParameters['desiredUnits'] = desiredUnits;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((intervals !== undefined) && (intervals !== null)) {
                queryParameters['intervals'] = intervals;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamApi.prototype.getRecorded = function (webId, associations, boundaryType, desiredUnits, endTime, filterExpression, includeFilteredValues, maxCount, selectedFields, startTime, timeZone, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streams/{webId}/recorded'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getRecorded.');
            }
            if ((associations !== undefined) && (associations !== null)) {
                queryParameters['associations'] = associations;
            }
            if ((boundaryType !== undefined) && (boundaryType !== null)) {
                queryParameters['boundaryType'] = boundaryType;
            }
            if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
                queryParameters['desiredUnits'] = desiredUnits;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((filterExpression !== undefined) && (filterExpression !== null)) {
                queryParameters['filterExpression'] = filterExpression;
            }
            if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
                queryParameters['includeFilteredValues'] = includeFilteredValues;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamApi.prototype.updateValues = function (webId, values, bufferOption, updateOption, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streams/{webId}/recorded'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateValues.');
            }
            if (values === null || values === undefined) {
                throw new Error('Required parameter values was null or undefined when calling updateValues.');
            }
            if ((bufferOption !== undefined) && (bufferOption !== null)) {
                queryParameters['bufferOption'] = bufferOption;
            }
            if ((updateOption !== undefined) && (updateOption !== null)) {
                queryParameters['updateOption'] = updateOption;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: values,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamApi.prototype.getRecordedAtTime = function (webId, time, associations, desiredUnits, retrievalMode, selectedFields, timeZone, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streams/{webId}/recordedattime'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTime.');
            }
            if (time === null || time === undefined) {
                throw new Error('Required parameter time was null or undefined when calling getRecordedAtTime.');
            }
            if ((time !== undefined) && (time !== null)) {
                queryParameters['time'] = time;
            }
            if ((associations !== undefined) && (associations !== null)) {
                queryParameters['associations'] = associations;
            }
            if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
                queryParameters['desiredUnits'] = desiredUnits;
            }
            if ((retrievalMode !== undefined) && (retrievalMode !== null)) {
                queryParameters['retrievalMode'] = retrievalMode;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamApi.prototype.getRecordedAtTimes = function (webId, associations, desiredUnits, retrievalMode, selectedFields, sortOrder, time, timeZone, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streams/{webId}/recordedattimes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTimes.');
            }
            if ((associations !== undefined) && (associations !== null)) {
                queryParameters['associations'] = associations;
            }
            if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
                queryParameters['desiredUnits'] = desiredUnits;
            }
            if ((retrievalMode !== undefined) && (retrievalMode !== null)) {
                queryParameters['retrievalMode'] = retrievalMode;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((time !== undefined) && (time !== null)) {
                queryParameters['time'] = time;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamApi.prototype.getSummary = function (webId, calculationBasis, endTime, filterExpression, sampleInterval, sampleType, selectedFields, startTime, summaryDuration, summaryType, timeType, timeZone, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streams/{webId}/summary'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSummary.');
            }
            if ((calculationBasis !== undefined) && (calculationBasis !== null)) {
                queryParameters['calculationBasis'] = calculationBasis;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((filterExpression !== undefined) && (filterExpression !== null)) {
                queryParameters['filterExpression'] = filterExpression;
            }
            if ((sampleInterval !== undefined) && (sampleInterval !== null)) {
                queryParameters['sampleInterval'] = sampleInterval;
            }
            if ((sampleType !== undefined) && (sampleType !== null)) {
                queryParameters['sampleType'] = sampleType;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((summaryDuration !== undefined) && (summaryDuration !== null)) {
                queryParameters['summaryDuration'] = summaryDuration;
            }
            if ((summaryType !== undefined) && (summaryType !== null)) {
                queryParameters['summaryType'] = summaryType;
            }
            if ((timeType !== undefined) && (timeType !== null)) {
                queryParameters['timeType'] = timeType;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamApi.prototype.registerStreamUpdate = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streams/{webId}/updates'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling registerStreamUpdate.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamApi.prototype.getValue = function (webId, desiredUnits, selectedFields, time, timeZone, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streams/{webId}/value'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getValue.');
            }
            if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
                queryParameters['desiredUnits'] = desiredUnits;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((time !== undefined) && (time !== null)) {
                queryParameters['time'] = time;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamApi.prototype.updateValue = function (webId, value, bufferOption, updateOption, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streams/{webId}/value'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateValue.');
            }
            if (value === null || value === undefined) {
                throw new Error('Required parameter value was null or undefined when calling updateValue.');
            }
            if ((bufferOption !== undefined) && (bufferOption !== null)) {
                queryParameters['bufferOption'] = bufferOption;
            }
            if ((updateOption !== undefined) && (updateOption !== null)) {
                queryParameters['updateOption'] = updateOption;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: value,
                // withCredentials: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamApi.prototype.retrieveStreamUpdate = function (marker, desiredUnits, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streams/updates/{marker}'
                .replace('{' + 'marker' + '}', String(marker));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (marker === null || marker === undefined) {
                throw new Error('Required parameter marker was null or undefined when calling retrieveStreamUpdate.');
            }
            if ((desiredUnits !== undefined) && (desiredUnits !== null)) {
                queryParameters['desiredUnits'] = desiredUnits;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return StreamApi;
    }());
    StreamApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.StreamApi = StreamApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var StreamSetApi = (function () {
        function StreamSetApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        StreamSetApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        StreamSetApi.prototype.getChannel = function (webId, categoryName, heartbeatRate, includeInitialValues, nameFilter, searchFullHierarchy, showExcluded, showHidden, templateName, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/{webId}/channel'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getChannel.');
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((heartbeatRate !== undefined) && (heartbeatRate !== null)) {
                queryParameters['heartbeatRate'] = heartbeatRate;
            }
            if ((includeInitialValues !== undefined) && (includeInitialValues !== null)) {
                queryParameters['includeInitialValues'] = includeInitialValues;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((showExcluded !== undefined) && (showExcluded !== null)) {
                queryParameters['showExcluded'] = showExcluded;
            }
            if ((showHidden !== undefined) && (showHidden !== null)) {
                queryParameters['showHidden'] = showHidden;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getEnd = function (webId, categoryName, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, templateName, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/{webId}/end'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getEnd.');
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((showExcluded !== undefined) && (showExcluded !== null)) {
                queryParameters['showExcluded'] = showExcluded;
            }
            if ((showHidden !== undefined) && (showHidden !== null)) {
                queryParameters['showHidden'] = showHidden;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getInterpolated = function (webId, categoryName, endTime, filterExpression, includeFilteredValues, interval, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startTime, syncTime, syncTimeBoundaryType, templateName, timeZone, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/{webId}/interpolated'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getInterpolated.');
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((filterExpression !== undefined) && (filterExpression !== null)) {
                queryParameters['filterExpression'] = filterExpression;
            }
            if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
                queryParameters['includeFilteredValues'] = includeFilteredValues;
            }
            if ((interval !== undefined) && (interval !== null)) {
                queryParameters['interval'] = interval;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((showExcluded !== undefined) && (showExcluded !== null)) {
                queryParameters['showExcluded'] = showExcluded;
            }
            if ((showHidden !== undefined) && (showHidden !== null)) {
                queryParameters['showHidden'] = showHidden;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((syncTime !== undefined) && (syncTime !== null)) {
                queryParameters['syncTime'] = syncTime;
            }
            if ((syncTimeBoundaryType !== undefined) && (syncTimeBoundaryType !== null)) {
                queryParameters['syncTimeBoundaryType'] = syncTimeBoundaryType;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getInterpolatedAtTimes = function (webId, time, categoryName, filterExpression, includeFilteredValues, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortOrder, templateName, timeZone, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/{webId}/interpolatedattimes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getInterpolatedAtTimes.');
            }
            if (time === null || time === undefined) {
                throw new Error('Required parameter time was null or undefined when calling getInterpolatedAtTimes.');
            }
            if ((time !== undefined) && (time !== null)) {
                queryParameters['time'] = time;
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((filterExpression !== undefined) && (filterExpression !== null)) {
                queryParameters['filterExpression'] = filterExpression;
            }
            if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
                queryParameters['includeFilteredValues'] = includeFilteredValues;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((showExcluded !== undefined) && (showExcluded !== null)) {
                queryParameters['showExcluded'] = showExcluded;
            }
            if ((showHidden !== undefined) && (showHidden !== null)) {
                queryParameters['showHidden'] = showHidden;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getPlot = function (webId, categoryName, endTime, intervals, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startTime, templateName, timeZone, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/{webId}/plot'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getPlot.');
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((intervals !== undefined) && (intervals !== null)) {
                queryParameters['intervals'] = intervals;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((showExcluded !== undefined) && (showExcluded !== null)) {
                queryParameters['showExcluded'] = showExcluded;
            }
            if ((showHidden !== undefined) && (showHidden !== null)) {
                queryParameters['showHidden'] = showHidden;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getRecorded = function (webId, boundaryType, categoryName, endTime, filterExpression, includeFilteredValues, maxCount, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, startTime, templateName, timeZone, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/{webId}/recorded'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getRecorded.');
            }
            if ((boundaryType !== undefined) && (boundaryType !== null)) {
                queryParameters['boundaryType'] = boundaryType;
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((filterExpression !== undefined) && (filterExpression !== null)) {
                queryParameters['filterExpression'] = filterExpression;
            }
            if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
                queryParameters['includeFilteredValues'] = includeFilteredValues;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((showExcluded !== undefined) && (showExcluded !== null)) {
                queryParameters['showExcluded'] = showExcluded;
            }
            if ((showHidden !== undefined) && (showHidden !== null)) {
                queryParameters['showHidden'] = showHidden;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.updateValues = function (webId, values, bufferOption, updateOption, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/{webId}/recorded'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateValues.');
            }
            if (values === null || values === undefined) {
                throw new Error('Required parameter values was null or undefined when calling updateValues.');
            }
            if ((bufferOption !== undefined) && (bufferOption !== null)) {
                queryParameters['bufferOption'] = bufferOption;
            }
            if ((updateOption !== undefined) && (updateOption !== null)) {
                queryParameters['updateOption'] = updateOption;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: values,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getRecordedAtTime = function (webId, time, categoryName, nameFilter, retrievalMode, searchFullHierarchy, selectedFields, showExcluded, showHidden, templateName, timeZone, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/{webId}/recordedattime'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTime.');
            }
            if (time === null || time === undefined) {
                throw new Error('Required parameter time was null or undefined when calling getRecordedAtTime.');
            }
            if ((time !== undefined) && (time !== null)) {
                queryParameters['time'] = time;
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((retrievalMode !== undefined) && (retrievalMode !== null)) {
                queryParameters['retrievalMode'] = retrievalMode;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((showExcluded !== undefined) && (showExcluded !== null)) {
                queryParameters['showExcluded'] = showExcluded;
            }
            if ((showHidden !== undefined) && (showHidden !== null)) {
                queryParameters['showHidden'] = showHidden;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getRecordedAtTimes = function (webId, time, categoryName, nameFilter, retrievalMode, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortOrder, templateName, timeZone, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/{webId}/recordedattimes'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTimes.');
            }
            if (time === null || time === undefined) {
                throw new Error('Required parameter time was null or undefined when calling getRecordedAtTimes.');
            }
            if ((time !== undefined) && (time !== null)) {
                queryParameters['time'] = time;
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((retrievalMode !== undefined) && (retrievalMode !== null)) {
                queryParameters['retrievalMode'] = retrievalMode;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((showExcluded !== undefined) && (showExcluded !== null)) {
                queryParameters['showExcluded'] = showExcluded;
            }
            if ((showHidden !== undefined) && (showHidden !== null)) {
                queryParameters['showHidden'] = showHidden;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getSummaries = function (webId, calculationBasis, categoryName, endTime, filterExpression, nameFilter, sampleInterval, sampleType, searchFullHierarchy, selectedFields, showExcluded, showHidden, startTime, summaryDuration, summaryType, templateName, timeType, timeZone, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/{webId}/summary'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSummaries.');
            }
            if ((calculationBasis !== undefined) && (calculationBasis !== null)) {
                queryParameters['calculationBasis'] = calculationBasis;
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((filterExpression !== undefined) && (filterExpression !== null)) {
                queryParameters['filterExpression'] = filterExpression;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((sampleInterval !== undefined) && (sampleInterval !== null)) {
                queryParameters['sampleInterval'] = sampleInterval;
            }
            if ((sampleType !== undefined) && (sampleType !== null)) {
                queryParameters['sampleType'] = sampleType;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((showExcluded !== undefined) && (showExcluded !== null)) {
                queryParameters['showExcluded'] = showExcluded;
            }
            if ((showHidden !== undefined) && (showHidden !== null)) {
                queryParameters['showHidden'] = showHidden;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((summaryDuration !== undefined) && (summaryDuration !== null)) {
                queryParameters['summaryDuration'] = summaryDuration;
            }
            if ((summaryType !== undefined) && (summaryType !== null)) {
                queryParameters['summaryType'] = summaryType;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((timeType !== undefined) && (timeType !== null)) {
                queryParameters['timeType'] = timeType;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getValues = function (webId, categoryName, nameFilter, searchFullHierarchy, selectedFields, showExcluded, showHidden, sortField, sortOrder, templateName, time, timeZone, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/{webId}/value'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getValues.');
            }
            if ((categoryName !== undefined) && (categoryName !== null)) {
                queryParameters['categoryName'] = categoryName;
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((searchFullHierarchy !== undefined) && (searchFullHierarchy !== null)) {
                queryParameters['searchFullHierarchy'] = searchFullHierarchy;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((showExcluded !== undefined) && (showExcluded !== null)) {
                queryParameters['showExcluded'] = showExcluded;
            }
            if ((showHidden !== undefined) && (showHidden !== null)) {
                queryParameters['showHidden'] = showHidden;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((templateName !== undefined) && (templateName !== null)) {
                queryParameters['templateName'] = templateName;
            }
            if ((time !== undefined) && (time !== null)) {
                queryParameters['time'] = time;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.updateValue = function (webId, values, bufferOption, updateOption, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/{webId}/value'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateValue.');
            }
            if (values === null || values === undefined) {
                throw new Error('Required parameter values was null or undefined when calling updateValue.');
            }
            if ((bufferOption !== undefined) && (bufferOption !== null)) {
                queryParameters['bufferOption'] = bufferOption;
            }
            if ((updateOption !== undefined) && (updateOption !== null)) {
                queryParameters['updateOption'] = updateOption;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: values,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getChannelAdHoc = function (webId, heartbeatRate, includeInitialValues, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/channel';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getChannelAdHoc.');
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            if ((heartbeatRate !== undefined) && (heartbeatRate !== null)) {
                queryParameters['heartbeatRate'] = heartbeatRate;
            }
            if ((includeInitialValues !== undefined) && (includeInitialValues !== null)) {
                queryParameters['includeInitialValues'] = includeInitialValues;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getEndAdHoc = function (webId, selectedFields, sortField, sortOrder, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/end';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getEndAdHoc.');
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getInterpolatedAdHoc = function (webId, endTime, filterExpression, includeFilteredValues, interval, selectedFields, sortField, sortOrder, startTime, syncTime, syncTimeBoundaryType, timeZone, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/interpolated';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getInterpolatedAdHoc.');
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((filterExpression !== undefined) && (filterExpression !== null)) {
                queryParameters['filterExpression'] = filterExpression;
            }
            if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
                queryParameters['includeFilteredValues'] = includeFilteredValues;
            }
            if ((interval !== undefined) && (interval !== null)) {
                queryParameters['interval'] = interval;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((syncTime !== undefined) && (syncTime !== null)) {
                queryParameters['syncTime'] = syncTime;
            }
            if ((syncTimeBoundaryType !== undefined) && (syncTimeBoundaryType !== null)) {
                queryParameters['syncTimeBoundaryType'] = syncTimeBoundaryType;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getInterpolatedAtTimesAdHoc = function (time, webId, filterExpression, includeFilteredValues, selectedFields, sortOrder, timeZone, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/interpolatedattimes';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (time === null || time === undefined) {
                throw new Error('Required parameter time was null or undefined when calling getInterpolatedAtTimesAdHoc.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getInterpolatedAtTimesAdHoc.');
            }
            if ((time !== undefined) && (time !== null)) {
                queryParameters['time'] = time;
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            if ((filterExpression !== undefined) && (filterExpression !== null)) {
                queryParameters['filterExpression'] = filterExpression;
            }
            if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
                queryParameters['includeFilteredValues'] = includeFilteredValues;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getPlotAdHoc = function (webId, endTime, intervals, selectedFields, sortField, sortOrder, startTime, timeZone, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/plot';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getPlotAdHoc.');
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((intervals !== undefined) && (intervals !== null)) {
                queryParameters['intervals'] = intervals;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getRecordedAdHoc = function (webId, boundaryType, endTime, filterExpression, includeFilteredValues, maxCount, selectedFields, sortField, sortOrder, startTime, timeZone, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/recorded';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getRecordedAdHoc.');
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            if ((boundaryType !== undefined) && (boundaryType !== null)) {
                queryParameters['boundaryType'] = boundaryType;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((filterExpression !== undefined) && (filterExpression !== null)) {
                queryParameters['filterExpression'] = filterExpression;
            }
            if ((includeFilteredValues !== undefined) && (includeFilteredValues !== null)) {
                queryParameters['includeFilteredValues'] = includeFilteredValues;
            }
            if ((maxCount !== undefined) && (maxCount !== null)) {
                queryParameters['maxCount'] = maxCount;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.updateValuesAdHoc = function (values, bufferOption, updateOption, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/recorded';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (values === null || values === undefined) {
                throw new Error('Required parameter values was null or undefined when calling updateValuesAdHoc.');
            }
            if ((bufferOption !== undefined) && (bufferOption !== null)) {
                queryParameters['bufferOption'] = bufferOption;
            }
            if ((updateOption !== undefined) && (updateOption !== null)) {
                queryParameters['updateOption'] = updateOption;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: values,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getRecordedAtTimeAdHoc = function (time, webId, retrievalMode, selectedFields, timeZone, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/recordedattime';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (time === null || time === undefined) {
                throw new Error('Required parameter time was null or undefined when calling getRecordedAtTimeAdHoc.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTimeAdHoc.');
            }
            if ((time !== undefined) && (time !== null)) {
                queryParameters['time'] = time;
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            if ((retrievalMode !== undefined) && (retrievalMode !== null)) {
                queryParameters['retrievalMode'] = retrievalMode;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getRecordedAtTimesAdHoc = function (time, webId, retrievalMode, selectedFields, sortOrder, timeZone, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/recordedattimes';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (time === null || time === undefined) {
                throw new Error('Required parameter time was null or undefined when calling getRecordedAtTimesAdHoc.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getRecordedAtTimesAdHoc.');
            }
            if ((time !== undefined) && (time !== null)) {
                queryParameters['time'] = time;
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            if ((retrievalMode !== undefined) && (retrievalMode !== null)) {
                queryParameters['retrievalMode'] = retrievalMode;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getSummariesAdHoc = function (webId, calculationBasis, endTime, filterExpression, sampleInterval, sampleType, selectedFields, startTime, summaryDuration, summaryType, timeType, timeZone, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/summary';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSummariesAdHoc.');
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            if ((calculationBasis !== undefined) && (calculationBasis !== null)) {
                queryParameters['calculationBasis'] = calculationBasis;
            }
            if ((endTime !== undefined) && (endTime !== null)) {
                queryParameters['endTime'] = endTime;
            }
            if ((filterExpression !== undefined) && (filterExpression !== null)) {
                queryParameters['filterExpression'] = filterExpression;
            }
            if ((sampleInterval !== undefined) && (sampleInterval !== null)) {
                queryParameters['sampleInterval'] = sampleInterval;
            }
            if ((sampleType !== undefined) && (sampleType !== null)) {
                queryParameters['sampleType'] = sampleType;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((startTime !== undefined) && (startTime !== null)) {
                queryParameters['startTime'] = startTime;
            }
            if ((summaryDuration !== undefined) && (summaryDuration !== null)) {
                queryParameters['summaryDuration'] = summaryDuration;
            }
            if ((summaryType !== undefined) && (summaryType !== null)) {
                queryParameters['summaryType'] = summaryType;
            }
            if ((timeType !== undefined) && (timeType !== null)) {
                queryParameters['timeType'] = timeType;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.retrieveStreamSetUpdates = function (marker, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/updates';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (marker === null || marker === undefined) {
                throw new Error('Required parameter marker was null or undefined when calling retrieveStreamSetUpdates.');
            }
            if ((marker !== undefined) && (marker !== null)) {
                queryParameters['marker'] = marker;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.registerStreamSetUpdates = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/updates';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling registerStreamSetUpdates.');
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.getValuesAdHoc = function (webId, selectedFields, sortField, sortOrder, time, timeZone, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/value';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getValuesAdHoc.');
            }
            if ((webId !== undefined) && (webId !== null)) {
                queryParameters['webId'] = webId;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((sortField !== undefined) && (sortField !== null)) {
                queryParameters['sortField'] = sortField;
            }
            if ((sortOrder !== undefined) && (sortOrder !== null)) {
                queryParameters['sortOrder'] = sortOrder;
            }
            if ((time !== undefined) && (time !== null)) {
                queryParameters['time'] = time;
            }
            if ((timeZone !== undefined) && (timeZone !== null)) {
                queryParameters['timeZone'] = timeZone;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        StreamSetApi.prototype.updateValueAdHoc = function (values, bufferOption, updateOption, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/streamsets/value';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (values === null || values === undefined) {
                throw new Error('Required parameter values was null or undefined when calling updateValueAdHoc.');
            }
            if ((bufferOption !== undefined) && (bufferOption !== null)) {
                queryParameters['bufferOption'] = bufferOption;
            }
            if ((updateOption !== undefined) && (updateOption !== null)) {
                queryParameters['updateOption'] = updateOption;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: values,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return StreamSetApi;
    }());
    StreamSetApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.StreamSetApi = StreamSetApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var SystemApi = (function () {
        function SystemApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        SystemApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        SystemApi.prototype.landing = function (extraHttpRequestParams) {
            var localVarPath = this.basePath + '/system';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        SystemApi.prototype.cacheInstances = function (extraHttpRequestParams) {
            var localVarPath = this.basePath + '/system/cacheinstances';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        SystemApi.prototype.status = function (extraHttpRequestParams) {
            var localVarPath = this.basePath + '/system/status';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        SystemApi.prototype.userInfo = function (extraHttpRequestParams) {
            var localVarPath = this.basePath + '/system/userinfo';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        SystemApi.prototype.versions = function (extraHttpRequestParams) {
            var localVarPath = this.basePath + '/system/versions';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return SystemApi;
    }());
    SystemApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.SystemApi = SystemApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var TableApi = (function () {
        function TableApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        TableApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        TableApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tables';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tables/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableApi.prototype.update = function (webId, table, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tables/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (table === null || table === undefined) {
                throw new Error('Required parameter table was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: table,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tables/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableApi.prototype.getCategories = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tables/{webId}/categories'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getCategories.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableApi.prototype.getData = function (webId, selectedFields, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tables/{webId}/data'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getData.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableApi.prototype.updateData = function (webId, data, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tables/{webId}/data'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateData.');
            }
            if (data === null || data === undefined) {
                throw new Error('Required parameter data was null or undefined when calling updateData.');
            }
            var httpRequestParams = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: data,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableApi.prototype.getSecurity = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tables/{webId}/security'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
            }
            if (userIdentity === null || userIdentity === undefined) {
                throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
            }
            if ((userIdentity !== undefined) && (userIdentity !== null)) {
                queryParameters['userIdentity'] = userIdentity;
            }
            if ((forceRefresh !== undefined) && (forceRefresh !== null)) {
                queryParameters['forceRefresh'] = forceRefresh;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableApi.prototype.getSecurityEntries = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tables/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableApi.prototype.createSecurityEntry = function (webId, securityEntry, applyToChildren, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tables/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling createSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableApi.prototype.getSecurityEntryByName = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tables/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling getSecurityEntryByName.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntryByName.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableApi.prototype.updateSecurityEntry = function (name, webId, securityEntry, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tables/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling updateSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling updateSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableApi.prototype.deleteSecurityEntry = function (name, webId, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tables/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling deleteSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling deleteSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return TableApi;
    }());
    TableApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.TableApi = TableApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var TableCategoryApi = (function () {
        function TableCategoryApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        TableCategoryApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        TableCategoryApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tablecategories';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableCategoryApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tablecategories/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableCategoryApi.prototype.update = function (webId, tableCategory, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tablecategories/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (tableCategory === null || tableCategory === undefined) {
                throw new Error('Required parameter tableCategory was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: tableCategory,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableCategoryApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tablecategories/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableCategoryApi.prototype.getSecurity = function (webId, userIdentity, forceRefresh, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tablecategories/{webId}/security'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurity.');
            }
            if (userIdentity === null || userIdentity === undefined) {
                throw new Error('Required parameter userIdentity was null or undefined when calling getSecurity.');
            }
            if ((userIdentity !== undefined) && (userIdentity !== null)) {
                queryParameters['userIdentity'] = userIdentity;
            }
            if ((forceRefresh !== undefined) && (forceRefresh !== null)) {
                queryParameters['forceRefresh'] = forceRefresh;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableCategoryApi.prototype.getSecurityEntries = function (webId, nameFilter, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tablecategories/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntries.');
            }
            if ((nameFilter !== undefined) && (nameFilter !== null)) {
                queryParameters['nameFilter'] = nameFilter;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableCategoryApi.prototype.createSecurityEntry = function (webId, securityEntry, applyToChildren, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tablecategories/{webId}/securityentries'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling createSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableCategoryApi.prototype.getSecurityEntryByName = function (name, webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tablecategories/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling getSecurityEntryByName.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getSecurityEntryByName.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableCategoryApi.prototype.updateSecurityEntry = function (name, webId, securityEntry, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tablecategories/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling updateSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling updateSecurityEntry.');
            }
            if (securityEntry === null || securityEntry === undefined) {
                throw new Error('Required parameter securityEntry was null or undefined when calling updateSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: securityEntry,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TableCategoryApi.prototype.deleteSecurityEntry = function (name, webId, applyToChildren, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/tablecategories/{webId}/securityentries/{name}'
                .replace('{' + 'name' + '}', String(name))
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (name === null || name === undefined) {
                throw new Error('Required parameter name was null or undefined when calling deleteSecurityEntry.');
            }
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling deleteSecurityEntry.');
            }
            if ((applyToChildren !== undefined) && (applyToChildren !== null)) {
                queryParameters['applyToChildren'] = applyToChildren;
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return TableCategoryApi;
    }());
    TableCategoryApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.TableCategoryApi = TableCategoryApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var TimeRuleApi = (function () {
        function TimeRuleApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        TimeRuleApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        TimeRuleApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/timerules';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TimeRuleApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/timerules/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TimeRuleApi.prototype.update = function (webId, timeRule, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/timerules/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (timeRule === null || timeRule === undefined) {
                throw new Error('Required parameter timeRule was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: timeRule,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TimeRuleApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/timerules/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return TimeRuleApi;
    }());
    TimeRuleApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.TimeRuleApi = TimeRuleApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var TimeRulePlugInApi = (function () {
        function TimeRulePlugInApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        TimeRulePlugInApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        TimeRulePlugInApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/timeruleplugins';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        TimeRulePlugInApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/timeruleplugins/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return TimeRulePlugInApi;
    }());
    TimeRulePlugInApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.TimeRulePlugInApi = TimeRulePlugInApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var UnitApi = (function () {
        function UnitApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        UnitApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        UnitApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/units';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        UnitApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/units/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        UnitApi.prototype.update = function (webId, unitDTO, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/units/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (unitDTO === null || unitDTO === undefined) {
                throw new Error('Required parameter unitDTO was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: unitDTO,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        UnitApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/units/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return UnitApi;
    }());
    UnitApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.UnitApi = UnitApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var UnitClassApi = (function () {
        function UnitClassApi(basePath, $http, $httpParamSerializer) {
            this.$http = $http;
            this.$httpParamSerializer = $httpParamSerializer;
            this.basePath = null;
            this.defaultHeaders = {};
            this.basePath = basePath;
        }
        UnitClassApi.prototype.extendObj = function (objA, objB) {
            for (var key in objB) {
                if (objB.hasOwnProperty(key)) {
                    objA[key] = objB[key];
                }
            }
            return objA;
        };
        UnitClassApi.prototype.getByPath = function (path, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/unitclasses';
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (path === null || path === undefined) {
                throw new Error('Required parameter path was null or undefined when calling getByPath.');
            }
            if ((path !== undefined) && (path !== null)) {
                queryParameters['path'] = path;
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        UnitClassApi.prototype.get = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/unitclasses/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling get.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        UnitClassApi.prototype.update = function (webId, unitClassDTO, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/unitclasses/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling update.');
            }
            if (unitClassDTO === null || unitClassDTO === undefined) {
                throw new Error('Required parameter unitClassDTO was null or undefined when calling update.');
            }
            var httpRequestParams = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: unitClassDTO,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        UnitClassApi.prototype.delete = function (webId, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/unitclasses/{webId}'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling delete.');
            }
            var httpRequestParams = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        UnitClassApi.prototype.getCanonicalUnit = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/unitclasses/{webId}/canonicalunit'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getCanonicalUnit.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        UnitClassApi.prototype.getUnits = function (webId, selectedFields, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/unitclasses/{webId}/units'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling getUnits.');
            }
            if ((selectedFields !== undefined) && (selectedFields !== null)) {
                queryParameters['selectedFields'] = selectedFields;
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'GET',
                url: localVarPath,
                json: true,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        UnitClassApi.prototype.createUnit = function (webId, unitDTO, webIdType, extraHttpRequestParams) {
            var localVarPath = this.basePath + '/unitclasses/{webId}/units'
                .replace('{' + 'webId' + '}', String(webId));
            var queryParameters = {};
            var headerParams = this.extendObj({}, this.defaultHeaders);
            if (webId === null || webId === undefined) {
                throw new Error('Required parameter webId was null or undefined when calling createUnit.');
            }
            if (unitDTO === null || unitDTO === undefined) {
                throw new Error('Required parameter unitDTO was null or undefined when calling createUnit.');
            }
            if ((webIdType !== undefined) && (webIdType !== null)) {
                queryParameters['webIdType'] = webIdType;
            }
            var httpRequestParams = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: unitDTO,
                params: queryParameters,
                headers: headerParams
            };
            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }
            return this.$http(httpRequestParams);
        };
        return UnitClassApi;
    }());
    UnitClassApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    PIWebApiClient.UnitClassApi = UnitClassApi;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAmbiguous = (function () {
        function PIAmbiguous(reason) {
            if (reason != null) {
                this.Reason = reason;
            }
        }
        return PIAmbiguous;
    }());
    PIWebApiClient.PIAmbiguous = PIAmbiguous;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAnalysis = (function () {
        function PIAnalysis(webId, id, name, description, path, analysisRulePlugInName, autoCreated, categoryNames, groupId, hasNotification, hasTarget, hasTemplate, isConfigured, isTimeRuleDefinedByTemplate, maximumQueueSize, outputTime, priority, publishResults, status, targetWebId, templateName, timeRulePlugInName, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (analysisRulePlugInName != null) {
                this.AnalysisRulePlugInName = analysisRulePlugInName;
            }
            if (autoCreated != null) {
                this.AutoCreated = autoCreated;
            }
            if (categoryNames != null) {
                this.CategoryNames = categoryNames;
            }
            if (groupId != null) {
                this.GroupId = groupId;
            }
            if (hasNotification != null) {
                this.HasNotification = hasNotification;
            }
            if (hasTarget != null) {
                this.HasTarget = hasTarget;
            }
            if (hasTemplate != null) {
                this.HasTemplate = hasTemplate;
            }
            if (isConfigured != null) {
                this.IsConfigured = isConfigured;
            }
            if (isTimeRuleDefinedByTemplate != null) {
                this.IsTimeRuleDefinedByTemplate = isTimeRuleDefinedByTemplate;
            }
            if (maximumQueueSize != null) {
                this.MaximumQueueSize = maximumQueueSize;
            }
            if (outputTime != null) {
                this.OutputTime = outputTime;
            }
            if (priority != null) {
                this.Priority = priority;
            }
            if (publishResults != null) {
                this.PublishResults = publishResults;
            }
            if (status != null) {
                this.Status = status;
            }
            if (targetWebId != null) {
                this.TargetWebId = targetWebId;
            }
            if (templateName != null) {
                this.TemplateName = templateName;
            }
            if (timeRulePlugInName != null) {
                this.TimeRulePlugInName = timeRulePlugInName;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIAnalysis;
    }());
    PIWebApiClient.PIAnalysis = PIAnalysis;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAnalysisCategory = (function () {
        function PIAnalysisCategory(webId, id, name, description, path, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIAnalysisCategory;
    }());
    PIWebApiClient.PIAnalysisCategory = PIAnalysisCategory;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAnalysisCategoryLinks = (function () {
        function PIAnalysisCategoryLinks(self, database, security, securityEntries) {
            if (self != null) {
                this.Self = self;
            }
            if (database != null) {
                this.Database = database;
            }
            if (security != null) {
                this.Security = security;
            }
            if (securityEntries != null) {
                this.SecurityEntries = securityEntries;
            }
        }
        return PIAnalysisCategoryLinks;
    }());
    PIWebApiClient.PIAnalysisCategoryLinks = PIAnalysisCategoryLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAnalysisLinks = (function () {
        function PIAnalysisLinks(self, target, database, categories, template, analysisRule, analysisRulePlugIn, timeRule, timeRulePlugIn, security, securityEntries) {
            if (self != null) {
                this.Self = self;
            }
            if (target != null) {
                this.Target = target;
            }
            if (database != null) {
                this.Database = database;
            }
            if (categories != null) {
                this.Categories = categories;
            }
            if (template != null) {
                this.Template = template;
            }
            if (analysisRule != null) {
                this.AnalysisRule = analysisRule;
            }
            if (analysisRulePlugIn != null) {
                this.AnalysisRulePlugIn = analysisRulePlugIn;
            }
            if (timeRule != null) {
                this.TimeRule = timeRule;
            }
            if (timeRulePlugIn != null) {
                this.TimeRulePlugIn = timeRulePlugIn;
            }
            if (security != null) {
                this.Security = security;
            }
            if (securityEntries != null) {
                this.SecurityEntries = securityEntries;
            }
        }
        return PIAnalysisLinks;
    }());
    PIWebApiClient.PIAnalysisLinks = PIAnalysisLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAnalysisRule = (function () {
        function PIAnalysisRule(webId, id, name, description, path, configString, displayString, editorType, hasChildren, isConfigured, isInitializing, plugInName, supportedBehaviors, variableMapping, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (configString != null) {
                this.ConfigString = configString;
            }
            if (displayString != null) {
                this.DisplayString = displayString;
            }
            if (editorType != null) {
                this.EditorType = editorType;
            }
            if (hasChildren != null) {
                this.HasChildren = hasChildren;
            }
            if (isConfigured != null) {
                this.IsConfigured = isConfigured;
            }
            if (isInitializing != null) {
                this.IsInitializing = isInitializing;
            }
            if (plugInName != null) {
                this.PlugInName = plugInName;
            }
            if (supportedBehaviors != null) {
                this.SupportedBehaviors = supportedBehaviors;
            }
            if (variableMapping != null) {
                this.VariableMapping = variableMapping;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIAnalysisRule;
    }());
    PIWebApiClient.PIAnalysisRule = PIAnalysisRule;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAnalysisRuleLinks = (function () {
        function PIAnalysisRuleLinks(self, analysisRules, analysis, analysisTemplate, parent, plugIn) {
            if (self != null) {
                this.Self = self;
            }
            if (analysisRules != null) {
                this.AnalysisRules = analysisRules;
            }
            if (analysis != null) {
                this.Analysis = analysis;
            }
            if (analysisTemplate != null) {
                this.AnalysisTemplate = analysisTemplate;
            }
            if (parent != null) {
                this.Parent = parent;
            }
            if (plugIn != null) {
                this.PlugIn = plugIn;
            }
        }
        return PIAnalysisRuleLinks;
    }());
    PIWebApiClient.PIAnalysisRuleLinks = PIAnalysisRuleLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAnalysisRulePlugIn = (function () {
        function PIAnalysisRulePlugIn(webId, id, name, description, path, assemblyFileName, assemblyID, assemblyLoadProperties, assemblyTime, compatibilityVersion, isBrowsable, isNonEditableConfig, loadedAssemblyTime, loadedVersion, version, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (assemblyFileName != null) {
                this.AssemblyFileName = assemblyFileName;
            }
            if (assemblyID != null) {
                this.AssemblyID = assemblyID;
            }
            if (assemblyLoadProperties != null) {
                this.AssemblyLoadProperties = assemblyLoadProperties;
            }
            if (assemblyTime != null) {
                this.AssemblyTime = assemblyTime;
            }
            if (compatibilityVersion != null) {
                this.CompatibilityVersion = compatibilityVersion;
            }
            if (isBrowsable != null) {
                this.IsBrowsable = isBrowsable;
            }
            if (isNonEditableConfig != null) {
                this.IsNonEditableConfig = isNonEditableConfig;
            }
            if (loadedAssemblyTime != null) {
                this.LoadedAssemblyTime = loadedAssemblyTime;
            }
            if (loadedVersion != null) {
                this.LoadedVersion = loadedVersion;
            }
            if (version != null) {
                this.Version = version;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIAnalysisRulePlugIn;
    }());
    PIWebApiClient.PIAnalysisRulePlugIn = PIAnalysisRulePlugIn;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAnalysisRulePlugInLinks = (function () {
        function PIAnalysisRulePlugInLinks(self, assetServer) {
            if (self != null) {
                this.Self = self;
            }
            if (assetServer != null) {
                this.AssetServer = assetServer;
            }
        }
        return PIAnalysisRulePlugInLinks;
    }());
    PIWebApiClient.PIAnalysisRulePlugInLinks = PIAnalysisRulePlugInLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAnalysisTemplate = (function () {
        function PIAnalysisTemplate(webId, id, name, description, path, analysisRulePlugInName, categoryNames, createEnabled, groupId, hasNotificationTemplate, hasTarget, outputTime, targetName, timeRulePlugInName, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (analysisRulePlugInName != null) {
                this.AnalysisRulePlugInName = analysisRulePlugInName;
            }
            if (categoryNames != null) {
                this.CategoryNames = categoryNames;
            }
            if (createEnabled != null) {
                this.CreateEnabled = createEnabled;
            }
            if (groupId != null) {
                this.GroupId = groupId;
            }
            if (hasNotificationTemplate != null) {
                this.HasNotificationTemplate = hasNotificationTemplate;
            }
            if (hasTarget != null) {
                this.HasTarget = hasTarget;
            }
            if (outputTime != null) {
                this.OutputTime = outputTime;
            }
            if (targetName != null) {
                this.TargetName = targetName;
            }
            if (timeRulePlugInName != null) {
                this.TimeRulePlugInName = timeRulePlugInName;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIAnalysisTemplate;
    }());
    PIWebApiClient.PIAnalysisTemplate = PIAnalysisTemplate;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAnalysisTemplateLinks = (function () {
        function PIAnalysisTemplateLinks(self, database, categories, analysisRule, analysisRulePlugIn, timeRule, timeRulePlugIn, target, security, securityEntries) {
            if (self != null) {
                this.Self = self;
            }
            if (database != null) {
                this.Database = database;
            }
            if (categories != null) {
                this.Categories = categories;
            }
            if (analysisRule != null) {
                this.AnalysisRule = analysisRule;
            }
            if (analysisRulePlugIn != null) {
                this.AnalysisRulePlugIn = analysisRulePlugIn;
            }
            if (timeRule != null) {
                this.TimeRule = timeRule;
            }
            if (timeRulePlugIn != null) {
                this.TimeRulePlugIn = timeRulePlugIn;
            }
            if (target != null) {
                this.Target = target;
            }
            if (security != null) {
                this.Security = security;
            }
            if (securityEntries != null) {
                this.SecurityEntries = securityEntries;
            }
        }
        return PIAnalysisTemplateLinks;
    }());
    PIWebApiClient.PIAnalysisTemplateLinks = PIAnalysisTemplateLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAnnotation = (function () {
        function PIAnnotation(id, name, description, value, creator, creationDate, modifier, modifyDate, links, webException) {
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (value != null) {
                this.Value = value;
            }
            if (creator != null) {
                this.Creator = creator;
            }
            if (creationDate != null) {
                this.CreationDate = creationDate;
            }
            if (modifier != null) {
                this.Modifier = modifier;
            }
            if (modifyDate != null) {
                this.ModifyDate = modifyDate;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIAnnotation;
    }());
    PIWebApiClient.PIAnnotation = PIAnnotation;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAnnotationLinks = (function () {
        function PIAnnotationLinks(self, owner, mediaData, mediaMetadata) {
            if (self != null) {
                this.Self = self;
            }
            if (owner != null) {
                this.Owner = owner;
            }
            if (mediaData != null) {
                this.MediaData = mediaData;
            }
            if (mediaMetadata != null) {
                this.MediaMetadata = mediaMetadata;
            }
        }
        return PIAnnotationLinks;
    }());
    PIWebApiClient.PIAnnotationLinks = PIAnnotationLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAssetDatabase = (function () {
        function PIAssetDatabase(webId, id, name, description, path, extendedProperties, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (extendedProperties != null) {
                this.ExtendedProperties = extendedProperties;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIAssetDatabase;
    }());
    PIWebApiClient.PIAssetDatabase = PIAssetDatabase;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAssetDatabaseLinks = (function () {
        function PIAssetDatabaseLinks(self, elements, elementTemplates, eventFrames, assetServer, elementCategories, attributeCategories, tableCategories, analysisCategories, analysisTemplates, enumerationSets, tables, security, securityEntries) {
            if (self != null) {
                this.Self = self;
            }
            if (elements != null) {
                this.Elements = elements;
            }
            if (elementTemplates != null) {
                this.ElementTemplates = elementTemplates;
            }
            if (eventFrames != null) {
                this.EventFrames = eventFrames;
            }
            if (assetServer != null) {
                this.AssetServer = assetServer;
            }
            if (elementCategories != null) {
                this.ElementCategories = elementCategories;
            }
            if (attributeCategories != null) {
                this.AttributeCategories = attributeCategories;
            }
            if (tableCategories != null) {
                this.TableCategories = tableCategories;
            }
            if (analysisCategories != null) {
                this.AnalysisCategories = analysisCategories;
            }
            if (analysisTemplates != null) {
                this.AnalysisTemplates = analysisTemplates;
            }
            if (enumerationSets != null) {
                this.EnumerationSets = enumerationSets;
            }
            if (tables != null) {
                this.Tables = tables;
            }
            if (security != null) {
                this.Security = security;
            }
            if (securityEntries != null) {
                this.SecurityEntries = securityEntries;
            }
        }
        return PIAssetDatabaseLinks;
    }());
    PIWebApiClient.PIAssetDatabaseLinks = PIAssetDatabaseLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAssetServer = (function () {
        function PIAssetServer(webId, id, name, description, path, isConnected, serverVersion, serverTime, extendedProperties, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (isConnected != null) {
                this.IsConnected = isConnected;
            }
            if (serverVersion != null) {
                this.ServerVersion = serverVersion;
            }
            if (serverTime != null) {
                this.ServerTime = serverTime;
            }
            if (extendedProperties != null) {
                this.ExtendedProperties = extendedProperties;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIAssetServer;
    }());
    PIWebApiClient.PIAssetServer = PIAssetServer;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAssetServerLinks = (function () {
        function PIAssetServerLinks(self, databases, notificationContactTemplates, securityIdentities, securityMappings, unitClasses, analysisRulePlugIns, timeRulePlugIns, security, securityEntries) {
            if (self != null) {
                this.Self = self;
            }
            if (databases != null) {
                this.Databases = databases;
            }
            if (notificationContactTemplates != null) {
                this.NotificationContactTemplates = notificationContactTemplates;
            }
            if (securityIdentities != null) {
                this.SecurityIdentities = securityIdentities;
            }
            if (securityMappings != null) {
                this.SecurityMappings = securityMappings;
            }
            if (unitClasses != null) {
                this.UnitClasses = unitClasses;
            }
            if (analysisRulePlugIns != null) {
                this.AnalysisRulePlugIns = analysisRulePlugIns;
            }
            if (timeRulePlugIns != null) {
                this.TimeRulePlugIns = timeRulePlugIns;
            }
            if (security != null) {
                this.Security = security;
            }
            if (securityEntries != null) {
                this.SecurityEntries = securityEntries;
            }
        }
        return PIAssetServerLinks;
    }());
    PIWebApiClient.PIAssetServerLinks = PIAssetServerLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAttribute = (function () {
        function PIAttribute(webId, id, name, description, path, type, typeQualifier, defaultUnitsName, displayDigits, dataReferencePlugIn, configString, isConfigurationItem, isExcluded, isHidden, isManualDataEntry, hasChildren, categoryNames, step, traitName, defaultUnitsNameAbbreviation, span, zero, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (type != null) {
                this.Type = type;
            }
            if (typeQualifier != null) {
                this.TypeQualifier = typeQualifier;
            }
            if (defaultUnitsName != null) {
                this.DefaultUnitsName = defaultUnitsName;
            }
            if (displayDigits != null) {
                this.DisplayDigits = displayDigits;
            }
            if (dataReferencePlugIn != null) {
                this.DataReferencePlugIn = dataReferencePlugIn;
            }
            if (configString != null) {
                this.ConfigString = configString;
            }
            if (isConfigurationItem != null) {
                this.IsConfigurationItem = isConfigurationItem;
            }
            if (isExcluded != null) {
                this.IsExcluded = isExcluded;
            }
            if (isHidden != null) {
                this.IsHidden = isHidden;
            }
            if (isManualDataEntry != null) {
                this.IsManualDataEntry = isManualDataEntry;
            }
            if (hasChildren != null) {
                this.HasChildren = hasChildren;
            }
            if (categoryNames != null) {
                this.CategoryNames = categoryNames;
            }
            if (step != null) {
                this.Step = step;
            }
            if (traitName != null) {
                this.TraitName = traitName;
            }
            if (defaultUnitsNameAbbreviation != null) {
                this.DefaultUnitsNameAbbreviation = defaultUnitsNameAbbreviation;
            }
            if (span != null) {
                this.Span = span;
            }
            if (zero != null) {
                this.Zero = zero;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIAttribute;
    }());
    PIWebApiClient.PIAttribute = PIAttribute;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAttributeCategory = (function () {
        function PIAttributeCategory(webId, id, name, description, path, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIAttributeCategory;
    }());
    PIWebApiClient.PIAttributeCategory = PIAttributeCategory;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAttributeCategoryLinks = (function () {
        function PIAttributeCategoryLinks(self, database, security, securityEntries) {
            if (self != null) {
                this.Self = self;
            }
            if (database != null) {
                this.Database = database;
            }
            if (security != null) {
                this.Security = security;
            }
            if (securityEntries != null) {
                this.SecurityEntries = securityEntries;
            }
        }
        return PIAttributeCategoryLinks;
    }());
    PIWebApiClient.PIAttributeCategoryLinks = PIAttributeCategoryLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAttributeLinks = (function () {
        function PIAttributeLinks(self, attributes, element, eventFrame, parent, template, interpolatedData, recordedData, plotData, summaryData, value, endValue, point, categories, enumerationSet, enumerationValues, trait) {
            if (self != null) {
                this.Self = self;
            }
            if (attributes != null) {
                this.Attributes = attributes;
            }
            if (element != null) {
                this.Element = element;
            }
            if (eventFrame != null) {
                this.EventFrame = eventFrame;
            }
            if (parent != null) {
                this.Parent = parent;
            }
            if (template != null) {
                this.Template = template;
            }
            if (interpolatedData != null) {
                this.InterpolatedData = interpolatedData;
            }
            if (recordedData != null) {
                this.RecordedData = recordedData;
            }
            if (plotData != null) {
                this.PlotData = plotData;
            }
            if (summaryData != null) {
                this.SummaryData = summaryData;
            }
            if (value != null) {
                this.Value = value;
            }
            if (endValue != null) {
                this.EndValue = endValue;
            }
            if (point != null) {
                this.Point = point;
            }
            if (categories != null) {
                this.Categories = categories;
            }
            if (enumerationSet != null) {
                this.EnumerationSet = enumerationSet;
            }
            if (enumerationValues != null) {
                this.EnumerationValues = enumerationValues;
            }
            if (trait != null) {
                this.Trait = trait;
            }
        }
        return PIAttributeLinks;
    }());
    PIWebApiClient.PIAttributeLinks = PIAttributeLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAttributeTemplate = (function () {
        function PIAttributeTemplate(webId, id, name, description, path, type, typeQualifier, defaultUnitsName, defaultValue, dataReferencePlugIn, configString, isConfigurationItem, isExcluded, isHidden, isManualDataEntry, hasChildren, categoryNames, traitName, defaultUnitsNameAbbreviation, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (type != null) {
                this.Type = type;
            }
            if (typeQualifier != null) {
                this.TypeQualifier = typeQualifier;
            }
            if (defaultUnitsName != null) {
                this.DefaultUnitsName = defaultUnitsName;
            }
            if (defaultValue != null) {
                this.DefaultValue = defaultValue;
            }
            if (dataReferencePlugIn != null) {
                this.DataReferencePlugIn = dataReferencePlugIn;
            }
            if (configString != null) {
                this.ConfigString = configString;
            }
            if (isConfigurationItem != null) {
                this.IsConfigurationItem = isConfigurationItem;
            }
            if (isExcluded != null) {
                this.IsExcluded = isExcluded;
            }
            if (isHidden != null) {
                this.IsHidden = isHidden;
            }
            if (isManualDataEntry != null) {
                this.IsManualDataEntry = isManualDataEntry;
            }
            if (hasChildren != null) {
                this.HasChildren = hasChildren;
            }
            if (categoryNames != null) {
                this.CategoryNames = categoryNames;
            }
            if (traitName != null) {
                this.TraitName = traitName;
            }
            if (defaultUnitsNameAbbreviation != null) {
                this.DefaultUnitsNameAbbreviation = defaultUnitsNameAbbreviation;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIAttributeTemplate;
    }());
    PIWebApiClient.PIAttributeTemplate = PIAttributeTemplate;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAttributeTemplateLinks = (function () {
        function PIAttributeTemplateLinks(self, attributeTemplates, elementTemplate, parent, categories, trait) {
            if (self != null) {
                this.Self = self;
            }
            if (attributeTemplates != null) {
                this.AttributeTemplates = attributeTemplates;
            }
            if (elementTemplate != null) {
                this.ElementTemplate = elementTemplate;
            }
            if (parent != null) {
                this.Parent = parent;
            }
            if (categories != null) {
                this.Categories = categories;
            }
            if (trait != null) {
                this.Trait = trait;
            }
        }
        return PIAttributeTemplateLinks;
    }());
    PIWebApiClient.PIAttributeTemplateLinks = PIAttributeTemplateLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAttributeTrait = (function () {
        function PIAttributeTrait(name, abbreviation, allowChildAttributes, allowDuplicates, isAllowedOnRootAttribute, isTypeInherited, isUOMInherited, requireNumeric, requireString, links, webException) {
            if (name != null) {
                this.Name = name;
            }
            if (abbreviation != null) {
                this.Abbreviation = abbreviation;
            }
            if (allowChildAttributes != null) {
                this.AllowChildAttributes = allowChildAttributes;
            }
            if (allowDuplicates != null) {
                this.AllowDuplicates = allowDuplicates;
            }
            if (isAllowedOnRootAttribute != null) {
                this.IsAllowedOnRootAttribute = isAllowedOnRootAttribute;
            }
            if (isTypeInherited != null) {
                this.IsTypeInherited = isTypeInherited;
            }
            if (isUOMInherited != null) {
                this.IsUOMInherited = isUOMInherited;
            }
            if (requireNumeric != null) {
                this.RequireNumeric = requireNumeric;
            }
            if (requireString != null) {
                this.RequireString = requireString;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIAttributeTrait;
    }());
    PIWebApiClient.PIAttributeTrait = PIAttributeTrait;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAttributeTraitLinks = (function () {
        function PIAttributeTraitLinks(self) {
            if (self != null) {
                this.Self = self;
            }
        }
        return PIAttributeTraitLinks;
    }());
    PIWebApiClient.PIAttributeTraitLinks = PIAttributeTraitLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2017 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIAttributeValueQuery = (function () {
        function PIAttributeValueQuery(attributeName, attributeValue, attributeUOM, searchOperator) {
            if (attributeName != null) {
                this.AttributeName = attributeName;
            }
            if (attributeValue != null) {
                this.AttributeValue = attributeValue;
            }
            if (attributeUOM != null) {
                this.AttributeUOM = attributeUOM;
            }
            if (searchOperator != null) {
                this.SearchOperator = searchOperator;
            }
        }
        return PIAttributeValueQuery;
    }());
    PIWebApiClient.PIAttributeValueQuery = PIAttributeValueQuery;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PICacheInstance = (function () {
        function PICacheInstance(id, lastRefreshTime, willRefreshAfter, scheduledExpirationTime, user, webException) {
            if (id != null) {
                this.Id = id;
            }
            if (lastRefreshTime != null) {
                this.LastRefreshTime = lastRefreshTime;
            }
            if (willRefreshAfter != null) {
                this.WillRefreshAfter = willRefreshAfter;
            }
            if (scheduledExpirationTime != null) {
                this.ScheduledExpirationTime = scheduledExpirationTime;
            }
            if (user != null) {
                this.User = user;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PICacheInstance;
    }());
    PIWebApiClient.PICacheInstance = PICacheInstance;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIChannelInstance = (function () {
        function PIChannelInstance(id, startTime, lastMessageSentTime, sentMessageCount, webException) {
            if (id != null) {
                this.Id = id;
            }
            if (startTime != null) {
                this.StartTime = startTime;
            }
            if (lastMessageSentTime != null) {
                this.LastMessageSentTime = lastMessageSentTime;
            }
            if (sentMessageCount != null) {
                this.SentMessageCount = sentMessageCount;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIChannelInstance;
    }());
    PIWebApiClient.PIChannelInstance = PIChannelInstance;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIDataPipeEvent = (function () {
        function PIDataPipeEvent(action, timestamp, unitsAbbreviation, good, questionable, substituted, annotated, value, errors, webException) {
            if (action != null) {
                this.Action = action;
            }
            if (timestamp != null) {
                this.Timestamp = timestamp;
            }
            if (unitsAbbreviation != null) {
                this.UnitsAbbreviation = unitsAbbreviation;
            }
            if (good != null) {
                this.Good = good;
            }
            if (questionable != null) {
                this.Questionable = questionable;
            }
            if (substituted != null) {
                this.Substituted = substituted;
            }
            if (annotated != null) {
                this.Annotated = annotated;
            }
            if (value != null) {
                this.Value = value;
            }
            if (errors != null) {
                this.Errors = errors;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIDataPipeEvent;
    }());
    PIWebApiClient.PIDataPipeEvent = PIDataPipeEvent;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIDataServer = (function () {
        function PIDataServer(webId, id, name, path, isConnected, serverVersion, serverTime, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (path != null) {
                this.Path = path;
            }
            if (isConnected != null) {
                this.IsConnected = isConnected;
            }
            if (serverVersion != null) {
                this.ServerVersion = serverVersion;
            }
            if (serverTime != null) {
                this.ServerTime = serverTime;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIDataServer;
    }());
    PIWebApiClient.PIDataServer = PIDataServer;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIDataServerLicense = (function () {
        function PIDataServerLicense(amountLeft, amountUsed, name, totalAmount, links, webException) {
            if (amountLeft != null) {
                this.AmountLeft = amountLeft;
            }
            if (amountUsed != null) {
                this.AmountUsed = amountUsed;
            }
            if (name != null) {
                this.Name = name;
            }
            if (totalAmount != null) {
                this.TotalAmount = totalAmount;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIDataServerLicense;
    }());
    PIWebApiClient.PIDataServerLicense = PIDataServerLicense;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIDataServerLicenseLinks = (function () {
        function PIDataServerLicenseLinks(self, parent) {
            if (self != null) {
                this.Self = self;
            }
            if (parent != null) {
                this.Parent = parent;
            }
        }
        return PIDataServerLicenseLinks;
    }());
    PIWebApiClient.PIDataServerLicenseLinks = PIDataServerLicenseLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIDataServerLinks = (function () {
        function PIDataServerLinks(self, points, enumerationSets) {
            if (self != null) {
                this.Self = self;
            }
            if (points != null) {
                this.Points = points;
            }
            if (enumerationSets != null) {
                this.EnumerationSets = enumerationSets;
            }
        }
        return PIDataServerLinks;
    }());
    PIWebApiClient.PIDataServerLinks = PIDataServerLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIElement = (function () {
        function PIElement(webId, id, name, description, path, templateName, hasChildren, categoryNames, extendedProperties, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (templateName != null) {
                this.TemplateName = templateName;
            }
            if (hasChildren != null) {
                this.HasChildren = hasChildren;
            }
            if (categoryNames != null) {
                this.CategoryNames = categoryNames;
            }
            if (extendedProperties != null) {
                this.ExtendedProperties = extendedProperties;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIElement;
    }());
    PIWebApiClient.PIElement = PIElement;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIElementCategory = (function () {
        function PIElementCategory(webId, id, name, description, path, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIElementCategory;
    }());
    PIWebApiClient.PIElementCategory = PIElementCategory;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIElementCategoryLinks = (function () {
        function PIElementCategoryLinks(self, database, security, securityEntries) {
            if (self != null) {
                this.Self = self;
            }
            if (database != null) {
                this.Database = database;
            }
            if (security != null) {
                this.Security = security;
            }
            if (securityEntries != null) {
                this.SecurityEntries = securityEntries;
            }
        }
        return PIElementCategoryLinks;
    }());
    PIWebApiClient.PIElementCategoryLinks = PIElementCategoryLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIElementLinks = (function () {
        function PIElementLinks(self, analyses, attributes, elements, database, parent, template, categories, defaultAttribute, eventFrames, interpolatedData, recordedData, plotData, summaryData, value, endValue, security, securityEntries, notificationRules) {
            if (self != null) {
                this.Self = self;
            }
            if (analyses != null) {
                this.Analyses = analyses;
            }
            if (attributes != null) {
                this.Attributes = attributes;
            }
            if (elements != null) {
                this.Elements = elements;
            }
            if (database != null) {
                this.Database = database;
            }
            if (parent != null) {
                this.Parent = parent;
            }
            if (template != null) {
                this.Template = template;
            }
            if (categories != null) {
                this.Categories = categories;
            }
            if (defaultAttribute != null) {
                this.DefaultAttribute = defaultAttribute;
            }
            if (eventFrames != null) {
                this.EventFrames = eventFrames;
            }
            if (interpolatedData != null) {
                this.InterpolatedData = interpolatedData;
            }
            if (recordedData != null) {
                this.RecordedData = recordedData;
            }
            if (plotData != null) {
                this.PlotData = plotData;
            }
            if (summaryData != null) {
                this.SummaryData = summaryData;
            }
            if (value != null) {
                this.Value = value;
            }
            if (endValue != null) {
                this.EndValue = endValue;
            }
            if (security != null) {
                this.Security = security;
            }
            if (securityEntries != null) {
                this.SecurityEntries = securityEntries;
            }
            if (notificationRules != null) {
                this.NotificationRules = notificationRules;
            }
        }
        return PIElementLinks;
    }());
    PIWebApiClient.PIElementLinks = PIElementLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIElementTemplate = (function () {
        function PIElementTemplate(webId, id, name, description, path, allowElementToExtend, baseTemplate, instanceType, namingPattern, categoryNames, extendedProperties, severity, canBeAcknowledged, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (allowElementToExtend != null) {
                this.AllowElementToExtend = allowElementToExtend;
            }
            if (baseTemplate != null) {
                this.BaseTemplate = baseTemplate;
            }
            if (instanceType != null) {
                this.InstanceType = instanceType;
            }
            if (namingPattern != null) {
                this.NamingPattern = namingPattern;
            }
            if (categoryNames != null) {
                this.CategoryNames = categoryNames;
            }
            if (extendedProperties != null) {
                this.ExtendedProperties = extendedProperties;
            }
            if (severity != null) {
                this.Severity = severity;
            }
            if (canBeAcknowledged != null) {
                this.CanBeAcknowledged = canBeAcknowledged;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIElementTemplate;
    }());
    PIWebApiClient.PIElementTemplate = PIElementTemplate;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIElementTemplateLinks = (function () {
        function PIElementTemplateLinks(self, analysisTemplates, attributeTemplates, database, categories, baseTemplate, baseTemplates, derivedTemplates, defaultAttribute, notificationRuleTemplates, security, securityEntries) {
            if (self != null) {
                this.Self = self;
            }
            if (analysisTemplates != null) {
                this.AnalysisTemplates = analysisTemplates;
            }
            if (attributeTemplates != null) {
                this.AttributeTemplates = attributeTemplates;
            }
            if (database != null) {
                this.Database = database;
            }
            if (categories != null) {
                this.Categories = categories;
            }
            if (baseTemplate != null) {
                this.BaseTemplate = baseTemplate;
            }
            if (baseTemplates != null) {
                this.BaseTemplates = baseTemplates;
            }
            if (derivedTemplates != null) {
                this.DerivedTemplates = derivedTemplates;
            }
            if (defaultAttribute != null) {
                this.DefaultAttribute = defaultAttribute;
            }
            if (notificationRuleTemplates != null) {
                this.NotificationRuleTemplates = notificationRuleTemplates;
            }
            if (security != null) {
                this.Security = security;
            }
            if (securityEntries != null) {
                this.SecurityEntries = securityEntries;
            }
        }
        return PIElementTemplateLinks;
    }());
    PIWebApiClient.PIElementTemplateLinks = PIElementTemplateLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIEnumerationSet = (function () {
        function PIEnumerationSet(webId, id, name, description, path, links, serializeDescription, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (links != null) {
                this.Links = links;
            }
            if (serializeDescription != null) {
                this.SerializeDescription = serializeDescription;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIEnumerationSet;
    }());
    PIWebApiClient.PIEnumerationSet = PIEnumerationSet;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIEnumerationSetLinks = (function () {
        function PIEnumerationSetLinks(self, database, dataServer, values, security, securityEntries) {
            if (self != null) {
                this.Self = self;
            }
            if (database != null) {
                this.Database = database;
            }
            if (dataServer != null) {
                this.DataServer = dataServer;
            }
            if (values != null) {
                this.Values = values;
            }
            if (security != null) {
                this.Security = security;
            }
            if (securityEntries != null) {
                this.SecurityEntries = securityEntries;
            }
        }
        return PIEnumerationSetLinks;
    }());
    PIWebApiClient.PIEnumerationSetLinks = PIEnumerationSetLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIEnumerationValue = (function () {
        function PIEnumerationValue(webId, id, name, description, value, path, parent, links, serializeWebId, serializeId, serializeDescription, serializePath, serializeLinks, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (value != null) {
                this.Value = value;
            }
            if (path != null) {
                this.Path = path;
            }
            if (parent != null) {
                this.Parent = parent;
            }
            if (links != null) {
                this.Links = links;
            }
            if (serializeWebId != null) {
                this.SerializeWebId = serializeWebId;
            }
            if (serializeId != null) {
                this.SerializeId = serializeId;
            }
            if (serializeDescription != null) {
                this.SerializeDescription = serializeDescription;
            }
            if (serializePath != null) {
                this.SerializePath = serializePath;
            }
            if (serializeLinks != null) {
                this.SerializeLinks = serializeLinks;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIEnumerationValue;
    }());
    PIWebApiClient.PIEnumerationValue = PIEnumerationValue;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIEnumerationValueLinks = (function () {
        function PIEnumerationValueLinks(self, enumerationSet, parent) {
            if (self != null) {
                this.Self = self;
            }
            if (enumerationSet != null) {
                this.EnumerationSet = enumerationSet;
            }
            if (parent != null) {
                this.Parent = parent;
            }
        }
        return PIEnumerationValueLinks;
    }());
    PIWebApiClient.PIEnumerationValueLinks = PIEnumerationValueLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIErrors = (function () {
        function PIErrors(errors) {
            if (errors != null) {
                this.Errors = errors;
            }
        }
        return PIErrors;
    }());
    PIWebApiClient.PIErrors = PIErrors;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIEventFrame = (function () {
        function PIEventFrame(webId, id, name, description, path, templateName, hasChildren, categoryNames, extendedProperties, startTime, endTime, severity, acknowledgedBy, acknowledgedDate, canBeAcknowledged, isAcknowledged, isAnnotated, isLocked, areValuesCaptured, refElementWebIds, security, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (templateName != null) {
                this.TemplateName = templateName;
            }
            if (hasChildren != null) {
                this.HasChildren = hasChildren;
            }
            if (categoryNames != null) {
                this.CategoryNames = categoryNames;
            }
            if (extendedProperties != null) {
                this.ExtendedProperties = extendedProperties;
            }
            if (startTime != null) {
                this.StartTime = startTime;
            }
            if (endTime != null) {
                this.EndTime = endTime;
            }
            if (severity != null) {
                this.Severity = severity;
            }
            if (acknowledgedBy != null) {
                this.AcknowledgedBy = acknowledgedBy;
            }
            if (acknowledgedDate != null) {
                this.AcknowledgedDate = acknowledgedDate;
            }
            if (canBeAcknowledged != null) {
                this.CanBeAcknowledged = canBeAcknowledged;
            }
            if (isAcknowledged != null) {
                this.IsAcknowledged = isAcknowledged;
            }
            if (isAnnotated != null) {
                this.IsAnnotated = isAnnotated;
            }
            if (isLocked != null) {
                this.IsLocked = isLocked;
            }
            if (areValuesCaptured != null) {
                this.AreValuesCaptured = areValuesCaptured;
            }
            if (refElementWebIds != null) {
                this.RefElementWebIds = refElementWebIds;
            }
            if (security != null) {
                this.Security = security;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIEventFrame;
    }());
    PIWebApiClient.PIEventFrame = PIEventFrame;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIEventFrameLinks = (function () {
        function PIEventFrameLinks(self, attributes, eventFrames, database, referencedElements, primaryReferencedElement, parent, template, defaultAttribute, categories, annotations, interpolatedData, recordedData, plotData, summaryData, value, endValue, security, securityEntries) {
            if (self != null) {
                this.Self = self;
            }
            if (attributes != null) {
                this.Attributes = attributes;
            }
            if (eventFrames != null) {
                this.EventFrames = eventFrames;
            }
            if (database != null) {
                this.Database = database;
            }
            if (referencedElements != null) {
                this.ReferencedElements = referencedElements;
            }
            if (primaryReferencedElement != null) {
                this.PrimaryReferencedElement = primaryReferencedElement;
            }
            if (parent != null) {
                this.Parent = parent;
            }
            if (template != null) {
                this.Template = template;
            }
            if (defaultAttribute != null) {
                this.DefaultAttribute = defaultAttribute;
            }
            if (categories != null) {
                this.Categories = categories;
            }
            if (annotations != null) {
                this.Annotations = annotations;
            }
            if (interpolatedData != null) {
                this.InterpolatedData = interpolatedData;
            }
            if (recordedData != null) {
                this.RecordedData = recordedData;
            }
            if (plotData != null) {
                this.PlotData = plotData;
            }
            if (summaryData != null) {
                this.SummaryData = summaryData;
            }
            if (value != null) {
                this.Value = value;
            }
            if (endValue != null) {
                this.EndValue = endValue;
            }
            if (security != null) {
                this.Security = security;
            }
            if (securityEntries != null) {
                this.SecurityEntries = securityEntries;
            }
        }
        return PIEventFrameLinks;
    }());
    PIWebApiClient.PIEventFrameLinks = PIEventFrameLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIExtendedTimedValue = (function () {
        function PIExtendedTimedValue(annotations, timestamp, unitsAbbreviation, good, questionable, substituted, annotated, value, errors, webException) {
            if (annotations != null) {
                this.Annotations = annotations;
            }
            if (timestamp != null) {
                this.Timestamp = timestamp;
            }
            if (unitsAbbreviation != null) {
                this.UnitsAbbreviation = unitsAbbreviation;
            }
            if (good != null) {
                this.Good = good;
            }
            if (questionable != null) {
                this.Questionable = questionable;
            }
            if (substituted != null) {
                this.Substituted = substituted;
            }
            if (annotated != null) {
                this.Annotated = annotated;
            }
            if (value != null) {
                this.Value = value;
            }
            if (errors != null) {
                this.Errors = errors;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIExtendedTimedValue;
    }());
    PIWebApiClient.PIExtendedTimedValue = PIExtendedTimedValue;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIExtendedTimedValues = (function () {
        function PIExtendedTimedValues(items, unitsAbbreviation, webException) {
            if (items != null) {
                this.Items = items;
            }
            if (unitsAbbreviation != null) {
                this.UnitsAbbreviation = unitsAbbreviation;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIExtendedTimedValues;
    }());
    PIWebApiClient.PIExtendedTimedValues = PIExtendedTimedValues;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemAttribute = (function () {
        function PIItemAttribute(identifier, identifierType, object, exception) {
            if (identifier != null) {
                this.Identifier = identifier;
            }
            if (identifierType != null) {
                this.IdentifierType = identifierType;
            }
            if (object != null) {
                this.Object = object;
            }
            if (exception != null) {
                this.Exception = exception;
            }
        }
        return PIItemAttribute;
    }());
    PIWebApiClient.PIItemAttribute = PIItemAttribute;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemElement = (function () {
        function PIItemElement(identifier, identifierType, object, exception) {
            if (identifier != null) {
                this.Identifier = identifier;
            }
            if (identifierType != null) {
                this.IdentifierType = identifierType;
            }
            if (object != null) {
                this.Object = object;
            }
            if (exception != null) {
                this.Exception = exception;
            }
        }
        return PIItemElement;
    }());
    PIWebApiClient.PIItemElement = PIItemElement;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemEventFrame = (function () {
        function PIItemEventFrame(identifier, identifierType, object, exception) {
            if (identifier != null) {
                this.Identifier = identifier;
            }
            if (identifierType != null) {
                this.IdentifierType = identifierType;
            }
            if (object != null) {
                this.Object = object;
            }
            if (exception != null) {
                this.Exception = exception;
            }
        }
        return PIItemEventFrame;
    }());
    PIWebApiClient.PIItemEventFrame = PIItemEventFrame;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemPoint = (function () {
        function PIItemPoint(identifier, identifierType, object, exception) {
            if (identifier != null) {
                this.Identifier = identifier;
            }
            if (identifierType != null) {
                this.IdentifierType = identifierType;
            }
            if (object != null) {
                this.Object = object;
            }
            if (exception != null) {
                this.Exception = exception;
            }
        }
        return PIItemPoint;
    }());
    PIWebApiClient.PIItemPoint = PIItemPoint;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsAnalysis = (function () {
        function PIItemsAnalysis(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsAnalysis;
    }());
    PIWebApiClient.PIItemsAnalysis = PIItemsAnalysis;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsAnalysisCategory = (function () {
        function PIItemsAnalysisCategory(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsAnalysisCategory;
    }());
    PIWebApiClient.PIItemsAnalysisCategory = PIItemsAnalysisCategory;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsAnalysisRule = (function () {
        function PIItemsAnalysisRule(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsAnalysisRule;
    }());
    PIWebApiClient.PIItemsAnalysisRule = PIItemsAnalysisRule;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsAnalysisRulePlugIn = (function () {
        function PIItemsAnalysisRulePlugIn(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsAnalysisRulePlugIn;
    }());
    PIWebApiClient.PIItemsAnalysisRulePlugIn = PIItemsAnalysisRulePlugIn;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsAnalysisTemplate = (function () {
        function PIItemsAnalysisTemplate(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsAnalysisTemplate;
    }());
    PIWebApiClient.PIItemsAnalysisTemplate = PIItemsAnalysisTemplate;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsAnnotation = (function () {
        function PIItemsAnnotation(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsAnnotation;
    }());
    PIWebApiClient.PIItemsAnnotation = PIItemsAnnotation;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsAssetDatabase = (function () {
        function PIItemsAssetDatabase(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsAssetDatabase;
    }());
    PIWebApiClient.PIItemsAssetDatabase = PIItemsAssetDatabase;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsAssetServer = (function () {
        function PIItemsAssetServer(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsAssetServer;
    }());
    PIWebApiClient.PIItemsAssetServer = PIItemsAssetServer;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsAttribute = (function () {
        function PIItemsAttribute(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsAttribute;
    }());
    PIWebApiClient.PIItemsAttribute = PIItemsAttribute;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsAttributeCategory = (function () {
        function PIItemsAttributeCategory(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsAttributeCategory;
    }());
    PIWebApiClient.PIItemsAttributeCategory = PIItemsAttributeCategory;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsAttributeTemplate = (function () {
        function PIItemsAttributeTemplate(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsAttributeTemplate;
    }());
    PIWebApiClient.PIItemsAttributeTemplate = PIItemsAttributeTemplate;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsAttributeTrait = (function () {
        function PIItemsAttributeTrait(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsAttributeTrait;
    }());
    PIWebApiClient.PIItemsAttributeTrait = PIItemsAttributeTrait;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsCacheInstance = (function () {
        function PIItemsCacheInstance(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsCacheInstance;
    }());
    PIWebApiClient.PIItemsCacheInstance = PIItemsCacheInstance;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsChannelInstance = (function () {
        function PIItemsChannelInstance(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsChannelInstance;
    }());
    PIWebApiClient.PIItemsChannelInstance = PIItemsChannelInstance;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsDataServer = (function () {
        function PIItemsDataServer(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsDataServer;
    }());
    PIWebApiClient.PIItemsDataServer = PIItemsDataServer;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsElement = (function () {
        function PIItemsElement(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsElement;
    }());
    PIWebApiClient.PIItemsElement = PIItemsElement;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsElementCategory = (function () {
        function PIItemsElementCategory(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsElementCategory;
    }());
    PIWebApiClient.PIItemsElementCategory = PIItemsElementCategory;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsElementTemplate = (function () {
        function PIItemsElementTemplate(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsElementTemplate;
    }());
    PIWebApiClient.PIItemsElementTemplate = PIItemsElementTemplate;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsEnumerationSet = (function () {
        function PIItemsEnumerationSet(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsEnumerationSet;
    }());
    PIWebApiClient.PIItemsEnumerationSet = PIItemsEnumerationSet;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsEnumerationValue = (function () {
        function PIItemsEnumerationValue(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsEnumerationValue;
    }());
    PIWebApiClient.PIItemsEnumerationValue = PIItemsEnumerationValue;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsEventFrame = (function () {
        function PIItemsEventFrame(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsEventFrame;
    }());
    PIWebApiClient.PIItemsEventFrame = PIItemsEventFrame;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsItemAttribute = (function () {
        function PIItemsItemAttribute(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsItemAttribute;
    }());
    PIWebApiClient.PIItemsItemAttribute = PIItemsItemAttribute;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsItemElement = (function () {
        function PIItemsItemElement(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsItemElement;
    }());
    PIWebApiClient.PIItemsItemElement = PIItemsItemElement;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsItemEventFrame = (function () {
        function PIItemsItemEventFrame(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsItemEventFrame;
    }());
    PIWebApiClient.PIItemsItemEventFrame = PIItemsItemEventFrame;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsItemPoint = (function () {
        function PIItemsItemPoint(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsItemPoint;
    }());
    PIWebApiClient.PIItemsItemPoint = PIItemsItemPoint;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsItemsSubstatus = (function () {
        function PIItemsItemsSubstatus(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsItemsSubstatus;
    }());
    PIWebApiClient.PIItemsItemsSubstatus = PIItemsItemsSubstatus;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsNotificationContactTemplate = (function () {
        function PIItemsNotificationContactTemplate(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsNotificationContactTemplate;
    }());
    PIWebApiClient.PIItemsNotificationContactTemplate = PIItemsNotificationContactTemplate;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsNotificationRule = (function () {
        function PIItemsNotificationRule(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsNotificationRule;
    }());
    PIWebApiClient.PIItemsNotificationRule = PIItemsNotificationRule;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsNotificationRuleSubscriber = (function () {
        function PIItemsNotificationRuleSubscriber(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsNotificationRuleSubscriber;
    }());
    PIWebApiClient.PIItemsNotificationRuleSubscriber = PIItemsNotificationRuleSubscriber;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsNotificationRuleTemplate = (function () {
        function PIItemsNotificationRuleTemplate(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsNotificationRuleTemplate;
    }());
    PIWebApiClient.PIItemsNotificationRuleTemplate = PIItemsNotificationRuleTemplate;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsPoint = (function () {
        function PIItemsPoint(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsPoint;
    }());
    PIWebApiClient.PIItemsPoint = PIItemsPoint;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsPointAttribute = (function () {
        function PIItemsPointAttribute(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsPointAttribute;
    }());
    PIWebApiClient.PIItemsPointAttribute = PIItemsPointAttribute;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsSecurityEntry = (function () {
        function PIItemsSecurityEntry(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsSecurityEntry;
    }());
    PIWebApiClient.PIItemsSecurityEntry = PIItemsSecurityEntry;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsSecurityIdentity = (function () {
        function PIItemsSecurityIdentity(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsSecurityIdentity;
    }());
    PIWebApiClient.PIItemsSecurityIdentity = PIItemsSecurityIdentity;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsSecurityMapping = (function () {
        function PIItemsSecurityMapping(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsSecurityMapping;
    }());
    PIWebApiClient.PIItemsSecurityMapping = PIItemsSecurityMapping;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsSecurityRights = (function () {
        function PIItemsSecurityRights(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsSecurityRights;
    }());
    PIWebApiClient.PIItemsSecurityRights = PIItemsSecurityRights;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsStreamSummaries = (function () {
        function PIItemsStreamSummaries(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsStreamSummaries;
    }());
    PIWebApiClient.PIItemsStreamSummaries = PIItemsStreamSummaries;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsStreamUpdatesRegister = (function () {
        function PIItemsStreamUpdatesRegister(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsStreamUpdatesRegister;
    }());
    PIWebApiClient.PIItemsStreamUpdatesRegister = PIItemsStreamUpdatesRegister;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsStreamUpdatesRetrieve = (function () {
        function PIItemsStreamUpdatesRetrieve(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsStreamUpdatesRetrieve;
    }());
    PIWebApiClient.PIItemsStreamUpdatesRetrieve = PIItemsStreamUpdatesRetrieve;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsStreamValue = (function () {
        function PIItemsStreamValue(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsStreamValue;
    }());
    PIWebApiClient.PIItemsStreamValue = PIItemsStreamValue;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsStreamValues = (function () {
        function PIItemsStreamValues(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsStreamValues;
    }());
    PIWebApiClient.PIItemsStreamValues = PIItemsStreamValues;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsstring = (function () {
        function PIItemsstring(items) {
            if (items != null) {
                this.Items = items;
            }
        }
        return PIItemsstring;
    }());
    PIWebApiClient.PIItemsstring = PIItemsstring;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsSubstatus = (function () {
        function PIItemsSubstatus(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsSubstatus;
    }());
    PIWebApiClient.PIItemsSubstatus = PIItemsSubstatus;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsSummaryValue = (function () {
        function PIItemsSummaryValue(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsSummaryValue;
    }());
    PIWebApiClient.PIItemsSummaryValue = PIItemsSummaryValue;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsTable = (function () {
        function PIItemsTable(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsTable;
    }());
    PIWebApiClient.PIItemsTable = PIItemsTable;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsTableCategory = (function () {
        function PIItemsTableCategory(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsTableCategory;
    }());
    PIWebApiClient.PIItemsTableCategory = PIItemsTableCategory;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsTimeRulePlugIn = (function () {
        function PIItemsTimeRulePlugIn(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsTimeRulePlugIn;
    }());
    PIWebApiClient.PIItemsTimeRulePlugIn = PIItemsTimeRulePlugIn;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIItemsUnitClass = (function () {
        function PIItemsUnitClass(items, links) {
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
        }
        return PIItemsUnitClass;
    }());
    PIWebApiClient.PIItemsUnitClass = PIItemsUnitClass;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PILanding = (function () {
        function PILanding(links, webException) {
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PILanding;
    }());
    PIWebApiClient.PILanding = PILanding;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PILandingLinks = (function () {
        function PILandingLinks(self, assetServers, dataServers, pIDirectory, search, system) {
            if (self != null) {
                this.Self = self;
            }
            if (assetServers != null) {
                this.AssetServers = assetServers;
            }
            if (dataServers != null) {
                this.DataServers = dataServers;
            }
            if (pIDirectory != null) {
                this.PIDirectory = pIDirectory;
            }
            if (search != null) {
                this.Search = search;
            }
            if (system != null) {
                this.System = system;
            }
        }
        return PILandingLinks;
    }());
    PIWebApiClient.PILandingLinks = PILandingLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIMediaMetadata = (function () {
        function PIMediaMetadata(author, changeDate, description, name, size, links, webException) {
            if (author != null) {
                this.Author = author;
            }
            if (changeDate != null) {
                this.ChangeDate = changeDate;
            }
            if (description != null) {
                this.Description = description;
            }
            if (name != null) {
                this.Name = name;
            }
            if (size != null) {
                this.Size = size;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIMediaMetadata;
    }());
    PIWebApiClient.PIMediaMetadata = PIMediaMetadata;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIMediaMetadataLinks = (function () {
        function PIMediaMetadataLinks(self, owner, mediaData) {
            if (self != null) {
                this.Self = self;
            }
            if (owner != null) {
                this.Owner = owner;
            }
            if (mediaData != null) {
                this.MediaData = mediaData;
            }
        }
        return PIMediaMetadataLinks;
    }());
    PIWebApiClient.PIMediaMetadataLinks = PIMediaMetadataLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PINotificationContactTemplate = (function () {
        function PINotificationContactTemplate(webId, id, name, description, path, available, configString, contactType, plugInName, hasChildren, maximumRetries, minimumAcknowledgements, notifyWhenInstanceEnded, escalationTimeout, retryInterval, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (available != null) {
                this.Available = available;
            }
            if (configString != null) {
                this.ConfigString = configString;
            }
            if (contactType != null) {
                this.ContactType = contactType;
            }
            if (plugInName != null) {
                this.PlugInName = plugInName;
            }
            if (hasChildren != null) {
                this.HasChildren = hasChildren;
            }
            if (maximumRetries != null) {
                this.MaximumRetries = maximumRetries;
            }
            if (minimumAcknowledgements != null) {
                this.MinimumAcknowledgements = minimumAcknowledgements;
            }
            if (notifyWhenInstanceEnded != null) {
                this.NotifyWhenInstanceEnded = notifyWhenInstanceEnded;
            }
            if (escalationTimeout != null) {
                this.EscalationTimeout = escalationTimeout;
            }
            if (retryInterval != null) {
                this.RetryInterval = retryInterval;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PINotificationContactTemplate;
    }());
    PIWebApiClient.PINotificationContactTemplate = PINotificationContactTemplate;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PINotificationContactTemplateLinks = (function () {
        function PINotificationContactTemplateLinks(self, assetServer) {
            if (self != null) {
                this.Self = self;
            }
            if (assetServer != null) {
                this.AssetServer = assetServer;
            }
        }
        return PINotificationContactTemplateLinks;
    }());
    PIWebApiClient.PINotificationContactTemplateLinks = PINotificationContactTemplateLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PINotificationRule = (function () {
        function PINotificationRule(webId, id, name, description, path, autoCreated, categoryNames, criteria, multiTriggerEventOption, nonrepetitionInterval, resendInterval, status, templateName, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (autoCreated != null) {
                this.AutoCreated = autoCreated;
            }
            if (categoryNames != null) {
                this.CategoryNames = categoryNames;
            }
            if (criteria != null) {
                this.Criteria = criteria;
            }
            if (multiTriggerEventOption != null) {
                this.MultiTriggerEventOption = multiTriggerEventOption;
            }
            if (nonrepetitionInterval != null) {
                this.NonrepetitionInterval = nonrepetitionInterval;
            }
            if (resendInterval != null) {
                this.ResendInterval = resendInterval;
            }
            if (status != null) {
                this.Status = status;
            }
            if (templateName != null) {
                this.TemplateName = templateName;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PINotificationRule;
    }());
    PIWebApiClient.PINotificationRule = PINotificationRule;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PINotificationRuleSubscriber = (function () {
        function PINotificationRuleSubscriber(webId, id, name, description, path, configString, contactTemplateName, contactType, deliveryFormatName, plugInName, escalationTimeout, maximumRetries, notifyOption, retryInterval, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (configString != null) {
                this.ConfigString = configString;
            }
            if (contactTemplateName != null) {
                this.ContactTemplateName = contactTemplateName;
            }
            if (contactType != null) {
                this.ContactType = contactType;
            }
            if (deliveryFormatName != null) {
                this.DeliveryFormatName = deliveryFormatName;
            }
            if (plugInName != null) {
                this.PlugInName = plugInName;
            }
            if (escalationTimeout != null) {
                this.EscalationTimeout = escalationTimeout;
            }
            if (maximumRetries != null) {
                this.MaximumRetries = maximumRetries;
            }
            if (notifyOption != null) {
                this.NotifyOption = notifyOption;
            }
            if (retryInterval != null) {
                this.RetryInterval = retryInterval;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PINotificationRuleSubscriber;
    }());
    PIWebApiClient.PINotificationRuleSubscriber = PINotificationRuleSubscriber;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PINotificationRuleTemplate = (function () {
        function PINotificationRuleTemplate(webId, id, name, description, path, categoryNames, criteria, multiTriggerEventOption, nonrepetitionInterval, resendInterval, status, templateName, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (categoryNames != null) {
                this.CategoryNames = categoryNames;
            }
            if (criteria != null) {
                this.Criteria = criteria;
            }
            if (multiTriggerEventOption != null) {
                this.MultiTriggerEventOption = multiTriggerEventOption;
            }
            if (nonrepetitionInterval != null) {
                this.NonrepetitionInterval = nonrepetitionInterval;
            }
            if (resendInterval != null) {
                this.ResendInterval = resendInterval;
            }
            if (status != null) {
                this.Status = status;
            }
            if (templateName != null) {
                this.TemplateName = templateName;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PINotificationRuleTemplate;
    }());
    PIWebApiClient.PINotificationRuleTemplate = PINotificationRuleTemplate;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIPaginationLinks = (function () {
        function PIPaginationLinks(first, previous, next, last) {
            if (first != null) {
                this.First = first;
            }
            if (previous != null) {
                this.Previous = previous;
            }
            if (next != null) {
                this.Next = next;
            }
            if (last != null) {
                this.Last = last;
            }
        }
        return PIPaginationLinks;
    }());
    PIWebApiClient.PIPaginationLinks = PIPaginationLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIPoint = (function () {
        function PIPoint(webId, id, name, path, descriptor, pointClass, pointType, digitalSetName, span, zero, engineeringUnits, step, future, displayDigits, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (path != null) {
                this.Path = path;
            }
            if (descriptor != null) {
                this.Descriptor = descriptor;
            }
            if (pointClass != null) {
                this.PointClass = pointClass;
            }
            if (pointType != null) {
                this.PointType = pointType;
            }
            if (digitalSetName != null) {
                this.DigitalSetName = digitalSetName;
            }
            if (span != null) {
                this.Span = span;
            }
            if (zero != null) {
                this.Zero = zero;
            }
            if (engineeringUnits != null) {
                this.EngineeringUnits = engineeringUnits;
            }
            if (step != null) {
                this.Step = step;
            }
            if (future != null) {
                this.Future = future;
            }
            if (displayDigits != null) {
                this.DisplayDigits = displayDigits;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIPoint;
    }());
    PIWebApiClient.PIPoint = PIPoint;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIPointAttribute = (function () {
        function PIPointAttribute(name, value, links, webException) {
            if (name != null) {
                this.Name = name;
            }
            if (value != null) {
                this.Value = value;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIPointAttribute;
    }());
    PIWebApiClient.PIPointAttribute = PIPointAttribute;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIPointAttributeLinks = (function () {
        function PIPointAttributeLinks(self, point) {
            if (self != null) {
                this.Self = self;
            }
            if (point != null) {
                this.Point = point;
            }
        }
        return PIPointAttributeLinks;
    }());
    PIWebApiClient.PIPointAttributeLinks = PIPointAttributeLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIPointLinks = (function () {
        function PIPointLinks(self, dataServer, attributes, interpolatedData, recordedData, plotData, summaryData, value, endValue) {
            if (self != null) {
                this.Self = self;
            }
            if (dataServer != null) {
                this.DataServer = dataServer;
            }
            if (attributes != null) {
                this.Attributes = attributes;
            }
            if (interpolatedData != null) {
                this.InterpolatedData = interpolatedData;
            }
            if (recordedData != null) {
                this.RecordedData = recordedData;
            }
            if (plotData != null) {
                this.PlotData = plotData;
            }
            if (summaryData != null) {
                this.SummaryData = summaryData;
            }
            if (value != null) {
                this.Value = value;
            }
            if (endValue != null) {
                this.EndValue = endValue;
            }
        }
        return PIPointLinks;
    }());
    PIWebApiClient.PIPointLinks = PIPointLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIPropertyError = (function () {
        function PIPropertyError(fieldName, message) {
            if (fieldName != null) {
                this.FieldName = fieldName;
            }
            if (message != null) {
                this.Message = message;
            }
        }
        return PIPropertyError;
    }());
    PIWebApiClient.PIPropertyError = PIPropertyError;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIRequest = (function () {
        function PIRequest(method, resource, requestTemplate, parameters, headers, content, parentIds) {
            if (method != null) {
                this.Method = method;
            }
            if (resource != null) {
                this.Resource = resource;
            }
            if (requestTemplate != null) {
                this.RequestTemplate = requestTemplate;
            }
            if (parameters != null) {
                this.Parameters = parameters;
            }
            if (headers != null) {
                this.Headers = headers;
            }
            if (content != null) {
                this.Content = content;
            }
            if (parentIds != null) {
                this.ParentIds = parentIds;
            }
        }
        return PIRequest;
    }());
    PIWebApiClient.PIRequest = PIRequest;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIRequestTemplate = (function () {
        function PIRequestTemplate(resource) {
            if (resource != null) {
                this.Resource = resource;
            }
        }
        return PIRequestTemplate;
    }());
    PIWebApiClient.PIRequestTemplate = PIRequestTemplate;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIResponse = (function () {
        function PIResponse(status, headers, content) {
            if (status != null) {
                this.Status = status;
            }
            if (headers != null) {
                this.Headers = headers;
            }
            if (content != null) {
                this.Content = content;
            }
        }
        return PIResponse;
    }());
    PIWebApiClient.PIResponse = PIResponse;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PISearchByAttribute = (function () {
        function PISearchByAttribute(searchRoot, elementTemplate, webException, valueQueries) {
            if (searchRoot != null) {
                this.SearchRoot = searchRoot;
            }
            if (elementTemplate != null) {
                this.ElementTemplate = elementTemplate;
            }
            if (webException != null) {
                this.WebException = webException;
            }
            if (valueQueries != null) {
                this.ValueQueries = valueQueries;
            }
        }
        return PISearchByAttribute;
    }());
    PIWebApiClient.PISearchByAttribute = PISearchByAttribute;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2017 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PISearchByAttributeElement = (function () {
        function PISearchByAttributeElement(searchRoot, elementTemplate, valueQueries) {
            if (searchRoot != null) {
                this.SearchRoot = searchRoot;
            }
            if (elementTemplate != null) {
                this.ElementTemplate = elementTemplate;
            }
            if (valueQueries != null) {
                this.ValueQueries = valueQueries;
            }
        }
        return PISearchByAttributeElement;
    }());
    PIWebApiClient.PISearchByAttributeElement = PISearchByAttributeElement;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2017 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PISearchByAttributeEventFrame = (function () {
        function PISearchByAttributeEventFrame(searchRoot, elementTemplate, valueQueries) {
            if (searchRoot != null) {
                this.SearchRoot = searchRoot;
            }
            if (elementTemplate != null) {
                this.ElementTemplate = elementTemplate;
            }
            if (valueQueries != null) {
                this.ValueQueries = valueQueries;
            }
        }
        return PISearchByAttributeEventFrame;
    }());
    PIWebApiClient.PISearchByAttributeEventFrame = PISearchByAttributeEventFrame;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PISecurity = (function () {
        function PISecurity(canAnnotate, canDelete, canExecute, canRead, canReadData, canSubscribe, canSubscribeOthers, canWrite, canWriteData, hasAdmin, rights, webException) {
            if (canAnnotate != null) {
                this.CanAnnotate = canAnnotate;
            }
            if (canDelete != null) {
                this.CanDelete = canDelete;
            }
            if (canExecute != null) {
                this.CanExecute = canExecute;
            }
            if (canRead != null) {
                this.CanRead = canRead;
            }
            if (canReadData != null) {
                this.CanReadData = canReadData;
            }
            if (canSubscribe != null) {
                this.CanSubscribe = canSubscribe;
            }
            if (canSubscribeOthers != null) {
                this.CanSubscribeOthers = canSubscribeOthers;
            }
            if (canWrite != null) {
                this.CanWrite = canWrite;
            }
            if (canWriteData != null) {
                this.CanWriteData = canWriteData;
            }
            if (hasAdmin != null) {
                this.HasAdmin = hasAdmin;
            }
            if (rights != null) {
                this.Rights = rights;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PISecurity;
    }());
    PIWebApiClient.PISecurity = PISecurity;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PISecurityEntry = (function () {
        function PISecurityEntry(name, securityIdentityName, allowRights, denyRights, links, webException) {
            if (name != null) {
                this.Name = name;
            }
            if (securityIdentityName != null) {
                this.SecurityIdentityName = securityIdentityName;
            }
            if (allowRights != null) {
                this.AllowRights = allowRights;
            }
            if (denyRights != null) {
                this.DenyRights = denyRights;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PISecurityEntry;
    }());
    PIWebApiClient.PISecurityEntry = PISecurityEntry;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PISecurityEntryLinks = (function () {
        function PISecurityEntryLinks(self, securableObject, securityIdentity) {
            if (self != null) {
                this.Self = self;
            }
            if (securableObject != null) {
                this.SecurableObject = securableObject;
            }
            if (securityIdentity != null) {
                this.SecurityIdentity = securityIdentity;
            }
        }
        return PISecurityEntryLinks;
    }());
    PIWebApiClient.PISecurityEntryLinks = PISecurityEntryLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PISecurityIdentity = (function () {
        function PISecurityIdentity(webId, id, name, description, path, isEnabled, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (isEnabled != null) {
                this.IsEnabled = isEnabled;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PISecurityIdentity;
    }());
    PIWebApiClient.PISecurityIdentity = PISecurityIdentity;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PISecurityIdentityLinks = (function () {
        function PISecurityIdentityLinks(self, assetServer, securityMappings, security, securityEntries) {
            if (self != null) {
                this.Self = self;
            }
            if (assetServer != null) {
                this.AssetServer = assetServer;
            }
            if (securityMappings != null) {
                this.SecurityMappings = securityMappings;
            }
            if (security != null) {
                this.Security = security;
            }
            if (securityEntries != null) {
                this.SecurityEntries = securityEntries;
            }
        }
        return PISecurityIdentityLinks;
    }());
    PIWebApiClient.PISecurityIdentityLinks = PISecurityIdentityLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PISecurityMapping = (function () {
        function PISecurityMapping(webId, id, name, description, path, account, securityIdentityWebId, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (account != null) {
                this.Account = account;
            }
            if (securityIdentityWebId != null) {
                this.SecurityIdentityWebId = securityIdentityWebId;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PISecurityMapping;
    }());
    PIWebApiClient.PISecurityMapping = PISecurityMapping;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PISecurityMappingLinks = (function () {
        function PISecurityMappingLinks(self, assetServer, securityIdentity, security, securityEntries) {
            if (self != null) {
                this.Self = self;
            }
            if (assetServer != null) {
                this.AssetServer = assetServer;
            }
            if (securityIdentity != null) {
                this.SecurityIdentity = securityIdentity;
            }
            if (security != null) {
                this.Security = security;
            }
            if (securityEntries != null) {
                this.SecurityEntries = securityEntries;
            }
        }
        return PISecurityMappingLinks;
    }());
    PIWebApiClient.PISecurityMappingLinks = PISecurityMappingLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PISecurityRights = (function () {
        function PISecurityRights(ownerWebId, securityItem, userIdentity, links, canAnnotate, canDelete, canExecute, canRead, canReadData, canSubscribe, canSubscribeOthers, canWrite, canWriteData, hasAdmin, rights, webException) {
            if (ownerWebId != null) {
                this.OwnerWebId = ownerWebId;
            }
            if (securityItem != null) {
                this.SecurityItem = securityItem;
            }
            if (userIdentity != null) {
                this.UserIdentity = userIdentity;
            }
            if (links != null) {
                this.Links = links;
            }
            if (canAnnotate != null) {
                this.CanAnnotate = canAnnotate;
            }
            if (canDelete != null) {
                this.CanDelete = canDelete;
            }
            if (canExecute != null) {
                this.CanExecute = canExecute;
            }
            if (canRead != null) {
                this.CanRead = canRead;
            }
            if (canReadData != null) {
                this.CanReadData = canReadData;
            }
            if (canSubscribe != null) {
                this.CanSubscribe = canSubscribe;
            }
            if (canSubscribeOthers != null) {
                this.CanSubscribeOthers = canSubscribeOthers;
            }
            if (canWrite != null) {
                this.CanWrite = canWrite;
            }
            if (canWriteData != null) {
                this.CanWriteData = canWriteData;
            }
            if (hasAdmin != null) {
                this.HasAdmin = hasAdmin;
            }
            if (rights != null) {
                this.Rights = rights;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PISecurityRights;
    }());
    PIWebApiClient.PISecurityRights = PISecurityRights;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PISecurityRightsLinks = (function () {
        function PISecurityRightsLinks(self, owner) {
            if (self != null) {
                this.Self = self;
            }
            if (owner != null) {
                this.Owner = owner;
            }
        }
        return PISecurityRightsLinks;
    }());
    PIWebApiClient.PISecurityRightsLinks = PISecurityRightsLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIStreamAnnotation = (function () {
        function PIStreamAnnotation(id, name, description, value, creator, creationDate, modifier, modifyDate, webException) {
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (value != null) {
                this.Value = value;
            }
            if (creator != null) {
                this.Creator = creator;
            }
            if (creationDate != null) {
                this.CreationDate = creationDate;
            }
            if (modifier != null) {
                this.Modifier = modifier;
            }
            if (modifyDate != null) {
                this.ModifyDate = modifyDate;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIStreamAnnotation;
    }());
    PIWebApiClient.PIStreamAnnotation = PIStreamAnnotation;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIStreamSummaries = (function () {
        function PIStreamSummaries(webId, name, path, items, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (name != null) {
                this.Name = name;
            }
            if (path != null) {
                this.Path = path;
            }
            if (items != null) {
                this.Items = items;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIStreamSummaries;
    }());
    PIWebApiClient.PIStreamSummaries = PIStreamSummaries;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIStreamSummariesLinks = (function () {
        function PIStreamSummariesLinks(source) {
            if (source != null) {
                this.Source = source;
            }
        }
        return PIStreamSummariesLinks;
    }());
    PIWebApiClient.PIStreamSummariesLinks = PIStreamSummariesLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIStreamUpdatesRegister = (function () {
        function PIStreamUpdatesRegister(status, source, sourceName, sourcePath, latestMarker, exception) {
            if (status != null) {
                this.Status = status;
            }
            if (source != null) {
                this.Source = source;
            }
            if (sourceName != null) {
                this.SourceName = sourceName;
            }
            if (sourcePath != null) {
                this.SourcePath = sourcePath;
            }
            if (latestMarker != null) {
                this.LatestMarker = latestMarker;
            }
            if (exception != null) {
                this.Exception = exception;
            }
        }
        return PIStreamUpdatesRegister;
    }());
    PIWebApiClient.PIStreamUpdatesRegister = PIStreamUpdatesRegister;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIStreamUpdatesRetrieve = (function () {
        function PIStreamUpdatesRetrieve(source, sourceName, sourcePath, requestedMarker, latestMarker, status, events, exception) {
            if (source != null) {
                this.Source = source;
            }
            if (sourceName != null) {
                this.SourceName = sourceName;
            }
            if (sourcePath != null) {
                this.SourcePath = sourcePath;
            }
            if (requestedMarker != null) {
                this.RequestedMarker = requestedMarker;
            }
            if (latestMarker != null) {
                this.LatestMarker = latestMarker;
            }
            if (status != null) {
                this.Status = status;
            }
            if (events != null) {
                this.Events = events;
            }
            if (exception != null) {
                this.Exception = exception;
            }
        }
        return PIStreamUpdatesRetrieve;
    }());
    PIWebApiClient.PIStreamUpdatesRetrieve = PIStreamUpdatesRetrieve;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIStreamValue = (function () {
        function PIStreamValue(webId, name, path, value, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (name != null) {
                this.Name = name;
            }
            if (path != null) {
                this.Path = path;
            }
            if (value != null) {
                this.Value = value;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIStreamValue;
    }());
    PIWebApiClient.PIStreamValue = PIStreamValue;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIStreamValueLinks = (function () {
        function PIStreamValueLinks(source) {
            if (source != null) {
                this.Source = source;
            }
        }
        return PIStreamValueLinks;
    }());
    PIWebApiClient.PIStreamValueLinks = PIStreamValueLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIStreamValues = (function () {
        function PIStreamValues(webId, name, path, items, unitsAbbreviation, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (name != null) {
                this.Name = name;
            }
            if (path != null) {
                this.Path = path;
            }
            if (items != null) {
                this.Items = items;
            }
            if (unitsAbbreviation != null) {
                this.UnitsAbbreviation = unitsAbbreviation;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIStreamValues;
    }());
    PIWebApiClient.PIStreamValues = PIStreamValues;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIStreamValuesLinks = (function () {
        function PIStreamValuesLinks(source) {
            if (source != null) {
                this.Source = source;
            }
        }
        return PIStreamValuesLinks;
    }());
    PIWebApiClient.PIStreamValuesLinks = PIStreamValuesLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PISubstatus = (function () {
        function PISubstatus(substatus, message, webException) {
            if (substatus != null) {
                this.Substatus = substatus;
            }
            if (message != null) {
                this.Message = message;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PISubstatus;
    }());
    PIWebApiClient.PISubstatus = PISubstatus;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PISummaryValue = (function () {
        function PISummaryValue(type, value, webException) {
            if (type != null) {
                this.Type = type;
            }
            if (value != null) {
                this.Value = value;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PISummaryValue;
    }());
    PIWebApiClient.PISummaryValue = PISummaryValue;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PISystemLanding = (function () {
        function PISystemLanding(productTitle, productVersion, links, webException) {
            if (productTitle != null) {
                this.ProductTitle = productTitle;
            }
            if (productVersion != null) {
                this.ProductVersion = productVersion;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PISystemLanding;
    }());
    PIWebApiClient.PISystemLanding = PISystemLanding;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PISystemLandingLinks = (function () {
        function PISystemLandingLinks(self, cacheInstances, configuration, userInfo, versions, status) {
            if (self != null) {
                this.Self = self;
            }
            if (cacheInstances != null) {
                this.CacheInstances = cacheInstances;
            }
            if (configuration != null) {
                this.Configuration = configuration;
            }
            if (userInfo != null) {
                this.UserInfo = userInfo;
            }
            if (versions != null) {
                this.Versions = versions;
            }
            if (status != null) {
                this.Status = status;
            }
        }
        return PISystemLandingLinks;
    }());
    PIWebApiClient.PISystemLandingLinks = PISystemLandingLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PISystemStatus = (function () {
        function PISystemStatus(upTimeInMinutes, state, cacheInstances, serverTime, webException) {
            if (upTimeInMinutes != null) {
                this.UpTimeInMinutes = upTimeInMinutes;
            }
            if (state != null) {
                this.State = state;
            }
            if (cacheInstances != null) {
                this.CacheInstances = cacheInstances;
            }
            if (serverTime != null) {
                this.ServerTime = serverTime;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PISystemStatus;
    }());
    PIWebApiClient.PISystemStatus = PISystemStatus;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PITable = (function () {
        function PITable(webId, id, name, description, path, categoryNames, timeZone, convertToLocalTime, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (categoryNames != null) {
                this.CategoryNames = categoryNames;
            }
            if (timeZone != null) {
                this.TimeZone = timeZone;
            }
            if (convertToLocalTime != null) {
                this.ConvertToLocalTime = convertToLocalTime;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PITable;
    }());
    PIWebApiClient.PITable = PITable;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PITableCategory = (function () {
        function PITableCategory(webId, id, name, description, path, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PITableCategory;
    }());
    PIWebApiClient.PITableCategory = PITableCategory;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PITableCategoryLinks = (function () {
        function PITableCategoryLinks(self, database, security, securityEntries) {
            if (self != null) {
                this.Self = self;
            }
            if (database != null) {
                this.Database = database;
            }
            if (security != null) {
                this.Security = security;
            }
            if (securityEntries != null) {
                this.SecurityEntries = securityEntries;
            }
        }
        return PITableCategoryLinks;
    }());
    PIWebApiClient.PITableCategoryLinks = PITableCategoryLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PITableData = (function () {
        function PITableData(columns, rows, webException) {
            if (columns != null) {
                this.Columns = columns;
            }
            if (rows != null) {
                this.Rows = rows;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PITableData;
    }());
    PIWebApiClient.PITableData = PITableData;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PITableLinks = (function () {
        function PITableLinks(self, database, data, categories, security, securityEntries) {
            if (self != null) {
                this.Self = self;
            }
            if (database != null) {
                this.Database = database;
            }
            if (data != null) {
                this.Data = data;
            }
            if (categories != null) {
                this.Categories = categories;
            }
            if (security != null) {
                this.Security = security;
            }
            if (securityEntries != null) {
                this.SecurityEntries = securityEntries;
            }
        }
        return PITableLinks;
    }());
    PIWebApiClient.PITableLinks = PITableLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PITimedValue = (function () {
        function PITimedValue(timestamp, unitsAbbreviation, good, questionable, substituted, annotated, value, errors, webException) {
            if (timestamp != null) {
                this.Timestamp = timestamp;
            }
            if (unitsAbbreviation != null) {
                this.UnitsAbbreviation = unitsAbbreviation;
            }
            if (good != null) {
                this.Good = good;
            }
            if (questionable != null) {
                this.Questionable = questionable;
            }
            if (substituted != null) {
                this.Substituted = substituted;
            }
            if (annotated != null) {
                this.Annotated = annotated;
            }
            if (value != null) {
                this.Value = value;
            }
            if (errors != null) {
                this.Errors = errors;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PITimedValue;
    }());
    PIWebApiClient.PITimedValue = PITimedValue;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PITimedValues = (function () {
        function PITimedValues(items, unitsAbbreviation, webException) {
            if (items != null) {
                this.Items = items;
            }
            if (unitsAbbreviation != null) {
                this.UnitsAbbreviation = unitsAbbreviation;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PITimedValues;
    }());
    PIWebApiClient.PITimedValues = PITimedValues;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PITimeRule = (function () {
        function PITimeRule(webId, id, name, description, path, configString, configStringStored, displayString, editorType, isConfigured, isInitializing, mergeDuplicatedItems, plugInName, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (configString != null) {
                this.ConfigString = configString;
            }
            if (configStringStored != null) {
                this.ConfigStringStored = configStringStored;
            }
            if (displayString != null) {
                this.DisplayString = displayString;
            }
            if (editorType != null) {
                this.EditorType = editorType;
            }
            if (isConfigured != null) {
                this.IsConfigured = isConfigured;
            }
            if (isInitializing != null) {
                this.IsInitializing = isInitializing;
            }
            if (mergeDuplicatedItems != null) {
                this.MergeDuplicatedItems = mergeDuplicatedItems;
            }
            if (plugInName != null) {
                this.PlugInName = plugInName;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PITimeRule;
    }());
    PIWebApiClient.PITimeRule = PITimeRule;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PITimeRuleLinks = (function () {
        function PITimeRuleLinks(self, analysis, analysisTemplate, plugIn) {
            if (self != null) {
                this.Self = self;
            }
            if (analysis != null) {
                this.Analysis = analysis;
            }
            if (analysisTemplate != null) {
                this.AnalysisTemplate = analysisTemplate;
            }
            if (plugIn != null) {
                this.PlugIn = plugIn;
            }
        }
        return PITimeRuleLinks;
    }());
    PIWebApiClient.PITimeRuleLinks = PITimeRuleLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PITimeRulePlugIn = (function () {
        function PITimeRulePlugIn(webId, id, name, description, path, assemblyFileName, assemblyID, assemblyLoadProperties, assemblyTime, compatibilityVersion, isBrowsable, isNonEditableConfig, loadedAssemblyTime, loadedVersion, version, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (assemblyFileName != null) {
                this.AssemblyFileName = assemblyFileName;
            }
            if (assemblyID != null) {
                this.AssemblyID = assemblyID;
            }
            if (assemblyLoadProperties != null) {
                this.AssemblyLoadProperties = assemblyLoadProperties;
            }
            if (assemblyTime != null) {
                this.AssemblyTime = assemblyTime;
            }
            if (compatibilityVersion != null) {
                this.CompatibilityVersion = compatibilityVersion;
            }
            if (isBrowsable != null) {
                this.IsBrowsable = isBrowsable;
            }
            if (isNonEditableConfig != null) {
                this.IsNonEditableConfig = isNonEditableConfig;
            }
            if (loadedAssemblyTime != null) {
                this.LoadedAssemblyTime = loadedAssemblyTime;
            }
            if (loadedVersion != null) {
                this.LoadedVersion = loadedVersion;
            }
            if (version != null) {
                this.Version = version;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PITimeRulePlugIn;
    }());
    PIWebApiClient.PITimeRulePlugIn = PITimeRulePlugIn;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PITimeRulePlugInLinks = (function () {
        function PITimeRulePlugInLinks(self, assetServer) {
            if (self != null) {
                this.Self = self;
            }
            if (assetServer != null) {
                this.AssetServer = assetServer;
            }
        }
        return PITimeRulePlugInLinks;
    }());
    PIWebApiClient.PITimeRulePlugInLinks = PITimeRulePlugInLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIUnit = (function () {
        function PIUnit(webId, id, name, abbreviation, description, path, factor, offset, referenceFactor, referenceOffset, referenceUnitAbbreviation, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (abbreviation != null) {
                this.Abbreviation = abbreviation;
            }
            if (description != null) {
                this.Description = description;
            }
            if (path != null) {
                this.Path = path;
            }
            if (factor != null) {
                this.Factor = factor;
            }
            if (offset != null) {
                this.Offset = offset;
            }
            if (referenceFactor != null) {
                this.ReferenceFactor = referenceFactor;
            }
            if (referenceOffset != null) {
                this.ReferenceOffset = referenceOffset;
            }
            if (referenceUnitAbbreviation != null) {
                this.ReferenceUnitAbbreviation = referenceUnitAbbreviation;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIUnit;
    }());
    PIWebApiClient.PIUnit = PIUnit;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIUnitClass = (function () {
        function PIUnitClass(webId, id, name, description, canonicalUnitName, canonicalUnitAbbreviation, path, links, webException) {
            if (webId != null) {
                this.WebId = webId;
            }
            if (id != null) {
                this.Id = id;
            }
            if (name != null) {
                this.Name = name;
            }
            if (description != null) {
                this.Description = description;
            }
            if (canonicalUnitName != null) {
                this.CanonicalUnitName = canonicalUnitName;
            }
            if (canonicalUnitAbbreviation != null) {
                this.CanonicalUnitAbbreviation = canonicalUnitAbbreviation;
            }
            if (path != null) {
                this.Path = path;
            }
            if (links != null) {
                this.Links = links;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIUnitClass;
    }());
    PIWebApiClient.PIUnitClass = PIUnitClass;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIUnitClassLinks = (function () {
        function PIUnitClassLinks(self, canonicalUnit, units, assetServer) {
            if (self != null) {
                this.Self = self;
            }
            if (canonicalUnit != null) {
                this.CanonicalUnit = canonicalUnit;
            }
            if (units != null) {
                this.Units = units;
            }
            if (assetServer != null) {
                this.AssetServer = assetServer;
            }
        }
        return PIUnitClassLinks;
    }());
    PIWebApiClient.PIUnitClassLinks = PIUnitClassLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIUnitLinks = (function () {
        function PIUnitLinks(self, referenceUnit) {
            if (self != null) {
                this.Self = self;
            }
            if (referenceUnit != null) {
                this.ReferenceUnit = referenceUnit;
            }
        }
        return PIUnitLinks;
    }());
    PIWebApiClient.PIUnitLinks = PIUnitLinks;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIUserInfo = (function () {
        function PIUserInfo(identityType, name, isAuthenticated, sID, impersonationLevel, webException) {
            if (identityType != null) {
                this.IdentityType = identityType;
            }
            if (name != null) {
                this.Name = name;
            }
            if (isAuthenticated != null) {
                this.IsAuthenticated = isAuthenticated;
            }
            if (sID != null) {
                this.SID = sID;
            }
            if (impersonationLevel != null) {
                this.ImpersonationLevel = impersonationLevel;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIUserInfo;
    }());
    PIWebApiClient.PIUserInfo = PIUserInfo;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIValue = (function () {
        function PIValue(value, exception, webException) {
            if (value != null) {
                this.Value = value;
            }
            if (exception != null) {
                this.Exception = exception;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIValue;
    }());
    PIWebApiClient.PIValue = PIValue;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIValueQuery = (function () {
        function PIValueQuery(attributeName, attributeUOM, attributeValue, searchOperator, webException) {
            if (attributeName != null) {
                this.AttributeName = attributeName;
            }
            if (attributeUOM != null) {
                this.AttributeUOM = attributeUOM;
            }
            if (attributeValue != null) {
                this.AttributeValue = attributeValue;
            }
            if (searchOperator != null) {
                this.SearchOperator = searchOperator;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIValueQuery;
    }());
    PIWebApiClient.PIValueQuery = PIValueQuery;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIVersion = (function () {
        function PIVersion(fullVersion, majorMinorRevision, build, webException) {
            if (fullVersion != null) {
                this.FullVersion = fullVersion;
            }
            if (majorMinorRevision != null) {
                this.MajorMinorRevision = majorMinorRevision;
            }
            if (build != null) {
                this.Build = build;
            }
            if (webException != null) {
                this.WebException = webException;
            }
        }
        return PIVersion;
    }());
    PIWebApiClient.PIVersion = PIVersion;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var PIWebException = (function () {
        function PIWebException(statusCode, errors) {
            if (statusCode != null) {
                this.StatusCode = statusCode;
            }
            if (errors != null) {
                this.Errors = errors;
            }
        }
        return PIWebException;
    }());
    PIWebApiClient.PIWebException = PIWebException;
})(PIWebApiClient || (PIWebApiClient = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var WebIdError = (function (_super) {
        __extends(WebIdError, _super);
        function WebIdError(msg) {
            return _super.call(this, msg) || this;
        }
        return WebIdError;
    }(Error));
    PIWebApiClient.WebIdError = WebIdError;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var WebIdHelper = (function () {
        function WebIdHelper() {
        }
        WebIdHelper.prototype.getWebIdInfo = function (webId) {
            return new PIWebApiClient.WebIdInfo(webId);
        };
        WebIdHelper.prototype.generateWebIdByPath = function (path, type, ownerType) {
            this.validateTypeAndOwnerType(type, ownerType);
            var marker = this.getMarker(type);
            var ownerMarker = this.getOwnerMarker(ownerType);
            if (path.substring(0, 2) == "\\\\") {
                path = path.substring(2);
            }
            var encodedPath = this.encodeString(path.toUpperCase());
            return ("P1" + marker + ownerMarker + encodedPath);
        };
        WebIdHelper.prototype.validateTypeAndOwnerType = function (type, ownerType) {
            if (type == "PIAttribute") {
                if ((ownerType != "PIElement") && (ownerType != "PIEventFrame")) {
                    throw new PIWebApiClient.WebIdError("PIAttribte owner type must be a PIElement or a PIEventFrame.");
                }
            }
            else if (type == "PIAttributeTemplate") {
                if ((ownerType != "PIElementTemplate")) {
                    throw new PIWebApiClient.WebIdError("PIElementTemplate owner type must be a PIElementTemplate.");
                }
            }
            else if ((type == "PIEnumerationSet") || (type == "PIEnumerationValue")) {
                if ((ownerType != "PIDataServer") && (ownerType != "PIAssetServer")) {
                    throw new PIWebApiClient.WebIdError("PIEnumerationSet and  PIEnumerationValue owner type must be a PIDataServer or PIAssetServer.");
                }
            }
            else if (type == "PITimeRule") {
                if ((ownerType != "PIAnalysis") && (ownerType != "PIAnalysisTemplate")) {
                    throw new PIWebApiClient.WebIdError("PITimeRule owner type must be a PIAnalysis and PIAnalysisTemplate.");
                }
            }
        };
        WebIdHelper.prototype.getOwnerMarker = function (ownerType) {
            var markerOwner = "";
            if (ownerType == null) {
                return markerOwner;
            }
            if (ownerType == "PIAssetServer") {
                markerOwner = "R";
            }
            else if (ownerType == "PIDataServer") {
                markerOwner = "D";
            }
            else if (ownerType == "PIAnalysis") {
                markerOwner = "X";
            }
            else if (ownerType == "PIAnalysisTemplate") {
                markerOwner = "T";
            }
            else if (ownerType == "PIElement") {
                markerOwner = "E";
            }
            if (ownerType == "PIElementTemplate") {
                markerOwner = "E";
            }
            else if (ownerType == "PIEventFrame") {
                markerOwner = "F";
            }
            return markerOwner;
        };
        WebIdHelper.prototype.getMarker = function (type) {
            var marker = "";
            if (type == "PIAnalysis") {
                marker = "Xs";
            }
            else if (type == "PIAnalysisCategory") {
                marker = "XC";
            }
            else if (type == "PIAnalysisTemplate") {
                marker = "XT";
            }
            else if (type == "PIAnalysisRule") {
                marker = "XR";
            }
            else if (type == "PIAnalysisRulePlugIn") {
                marker = "XP";
            }
            else if (type == "PIAttribute") {
                marker = "Ab";
            }
            else if (type == "PIAttributeCategory") {
                marker = "AC";
            }
            else if (type == "PIAttributeTemplate") {
                marker = "AT";
            }
            else if (type == "PIAssetDatabase") {
                marker = "RD";
            }
            else if (type == "PIAssetServer") {
                marker = "RS";
            }
            else if (type == "PIElement") {
                marker = "Em";
            }
            else if (type == "PIElementCategory") {
                marker = "EC";
            }
            else if (type == "PIElementTemplate") {
                marker = "ET";
            }
            else if (type == "PIEnumerationSet") {
                marker = "MS";
            }
            else if (type == "PIEnumerationValue") {
                marker = "MV";
            }
            else if (type == "PIEventFrame") {
                marker = "Fm";
            }
            else if (type == "PITimeRule") {
                marker = "TR";
            }
            else if (type == "PITimeRulePlugIn") {
                marker = "TP";
            }
            else if (type == "PISecurityIdentity") {
                marker = "SI";
            }
            else if (type == "PISecurityMapping") {
                marker = "SM";
            }
            else if (type == "PITable") {
                marker = "Bl";
            }
            else if (type == "PITableCategory") {
                marker = "BC";
            }
            else if (type == "PIPoint") {
                marker = "DP";
            }
            else if (type == "PIDataServer") {
                marker = "DS";
            }
            else if (type == "PIUnit") {
                marker = "Ut";
            }
            else if (type == "PIUnitClass") {
                marker = "UC";
            }
            if (!marker) {
                throw new PIWebApiClient.WebIdError("Invalid object type.");
            }
            return marker;
        };
        WebIdHelper.prototype.encodeString = function (value) {
            var count = 0;
            var encodedValue = btoa(value.toUpperCase());
            encodedValue = encodedValue.replace('+', '-').replace('/', '_');
            for (var i = (encodedValue.length - 1); i > 0; i--) {
                if (encodedValue[i] == "=") {
                    count++;
                }
                else {
                    break;
                }
            }
            if (count > 0) {
                encodedValue = encodedValue.slice(0, -count);
            }
            return encodedValue;
        };
        return WebIdHelper;
    }());
    PIWebApiClient.WebIdHelper = WebIdHelper;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="../api.d.ts"/>
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var WebIdStringType;
    (function (WebIdStringType) {
        WebIdStringType[WebIdStringType["OneGuid"] = 0] = "OneGuid";
        WebIdStringType[WebIdStringType["TwoGuids"] = 1] = "TwoGuids";
        WebIdStringType[WebIdStringType["ThreeGuids"] = 2] = "ThreeGuids";
    })(WebIdStringType || (WebIdStringType = {}));
    var WebIdInfo = (function () {
        function WebIdInfo(webId) {
            this.WebIdType = this.getWebIdType(webId);
            if ((this.WebIdType == PIWebApiClient.WebIdType.DefaultIDOnly) || (this.WebIdType == PIWebApiClient.WebIdType.LocalIDOnly)) {
                throw new PIWebApiClient.WebIdError("This library is not compatible with DefaultIDOnly or LocalIDOnly. Use Full, PathOnly or IDOnly instead.");
            }
            this.Version = parseInt(webId.substring(1, 2));
            if (this.Version == 0) {
                throw new PIWebApiClient.WebIdError("This tool is compatible with Web ID 2.0 only. The second character of the Web ID must be 1.");
            }
            this.processType(webId);
            this.processWebId(webId);
        }
        WebIdInfo.prototype.getWebIdType = function (webId) {
            var webIdTypeLetter = webId.substring(0, 1);
            if (webIdTypeLetter == "F") {
                return PIWebApiClient.WebIdType.Full;
            }
            else if (webIdTypeLetter == "I") {
                return PIWebApiClient.WebIdType.IDOnly;
            }
            else if (webIdTypeLetter == "P") {
                return PIWebApiClient.WebIdType.PathOnly;
            }
            else if (webIdTypeLetter == "L") {
                return PIWebApiClient.WebIdType.LocalIDOnly;
            }
            else if (webIdTypeLetter == "D") {
                return PIWebApiClient.WebIdType.DefaultIDOnly;
            }
            throw new PIWebApiClient.WebIdError("Incorrect Web ID type (first letter).");
        };
        WebIdInfo.prototype.processType = function (webId) {
            this.Marker = webId.substring(2, 4);
            if (this.Marker == "Xs") {
                this.ObjectType = "PIAnalysis";
            }
            else if (this.Marker == "XC") {
                this.ObjectType = "PIAnalysisCategory";
            }
            else if (this.Marker == "XT") {
                this.ObjectType = "PIAnalysisTemplate";
            }
            else if (this.Marker == "XR") {
                this.ObjectType = "PIAnalysisRule";
            }
            else if (this.Marker == "XP") {
                this.ObjectType = "PIAnalysisRulePlugIn";
            }
            else if (this.Marker == "Ab") {
                this.ObjectType = "PIAttribute";
            }
            else if (this.Marker == "AC") {
                this.ObjectType = "PIAttributeCategory";
            }
            else if (this.Marker == "AT") {
                this.ObjectType = "PIAttributeTemplate";
            }
            else if (this.Marker == "RD") {
                this.ObjectType = "PIAssetDatabase";
            }
            else if (this.Marker == "Em") {
                this.ObjectType = "PIElement";
            }
            else if (this.Marker == "EC") {
                this.ObjectType = "PIElementCategory";
            }
            else if (this.Marker == "ET") {
                this.ObjectType = "PIElementTemplate";
            }
            else if (this.Marker == "MS") {
                this.ObjectType = "PIEnumerationSet";
            }
            else if (this.Marker == "MV") {
                this.ObjectType = "PIEnumerationValue";
            }
            else if (this.Marker == "Fm") {
                this.ObjectType = "PIEventFrame";
            }
            else if (this.Marker == "TR") {
                this.ObjectType = "PITimeRule";
            }
            else if (this.Marker == "TP") {
                this.ObjectType = "PITimeRulePlugIn";
            }
            else if (this.Marker == "SI") {
                this.ObjectType = "PISecurityIdentity";
            }
            else if (this.Marker == "SM") {
                this.ObjectType = "PISecurityMapping";
            }
            else if (this.Marker == "Bl") {
                this.ObjectType = "PITable";
            }
            else if (this.Marker == "BC") {
                this.ObjectType = "PITableCategory";
            }
            else if (this.Marker == "DP") {
                this.ObjectType = "PIPoint";
            }
            else if (this.Marker == "DS") {
                this.ObjectType = "PIDataServer";
            }
            else if (this.Marker == "RS") {
                this.ObjectType = "PIAssetServer";
            }
            else if (this.Marker == "Ut") {
                this.ObjectType = "PIUnit";
            }
            else if (this.Marker == "UC") {
                this.ObjectType = "PIUnitClass";
            }
        };
        WebIdInfo.prototype.processOwnerType = function (markerOwner) {
            if (markerOwner == "R") {
                this.OwnerType = "PIAssetServer";
            }
            else if (markerOwner == "D") {
                this.OwnerType = "PIDataServer";
            }
            else if (markerOwner == "X") {
                this.OwnerType = "PIAnalysis";
            }
            else if (markerOwner == "T") {
                this.OwnerType = "PIAnalysisTemplate";
            }
            else if (markerOwner == "E") {
                this.OwnerType = "PIElement";
            }
            else if (markerOwner == "F") {
                this.OwnerType = "PIEventFrame";
            }
        };
        WebIdInfo.prototype.processWebId = function (webId) {
            if (this.ObjectType == "PIAnalysis") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == "PIAnalysisCategory") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == "PIAnalysisTemplate") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == "PIAnalysisRule") {
                this.processGuidsAndPaths(webId, true, WebIdStringType.ThreeGuids, false);
            }
            else if (this.ObjectType == "PIAnalysisRulePlugIn") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == "PIAttribute") {
                this.processGuidsAndPaths(webId, true, WebIdStringType.ThreeGuids, false);
            }
            else if (this.ObjectType == "PIAttributeCategory") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == "PIAttributeTemplate") {
                this.processGuidsAndPaths(webId, true, WebIdStringType.ThreeGuids, false);
                this.OwnerType = "PIElementTemplate";
            }
            else if (this.ObjectType == "PIAssetDatabase") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == "PIElement") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == "PIElementCategory") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == "PIElementTemplate") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == "PIEnumerationSet") {
                this.processGuidsAndPaths(webId, true, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == "PIEnumerationValue") {
                this.processGuidsAndPaths(webId, true, WebIdStringType.ThreeGuids, false);
            }
            else if (this.ObjectType == "PIEventFrame") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == "PITimeRule") {
                this.processGuidsAndPaths(webId, true, WebIdStringType.ThreeGuids, false);
            }
            else if (this.ObjectType == "PITimeRulePlugIn") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == "PISecurityIdentity") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == "PISecurityMapping") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == "PITable") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == "PITableCategory") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == "PIPoint") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, true);
            }
            else if (this.ObjectType == "PIDataServer") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.OneGuid, false);
            }
            else if (this.ObjectType == "PIAssetServer") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.OneGuid, false);
            }
            else if (this.ObjectType == "PIUnit") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
            else if (this.ObjectType == "PIUnitClass") {
                this.processGuidsAndPaths(webId, false, WebIdStringType.TwoGuids, false);
            }
        };
        WebIdInfo.prototype.processGuidsAndPaths = function (webId, hasMarkerOwner, webIdStringType, usePIPoint) {
            var restWebId = webId.substring(4);
            if (hasMarkerOwner == true) {
                var markerOwner = restWebId.substring(0, 1);
                this.processOwnerType(markerOwner);
                restWebId = restWebId.substring(1);
            }
            if ((this.WebIdType == PIWebApiClient.WebIdType.Full) || (this.WebIdType == PIWebApiClient.WebIdType.IDOnly)) {
                var encodedServerID = restWebId.substring(0, 22);
                this.ServerID = this.decodeGUID(encodedServerID);
                restWebId = restWebId.substring(22);
                if (webIdStringType == WebIdStringType.ThreeGuids) {
                    var encodedOwnerID = restWebId.substring(0, 22);
                    this.OwnerID = this.decodeGUID(encodedOwnerID);
                    restWebId = restWebId.substring(22);
                }
                if ((webIdStringType == WebIdStringType.ThreeGuids) ||
                    (webIdStringType == WebIdStringType.TwoGuids)) {
                    if (usePIPoint == false) {
                        var encodedObjectID = restWebId.substring(0, 22);
                        this.ObjectID = this.decodeGUID(encodedObjectID);
                        restWebId = restWebId.substring(22);
                    }
                    else {
                        var encodedObjectID = restWebId.substring(0, 6);
                        this.PointID = this.decodeInt(encodedObjectID);
                        restWebId = restWebId.substring(6);
                    }
                }
            }
            if ((this.WebIdType == PIWebApiClient.WebIdType.Full) || (this.WebIdType == PIWebApiClient.WebIdType.PathOnly)) {
                var encodedPath = restWebId;
                this.Path = this.decodeString(encodedPath);
            }
        };
        WebIdInfo.prototype.base64ToBytes = function (base64) {
            var binary_string = atob(base64);
            var len = binary_string.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes;
        };
        WebIdInfo.prototype.decodeGUID = function (value) {
            var bytes = this.base64ToBytes(value).buffer;
            var uncodedbytes = new Uint8Array(bytes);
            var guidstr = "";
            for (var i = 3; i >= 0; i--) {
                if (uncodedbytes[i] < 17) {
                    guidstr += "0" + uncodedbytes[i].toString(16);
                }
                else {
                    guidstr += uncodedbytes[i].toString(16);
                }
            }
            guidstr += "-";
            if (uncodedbytes[5] < 17) {
                guidstr += "0" + uncodedbytes[5].toString(16);
            }
            else {
                guidstr += uncodedbytes[5].toString(16);
            }
            if (uncodedbytes[4] < 17) {
                guidstr += "0" + uncodedbytes[4].toString(16);
            }
            else {
                guidstr += uncodedbytes[4].toString(16);
            }
            guidstr += "-";
            if (uncodedbytes[7] < 17) {
                guidstr += "0" + uncodedbytes[7].toString(16);
            }
            else {
                guidstr += uncodedbytes[7].toString(16);
            }
            if (uncodedbytes[6] < 17) {
                guidstr += "0" + uncodedbytes[6].toString(16);
            }
            else {
                guidstr += uncodedbytes[6].toString(16);
            }
            guidstr += "-";
            if (uncodedbytes[8] < 17) {
                guidstr += "0" + uncodedbytes[8].toString(16);
            }
            else {
                guidstr += uncodedbytes[8].toString(16);
            }
            if (uncodedbytes[9] < 17) {
                guidstr += "0" + uncodedbytes[9].toString(16);
            }
            else {
                guidstr += uncodedbytes[9].toString(16);
            }
            guidstr += "-";
            for (i = 10; i < 16; i++) {
                if (uncodedbytes[i] < 17) {
                    guidstr += "0" + uncodedbytes[i].toString(16);
                }
                else {
                    guidstr += uncodedbytes[i].toString(16);
                }
            }
            return guidstr;
        };
        WebIdInfo.prototype.decodeString = function (value) {
            var decodestring = value.replace('-', '+').replace('_', '/');
            var padneeded = (4 - (decodestring.length % 4)) % 4;
            for (var i = 0; i < padneeded; i++) {
                decodestring += '=';
            }
            return (atob(decodestring));
        };
        WebIdInfo.prototype.decodeInt = function (value) {
            var array = this.base64ToBytes(value);
            var result = ((array[array.length - 4]) |
                (array[array.length - 3] << 8) |
                (array[array.length - 2] << 16) |
                (array[array.length - 1] << 24));
            return result;
        };
        return WebIdInfo;
    }());
    PIWebApiClient.WebIdInfo = WebIdInfo;
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2018 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var PIWebApiClient;
(function (PIWebApiClient) {
    'use strict';
    var WebIdType;
    (function (WebIdType) {
        WebIdType[WebIdType["Full"] = 0] = "Full";
        WebIdType[WebIdType["IDOnly"] = 1] = "IDOnly";
        WebIdType[WebIdType["PathOnly"] = 2] = "PathOnly";
        WebIdType[WebIdType["LocalIDOnly"] = 3] = "LocalIDOnly";
        WebIdType[WebIdType["DefaultIDOnly"] = 4] = "DefaultIDOnly";
    })(WebIdType = PIWebApiClient.WebIdType || (PIWebApiClient.WebIdType = {}));
})(PIWebApiClient || (PIWebApiClient = {}));

/**
* Copyright 2017 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="api.d.ts"/>
var PIWebApi = (function () {
    function PIWebApi(httpService, httpParamSerializer, base64) {
        this.defaultHeaders = {};
        this.httpService = httpService;
        this.httpParamSerializer = httpParamSerializer;
        this.base64 = base64;
    }
    PIWebApi.prototype.ConfigureInstance = function (basePath, useKerberos, username, password) {
        this.basePath = basePath;
        this.useKerberos = useKerberos;
        this.httpService.defaults.headers.common['X-Requested-With'] = 'PIWebApiWrapper';
        if (!this.useKerberos) {
            this.username = username;
            this.password = password;
            if (this.base64 != null) {
                var auth = this.base64.encode(this.username + ":" + this.password);
                this.httpService.defaults.headers.common['Authorization'] = 'Basic ' + auth;
            }
        }
        else {
            this.httpService.defaults.withCredentials = true;
            this.httpService.defaults.useXDomain = true;
        }
        this.analysis = new PIWebApiClient.AnalysisApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.analysisCategory = new PIWebApiClient.AnalysisCategoryApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.analysisRule = new PIWebApiClient.AnalysisRuleApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.analysisRulePlugIn = new PIWebApiClient.AnalysisRulePlugInApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.analysisTemplate = new PIWebApiClient.AnalysisTemplateApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.assetDatabase = new PIWebApiClient.AssetDatabaseApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.assetServer = new PIWebApiClient.AssetServerApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.attribute = new PIWebApiClient.AttributeApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.attributeCategory = new PIWebApiClient.AttributeCategoryApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.attributeTemplate = new PIWebApiClient.AttributeTemplateApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.attributeTrait = new PIWebApiClient.AttributeTraitApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.batch = new PIWebApiClient.BatchApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.calculation = new PIWebApiClient.CalculationApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.configuration = new PIWebApiClient.ConfigurationApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.dataServer = new PIWebApiClient.DataServerApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.element = new PIWebApiClient.ElementApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.elementCategory = new PIWebApiClient.ElementCategoryApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.elementTemplate = new PIWebApiClient.ElementTemplateApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.enumerationSet = new PIWebApiClient.EnumerationSetApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.enumerationValue = new PIWebApiClient.EnumerationValueApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.eventFrame = new PIWebApiClient.EventFrameApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.home = new PIWebApiClient.HomeApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.notificationContactTemplate = new PIWebApiClient.NotificationContactTemplateApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.notificationRule = new PIWebApiClient.NotificationRuleApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.notificationRuleSubscriber = new PIWebApiClient.NotificationRuleSubscriberApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.notificationRuleTemplate = new PIWebApiClient.NotificationRuleTemplateApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.point = new PIWebApiClient.PointApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.securityIdentity = new PIWebApiClient.SecurityIdentityApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.securityMapping = new PIWebApiClient.SecurityMappingApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.stream = new PIWebApiClient.StreamApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.streamSet = new PIWebApiClient.StreamSetApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.system = new PIWebApiClient.SystemApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.table = new PIWebApiClient.TableApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.tableCategory = new PIWebApiClient.TableCategoryApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.timeRule = new PIWebApiClient.TimeRuleApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.timeRulePlugIn = new PIWebApiClient.TimeRulePlugInApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.unit = new PIWebApiClient.UnitApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.unitClass = new PIWebApiClient.UnitClassApi(this.basePath, this.httpService, this.httpParamSerializer);
        this.webIdHelper = new PIWebApiClient.WebIdHelper();
    };
    return PIWebApi;
}());

/**
* Copyright 2017 OSIsoft, LLC
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*  <http://www.apache.org/licenses/LICENSE-2.0>
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/// <reference path="api.d.ts"/>
angular.module('ngPIWebApi', ['base64']).factory('piwebapi', ['$http', '$httpParamSerializer', '$base64', function ($http, $httpParamSerializer, $base64) {
    var piwebapi = new PIWebApi($http, $httpParamSerializer, $base64);
    return piwebapi;
}]);