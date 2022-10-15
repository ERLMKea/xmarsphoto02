out("im ready to fetch Mars photos")
const marsUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=100&page=1&api_key=cXrM4POFLGgBFlOOAbiEk3K0q2NfzynY0Ckydqap"

const pbGetPhotos = document.getElementById("pbGetPhotos")

function fetchPhotos() {
    out("inside fetchphotos")
    return  fetch(marsUrl).then(response => response.json()); //returns the result of json()
}

function printPhoto(photo) {
    out(photo)
    out("id=" + photo.id)
    out("rover=" + photo.rover)
    out("camera=" + photo.camera)

}

async function doFetchPhoto(btn) {
    out("fetch photos")
    let photos = await fetchPhotos();
    out(photos); //students is an array
    let photoArr = photos.photos;
    photoArr.forEach(printPhoto)
}

pbGetPhotos.addEventListener('click', doFetchPhoto)

