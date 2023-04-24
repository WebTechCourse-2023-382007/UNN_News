from flask import redirect, url_for
from models import all_articles
from view import articles_render
from app import app


@app.route('/articles', defaults={'id': 0})
@app.route('/articles/<int:id>')
def articles_count(id):
    articles = all_articles(id)
    for article in articles:
        article.thumbnail = app.config['UPLOAD_FOLDER'] + article.thumbnail
    return articles_render(articles)


@app.route('/', redirect_to='/articles')
def index():
    pass


if __name__ == '__main__':
    app.run(host="127.0.0.12")
