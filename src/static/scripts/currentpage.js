var currentpage = "/" + location.href.split("/").slice(-1);
var nav = [
    {href: '/', id:'home', content:'Home'},
    {href:'/social', id:'social', content:'Social'},
    {href:'/projects', id:'projects', content:'Projects'}
    ];
console.log(currentpage);
nav.forEach(function(page) {
    if (page.href == currentpage) {
        document.getElementById(page.id).classList.add("is-active");
    }
});
