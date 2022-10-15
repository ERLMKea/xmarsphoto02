out("im in fetch camera")

const urlLocalCameras = "http://localhost:8080/cameras";


function fetchCameras(url) {
    out("inside fetchcamera url=" + url)
    return  fetch(url).then(response => response.json()); //returns the result of json()
}

let cameraMap = new Map();

async function actionFetchCamera(btn) {
    out("fetch camera")
    let cameras = await fetchCameras(urlLocalCameras);
    out(cameras); //students is an array
    cameras.forEach(camera => cameraMap.set(camera.id, camera) );
    out(cameraMap);
}

const pbFetchCamera = document.getElementById("pbFetchCameras");
pbFetchCamera.addEventListener('click', actionFetchCamera)

