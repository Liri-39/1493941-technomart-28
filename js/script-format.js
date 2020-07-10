
var smallMap = document.querySelector(".small-map"),
    bigMap = document.querySelector(".big-map"),
    closeMap = bigMap.querySelector(".big-map .button-close"),
    writeUs = document.querySelector(".write-us"),
    contactForm = document.querySelector(".contact-form"),
    closeForm = contactForm.querySelector(".contact-form .button-close"),
    contactName = contactForm.querySelector("#appointment-name"),
    contactMail = contactForm.querySelector("#appointment-email"),
    contactText = contactForm.querySelector("textarea"),
    contForm = contactForm.querySelector("form"),
    isStorageSupport = !0,
    storage = "";
try {
    storage = localStorage.getItem("Name")
} catch (t) {
    isStorageSupport = !1
}
smallMap.addEventListener("click", function (t) {
    t.preventDefault(), bigMap.classList.add("modal-show")
}), writeUs.addEventListener("click", function (t) {
    t.preventDefault(), contactForm.classList.add("modal-show"), storage ? (contactName.value = storage, contactMail.value = storage, contactText.focus()) : contactName.focus()
}), closeForm.addEventListener("click", function (t) {
    t.preventDefault(), contactForm.classList.remove("modal-show"), contactForm.classList.remove("modal-error")
}), closeMap.addEventListener("click", function (t) {
    t.preventDefault(), bigMap.classList.remove("modal-show")
}), contForm.addEventListener("submit", function (t) {
    contactName.value && contactMail.value ? isStorageSupport && (localStorage.setItem("name", contactName.value), localStorage.setItem("email", Mail.value)) : (t.preventDefault(), contactForm.classList.add("modal-error"), contactForm.offsetWidth, contactForm.classList.add("modal-error"))
}), window.addEventListener("keydown", function (t) {
    27 === t.keyCode && (contactForm.classList.contains("modal-show") && (t.preventDefault(), contactForm.classList.remove("modal-show")), bigMap.classList.contains("modal-show") && (t.preventDefault(), bigMap.classList.remove("modal-show")))
});

