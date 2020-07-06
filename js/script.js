var smallmap = document.querySelector(".smallmap");
var bigmap = document.querySelector(".bigmap");
var closeMap = bigmap.querySelector(".bigmap .button-close");
var writeus = document.querySelector(".writeus");
var contactForm = document.querySelector(".contact-form");
var closeForm = contactForm.querySelector(".contact-form .button-close");
var contactName = contactForm.querySelector("#appointment-name");
var contactMail = contactForm.querySelector("#appointment-email");
var contactText = contactForm.querySelector("textarea");
var contForm = contactForm.querySelector("form");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

smallmap.addEventListener("click", function (evt) {
    evt.preventDefault();
    bigmap.classList.add("modal-show");
});

writeus.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactForm.classList.add("modal-show");

    if (storage) {
        contactName.value = storage;
        contactMail.value = storage;
        contactText.focus();
    } else {
        contactName.focus();
    }
});


closeForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactForm.classList.remove("modal-show");
    contactForm.classList.remove("modal-error");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    bigmap.classList.remove("modal-show");
});

contForm.addEventListener("submit", function (evt) {
    if (!contactName.value || !contactMail.value) {
        evt.preventDefault();
        contactForm.classList.add("modal-error");
        loginPopup.offsetWidth = loginPopup.offsetWidth;
        loginPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", contactName.value);

            localStorage.setItem("email", Mail.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (contactForm.classList.contains("modal-show")) {
            evt.preventDefault();
            contactForm.classList.remove("modal-show");
        }
        if (bigmap.classList.contains("modal-show")) {
            evt.preventDefault();
            bigmap.classList.remove("modal-show");
        }
    }
});
