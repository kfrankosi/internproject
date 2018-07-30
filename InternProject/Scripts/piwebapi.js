// 'use strict'
piWebApiApp.factory('piWebApiHttpService', ['$http', '$q', function ($http, $q) {

    var kfrankBase = "https://pikfrank.osisoft.int/piwebapi/";
    var kfBasePath = '\\\\PIKFRANK\\internproject\\Entry';

    var kfAttributes;

    var kfPiWebApi = new PIWebApi(kfrankBase, false);

    console.log(kfPiWebApi);
    // var oakPiWebApi = new PIWebApi(serviceBase, true);

    // kfPiWebApi.element.getByPath(kfBasePath).then(function (response) {
    //     kfAttributes = response.data;
    //     console.log(kfAttributes);

    //     kfPiWebApi.element.getElements(kfAttributes.WebId).then(function(response){
    //         console.log(response.data);
    //     });

    //     // kfPiWebApi.dataServer.createPoint(kfAttributes.WebId, newPoint).then(function (response) {
    //     //     console.log(response.data);
    //     // }, function (error) {
    //     //     console.log(error);
    //     // });
    // }, function (error) {
    //     // console.log("ERROR: ");
    //     console.log(error.response);
    // });



}]);