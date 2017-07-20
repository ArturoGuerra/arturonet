from flask import *
import requests
app = Flask(__name__)


class  Repos():
    def __init__(self, name, language, html_url, forks, forked):
        self.name = name
        self.url = html_url
        self.language = language
        self.forks = forks
        self.forked = forked

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/social')
def social():
    return render_template('social.html')

@app.route('/projects')
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

@app.errorhandler(404)
def page_not_found(error):
    return render_template("custom_404.html"), 404

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
