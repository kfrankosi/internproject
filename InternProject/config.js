let ngAppName = "WebApiApp";
let serverId = "F1DSPriJQMfiM0mIGCBz973bBAUElLRlJBTks";
var dbId, webId;

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
        resolve(piwebapi.assetDatabase.getElements(dbId, null, null, null, null, null, true));
    });
}


function makePoint(piwebapi, tagname, value) {
    var val = new PIWebApiClient.PITimedValue()
    val.Timestamp = ("*");
    val.Value = (value);
    return new Promise(function (resolve, reject) {
        // resolve(
        piwebapi.attribute.getByPath("\\\\PIKFRANK\\internproject\\Entry|" + tagname).then(function (response) {
            console.log(response.data.WebId);
            piwebapi.stream.updateValue(response.data.WebId, val, null, null, null, null).then(function (response) {
                resolve(response);
                console.log(response);
            }, function (error) {
                reject(error);
                console.log(error);
            });
        });
        // );
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
    // change tag to begin gathering data (have to change so it can be triggered by another change later)
    makePoint(piwebapi, "Status", "Gathering Info")
        .then(function () {
            console.log(comfortLevel);
            makePoint(piwebapi, "Room", locName);
            makePoint(piwebapi, "ComfortValue", comfortLevel); // need to convert to int value
        })
        // change status tag last to trigger a new event frame that will capture the above changed info
        .then(makePoint(piwebapi, "Status", "Ready"))
        // change status tag to waiting until another entry is made -- ends ready event frame but does not trigger a new one
        .then(makePoint(piwebapi, "Status", "Waiting"));

}

function submitResponse(piwebapi) {
    var floorNum = document.getElementById("floorNumber").value; // can check using > 0
    var locName = document.getElementById("locationName").value; // can check using != '' --> don't need to check because will be valid if floorNum is
    var comfortLevel = document.getElementById("comfortLevel").value; // can check using != ''

    var validInputs = (floorNum > 0) && (comfortLevel != '');

    if (validInputs) {
        newUserEntry(piwebapi, locName, comfortLevel);
    }
}

function getLocAverage(piwebapi, locName) {
    piwebapi.eventFrame.getEventFramesQuery(dbId, null, "AnalysisName:'new status' Template:'New Entry' |Status:='Ready' |Room:=\'" + locName + '\'').then(function (response) {
        console.log(response.data.Items);
    }, function (error) {
        console.log(error);
    });
}