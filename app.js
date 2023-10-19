const burger = document.querySelector(".burger");
const menu = document.querySelector("#flyoutMenu");
const questions = document.querySelector(".questions");



function showMenu() {
    menu.classList.add("show");
}

function hideMneu(event) {
    menu.classList.remove("show");
    event.stopPropagation()
}

burger.addEventListener("click", showMenu);
menu.addEventListener("click", hideMneu)



