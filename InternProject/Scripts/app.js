//Make sure the name below is the same declared on  <html ng-app="PiWebApiSampleApp">  
let baseUrl = "https://pikfrank.osisoft.int/piwebapi";
var app = angular.module(ngAppName, ['ngPIWebApi']);

app.run(function (piwebapi) {
    piwebapi.ConfigureInstance(baseUrl, true);
    // Set to true to enable kerberos -- still works when the configuration auth method is not kerberos...
});


app.controller("mainCtrl", function ($scope, piwebapi) {

    /*
    Listeners for dropdown menus
    */
    $('#floorNumber a').click(function (e) {
        console.log("floor num", floorNum = $(this).text());
        $("#floorNumberButton").text(floorNum);
        $scope.changeFloor(floorNum);
        // $scope.changeFloor();
    });


    $('#comfortLevel a').click(function (e) {
        $("#comfortLevelButton").text($(this).text());
    });

    // $('.dropdown-menu a').click(function (e) {
    //     // console.log($('#selected').text(e.currentTarget.innerText));
    //     $(this).text(e.currentTarget.innerText);
    // });

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

        // gets the average comfort value for the selected location
        $scope.getAvg = function () {
            var avg = 0; var allComfortVals = [];
            var locationName = document.getElementById("locationName").value;
            eventFrameQuery(piwebapi, "AnalysisName:\"new status\" Template:\"New Entry\" |Status:=\"Ready\" |Room:=\"" + locationName, "No vote entries")
                .then(
                    function (response, returnCalcAvg = function () {
                        console.log("average val: ", avg / allComfortVals.length);
                    }) {
                        console.log(response);
                        for (var obj in response) {
                            var element = response[obj].Content.Items[2];
                            allComfortVals.push(element);
                            avg += element.Value.Value;
                        }
                        returnCalcAvg();
                    }, function (error) {
                        alert(error);
                    });

        }

        $scope.changeFloor = function () {
            console.log("changing floor");
            /* Fill dropdown menu with different vavcos -- later need to make them more user friendly
            Each corresponds to a thermostat */

            // returns all elements in the db -- need to filter out VAVCOs
            getAllElements(piwebapi).then(function (response) {
                console.log(response);
                // have another list to choose floor num and then generate list from that
                // var floorNum = document.getElementById("floorNumberButton");
                // var select = document.getElementById("locationName");
                $("#locationName").empty();
                var list = document.getElementById("locationName");
                (response.data.Items).forEach(function (element) {
                    // console.log(element.Name, floorNum)
                    if (element.Name.indexOf("VAVCO " + floorNum) > -1) {
                        var li = document.createElement("li");
                        var link = document.createElement("a");
                        var text = document.createTextNode(element.Name.substring(element.Name.indexOf("-") + 1));
                        link.appendChild(text);
                        link.href = "#";
                        li.appendChild(link);
                        list.appendChild(li);
                        // var opt = document.createElement('a');
                        // opt.value = element.Name;
                        // opt.innerHTML = element.Name.substring(element.Name.indexOf("-") + 1);//,element.Name.indexOf("-"));
                        // opt.appendChild(opt);
                    }
                });
            }, function (error) {
                console.log(error.data);
            });
        }

        $scope.clickLocation = function (locNum) {
            // if (document.getElementById("floorNumber").value == "? undefined:undefined ?") {
            $("#myModal").modal();
            // } else {
            console.log("changing loc ", locNum);
            $("#locationNameButton").text(locNum);
            $scope.changeFloor(locNum);
            floorNum = locNum;
            // }
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
        submitResponse(piwebapi);
    }

});

// populate floor dropdown menu w all floors
var list = document.getElementById("floorNumber");
console.log(list);
for (var i = 1; i <= 6; i++) {
    // var opt = document.createElement('li');
    // opt.classList.add("dropdown-item");
    // opt.value = i;
    // opt.innerHTML = i;
    // select.appendChild(opt);

    var li = document.createElement("li");
    var link = document.createElement("a");
    var text = document.createTextNode(i);
    link.appendChild(text);
    link.href = "#";
    li.appendChild(link);
    list.appendChild(li);
}
