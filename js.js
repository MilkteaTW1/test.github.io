if (window.screen.width>1000){
    let desktop=window.document.querySelector("#desktop")
    let mobile = window.document.querySelector("mobile")
    desktop.style.display="block"
    mobile.style.display="none"
}
else{
    let desktop = window.document.querySelector("#desktop")
    let mobile = window.document.querySelector("#mobile")
    desktop.style.display = "none"
    mobile.style.display = "block"
}