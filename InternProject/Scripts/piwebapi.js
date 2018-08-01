// 'use strict'
piWebApiApp.factory('piWebApiHttpService', ['$http', '$q', function ($http, $q) {


    //This factory method works like a service in which all HTTP requests are made.  
    var serviceBase = 'https://oakpicoresight.osisoft.int:8443/piwebapi/';

    var testBase = "https://pikfrank.osisoft.int/piwebapi/streamsets/F1EmZErvcQ4i_kaeZo0kfGe5aQnkdgc92K6BG3XgAd3LcnpQUElLRlJBTktcSU5URVJOUFJPSkVDVFxST09NU1xURVNUUk9PTTE/value"

    var base = "https://pikfrank.osisoft.int/piwebapi/";

    //Set withCredentials = true; if you need to type your credentais.  
    $http.defaults.withCredentials = true;
    var piWebApiHttpServiceFactory = {};

    piWebApiHttpServiceFactory.validPIServerName = function (piServerName) {
        return $http.get(serviceBase + "assetservers?name=" + piServerName).then(function (response) {
            return response;
        });
    };


    piWebApiHttpServiceFactory.getByPath = function (path) {
        path = base + "elements?path=" + path;
        console.log(path);
        return $http.get(path).then(function (response) {
            return response;
        });
    };

    piWebApiHttpServiceFactory.getByWebId = function (webId) {
        return $http.get(serviceBase + "elements/" + webId).then(function (response) {
            return response;
        })
    };

    piWebApiHttpServiceFactory.getCurrentTemp = function () {
        return $http.get(serviceBase + tempUrl).then(function (response) {
            return response;
            // "\\\\OAKPIAF\\Facilities-1600+Alvarado\\Devices\\VAVCO 2-01|Temp"
        })
    };

    piWebApiHttpServiceFactory.postPoint = function (body) {
        return $.ajax({
            url: base + "streams/" + webID + "/" + body,
            type: "POST",
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(body),
            // dataType: "json",
            success: function (result) {
                console.log(result);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
            }
        });


        // return $http.post(base + "streams/" + webID + "/" + body);

    }

    // piWebApiHttpServiceFactory.validPIPointName = function (piServerName, piPointName) {  
    //     return $http.get(serviceBase + "points?path=\\\\" + piServerName + "\\" + piPointName).then(function (response) {  
    //         return response;  
    //     });  
    // };  


    // piWebApiHttpServiceFactory.getSnapshotValue = function (webId) {  
    //     return $http.get(serviceBase + 'streams/' + webId + '/value').then(function (response) {  
    //         return response;  
    //     });  
    // };  


    // piWebApiHttpServiceFactory.getRecordedValues = function (webId, startTime, endTime) {  
    //     return $http.get(serviceBase + 'streams/' + webId + '/recorded?starttime=' + startTime + '&endtime=' + endTime).then(function (response) {  
    //         return response;  
    //     });  
    // };  


    // piWebApiHttpServiceFactory.getInterpolatedValues = function (webId, startTime, endTime, interval) {  
    //     return $http.get(serviceBase + 'streams/' + webId + '/interpolated?starttime=' + startTime + '&endtime=' + endTime + "&interval=" + interval).then(function (response) {  
    //         return response;  
    //     });  
    // };  


    return piWebApiHttpServiceFactory;
}]); 