// //create map
// const map = L.map('mapid').setView([-22.929623,-47.0614431], 15);

// //create and add tileLayer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

// //create icon
// const icon = L.icon({
//     iconUrl: '/images/map-marker.svg',
//     iconSize: [58,68],
//     iconAnchor: [29, 68],
//     popupAnchor: [170, 2]
// })

// //create popup overlay
// const popup = L.popup({
//     closeButton: false,
//     className: 'map-popup',
//     minWidth: 240,
//     minHeight: 240
// }).setContent('Lar das meninas <a href=\"orphanage.html?id=1"class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>')

// //create and add marker
// L
// .marker([-22.929623,-47.0614431], {icon})
// .addTo(map)
// .bindPopup(popup)

const map = L.map('mapid').setView([-22.929623,-47.0614431], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng } = orphanage) {
    const popup = L.popup({
        closeButton: false,
        className: "map-popup",
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`)
    
    L
    .marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup)    
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng,
    }

    addMarker(orphanage)
})
