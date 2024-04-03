let websiteName = document.getElementById("web-site-name");
websiteName.innerHTML = "FluxSparkApp";
function nav() {
    window.location.href = "./index.html"
}
websiteName.addEventListener('click',nav)
let year = new Date().getFullYear();
document.getElementById("copy-right").innerHTML = `© ${year}`