const sidebar = document.getElementById("sidebarFull");
const buttonClose = document.getElementById("close-sidebar");
const buttonOpen = document.getElementById("open-sidebar");
const buttonScroll = document.getElementById("buttonScroll");
const inputEmail = document.getElementById("email");
const inputName = document.getElementById("name");
const form = document.getElementById("form");
const root = document.documentElement;

function closeSidebar() {
    sidebar.style.width = "0";
    sidebar.style.padding = "0.7rem 0";
}

function openSidebar() {
    sidebar.style.padding = "0.7rem";
    sidebar.style.width = "100%";
}

function scrollToTop() {
    root.scrollTo({ top: 0, behavior: "smooth" });
}

function isValidEmail(email) {
    const emailRegex = /^\s*[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\s*$/;
    return emailRegex.test(email);
}

function validInputEmailEnd() {
    const inputValue = inputEmail.value;
    if (inputValue === "") {
        inputEmail.classList.remove("invalid");
        inputEmail.classList.remove("valid");
    }
    else if (isValidEmail(inputValue.trim())) {
        inputEmail.classList.remove("invalid");
        inputEmail.classList.add("valid");
    }
    else {
        inputEmail.classList.remove("valid");
        inputEmail.classList.add("invalid");
    }
}

function isValidName(name) {
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ-' ]+$/
    return nameRegex.test(name);
}

function validInputNameEnd() {
    const inputValue = inputName.value;
    if (inputValue === "") {
        inputName.classList.remove("invalid");
        inputName.classList.remove("valid");
    }
    else if (isValidName(inputValue.trim())) {
        inputName.classList.remove("invalid");
        inputName.classList.add("valid");
    }
    else {
        inputName.classList.remove("valid");
        inputName.classList.add("invalid");
    }
}

function camposValidos() {
    return inputName.classList.contains("valid") && inputEmail.classList.contains("valid");
}

function sendToInformation(event) {
    if (!camposValidos()) {
        event.preventDefault();
        alert("Ingreso datos incorrectos. Vuelva a intentarlo.!!!");
    }
}


buttonClose.addEventListener("click", closeSidebar);
buttonOpen.addEventListener("click", openSidebar);
buttonScroll.addEventListener("click", scrollToTop);
inputEmail.addEventListener("input", validInputEmailEnd);
inputEmail.addEventListener("focusout", validInputEmailEnd);
inputName.addEventListener("input", validInputNameEnd);
inputName.addEventListener("focusout", validInputNameEnd);
form.addEventListener("submit", sendToInformation);
