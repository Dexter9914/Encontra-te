let map;
let markers = [];
let infoWindow;
let placesService;

const estabelecimentos = [
  { nome: "Aldeia", coordenadas: { lat: 37.14010265, lng: -8.535822055 }, caracteristicas: ["Restaurante","Musica ao Vivo","Bar","Esplanada", "Jogos de Tabuleiro", "Xadrez"],
  mapsLink: "https://www.google.com/maps/place/Aldeia+de+Portim%C3%A3o/@37.1399587,-8.5384402,17z/data=!4m14!1m7!3m6!1s0xd1b292358d6d2dd:0xa963c930a3c17fd9!2sAldeia+de+Portim%C3%A3o!8m2!3d37.1399587!4d-8.5358653!16s%2Fg%2F11qb3cql_z!3m5!1s0xd1b292358d6d2dd:0xa963c930a3c17fd9!8m2!3d37.1399587!4d-8.5358653!16s%2Fg%2F11qb3cql_z?entry=ttu" },
  
  { nome: "PTM Downtown", coordenadas: { lat: 37.141, lng: -8.537 }, caracteristicas: ["Restaurante", "Pequeno Almoço"], mapsLink: "https://www.google.com/maps/place/PTM+DownTown+Brunch%26Cocktails/@37.1415406,-8.5399189,17z/data=!3m1!4b1!4m6!3m5!1s0xd1b29459753a66b:0xd9ca743896a03da0!8m2!3d37.1415406!4d-8.537344!16s%2Fg%2F11lptpyd5_?entry=ttu" },
  
  { nome: "Holandes dos Caracois", coordenadas: { lat: 37.1327, lng: -8.53735 }, caracteristicas: ["Restaurante","Caracois"], mapsLink: "https://www.google.com/maps/place/Holand%C3%AAs+dos+Caracois/@37.13162,-8.5396676,17z/data=!3m1!4b1!4m6!3m5!1s0xd1b28f1b1b18539:0xc44feac1049655ba!8m2!3d37.13162!4d-8.5370927!16s%2Fg%2F11b75pz37h?entry=ttu" },
  
  { nome: "Teresinha", coordenadas: { lat: 37.138, lng: -8.538 }, caracteristicas: ["Sport TV", "Restaurante", "Esplanada"], mapsLink: "https://www.google.com/maps/place/Restaurante+Teresinha/@37.1375712,-8.5433948,17z/data=!3m1!4b1!4m6!3m5!1s0xd1b28f2983e2bd5:0xe7d687aaaaa314c7!8m2!3d37.1375713!4d-8.5385239!16s%2Fg%2F11bv6pvlh_?entry=ttu" },
  
  { nome: "Armazem Integral", coordenadas: { lat: 37.138829, lng: -8.539204 }, caracteristicas: ["Restaurante", "Vegetariano", "Esplanada"], mapsLink: "https://www.google.com/maps/place/Armaz%C3%A9m+Integral/@37.1380329,-8.5419333,17z/data=!3m1!4b1!4m6!3m5!1s0xd1b28f25e3847f5:0x6186a4375abc1ac5!8m2!3d37.1380329!4d-8.5393584!16s%2Fg%2F11g8w0rpbh?entry=ttu" },
  
  { nome: "OlhaQ2", coordenadas: { lat: 37.13754, lng: -8.53748 }, caracteristicas: ["Bar", "Musica ao Vivo", "Esplanada"], mapsLink: "https://www.google.com/maps/place/Olha+Q+2/@37.1374363,-8.5401381,17z/data=!3m1!4b1!4m6!3m5!1s0xd1b29fafa3459dd:0x9fbe2eb079e34715!8m2!3d37.1374363!4d-8.5375632!16s%2Fg%2F11fpn25tbl?entry=ttu" },


  { nome: "Dona Barca", coordenadas: { lat: 37.14050, lng: -8.53248 }, caracteristicas: ["Restaurante", "Esplanada", "Peixe Assado", "Acessivel a Cadeira de Rodas"], mapsLink: "https://www.google.com/maps/place/Dona+Barca/@37.1400364,-8.5351133,17z/data=!3m2!4b1!5s0xd1b288b45f41679:0x6bdbf809e686a718!4m6!3m5!1s0xd1b288b44947779:0xbb8000efb5af1cf0!8m2!3d37.1400364!4d-8.5325384!16s%2Fg%2F1tht2qh8?entry=ttu" },
  
  { nome: "Retiro de Peixe Assado", coordenadas: { lat: 37.13178, lng: -8.53533 }, caracteristicas: ["Restaurante", "Peixe Assado", "Acessivel a Cadeira de Rodas"], mapsLink: "https://www.google.com/maps/place/Retiro+do+Peixe+Assado/@37.1314174,-8.5378225,17z/data=!3m1!4b1!4m6!3m5!1s0xd1b28f11eeb5b1f:0x891b28c73249fbf0!8m2!3d37.1314174!4d-8.5352476!16s%2Fg%2F11f0l1r8xk?entry=ttu" },
  
  { nome: "A Fábrica", coordenadas: { lat: 37.13292, lng: -8.53590 }, caracteristicas: ["Restaurante", "Peixe Assado", "Acessivel a Cadeira de Rodas", "Esplanada", "Take-Away"], mapsLink: "https://www.google.com/maps/place/A+F%C3%A1brica,+Portim%C3%A3o/@37.132126,-8.5407539,17z/data=!3m1!4b1!4m6!3m5!1s0xd1b28f3075c5f43:0x1ed52c7eb9a66bfe!8m2!3d37.1321261!4d-8.535883!16s%2Fg%2F1th5dvct?entry=ttu" },
  
  
  
  

];



