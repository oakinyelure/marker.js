/****
 * Class would be responsible for drawing maps and all other activities to be performed by a map. There would be a core dependency on google API and JQUERY
 */

class Mapper {

    // set up mapping constructor.
    /**
     *
     * @param mapID
     * @param longitude
     * @param latitude
     *
     * Constuctor takes 3 args. The ID where map is to be drawn. if this ID does not exist, an element with the mapID will be created anywhere in the DOM
     * Constructor also takes the latitude and longitude as an arg.
     */

    constructor(mapID,latitude,longitude) {

        // check if mapID is string.

        if(typeof mapID !== 'string') {
            throw new TypeError("MapID needs to be of type [String]");
        }

        if(typeof latitude !== 'number' || typeof  longitude !== 'number') {

            throw new TypeError("Expected a floating point for latitude and longitude");
        }

        // find element with map ID in the DOM

        var element = document.getElementById(mapID);

        if(element != null) {

            //  style Element

            this.styleElement(element);
        }
        else {

            // create new Element

            var newMapDiv = document.createElement("div");

            // attach ID to new element

            newMapDiv.setAttribute("id",mapID);

            document.body.appendChild(newMapDiv);

            element = document.getElementById(mapID);

            this.mapElement = element;

            this.styleElement(element);

        }

        this.latitude = latitude;
        this.longitude = longitude;
        this.mapElement = element;

    }

    /**
     * Function styles the element passed to it. Style would be box-like and constructed to handle mapping
     * @param element
     */
    styleElement() {

        //  method styles the element passed to it.

        this.mapElement.setAttribute("style","width:100%; margin:0px; height:147px; border-right : 0px;");

    }

    /**
     * Method creates a marker type style using the element passed to it.
     * @param element
     * @param longitude
     * @param latitude
     */
    createMarkerMap() {

        // Obtain the map element ID

        var mapInstance;

        // create lat and long pair

        var latlng = new google.maps.LatLng(this.latitude, this.longitude);

        // Assign the Map instance variable with the new maps location, as well as attach it to the mapDiv

        mapInstance = new google.maps.Map(this.mapElement, {

            center: latlng,
            zoom: 10

        });

        // Construct the marker to be placed on the map

        var marker = new google.maps.Marker({
            map: mapInstance,
            position : latlng
        });
    }

    /**
     * Function creates multiple markers based on addresses passed to it
     * It accepts two arguments. MapID and the address object.
     |  mapID should be a string value.
     |  Address Object is prefarably an array containing the full address,latitude and longitude.
     */

    static showMultipleMapMarkers(mapID,addresses) {

        var element;

        // check type of mapID

        if(typeof mapID !== 'string') {
            throw new TypeError('Expected a string');
        }
        else
        {
            // bind element to DOM

            element = document.getElementById(mapID);

            // Check if element does exist

            if(element == null) {

                throw new ReferenceError("DOM Id does not exist. Create an element with an ID");
            }
        }

        if(typeof addresses !== 'object') {

            throw new TypeError('Expected an array. You provided '+typeof addresses);
        }

        if(addresses.length == 0) {

            throw new ReferenceError("Object length must be greater than 0");
        }

        // Configure default google map view

        var map = new google.maps.Map(element,{
            zoom : 4,
            center : new google.maps.LatLng(39.774769,-101.337891),
            mapTypeId : google.maps.MapTypeId.ROADMAP
        });

        // add style to element

        element.setAttribute("style","width:100%; margin:0px; height:700px; !important; border-right : 0px;");

        // initialize google info window

        let infoWindow = new google.maps.InfoWindow();

        let marker;

        for(var counter = 0; counter < addresses.length; counter++) {

            marker = new google.maps.Marker({
                position: new google.maps.LatLng(addresses[counter][1],addresses[counter][2]),
                map : map
            });

            // activate info window event listener

            google.maps.event.addListener(marker,'mouseover',(function(marker,counter) {

                return function() {
                    infoWindow.setContent("<strong>Address 1 : </strong>" + addresses[counter][0] + "<br/><strong>Latitude</strong> : " + addresses[counter][1] + "<br/> <strong>Longitude</strong> : " + addresses[counter][2]);
                    infoWindow.open(map,marker);
                }
            })(marker,counter));

            // add event handler for mouse out

            google.maps.event.addListener(marker,'mouseout',(function(marker,counter) {

                return function() {
                    infoWindow.close();
                }
            })(marker,counter));


        }


    }


}