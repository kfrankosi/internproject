let ngAppName = "WebApiApp";
let serverId = "F1DSPriJQMfiM0mIGCBz973bBAUElLRlJBTks";
var dbId, webId, user, locName, floorNum, currentSquare;

// returns a promise that holds the dataserver Object -- can manipulate it in other areas of code
function getVars(piwebapi) {
    return new Promise(function (resolve, reject) {
        // first get all variables to be used throughout
        dbId = piwebapi.webIdHelper.generateWebIdByPath("\\\\PIKFRANK\\internproject", "PIAssetDatabase");
        resolve(piwebapi.dataServer.getByPath("\\\\PIKFRANK"));
    });
}

function getAllElements(piwebapi) {
    return new Promise(function (resolve, reject) {
        resolve(piwebapi.assetDatabase.getElements(dbId, null, null, null, null, null, true, [], null, null, null, "VAVCO"));
    });
}


function makePoint(piwebapi, tagname, value) {
    var val = new PIWebApiClient.PITimedValue()
    val.Timestamp = ("*");
    val.Value = (value);
    return new Promise(function (resolve, reject) {
        piwebapi.attribute.getByPath("\\\\PIKFRANK\\internproject\\Entry|" + tagname).then(function (response) {
            piwebapi.stream.updateValue(response.data.WebId, val, null, null, null, null).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    });
}


function newUserEntry(piwebapi, locName, comfortLevel) {
    switch (comfortLevel) {
        case "Cold":
            comfortLevel = -1;
            break;
        case "Normal":
            comfortLevel = 0;
            break;
        case "Hot":
            comfortLevel = 1;
            break;
    }

    return new Promise(function (resolve, reject) {

        // change status to gathering info while gathering info
        // then change status to ready to trigger the event frame
        // then change status to waiting to end event frame and wait for another entry

        // change tag to begin gathering data (have to change so it can be triggered by another change later)
        makePoint(piwebapi, "Status", "Gathering Info")
            .then(function () {
                getUser(piwebapi).then(function (user) {
                    makePoint(piwebapi, "ID", user);
                });
                makePoint(piwebapi, "Room", locName);
                makePoint(piwebapi, "ComfortValue", comfortLevel); // need to convert to int value
            })
            // change status tag last to trigger a new event frame that will capture the above changed info
            .then(makePoint(piwebapi, "Status", "Ready"))
            // change status tag to waiting until another entry is made -- ends ready event frame but does not trigger a new one
            .then(makePoint(piwebapi, "Status", "Waiting"))
            .then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
    });
}

function getUser(piwebapi) {
    if (user != undefined) {
        return new Promise(function (resolve) {
            resolve(user);
        });
    } else {
        return new Promise(function (resolve, reject) {
            piwebapi.system.cacheInstances().then(function (response) {
                resolve(user = response.data.Items[0].User);
            }, function (error) {
                reject(error);
            });
        });
    }
}

function submitResponse(piwebapi) {
    var floorNum = $("#floorNumberButton").text(); // can check using > 0
    var locName = $("#comfortLevelButton").text(); // can check using != '' --> don't need to check because will be valid if floorNum is
    var comfortLevel = $("#locationNameButton").text(); // can check using != ''
    console.log(floorNum, locName, comfortLevel);

    if ((floorNum > 0) && (comfortLevel != '') && (locName != '')) {
        newUserEntry(piwebapi, locName, comfortLevel).then(function () {
            $("#successModal").modal();
        }, function (error) {
            $("#errorModal").modal();
            console.log(error);
        });

    } else {
        $("#errorModal").modal();
    }
}


function resetButtonText() {
    $("#floorNumberButton").text("Floor Number");
    $("#comfortLevelButton").text("Comfort Level");
    $(".square").css("backgroundColor", "");
}


function getLocAverage(piwebapi) {
    var locName = document.getElementById("locationName").value; // can check using != '' --> don't need to check because will be valid if floorNum is
    var avg = 0;
    return new Promise(function (resolve, reject) {
        if (locName == '') {
            reject("Invalid location");
        }
        piwebapi.eventFrame.getEventFramesQuery(dbId, null, "AnalysisName:'new status' Template:'New Entry' |Status:='Ready' |Room:=\'" + locName + '\'').then(function (response) {
            var allFrames = response.data.Items; //link, then values -- then another get on that?
            if ((allFrames).length == 0) {
                reject("No entries for this location");
            }
            console.log(allFrames);
            allFrames.forEach(function (element) {
                piwebapi.streamSet.getValues(element.WebId).then(function (response) {
                    response.data.Items.forEach(function (element) { //iterate through all the attributes in each event frame
                        if (element.Name == "ComfortValue") {
                            avg += element.Value.Value;
                        }
                    });
                    resolve(avg / (response.data.Items).length);
                }, function (error) {
                    reject(error);
                });
            });

        }, function (error) {
            reject(error);
        });
    });
}


// very slow
function eventFrameQuery(piwebapi, search, errorMsg) {
    console.log("event frame query");
    var counter = 0;
    //working non batch request
    return new Promise(function (resolve, reject) {
        var pirequests = {};
        piwebapi.eventFrame.getEventFramesQuery(dbId, null, search).then(function (response) {
            var allFrames = response.data.Items; //link, then values -- then another get on that?
            if ((allFrames).length == 0) {
                reject(errorMsg = (errorMsg == '') ? 'No event frames' : errorMsg);
            }
            allFrames.forEach(function (element) {
                pirequests[counter++] = {
                    "Method": "GET",
                    "Resource": baseUrl + "streamsets/" + element.WebId + "/value",
                    "Headers": {
                        "Accept": "application/json, text/plain, */*",
                        "X-Requested-With": "PIWebApiWrapper"
                    }
                };
            });
            piwebapi.batch.execute(pirequests).then(function (response) {
                resolve(response.data);
            }, function (error) {
                console.log(error);
            });

        }, function (error) {
            reject(error);
        });

    });
}