const mapStyles = [
  { "elementType": "geometry", "stylers": [{ "color": "#ebe3cd" }] },
  { "elementType": "labels.text.fill", "stylers": [{ "color": "#523735" }] },
  { "elementType": "labels.text.stroke", "stylers": [{ "color": "#f5f1e6" }] },
  { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#c9b2a6" }] },
  { "featureType": "administrative.land_parcel", "elementType": "geometry.stroke", "stylers": [{ "color": "#dcd2be" }] },
  { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "color": "#ae9e90" }] },
  { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] },
  { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] },
  { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#93817c" }] },
  { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#a5b076" }] },
  { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#447530" }] },
  { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#f5f1e6" }] },
  { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#fdfcf8" }] },
  { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#f8c967" }] },
  { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#e9bc62" }] },
  { "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{ "color": "#e98d58" }] },
  { "featureType": "road.highway.controlled_access", "elementType": "geometry.stroke", "stylers": [{ "color": "#db8555" }] },
  { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#806b63" }] },
  { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] },
  { "featureType": "transit.line", "elementType": "labels.text.fill", "stylers": [{ "color": "#8f7d77" }] },
  { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#b9d3c2" }] },
  { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#92998d" }] },
  
  {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [{ "visibility": "off" }]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels",
    "stylers": [{ "visibility": "off" }]
  },
  {
    "featureType": "administrative.province",
    "elementType": "labels",
    "stylers": [{ "visibility": "on" }]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [{ "visibility": "off" }]
  }
 
];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.136636, lng: -8.537809 },
    zoom: 14,
    styles: mapStyles
  });

  infoWindow = new google.maps.InfoWindow();
  placesService = new google.maps.places.PlacesService(map);

  updateMarkers(estabelecimentos);
}

function updateMarkers(data) {
  markers.forEach(marker => marker.setMap(null));
  markers = [];

  data.forEach(estabelecimento => {
    const marker = new google.maps.Marker({
      position: estabelecimento.coordenadas,
      map: map,
      title: estabelecimento.nome
    });

    marker.addListener('click', () => {
      const request = {
        location: estabelecimento.coordenadas,
        radius: '50',
        query: estabelecimento.nome
      };

      placesService.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
          const place = results[0];
          const photos = place.photos && place.photos.length > 0 ? place.photos[0].getUrl({ maxWidth: 200, maxHeight: 200 }) : 'No photo available';
          const rating = place.rating ? place.rating : 'No rating available';

          infoWindow.setContent(`
            <div class="custom-info-window">
              <h3 class="iw-title">${estabelecimento.nome}</h3>
              <p>${estabelecimento.caracteristicas.join(', ')}</p>
              <p><a href="${estabelecimento.mapsLink}" target="_blank">Ver no Google Maps</a></p>
              <p>Rating: ${rating}</p>
              ${photos !== 'No photo available' ? `<img src="${photos}" alt="${estabelecimento.nome}" />` : photos}
            </div>
          `);
        } else {
          infoWindow.setContent(`
            <div class="custom-info-window">
              <h3 class="iw-title">${estabelecimento.nome}</h3>
              <p>Características: ${estabelecimento.caracteristicas.join(', ')}</p>
              <p>No additional details available</p>
              <p><a href="${estabelecimento.mapsLink}" target="_blank">Ver no Google Maps</a></p>
            </div>
          `);
        }

        infoWindow.open(map, marker);
      });
    });

    markers.push(marker);
  });
}


function applyFilters() {
  const searchBox = document.getElementById('search-box');
  const checkboxes = document.querySelectorAll('.filters input[type="checkbox"]');
  const selectedFilters = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);
  const searchText = searchBox.value.toLowerCase();

  const filteredEstabelecimentos = estabelecimentos.filter(estabelecimento =>
    selectedFilters.every(filter => estabelecimento.caracteristicas.includes(filter)) &&
    (searchText === "" || 
     estabelecimento.nome.toLowerCase().includes(searchText) ||
     estabelecimento.caracteristicas.some(carac => carac.toLowerCase().includes(searchText)))
  );

  updateMarkers(filteredEstabelecimentos);
}
