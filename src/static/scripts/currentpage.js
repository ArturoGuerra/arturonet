var currentpage = "/" + location.href.split("/").slice(-1);
var nav = [
    {href: '/', id:'home', content:'Home'},
    {href:'/social', id:'social', content:'Social'},
    {href:'/projects', id:'projects', content:'Projects'}
    ];
    args.herofoot_items = [
    {href:'https://discord.gg/ssl', content:'SSL'},
    {href:'https://github.com/ArturoGuerra', content:'GitHub'},
    {href:'https://www.dixionary.com', content:'Dixionary'},
    {href:'https://inwite.dixionary.com', content:'Dixionary Serwer'}
    ];
console.log(currentpage);
nav.forEach(function(page) {
    if (nav.href == currentpage) {
        document.getElementById(page.id).classList.add("is-active");
    }
});
