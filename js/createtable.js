out("im in create table")
const marsUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=100&page=2&api_key=cXrM4POFLGgBFlOOAbiEk3K0q2NfzynY0Ckydqap"
const pbGetPhotos = document.getElementById("pbGetPhotos")

const tblPhotos = document.getElementById("tblMars")
const pbCreatTable = document.getElementById("pbCreateTable")
const pbSetPage = document.getElementById("pbSetPage")
const inpPage = document.getElementById("inpPage")

function createTableHardCoded() {
    let rowCount = tblPhotos.rows.length
    out("rowcount=" + rowCount)
    let row = tblPhotos.insertRow(rowCount)
    let cell1 = row.insertCell(0)
    cell1.innerHTML= "1"
    let cell2 = row.insertCell(1)
    cell2.innerHTML= "Kurt"

    let cell3 = row.insertCell(2)
    let atag = document.createElement("a")
    atag.setAttribute("href", "https://www.dr.dk/")
    atag.innerText = "Danish Radio"
    cell3.appendChild(atag)
}

function createTable(photo) {
    if (!photo.id) return;

    let rowCount = tblPhotos.rows.length
    out("rowcount=" + rowCount)
    let row = tblPhotos.insertRow(rowCount)

    let cell1 = row.insertCell(0)
    cell1.innerHTML= photo.id

    let cell2 = row.insertCell(1)
    cell2.innerHTML= photo.sol

    let cell3 = row.insertCell(2)
    cell3.innerHTML= photo.rover.name

    let cell4 = row.insertCell(3)
    cell4.innerHTML= photo.camera.name

    let cell5 = row.insertCell(4)
    let atag = document.createElement("a")
    atag.setAttribute("href", photo.img_src)
    atag.innerText = photo.id
    cell5.appendChild(atag)

    //<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">

    //const img1 = "https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00100/ids/edr/browse/ncam/NLF_0100_0675828767_506ECM_N0040218NCAM00503_01_295J01_1200.jpg";

    //let imghtml = '<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">'
    //let imghtmlstart =

    let cell6 = row.insertCell(5)
    let img = document.createElement("img")
    img.setAttribute("src", photo.img_src)
    img.setAttribute("alt", photo.id)
    img.setAttribute("width", 100)
    img.setAttribute("height", 100)
    cell6.appendChild(img)

}


pbCreatTable.addEventListener('click', createTable)

function fetchPhotos() {
    out("inside fetchphotos")
    return  fetch(getMarsUrl()).then(response => response.json()); //returns the result of json()
}

function printPhoto(photo) {
    out(photo)
    out("id=" + photo.id)
    out("rover=" + photo.rover)
    out("camera=" + photo.camera)

}

async function doFetchPhoto(btn) {
    //out(btn.srcElement.id) //the id of the button that was pressed
    out("fetch photos")
    let photos = await fetchPhotos();
    out(photos); //students is an array
    let photoArr = photos.photos;
    if (btn.srcElement.id == "pbGetPhotos") {
        photoArr.forEach(printPhoto)
    } else {
        photoArr.forEach(createTable)
    }
}

pbGetPhotos.addEventListener('click', doFetchPhoto)
pbCreatTable.addEventListener('click', doFetchPhoto)


const marsUrlStart = "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=100&"

const marsUrlApiKey = "&api_key=cXrM4POFLGgBFlOOAbiEk3K0q2NfzynY0Ckydqap"

let marsPageUrl;

function changePage(btn) {
    out("change page")
    const page = inpPage.value
    const marsPageUrl = marsUrlStart + "page=" + page + marsUrlApiKey;
    tblPhotos.innerHTML = ""
    doFetchPhoto(btn)
}

pbSetPage.addEventListener('click', changePage)

function getMarsUrl() {
    if (marsPageUrl) {
        return marsPageUrl
    } else {
        return marsUrl
    }
}
