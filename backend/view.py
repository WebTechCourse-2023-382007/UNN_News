from flask import render_template, redirect, url_for
from models import Article
from app import app


@app.route('/articles')
def articles():
    articles = Article.query.order_by(Article.updated_at)
    for article in articles:
        article.thumbnail = app.config['UPLOAD_FOLDER'] + article.thumbnail
    return render_template("test.html", articles=articles)

@app.route('/')
def index():
    print(url_for('articles'))
    return redirect(url_for('articles'))

if __name__ == '__main__':
    app.run(host="127.0.0.12")
