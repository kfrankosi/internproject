'use strict'  
piWebApiApp.factory('piWebApiHttpService', ['$http', '$q', function ($http, $q) {  
  
  
    //This factory method works like a service in which all HTTP requests are made.  
    var serviceBase = 'https://oakpicoresight.osisoft.int:8443/piwebapi';  
  
  
    //Set withCredentials = true; if you need to type your credentais.  
    $http.defaults.withCredentials = true;  
    var piWebApiHttpServiceFactory = {};  
    piWebApiHttpServiceFactory.validPIServerName = function (piServerName) {  
        return $http.get(serviceBase + "dataservers?name=" + piServerName).then(function (response) {  
            return response;  
        });  
    };  
  
  
    piWebApiHttpServiceFactory.validPIPointName = function (piServerName, piPointName) {  
        return $http.get(serviceBase + "points?path=\\\\" + piServerName + "\\" + piPointName).then(function (response) {  
            return response;  
        });  
    };  
  
  
    piWebApiHttpServiceFactory.getSnapshotValue = function (webId) {  
        return $http.get(serviceBase + 'streams/' + webId + '/value').then(function (response) {  
            return response;  
        });  
    };  
  
  
    piWebApiHttpServiceFactory.getRecordedValues = function (webId, startTime, endTime) {  
        return $http.get(serviceBase + 'streams/' + webId + '/recorded?starttime=' + startTime + '&endtime=' + endTime).then(function (response) {  
            return response;  
        });  
    };  
  
  
    piWebApiHttpServiceFactory.getInterpolatedValues = function (webId, startTime, endTime, interval) {  
        return $http.get(serviceBase + 'streams/' + webId + '/interpolated?starttime=' + startTime + '&endtime=' + endTime + "&interval=" + interval).then(function (response) {  
            return response;  
        });  
    };  
  
  
    return piWebApiHttpServiceFactory;  
}]); 