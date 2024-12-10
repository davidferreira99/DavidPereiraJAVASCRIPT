
    //creación del mapa

 /*   var map = L.map('map').setView([39.569904,2.646300], 19);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Relojes de Lujo'
    }).addTo(map);
    
    L.marker([39.569904,2.646300]).addTo(map)
        .bindPopup('<a href= ../index.html> Relojes de Lujo </a>')
        .openPopup();

*/

    let options ={
            enableHighAccurance: true,
            timeout: 5000,
            maximunAge: 0
        }

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            success,
            error,
            options
        )
    }else{
        alert('La Geolocalizacion es obligatoria')
    }

  

    function success(position){
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        var map = L.map('map',{center:[latitude,longitude],
            zoom:10

        })
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Relojes de Lujo'
        }).addTo(map);

        let control= L.Routing.control({
            waypoints: [
              L.latLng(latitude,longitude),
              L.latLng(39.569904,2.646300)
            ],
            language:'es'
          }).addTo(map);


    }

    function error(){
        alert('Hubo un error a cargar a pagina , por favor intente mas tarde')
    }
    
  
  




       

        //  L.Routing.Formatter(<FormatterOptions> options?)


// AIzaSyALi1c1HUvK7j-om_8tjJw6b85Dhvsp6p0