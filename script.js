const menuMobile = document.querySelector(".menu-mobile")
const navMobile = document.querySelector("nav")

navMobile.style.maxHeight = "0px"

function menuClick() {
    if (navMobile.style.maxHeight == "0px") {
        navMobile.style.maxHeight = "100px"
    }

    else { navMobile.style.maxHeight = "0px" }
}

menuMobile.addEventListener("click", menuClick)

