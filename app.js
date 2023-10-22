const burger = document.querySelector(".burger");
const menu = document.querySelector("#flyoutMenu");
const questions = document.querySelector(".questions");
const tabs = document.querySelector(".pricing__tab");
const buttons = document.querySelectorAll(".trigger");
const contents = document.querySelectorAll(".content")


function showMenu() {
    menu.classList.add("show");
}

function hideMneu(event) {
    menu.classList.remove("show");
    event.stopPropagation()
}

burger.addEventListener("click", showMenu);
menu.addEventListener("click", hideMneu);

tabs.addEventListener("click", event => {
    const id = event.target.dataset.id;
    if (id) {
        buttons.forEach(button => {
            button.classList.remove("active")
        });
        event.target.classList.add("active");
        contents.forEach(content => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id)
        element.classList.add("active");
    }
});


