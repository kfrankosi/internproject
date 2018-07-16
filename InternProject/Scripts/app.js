//Make sure the name below is the same declared on  <html ng-app="PiWebApiSampleApp">  


var piWebApiApp = angular.module("PiWebApiSampleApp", []);
var googleAPIKey = "AIzaSyD3tl-i_Mg8Z7uEIT82ElNO7vT1mbTx6hI";

piWebApiApp.controller("mainCtrl", function ($scope, piWebApiHttpService) {


    //declare and inicialize variables  
    $scope.requestMode = true;
    $scope.getSnap = true;
    $scope.getRec = true;
    $scope.getInt = true;
    $scope.showMap = true;

    //options for the combobox on the initial page  
    $scope.yesOrNoOptions = [{ "value": true, "name": "Yes" }, { "value": false, "name": "No" }];


    //update values when the default button is pressed  
    $scope.defaultValues = function () {
        $scope.piServerName = "OAKPIAF";
        $scope.piPointName = "SINUSOID";
        $scope.startTime = "*-1d";
        $scope.endTime = "*";
        $scope.interval = "1h";
        $scope.getSnap = $scope.yesOrNoOptions[0];
        $scope.getRec = $scope.yesOrNoOptions[0];
        $scope.getInt = $scope.yesOrNoOptions[0];

        $scope.path = "OAKPIAF\\Facilities-1600 Alvarado";
        $scope.webId = "F1EmnqdqScCm70aDbETKiwGLjwRMdAri4l5xGJN3xc-DlStAT0FLUElBRlxGQUNJTElUSUVTLTE2MDAgQUxWQVJBRE9cU0xUQw";
    }

    //get data by making http calls  
    $scope.getData = function () {
        console.log("getting data")
        //switch div to display the results  
        $scope.requestMode = false;
        //all HTTP requests are done through the  piWebApiHttpService factory object  
        piWebApiHttpService.validPIServerName($scope.piServerName).then(function (response) {
            //this function will be executed in case of success  
            $scope.piServerData = response.data;
            $scope.piServerExistsValue = true;
        }, function (error) {
            //this function will be executed in case of error  
            $scope.piServerError = error.data;
            $scope.piServerExistsValue = false;
        });

        piWebApiHttpService.getByPath($scope.path).then(function (response) {
            $scope.validPath = response.data;
            console.log("get by path:")
            console.log(response)
        }, function (error) {
            $scope.validPath = false;
        });


        piWebApiHttpService.getByWebId($scope.webId).then(function (response) {
            $scope.webId = response.data;
            console.log("get by webid:")
            console.log(response)
        }, function (error) {
            console.log("web id error");
            console.log(error);
            $scope.webId = false;
        });


    }

    $scope

});

var map, overlay, lat, lng;
USGSOverlay.prototype;

function renderMap() {
    USGSOverlay.prototype = new google.maps.OverlayView();

    map = new google.maps.Map(document.getElementById('map'), {
        // center: { lat: -34.397, lng: 150.644 },
        zoom: 20,
        mapTypeId: 'satellite',
        heading: 0,
        tilt: 0
    });


    var geocoder = new google.maps.Geocoder();
    // TODO: fix hardcode?
    var address = "1600 Alvarado Street, San Leandro";
    // var coords;
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            // console.log(results[0].geometry.location.lat());
            lat = results[0].geometry.location.lat();
            lng = results[0].geometry.location.lng();
            map.setCenter(results[0].geometry.location);
            // Adds a red marker to building -- use markers for different areas/rooms instead
            // var marker = new google.maps.Marker({
            //     map: map,
            //     position: results[0].geometry.location
            // });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }

        // coords = latLng2Point(map.getCenter(), map);
        // console.log(coords); // coords.x, coords.y

        // document.getElementById("overlay").style.top = coords.y + (130 * scaleAdj) + "px";
        // document.getElementById("overlay").style.left = coords.x - (380 * scaleAdj) + "px";
        // document.getElementById("overlay").style.transform = "rotate(54deg) scale(" + scaleAdj + ")";
    });


    var bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(lat - 0.1, lng - 0.1),
        new google.maps.LatLng(lat + 0.1, lng + 0.1)
    );

    var srcImage = "Floorplan.jpg";

    // overlay = new USGSOverlay(bounds, srcImage, map);
    // google.maps.event.addDomListener(window, 'load', renderMap);


}


