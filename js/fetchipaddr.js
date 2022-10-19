out("im in fetch ipaddr")

const urlIpAddr = "https://api.ipify.org/?format=json";
const lblIpAddr = document.getElementById("lblIpAddress");


function fetchAnyUrl(url) {
    out("inside fetch ipaddr url=" + url)
    return  fetch(url).then(response => response.json()); //returns the result of json()
}

async function actionFetchIpAddr(btn) {
    out("fetch ipaddr")
    let ipaddr = await fetchCameras(urlIpAddr);
    out(ipaddr); //students is an array
    lblIpAddr.textContent = ipaddr;
}

const pbFetchIpAddr = document.getElementById("pbFetchIpAddress");
pbFetchIpAddr.addEventListener('click', actionFetchIpAddr)

