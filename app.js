const burger = document.querySelector(".burger");
const menu = document.querySelector("#flyoutMenu");


burger.addEventListener("click", showMenu);
menu.addEventListener("click", hideMneu)

function showMenu(event) {
    menu.classList.add("show");
}

function hideMneu(event) {
    menu.classList.remove("show");
    event.stopPropagation()
}



