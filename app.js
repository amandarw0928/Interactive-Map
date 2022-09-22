const myMap = {
    coordinates: [],
    businesses: [],
    map: [],
    markers: [],

    buildMap() {
        this.map = L.map('map', {
            center: this.coordinates,
            zoom 12,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            minZoom: '15',
        }).addTo(this.map)

        const marker = L.marker(this.coordinates)
        marker
            .addTo(this.map)
            .bindPopup('<p1><b>Current Location</b><br></p1>')
            .openPopup()
    },

    // business locations
}
// get foursquare businesses
// process foursquare array
// event handlers

window.onload = async () => {
    const coordinates = await getCoordinates()
    console.log(coordinates)
    myMap.coordinates = coordinates
    myMap.buildMap()
}

document.getElementById('submit').addEventListener('click', async (event) => {
    event.preventDefault()
    let business = document.getElementById('business').value
    console.log(business)
})

async function getCoordinates() {
    const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCoordinates(resolve, reject);
    });
    return [pos.coordinates.latitude, pos.coordinates.longitude]
}

// fsq3JhtTX4Z23ggBPMJ19cOSIKgKE0V7ALeA7Kw/iGTmio4=
// ITE5AZW032LN1O4N3CFH1OQICSZC0FDVCQTY3LPYILVPOA0F