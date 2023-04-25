from flask import redirect, url_for, request
from models import all_articles, one_article
from view import articles_render
from app import app


@app.route('/articles', defaults={'id': 0})
@app.route('/articles/<int:id>')
def articles_count(id):
    if id == 0:
        count = request.args.get("count", default=0, type=int)
        articles = all_articles(count)
    else:
        articles = one_article(id)
    for article in articles:
        article.thumbnail = app.config['UPLOAD_FOLDER'] + article.thumbnail
    return articles_render(articles)


@app.route('/', redirect_to='/articles')
def index():
    pass


if __name__ == '__main__':
    app.run(host="127.0.0.12")
