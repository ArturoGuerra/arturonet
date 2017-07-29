from flask import *
from views import *
app = Flask(__name__)
#Route handler
def url(import_name, url_rules=[], **options):
    view = LazyView(import_name)
    for url_rule in url_rules:
        app.add_url_rule(url_rule, view_func=view, **options)

#Routes
url('views.index', ['/'])
url('views.social', ['/social'])
url('views.projects', ['/projects'])

#Error Routes
@app.errorhandler(404)
def page_not_found(error):
    return render_template("custom_404.html"), 404

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)
