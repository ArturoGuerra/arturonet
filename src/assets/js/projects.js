function fetchProjects() {
    var request = new XMLHttpRequest()
    var indexs = 0
    request.overrideMimeType("application/json")
    request.open("GET", "https://api.github.com/users/ArturoGuerra/repos")
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let responce = JSON.parse(request.responseText)
            console.log(responce)
            responce.forEach((repo, index, array) => {
                var name = repo.name
                var url = repo.html_url
                var language = repo.language
                var forks = repo.forks_count
                var forked = repo.fork
                indexs = indexs + sendProject(name, url, language, forks, forked)
                if (indexs == array.length) {
                    document.getElementById('spin').setAttribute("style", "display:none");
                    document.getElementById('projectcontainer').removeAttribute("style")
                }
            })
        }
    }
    request.send()
}

function sendProject(name, url, language, forks, forked) {
    var project = document.getElementById('projectstable')
    var table = document.createElement('tr')

    var thname = document.createElement('th')
    var urlvar = document.createElement("a")
    urlvar.setAttribute('href', url)
    var text = document.createTextNode(name)
    urlvar.appendChild(text)
    thname.appendChild(urlvar)
    table.appendChild(thname)

    var thlanguage = document.createElement('th')
    var text = document.createTextNode(language)
    thlanguage.appendChild(text)
    table.appendChild(thlanguage)

    var thforks = document.createElement('th')
    var text = document.createTextNode(forks)
    thforks.appendChild(text)
    thforks.setAttribute("class", "is-hidden-touch")
    table.appendChild(thforks)

    var thforked = document.createElement('th')
    var text = document.createTextNode(forked)
    thforked.appendChild(text)
    thforked.setAttribute("class", "is-hidden-touch")
    table.appendChild(thforked)

    project.appendChild(table)
    return 1
}

fetchProjects()
