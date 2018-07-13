//Make sure the name below is the same declared on  <html ng-app="PiWebApiSampleApp">  


var piWebApiApp = angular.module("PiWebApiSampleApp", []);


piWebApiApp.controller("mainCtrl", function ($scope, piWebApiHttpService) {


    //declare and inicialize variables  
    $scope.requestMode = true;
    $scope.getSnap = true;
    $scope.getRec = true;
    $scope.getInt = true;
    $scope.showMap = true;

    //options for the combobox on the initial page  
    $scope.yesOrNoOptions = [{ "value": true, "name": "Yes" }, { "value": false, "name": "No" }];


    //update values when the default button is pressed  
    $scope.defaultValues = function () {
        $scope.piServerName = "OAKPIAF";
        $scope.piPointName = "SINUSOID";
        $scope.startTime = "*-1d";
        $scope.endTime = "*";
        $scope.interval = "1h";
        $scope.getSnap = $scope.yesOrNoOptions[0];
        $scope.getRec = $scope.yesOrNoOptions[0];
        $scope.getInt = $scope.yesOrNoOptions[0];

        $scope.path = "OAKPIAF\\Facilities-1600 Alvarado";
        $scope.webId = "F1EmnqdqScCm70aDbETKiwGLjwRMdAri4l5xGJN3xc-DlStAT0FLUElBRlxGQUNJTElUSUVTLTE2MDAgQUxWQVJBRE9cU0xUQw";
    }

    $scope.renderMap = function () {
        var xhr = new XMLHttpRequest;
        xhr.open('GET', "https://maps.googleapis.com/maps/api/js?key=AIzaSyD3tl-i_Mg8Z7uEIT82ElNO7vT1mbTx6hI");
        // .then(function (data) {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
        $scope.show = false;

        console.log("map");
        console.log(document.getElementById('map'));
        $scope.initTest = true;

        // return map;
    }

    //get data by making http calls  
    $scope.getData = function () {
        console.log("getting data")
        //switch div to display the results  
        $scope.requestMode = false;
        //all HTTP requests are done through the  piWebApiHttpService factory object  
        piWebApiHttpService.validPIServerName($scope.piServerName).then(function (response) {
            //this function will be executed in case of success  
            $scope.piServerData = response.data;
            $scope.piServerExistsValue = true;
        }, function (error) {
            //this function will be executed in case of error  
            $scope.piServerError = error.data;
            $scope.piServerExistsValue = false;
        });

        piWebApiHttpService.getByPath($scope.path).then(function (response) {
            $scope.validPath = response.data;
            console.log("get by path:")
            console.log(response)
        }, function (error) {
            $scope.validPath = false;
        });


        piWebApiHttpService.getByWebId($scope.webId).then(function (response) {
            $scope.webId = response.data;
            console.log("get by webid:")
            console.log(response)
        }, function (error) {
            console.log("web id error");
            console.log(error);
            $scope.webId = false;
        });



        // piWebApiHttpService.validPIPointName($scope.piServerName, $scope.piPointName).then(function (response) {  
        //     $scope.piPointData = response.data;  
        //     $scope.piPointExistsValue = true;  
        //     //in case of success, we will get the webId of the PI Point which will be used by other requests  
        //     $scope.webId = response.data.WebId;  
        //     piWebApiHttpService.getSnapshotValue($scope.webId).then(function (response) {  
        //         //Response of the snapshot is stored on the snapshotData  
        //         $scope.snapshotData = response.data;  
        //     }, function (error) {  
        //         $scope.snapshotError = error.data;  


        //     }); 

        //     //The following requests use the webId already stored  
        //     piWebApiHttpService.getRecordedValues($scope.webId, $scope.startTime, $scope.endTime).then(function (response) {  
        //         $scope.recordedData = response.data;  
        //     }, function (error) {  
        //         $scope.recordedError = error.data;  
        //     });  


        //     piWebApiHttpService.getInterpolatedValues($scope.webId, $scope.startTime, $scope.endTime, $scope.interval).then(function (response) {  
        //         $scope.interpolatedData = response.data;  
        //     }, function (error) {  
        //         $scope.interpolatedError = error.data;  
        //     });  
        // }, function (error) {  
        //     $scope.piPointError = error.data;  
        //     $scope.piPointExistsValue = false;  
        // });  
    }
});
