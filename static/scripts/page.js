var page = location.href.split("/").slice(-1);
if (page[0] == "") {
    document.getElementById("navtab-home").classList.add("is-active");
};
if (page[0] == "social.html") {
    document.getElementById("navtab-social").classList.add("is-active");
};
if (page[0] == "projects.html") {
    document.getElementById("navtab-projects").classList.add("is-active");
};
