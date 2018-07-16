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


    }

    $scope

});

var map;

function renderMap() {
    var overlay;
    map = new google.maps.Map(document.getElementById('map'), {
        // center: { lat: -34.397, lng: 150.644 },
        zoom: 20,
        mapTypeId: 'satellite',
        heading: 0,
        tilt: 0
    });


    var geocoder = new google.maps.Geocoder();
    // TODO: fix hardcode?
    var address = "1600 Alvarado Street, San Leandro";
    var lat, lng, coords;
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            // console.log(results[0].geometry.location.lat());
            lat = results[0].geometry.location.lat();
            lng = results[0].geometry.location.lng();
            map.setCenter(results[0].geometry.location);
            // Adds a red marker to building -- use markers for different areas/rooms instead
            // var marker = new google.maps.Marker({
            //     map: map,
            //     position: results[0].geometry.location
            // });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }

        coords = latLng2Point(map.getCenter(), map);
        console.log(coords); // coords.x, coords.y

        document.getElementById("overlay").style.top = coords.y + (130 * scaleAdj) + "px";
        document.getElementById("overlay").style.left = coords.x - (380 * scaleAdj) + "px";
        document.getElementById("overlay").style.transform = "rotate(54deg) scale(" + scaleAdj + ")";
    });
}

var scaleAdj = .63;

function latLng2Point(latLng, map) {
    var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
    var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
    var scale = Math.pow(2, map.getZoom());
    scale *= scaleAdj;
    var worldPoint = map.getProjection().fromLatLngToPoint(latLng);
    return new google.maps.Point((worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale);
}

function point2LatLng(point, map) {
    var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
    var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
    var scale = Math.pow(2, map.getZoom());
    var worldPoint = new google.maps.Point(point.x / scale + bottomLeft.x, point.y / scale + topRight.y);
    return map.getProjection().fromPointToLatLng(worldPoint);
}