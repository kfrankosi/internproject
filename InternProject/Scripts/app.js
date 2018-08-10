//Make sure the name below is the same declared on  <html ng-app="PiWebApiSampleApp">  
let baseUrl = "https://pikfrank.osisoft.int/piwebapi";
var app = angular.module(ngAppName, ['ngPIWebApi']);

app.run(function (piwebapi) {
    piwebapi.ConfigureInstance(baseUrl, true);
    // Set to true to enable kerberos -- still works when the configuration auth method is not kerberos...
});


app.controller("mainCtrl", function ($scope, piwebapi) {
    $scope.floorNumber = floorNum;

    /*
    Listeners for dropdown menus
    */
    $('#floorNumber a').click(function (e) {
        console.log("floor num", (floorNum = $(this).text()));
        $("#floorNumberButton").text(floorNum);
        $scope.changeFloor(floorNum);
        $scope.floorNumber = floorNum;
    });


    $('#comfortLevel a').click(function (e) {
        $("#comfortLevelButton").text($(this).text());
    });


    $('.modal').on('hidden.bs.modal', function () {
        try {
            resetButtonText();
            addTempColors(piwebapi);
        } catch (exception) {
            console.log("not clickable part of the map");
        }
    });

    $('img').click(function () {
        $("#invalidClickModal").modal();
        addTempColors(piwebapi);
    });

    // $('.dropdown-menu a').click(function (e) {
    //     // console.log($('#selected').text(e.currentTarget.innerText));
    //     $(this).text(e.currentTarget.innerText);
    // });

    getVars(piwebapi).then(function (response) {
        webId = response.data.WebId;
        $scope.onFloor = true;

        addTempColors(piwebapi);

        // returns all the user entries for the loggedin user (for all locations)
        $scope.getUserEntries = function () {
            console.log("user entries")
            // getUserVotes(piwebapi);
            getUser(piwebapi).then(function () {
                eventFrameQuery(piwebapi, "AnalysisName:\"new status\" Template:\"New Entry\" |Status:=\"Ready\" |ID:=\"*" + user.substring(user.indexOf("\\") + 1) + '\"',
                    "No user entries").then(
                        function (response) {
                            // console.log(response);
                        }, function (error) {
                            console.log(error);
                        });
            });
        }

        $scope.changeFloor = function () {
            /* Fill dropdown menu with different vavcos -- later need to make them more user friendly
                Each corresponds to a thermostat */
            populateColors(piwebapi); // this will change the value when called
        }

        // locNum is the VAVCO number
        $scope.clickLocation = function (locNum, self) {
            currentSquare = self.currentTarget;
            $("#myModal").modal();
            console.log('loc number ', locNum);
            $("#locationNameButton").text(locNum); // should just be the number -- manipulated later to add 'VAVCO'
            addTempColors(piwebapi);
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
        console.log('scope submit response')
        submitResponse(piwebapi)
            .then(function (response) {
                var loc = parseInt(response.substring(response.indexOf('to ') + ("to VAVCO x-").length));
                var currElemClass = document.getElementsByClassName(loc);

                getLocAverage(piwebapi, response.substring(response.indexOf('to ') + ('to ').length)).then(
                    function (response) {
                        console.log('new avg', response);
                        colorMap.set(currElemClass, response);
                        colorMapSection(currElemClass, response);
                    }, function () {
                        colorMap.set(currElemClass, response);
                        colorMapSection(currElemClass, response);
                    }
                )
                // first need to recalclate average

            });

        // Update average value for that location -- potential issue since it takes a minute to submit?
    }



});

// populate floor dropdown menu w all floors
var list = document.getElementById("floorNumber");
for (var i = 1; i <= 6; i++) {
    var li = document.createElement("li");
    var link = document.createElement("a");
    var text = document.createTextNode(i);
    link.appendChild(text);
    link.href = "#";
    li.appendChild(link);
    list.appendChild(li);
}

