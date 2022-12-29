
 // Api access token to configure Mapbox GL JS,
mapboxgl.accessToken = '';

navigator.geolocation.getCurrentPosition(successLocation, 
    errorLocation, {
        enableHighAccuracy: true
    })
 // here we have to create a function to successLocation.
    function successLocation(position){
         console.log(position);
         setUpMap([position.coords.longitude,position.coords.latitude ])
    }

    function errorLocation(){
         setUpMap([-2.24, 53.48])
    }
  //  here we have to setUpMap function   
   function setUpMap(center){
    const map = new mapboxgl.Map({
        container: 'map',  //container id
        style: 'mapbox://styles/mapbox/streets-v11', // style url
        center: center, // starting position
        zoom: 15  //starting zoom
    });
     // Add the control to the map.
     // Initialize the GeolocateControl.
        const nav = new mapboxgl.NavigationControl()
        map.addControl(nav)
//   here  directions plugin for Mapbox GL JS using the Mapbox Directions API.
        const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken 
        });

        map.addControl(directions, 'top-left');
    
   }
