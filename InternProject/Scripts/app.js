//Make sure the name below is the same declared on  <html ng-app="PiWebApiSampleApp">  

let baseUrl = "https://pikfrank.osisoft.int/piwebapi";
var app = angular.module(ngAppName, ['ngPIWebApi']);


app.run(function (piwebapi) {
    piwebapi.ConfigureInstance(baseUrl, false, "kfrank", atob("RGlub3NhdXI4IQ==")); //base64 encoded password
});

app.controller("mainCtrl", function ($scope, piwebapi) {

    getVars(piwebapi).then(function (response) {
        webId = response.data.WebId;
        $scope.onFloor = true;
        console.log(webId);
        piwebapi.home.get().then(function (response) {
            // console.log(response.data);
        }, function (error) {
            console.log(error);
        });

        $scope.changeFloor = function () {
            /* Fill dropdown menu with different vavcos -- later need to make them more user friendly
               Each corresponds to a thermostat */

            // returns all elements in the db -- need to filter out VAVCOs
            getAllElements(piwebapi).then(function (response) {
                console.log(response);
                // have another list to choose floor num and then generate list from that
                var floorNum = document.getElementById("floorNumber").value;
                var select = document.getElementById("locationName");
                $("#locationName").empty();
                (response.data.Items).forEach(function (element) {
                    if (element.Name.indexOf("VAVCO " + floorNum) > -1) {
                        var opt = document.createElement('option');
                        opt.value = element.Name;
                        opt.innerHTML = element.Name.substring(element.Name.indexOf("-") + 1);//,element.Name.indexOf("-"));
                        select.appendChild(opt);
                    }
                });
            }, function (error) {
                console.log(error);
            });
        }

        // piwebapi.dataServer.getByPath("\\\\PIKFRANK").then(function (serverResponse) {
        // console.log(serverResponse.data);
        piwebapi.dataServer.getPoints(
            webId, null, "ComfortValue"
        ).then(function (response) {
            // pointId = (response.data['Items'][0].WebId); // first point
            // console.log(response);
        }, function (error) {
            console.log(error);
        });

        $scope.addPoint = function (tagname, value) {
            makePoint(piwebapi, tagname, value);
        }
        // }, function (error) {
        //     console.log("get by path error");
        //     console.log(error);
        // });
    });

    $scope.submitResponse = function () {
        submitResponse(piwebapi);
    }

});

// populate floor dropdown menu w all floors
var select = document.getElementById("floorNumber");
for (var i = 1; i <= 6; i++) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}