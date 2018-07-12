//Make sure the name below is the same declared on  <html ng-app="PiWebApiSampleApp">  
  
  
var piWebApiApp = angular.module("PiWebApiSampleApp", []);  
  
  
piWebApiApp.controller("mainCtrl", function ($scope, piWebApiHttpService) {  
  
  
    //declare and inicialize variables  
    $scope.requestMode = true;  
    $scope.getSnap = true;  
    $scope.getRec = true;  
    $scope.getInt = true;  
  
  
    //options for the combobox on the initial page  
    $scope.yesOrNoOptions = [{ "value": true, "name": "Yes" }, { "value": false, "name": "No" }];  
  
  
    //update values when the default button is pressed  
    $scope.defaultValues = function () {  
        $scope.piServerName = "MARC-PI2014";  
        $scope.piPointName = "SINUSOID";  
        $scope.startTime = "*-1d";  
        $scope.endTime = "*";  
        $scope.interval = "1h";  
        $scope.getSnap = $scope.yesOrNoOptions[0];  
        $scope.getRec = $scope.yesOrNoOptions[0];  
        $scope.getInt = $scope.yesOrNoOptions[0];  
    }  
  
  
    //get data by making http calls  
    $scope.getData = function () {  
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
  
  
        piWebApiHttpService.validPIPointName($scope.piServerName, $scope.piPointName).then(function (response) {  
            $scope.piPointData = response.data;  
            $scope.piPointExistsValue = true;  
            //in case of success, we will get the webId of the PI Point which will be used by other requests  
            $scope.webId = response.data.WebId;  
            piWebApiHttpService.getSnapshotValue($scope.webId).then(function (response) {  
                //Response of the snapshot is stored on the snapshotData  
                $scope.snapshotData = response.data;  
            }, function (error) {  
                $scope.snapshotError = error.data;  
  
  
            });  
            //The following requests use the webId already stored  
            piWebApiHttpService.getRecordedValues($scope.webId, $scope.startTime, $scope.endTime).then(function (response) {  
                $scope.recordedData = response.data;  
            }, function (error) {  
                $scope.recordedError = error.data;  
            });  
  
  
            piWebApiHttpService.getInterpolatedValues($scope.webId, $scope.startTime, $scope.endTime, $scope.interval).then(function (response) {  
                $scope.interpolatedData = response.data;  
            }, function (error) {  
                $scope.interpolatedError = error.data;  
            });  
        }, function (error) {  
            $scope.piPointError = error.data;  
            $scope.piPointExistsValue = false;  
        });  
    }  
});  