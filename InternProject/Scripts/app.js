//Make sure the name below is the same declared on  <html ng-app="PiWebApiSampleApp">  
let baseUrl = "https://pikfrank.osisoft.int/piwebapi";
var app = angular.module(ngAppName, ['ngPIWebApi']);


app.run(function (piwebapi) {
    piwebapi.ConfigureInstance(baseUrl, true);
    // Set to true to enable kerberos -- still works when the configuration auth method is not kerberos...
});

app.controller("mainCtrl", function ($scope, piwebapi) {

    getVars(piwebapi).then(function (response) {
        webId = response.data.WebId;
        $scope.onFloor = true;

        piwebapi.home.get().then(function (response) {
            // console.log(response.data);
        }, function (error) {
            console.log(error.data);
        });

        // returns all the user entries for the loggedin user (for all locations)
        $scope.getUserEntries = function () {
            // getUserVotes(piwebapi);
            getUser(piwebapi).then(function (user) {
                eventFrameQuery(piwebapi, "AnalysisName:\"new status\" Template:\"New Entry\" |Status:=\"Ready\" |ID:=\"*" + user.substring(user.indexOf("\\") + 1) + '\"',
                    "No user entries").then(
                        function (response) {
                            console.log(response);
                        }, function (error) {
                            console.log(error);
                        });
            });
        }

        // gets the average comfort value for the selected location
        $scope.getAvg = function () {
            var locationName = document.getElementById("locationName").value;
            eventFrameQuery(piwebapi, "AnalysisName:\"new status\" Template:\"New Entry\" |Status:=\"Ready\" |Room:=\"" + locationName,  "No vote entries")
                .then(
                    function (response) {
                        var allComfortVals = []; var avg = 0; var counter = 0;
                        response.forEach(function (obj) {
                            if (obj.Name == 'ComfortValue') {
                                allComfortVals.push(obj);
                                avg += obj.Value.Value;
                            }
                            counter++;
                        });
                        if (counter == response.length)
                            console.log("average val: ", avg / allComfortVals.length);
                        console.log(allComfortVals);
                    }, function (error) {
                        console.log(error);
                    });

        }

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
                console.log(error.data);
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
            console.log(error.data);
        });

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


