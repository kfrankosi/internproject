let ngAppName = "WebApiApp";
let serverId = "F1DSPriJQMfiM0mIGCBz973bBAUElLRlJBTks";
var dbId, webId, user, locName, floorNum = 3, currentSquare, colorMap = new Map();
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
        piwebapi.assetDatabase.getElements(dbId, null, null, null, null, null, true, [], null, null, null, "VAVCO").then(
            function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });

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


function newUserEntry(piwebapi, comfortLevel, locName) {
    console.log("locname, comfort: ", locName, comfortLevel);
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
    var comfortLevel = $("#comfortLevelButton").text(); // can check using != '' --> don't need to check because will be valid if floorNum is
    var locName = $("#locationNameButton").text(); // can check using != ''
    return new Promise(function (resolve, reject) {
        if ((floorNum > 0) && (comfortLevel != '') && (locName != '')) {
            if (locName.indexOf("VAVCO") < 0) { // catch for if the full name is passed in instead of just the number
                locName = "VAVCO " + floorNum + "-" + ((locName.length < 2) ? ('0' + locName) : locName);
            }
            newUserEntry(piwebapi, comfortLevel, locName).then(function () {
                $("#successModal").modal();
                resolve('Vote successfully submitted to ' + locName);
            }, function (error) {
                $("#errorModal").modal();
                reject('Error submitting');
            });

        } else {
            $("#errorModal").modal();
        }
    });

    //TODO: Update average for floor color -- only need to do for that section


}


function resetButtonText() {
    console.log('Resetting button texts');
    $("#floorNumberButton").text(floorNum);
    $("#comfortLevelButton").text("Comfort Level");
}


function getLocAverage(piwebapi, location) {
    // I dont remember why I duplicated this with a local variable
    var locName = (location == '') ? document.getElementById("locationName").value : location; // can check using != '' --> don't need to check because will be valid if floorNum is
    var avg = 0;
    return new Promise(function (resolve, reject) {
        if (locName == '') {
            reject("Invalid location");
        }
        eventFrameQuery(piwebapi, "AnalysisName:'new status' Template:'New Entry' |Status:='Ready' |Room:=\'" + locName + '\'').then(
            function (response) {
                // console.log(response.data); // unsure how to iterate through -- will use while loop until undefined
                var i = 0, element;
                while ((element = response.data[i]) != undefined) {
                    avg += element.Content.Items[2].Value.Value;
                    i++;
                }
                avg = avg / (i - 1);
                resolve((isNaN(avg) || !isFinite(avg)) ? 0 : avg);
            }, function (error) {
                reject(error);
            });
    });
}


// very slow
function eventFrameQuery(piwebapi, search, errorMsg) {
    var counter = 0;
    return new Promise(function (resolve, reject) {
        var pirequests = {};
        piwebapi.eventFrame.getEventFramesQuery(dbId, null, search).then(function (response) {
            var allFrames = response.data.Items; //link, then values -- then another get on that?
            if ((allFrames).length == 0) {
                reject(errorMsg = ((errorMsg == '') || errorMsg == undefined) ? 'No event frames' : errorMsg);
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
                resolve(response);
            }, function (error) {
                console.log(error);
            });

        }, function (error) {
            reject(error);
        });

    });
}

// Takes in array of elements (all with the same section number), color, and opacity --> applies those transformations on those elements
function colorMapSection(allClassSquares) {
    var opacity = colorMap.get(allClassSquares);
    opacity = (opacity > 1) ? 1 : ((opacity < -1) ? -1 : opacity);
    for (var i = 0; i < allClassSquares.length; i++) {
        allClassSquares[i].style.backgroundColor = (opacity > 0) ? 'red' : 'blue';
        allClassSquares[i].style.opacity = Math.abs((opacity == undefined) ? 0.5 : opacity);
        allClassSquares[i].style.boxShadow = '20px 20px 50px 0 white inset, -20px -20px 50px 0 white inset';
        // keep all opacities somewhat transparent
        allClassSquares[i].style.opacity *= 0.7;
    }
}

// initialize the map to color the sections
function addTempColors(piwebapi) {
    // Once the averages have already been calculated -- no need to make new api request
    if ((colorMap.size > 0)) {
        // iterates through entire map to fill in all colors
        colorMap.forEach(function (value, key) {
            colorMapSection(key);
        });
    } else {
        // Initial fill of the colors on map
        // if (updatedSquare == 'init') {
        // I think this is looping all the way through and not doing the loc averages one by one -- only getting last
        populateColorsHelper(1, 19, piwebapi);
    }
    // }
    // } 
    // else {

    // }
}

function populateColors(piwebapi) {
    changeFloorAndCalculateNumRooms(piwebapi).then(
        function (numRooms) {
            populateColorsHelper(1, numRooms, piwebapi);
        });
}

// recursively calls in callback so all are called
// With this, each section is being called one at a time -- the sections themselves have their averages calculated with a batch but this is not one
function populateColorsHelper(i, numRooms, piwebapi) {
    var currElemClass = document.getElementsByClassName(i);
    var locName = "VAVCO " + floorNum + "-" + ((i < 10) ? '0' + i : i);
    // console.log(currElem); // successfully change
    getLocAverage(piwebapi, locName).then(function (response) {
        response = (response > 1) ? 1 : ((response < -1) ? -1 : response); // Make sure values are staying within 1 -- solve for issues caused by testing with drastic values
        colorMap.set(currElemClass, response);
        colorMapSection(currElemClass);
        if (i <= numRooms) {
            populateColorsHelper(++i, numRooms, piwebapi);
        }
    }, function (error) {
        colorMapSection(currElemClass); // shades sections with zero votes
        i++;
        if (i < numRooms) {
            populateColorsHelper(i, numRooms, piwebapi);
        }
        // console.log(error);
    });

}

function getTempAvgByLocName(locNum) {
    return colorMap.get(document.getElementsByClassName(locNum));
}

function changeFloorAndCalculateNumRooms(piwebapi) {
    return new Promise(function (resolve) {
        // returns all elements in the db -- need to filter out VAVCOs
        getAllElements(piwebapi).then(function (response) {
            console.log(response);
            // have another list to choose floor num and then generate list from that
            // var floorNum = document.getElementById("floorNumberButton");
            // var select = document.getElementById("locationName");
            $("#locationName").empty();
            var list = document.getElementById("locationName");
            var countRooms = 0;
            (response.data.Items).forEach(function (element) {
                countRooms++;
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

            resolve(countRooms);
        });
    }, function (error) {
        console.log(error.data);
    });
}

function clickLocation(piwebapi, locNum, self) {
    try {
        currentSquare = self.currentTarget;
        $("#myModal").modal();
        console.log('loc number ', locNum);
        console.log(getTempAvgByLocName(locNum));
        $("#locationNameButton").text(locNum); // should just be the number -- manipulated later to add 'VAVCO'
        addTempColors(piwebapi);
    } catch (exception) {
        console.log('non clickable area');
    }
}