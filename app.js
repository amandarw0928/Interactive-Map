// API Key = fsq3JhtTX4Z23ggBPMJ19cOSIKgKE0V7ALeA7Kw/iGTmio4=
// Client Id = LU0GKPC0AKAWV10WH2QHAIAHGRCYH2VC2EOXBL5PGVWOZAS2
// Client Secret = ITE5AZW032LN1O4N3CFH1OQICSZC0FDVCQTY3LPYILVPOA0F

const myMap = {
    coordinates: [],
    businesses: [],
    map: {},
    markers: {},

    buildMap() {
        this.map = L.map('map', {
            center: this.coordinates,
            zoom 12,
        });

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            minZoom: '15',
        }).addTo(this.map)

        const marker = L.marker(this.coordinates)
        marker
            .addTo(this.map)
            .bindPopup('<p1><b>Current Location</b><br></p1>')
            .openPopup()
    },

    addMarkers() {
        for (var i = 0; i < this.businesses.length; i++) {
            this.markers = L.marker([
                this.businesses[i].let,
                this.businesses[i].long,
            ])
                .bindPopup(`<p1>${this.businesses[i].name}</p1>`)
                .addTo(this.map)
        }
    },
}
// get foursquare businesses

async function getFoursquare(business) {
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: 'fsq3JhtTX4Z23ggBPMJ19cOSIKgKE0V7ALeA7Kw/iGTmio4='
        }
    }
    let limit = 5
    let lat = myMap.coordinates[0]
    let lon = myMap.coordinates[1]
    let response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v3/places/search?&query=${business}&limit=${limit}&ll=${lat}%2C${lon}`, options)
    let data = await response.text()
    let parsedData = JSON.parse(data)
    let businesses = parsedData.results
    return businesses
}

function processBusinesses(data) {
    let businesses = data.map((element) => {
        let location = {
            name: element.name,
            lat: element.geocodes.main.latitude
        };
        return location
    })
    return businesses
}

// event handlers

window.onload = async () => {
    const coords = await getCoords()
    myMap.coordinates = coords
    myMap.buildMap()
}

document.getElementById('submit').addEventListener('click', async (event) => {
    event.preventDefault()
    let business = document.getElementById('business').value
    let data = await getFoursquare(business)
    myMap.businesses = processBusinesses(data)
    myMap.addMarkers()
})

async function getCoords() {
    const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });
    return [pos.coords.latitude, pos.coords.longitude]
}