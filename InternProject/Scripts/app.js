//Make sure the name below is the same declared on  <html ng-app="PiWebApiSampleApp">  
let baseUrl = "https://pikfrank.osisoft.int/piwebapi";
var app = angular.module(ngAppName, ['ngPIWebApi']);

app.run(function (piwebapi) {
    piwebapi.ConfigureInstance(baseUrl, true);
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

    // generic listener -- not working
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
                        function () {
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
            clickLocation(piwebapi, locNum, self);
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

                getLocAverage(piwebapi, response.substring(response.indexOf('to ') + ('to ').length))
                    .then(
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

// Populate map with each room block
var map = document.getElementById("floorplan_child");
var leftPrev, runningRowWidth = 0, i = 1, counter = 0, mapWidth = 90; // mapwidth in vw hardcoded from css
var squarePos = ['square_top', 'square_middle', 'square_bottom'];
var widths = [
    11, 29, 6, 19, 10, 11,
    18, -31, 8, -12, 6, 11,
    11, 11, 17, 5, 7, 14, 10, 11
];
var addLocation = [
    4, 5, 17, 6, 7, 1,
    4, '', 18, '', 9, 1,
    4, 15, 3, 14, 13, 2, 12, 1
];
//initial left padding
// while (width < mapWidth) {
for (var j = 0; j < squarePos.length; j++) {
    leftPrev = 4;
    runningRowWidth = 0;
    while ((runningRowWidth + 4) < mapWidth) {
        if (widths[counter] < 0) {
            // dead area in map
            widths[counter] = Math.abs(widths[counter]);
            runningRowWidth += widths[counter];
            leftPrev += widths[counter];
            counter++;
        }
        var div = document.createElement("div");
        $(div).attr('ng-click', 'clickLocation(' + addLocation[counter] + ', $event)');
        div.classList.add(addLocation[counter]);
        div.classList.add('square');
        div.classList.add(squarePos[j]);
        div.style.width = widths[counter] + 'vw';
        runningRowWidth += widths[counter];

        div.style.left = leftPrev + 'vw';
        leftPrev += widths[counter];

        // div.appendChild(text);
        map.appendChild(div);
        counter++;
        // break;
    }
}