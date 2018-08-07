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

        // $scope.getUserEntries = function () {
        //     // getUserVotes(piwebapi);
        //     getUser(piwebapi).then(function (user) {
        //         eventFrameQuery(piwebapi, "AnalysisName:\"new status\" Template:\"New Entry\" |Status:=\"Ready\" |ID:=\"*" + user.substring(user.indexOf("\\") + 1) + '\"',
        //             "No user entries").then(
        //                 function (response) {
        //                     // console.log(response);
        //                 }, function (error) {
        //                     console.log(error);
        //                 });
        //     });
        // }

        $scope.getAvg = function () {
            var locationName = document.getElementById("locationName").value;
            eventFrameQuery(piwebapi, "AnalysisName:\"new status\" Template:\"New Entry\" |Status:=\"Ready\" |Room:=\"" + locationName,
                "No vote entries").then(
                    function (response) {
                        // console.log(response);
                        var allComfortVals = [];
                        response.forEach(function (obj) {
                            if (obj.Name == 'ComfortValue')
                                allComfortVals.push(obj);

                        });
                        console.log(allComfortVals);
                    }, function (error) {
                        console.log(error);
                    });


            //     console.log("avg")

            //     var rootPathId, elementTemplateId;
            //     piwebapi.assetDatabase.getEventFrames(dbId).then(
            //         function (response) {
            //             try {
            //                 console.log(response)
            //                 console.log(rootPathId = response.data.Items[0].WebId);
            //             }
            //             catch (exception) {
            //                 console.log(exception);
            //             }
            //             piwebapi.assetDatabase.getElementTemplates(dbId, 'Name').then(
            //                 function (response) {
            //                     (response.data.Items).forEach(function (obj) {
            //                         if (obj.Name == 'New Entry') {
            //                             elementTemplateId = obj.WebId;
            //                         }
            //                     });
            //                     // console.log(elementTemplateId = response.data.WebId);
            //                     // var query = "AnalysisName:\"new status\" Template:\"New Entry\" |Status:=\"Ready\" |Room:=\"" + locationName + "\"";
            //                     var query = [
            //                         new PIWebApiClient.PIValueQuery("Status", null, "Ready", "Equal"),
            //                         new PIWebApiClient.PIValueQuery("Room", null, "VAVCO*", "Equal")
            //                     ];

            //                     var piQuery = new PIWebApiClient.PISearchByAttribute(
            //                         /*id of root event frame*/rootPathId,
            //                         // /*element template*/ "F1ETZErvcQ4i_kaeZo0kfGe5aQcE7dgFtyLEaY1FhPnhk8mQUElLRlJBTktcSU5URVJOUFJPSkVDVFxFTEVNRU5UVEVNUExBVEVTW05FVyBFTlRSWV0"
            //                         elementTemplateId
            //                         , null, query);

            //                     piwebapi.eventFrame.createSearchByAttribute(piQuery).then(
            //                         function (response) {
            //                             console.log(piQuery);
            //                             var locHeaderVal = 'H4sIAAAAAAAEAIWRT08CMRDFv0uPxsNu-CPhxrotgbAs7baDYIyppS7YLotLV0DCd7dg4kWih8lL5s28_DJzRJmWlVqysnSoi0hIijmuPhRtrp6N1PMyMK993ZK003Q0GGjZjvqN2a63aIzUekMFtiNmhxE3TmWiJRgMU0GGk8xADGRPwEAKeJ5RERIRupSBykXIIiDAB_Fgl_DcJfG5VJ5w2k7ecDuJTT3-VM0Him4RtrrQa8d1sbHS6Qsi5tcRFb5b5MQdRljOQrKcrJemU_yLyDGMme-DV4H3kVc-DVoEDhHhlmVTCDwHSFtrWutqpbeo-3hEPeeq1Uvt9FgWZ6zMSVdv_eSPcVnxDtNycfDG96HTja6kKytv4PdaWnS6_R3mv1Fci4Ie3Kc3f2Q9nb4AcpXhHNEBAAA';
            //                             piwebapi.eventFrame.executeSearchByAttribute(locHeaderVal).then(
            //                                 function (response) {
            //                                     console.log(response);
            //                                 }, function (error) {
            //                                     console.log(error.data);
            //                                 });
            //                         }, function (error) {
            //                             console.log(error.data.Errors);
            //                         }
            //                     );
            //                 }, function (error) {
            //                     console.log(error.data);
            //                 });

            //         }, function (error) {
            //             console.log(error.data.Errors);
            //         });
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


