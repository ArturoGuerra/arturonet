from flask import *

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/social')
def social():
    return render_template('social.html')

@app.route('/projects')
def projects():
    abort(404)
    return render_template('projects.html')

@app.errorhandler(404)
def page_not_found(error):
    return render_template("custom_404.html"), 404

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
