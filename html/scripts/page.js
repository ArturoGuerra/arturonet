var page = location.href.split("/").slice(-1);
if (page[0] == "") {
    document.getElementById("tab-home").classList.add("is-active");
};
if (page[0] == "social.html") {
    document.getElementById("tab-social").classList.add("is-active");
};
if (page[0] == "contact.html") {
    document.getElementById("tab-contact").classList.add("is-active");
};

