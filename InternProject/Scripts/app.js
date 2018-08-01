//Make sure the name below is the same declared on  <html ng-app="PiWebApiSampleApp">  


var piWebApiApp = angular.module("PiWebApiSampleApp", []);
var googleAPIKey = "AIzaSyD3tl-i_Mg8Z7uEIT82ElNO7vT1mbTx6hI";

piWebApiApp.controller("mainCtrl", function ($scope, piWebApiHttpService) {


    //declare and inicialize variables  
    $scope.requestMode = true;
    $scope.getSnap = true;
    $scope.getRec = true;
    $scope.getInt = true;
    $scope.showMap = true;
    $scope.displayMenu = true;

    //USING VALS FOR TESTING
    $scope.showMap = false;
    $scope.onFloor = true;

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


    $scope.floor = function (num) {
        console.log("floor " + num);
        $scope.showMap = false; // toggles map
        $scope.onFloor = true; // only shows floor info if map is not showing
        $scope.floorNumber = num;

        var dropMenu = document.getElementsByClassName("dropdown")[0];
        dropMenu.style.width = "5%";
        dropMenu.style.paddingLeft = "95%";
        dropMenu.style.paddingBottom = "80%";
    }

    $scope.getPoints = function (path) {
        piWebApiHttpService.getByPath(path).then(function (response) {
            console.log("get by path:");
            console.log(response);
            $scope.validPath = response.data;
        }, function (error) {
            $scope.validPath = false;
        });
    }

    $scope.addPoint = function (body) {
        //     piWebApiHttpService.postPoint(body).then(function (response) {
        //         console.log("posting point");
        //         console.log(response);
        //     }, function (error) {
        //         console.log('error');
        //         console.log(error);
        //     });




    }

    //get data by making http calls  
    $scope.getData = function () {
        console.log("getting data")
        //switch div to display the results  
        $scope.requestMode = false;
        //all HTTP requests are done through the  piWebApiHttpService factory object  
        // piWebApiHttpService.validPIServerName($scope.piServerName).then(function (response) {
        //     //this function will be executed in case of success  
        //     $scope.piServerData = response.data;
        //     $scope.piServerExistsValue = true;
        // }, function (error) {
        //     //this function will be executed in case of error  
        //     $scope.piServerError = error.data;
        //     $scope.piServerExistsValue = false;
        // });


        // piWebApiHttpService.getByWebId($scope.webId).then(function (response) {
        //     $scope.webId = response.data;
        //     console.log("get by webid:")
        //     console.log(response)
        // }, function (error) {
        //     console.log("web id error");
        //     console.log(error);
        //     $scope.webId = false;
        // });




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

var map;

function renderMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        mapTypeId: 'satellite',
        heading: 0,
        tilt: 0
    });
    // var xhr = new XMLHttpRequest;
    // //get location
    // xhr.open('GET', 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=' + googleAPIKey);
    // console.log(xhr);
    var geocoder = new google.maps.Geocoder();
    // TODO: fix hardcode
    var address = "1600 Alvarado Street, San Leandro";
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            // console.log(results[0]);
            map.setCenter(results[0].geometry.location);
            // var marker = new google.maps.Marker({
            //     map: map,
            //     position: results[0].geometry.location 
            // });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });


    // $scope.show = false;

    // return map;
}