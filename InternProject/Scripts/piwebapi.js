// 'use strict'
piWebApiApp.factory('piWebApiHttpService', ['$http', '$q', function ($http, $q) {

    var kfrankBase = "https://pikfrank.osisoft.int/piwebapi/";
    var kfBasePath = '\\\\PIKFRANK\\internproject\\Entry';

    var kfAttributes;

    var kfPiWebApi = new PIWebApi(kfrankBase, false);

<<<<<<< HEAD
    console.log(kfPiWebApi);
    // var oakPiWebApi = new PIWebApi(serviceBase, true);
=======
>>>>>>> parent of d02e708... working to make post request

    // kfPiWebApi.element.getByPath(kfBasePath).then(function (response) {
    //     kfAttributes = response.data;
    //     console.log(kfAttributes);

    //     kfPiWebApi.element.getElements(kfAttributes.WebId).then(function(response){
    //         console.log(response.data);
    //     });

<<<<<<< HEAD
    //     // kfPiWebApi.dataServer.createPoint(kfAttributes.WebId, newPoint).then(function (response) {
    //     //     console.log(response.data);
    //     // }, function (error) {
    //     //     console.log(error);
    //     // });
    // }, function (error) {
    //     // console.log("ERROR: ");
    //     console.log(error.response);
    // });

=======
    piWebApiHttpServiceFactory.getByPath = function (path) {
        // return $http.get("https://oakpicoresight.osisoft.int:8443/piwebapi/assetservers/F1RSnqdqScCm70aDbETKiwGLjwT0FLUElBRg/assetdatabases").then(function (response) {
        //     //  OAKPIAF\\Facilities-1600 Alvarado
        //     return response;
        // })
        // ajax gives unauthorized error -- can work with this

        return $http.get(testBase).then(function (response) {
            return response;
        });
        // .beforeSend(function(xhr){
        //     xhr.setRequestHeader('')
        // })
    };
>>>>>>> parent of d02e708... working to make post request


<<<<<<< HEAD
}]);
=======
    piWebApiHttpServiceFactory.getCurrentTemp = function () {
        return $http.get(serviceBase + tempUrl).then(function (response) {
            return response;
            // "\\\\OAKPIAF\\Facilities-1600+Alvarado\\Devices\\VAVCO 2-01|Temp"
        })
    };

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
>>>>>>> parent of d02e708... working to make post request
