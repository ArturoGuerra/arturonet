from flask import render_template
from werkzeug import import_string, cached_property
import requests

#LazyLoader
class LazyView(object):

    def __init__(self, import_name):
        self.__module__, self.__name__ = import_name.rsplit('.', 1)
        self.import_name = import_name

    @cached_property
    def view(self):
        return import_string(self.import_name)

    def __call__(self, *args, **kwargs):
        return self.view(*args, **kwargs)

class  Repos():
    def __init__(self, name, language, html_url, forks, forked):
        self.name = name
        self.url = html_url
        self.language = language
        self.forks = forks
        self.forked = forked


#Route Functions
def index():
    return render_template('index.html')

def social():
    return render_template('social.html')

def projects():
    reposList = list()
    r = requests.get("https://api.github.com/users/ArturoGuerra/repos")
    repos_json = r.json()
    for repo in repos_json:
        try:
            reposList.append(Repos(repo['name'], repo['language'], repo['html_url'], repo['forks_count'], repo['fork']))
        except Exception as e:
            print(e)
    return render_template('projects.html', repos=reposList)

