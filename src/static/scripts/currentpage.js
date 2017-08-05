var currentpage = location.href.split("/").slice(-1);
var pages = [{href: "", id:"home"}, {href: "social", id: "social"}, {href: "projects", id: "projects"}]
pages.forEach(function(page) {
    if (page.href == currentpage) {
        document.getElementById(page.id).classList.add("is-active");
    }
});
