// map object
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
            .bindPopup('<p1><b>You are here</b><br></p1>')
            .openPopup()
    },

    // business locations
}
// get foursquare businesses
// process foursquare array
// event handlers
// window load
// business button
document.getElementById('submit').addEventListener('click', async (event) => {
    event.preventDefault()
    let business = document.getElementById('business').value
    console.log(business)
})

// get coordinates
async function getCoordinates() {
    const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCoordinates(resolve, reject);
    });
    return [pos.coordinates.latitude, pos.coordinates.longitude]
}