/** @constructor */
function USGSOverlay(bounds, image, map) {
    // Initialize all properties.
    this.bounds_ = bounds;
    this.image_ = image;
    this.map_ = map;

    // Define a property to hold the image's div. We'll
    // actually create this div upon receipt of the onAdd()
    // method so we'll leave it null for now.
    this.div_ = null;

    // Explicitly call setMap on this overlay.
    this.setMap(map);
    // return this;
}

/**
* onAdd is called when the map's panes are ready and the overlay has been
* added to the map.
*/
USGSOverlay.prototype.onAdd = function () {
    console.log("onadd");
    var div = document.createElement('div');
    div.style.borderStyle = 'none';
    div.style.borderWidth = '0px';
    div.style.position = 'absolute';

    // Create the img element and attach it to the div.
    var img = document.createElement('img');
    img.src = this.image_;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.position = 'absolute';
    div.appendChild(img);

    this.div_ = div;

    // Add the element to the "overlayLayer" pane.
    var panes = this.getPanes();
    panes.overlayLayer.appendChild(div);
};

USGSOverlay.prototype.draw = function () {

    // We use the south-west and north-east
    // coordinates of the overlay to peg it to the correct position and size.
    // To do this, we need to retrieve the projection from the overlay.
    var overlayProjection = this.getProjection();

    // Retrieve the south-west and north-east coordinates of this overlay
    // in LatLngs and convert them to pixel coordinates.
    // We'll use these coordinates to resize the div.
    var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
    var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

    // Resize the image's div to fit the indicated dimensions.
    var div = this.div_;
    div.style.left = sw.x + 'px';
    div.style.top = ne.y + 'px';
    div.style.width = (ne.x - sw.x) + 'px';
    div.style.height = (sw.y - ne.y) + 'px';

    div.style.visibility = 'visible';
};

// The onRemove() method will be called automatically from the API if
// we ever set the overlay's map property to 'null'.
USGSOverlay.prototype.onRemove = function () {
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
};

// Set the visibility to 'hidden' or 'visible'.
USGSOverlay.prototype.hide = function () {
    if (this.div_) {
        // The visibility property must be a string enclosed in quotes.
        this.div_.style.visibility = 'hidden';
    }
};

USGSOverlay.prototype.show = function () {
    if (this.div_) {
        this.div_.style.visibility = 'visible';
    }
};

USGSOverlay.prototype.toggle = function () {
    if (this.div_) {
        if (this.div_.style.visibility === 'hidden') {
            this.show();
        } else {
            this.hide();
        }
    }
};

// Detach the map from the DOM via toggleDOM().
// Note that if we later reattach the map, it will be visible again,
// because the containing <div> is recreated in the overlay's onAdd() method.
USGSOverlay.prototype.toggleDOM = function () {
    if (this.getMap()) {
        // Note: setMap(null) calls OverlayView.onRemove()
        this.setMap(null);
    } else {
        this.setMap(this.map_);
    }


    //potentially after?
};


var scaleAdj = .63;

function latLng2Point(latLng, map) {
    var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
    var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
    var scale = Math.pow(2, map.getZoom());
    scale *= scaleAdj;
    var worldPoint = map.getProjection().fromLatLngToPoint(latLng);
    return new google.maps.Point((worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale);
}

function point2LatLng(point, map) {
    var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
    var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
    var scale = Math.pow(2, map.getZoom());
    var worldPoint = new google.maps.Point(point.x / scale + bottomLeft.x, point.y / scale + topRight.y);
    return map.getProjection().fromPointToLatLng(worldPoint);
}


