
    (function(exports){
        "use strict";
        function initMap(){
            exports.map = new google.maps.Map(document.getElementById("mapa"),
                {
                    center: {
                        lat: -12.0671956,
                        lng: -77.0354836
                    },
                    zoom: 18.75
                });
        }
        exports.initMap = initMap;
    })((this.window = this.window || {}));
