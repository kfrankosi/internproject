

var app = angular.module("demo-app", ['ngPIWebApi']);

app.run(function (piwebapi) {
    piwebapi.ConfigureInstance("https://marc-web-sql.marc.net/piwebapi", true);
});


app.controller("mainCtrl", function ($scope, piwebapi) {

    piwebapi.home.get().then(function (response) {
        console.log(response.data);
    }, function (error) {
        console.log(error);
    });
    piwebapi.dataServer.getByPath('\\\\MARC-PI2016').then(function (response) {
        console.log(response.data);
        newPoint = new PIWebApiClient.PIPoint(null, null, "SINUSOID_TEST124121115", null, "Test PI Point for AngularJS PI Web API Client", "classic", "float32", null, null, null, false);
        piwebapi.dataServer.createPoint(response.data.WebId, newPoint).then(function (response) {
            console.log(response.data);
        }, function (error) {
            console.log(error);
        });
    }, function (error) {
        console.log(error);
    });


    piwebapi.point.getByPath("\\\\MARC-PI2016\\sinusoid").then(function (response) {
        console.log(response.data);
    }, function (error) {
        console.log(error);
    });


    var point1webId = "P0QuorgJ0MskeiLb6TmEmH5gAQAAAATUFSQy1QSTIwMTZcU0lOVVNPSUQ";
    var point2webId = "P0QuorgJ0MskeiLb6TmEmH5gAgAAAATUFSQy1QSTIwMTZcU0lOVVNPSURV";
    var point3webId = "P0QuorgJ0MskeiLb6TmEmH5g9AQAAATUFSQy1QSTIwMTZcQ0RUMTU4";


    var webIds = []
    webIds.push(point1webId);
    webIds.push(point2webId);
    webIds.push(point3webId);
    piwebapi.streamSet.getRecordedAdHoc(webIds, null, "*", null, true, 1000, null, null, null, "*-3d", null).then(function (response) {
        console.log(response.data);
    }, function (error) {
        console.log(error);
    });

    streamValuesItems = new PIWebApiClient.PIItemsStreamValues()
    streamValue1 = new PIWebApiClient.PIStreamValues()
    streamValue2 = new PIWebApiClient.PIStreamValues()
    streamValue3 = new PIWebApiClient.PIStreamValues()

    value1 = new PIWebApiClient.PITimedValue()
    value2 = new PIWebApiClient.PITimedValue()
    value3 = new PIWebApiClient.PITimedValue()
    value4 = new PIWebApiClient.PITimedValue()
    value5 = new PIWebApiClient.PITimedValue()
    value6 = new PIWebApiClient.PITimedValue()

    value1.Value = 2
    value1.Timestamp = "*-1d"
    value2.Value = 3
    value2.Timestamp = "*-2d"
    value3.Value = 4
    value3.Timestamp = "*-1d"
    value4.Value = 5
    value4.Timestamp = "*-2d"
    value5.Value = 6
    value5.Timestamp = "*-1d"
    value6.Value = 7
    value6.Timestamp = "*-2d"

    streamValue1.WebId = point1webId
    streamValue2.WebId = point2webId
    streamValue3.WebId = point3webId

    values1 = [];
    values1.push(value1)
    values1.push(value2)
    streamValue1.Items = values1

    values2 = [];
    values2.push(value3)
    values2.push(value4)
    streamValue2.Items = values2

    values3 = [];
    values3.push(value5)
    values3.push(value6)
    streamValue3.Items = values3

    streamValues = []
    streamValues.push(streamValue1)
    streamValues.push(streamValue2)
    streamValues.push(streamValue3)
    piwebapi.streamSet.updateValuesAdHoc(streamValues, null, null).then(function (response) {
        console.log(response.data);
    }, function (error) {
        console.log(error);
    });

    var pirequest = {};
    pirequest["4"] = {
        "Method": "GET",
        "Resource": "https://marc-web-sql.marc.net/piwebapi/points?path=\\\\MARC-PI2016\\sinusoid",
        "Headers": {
            "Cache-Control": "no-cache"
        }
    };
    pirequest["5"] = {
        "Method": "GET",
        "Resource": "https://marc-web-sql.marc.net/piwebapi/points?path=\\\\MARC-PI2016\\cdt158",
        "Headers": {
            "Cache-Control": "no-cache"
        }
    };
    pirequest["6"] = {
        "Method": "GET",
        "Resource": "https://marc-web-sql.marc.net/piwebapi/streamsets/value?webid={0}&webid={1}",
        "Parameters": [
            "$.4.Content.WebId",
            "$.5.Content.WebId"
        ],
        "ParentIds": [
            "4",
            "5"
        ]
    };
    piwebapi.batch.execute(pirequest).then(function (response) {
        console.log(response.data);
    }, function (error) {

    });
}