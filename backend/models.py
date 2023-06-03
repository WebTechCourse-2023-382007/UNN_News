from typing import Union
import flask_sqlalchemy.query
from app import app
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy(app)


def all_articles(count=0):
    if count == 0:
        return Article.query.order_by(Article.updated_at)
    elif count > 0:
        return Article.query.order_by(Article.updated_at).limit(count)
    raise AttributeError("count must be >= 0")


def one_article(id):
    return Article.query.order_by(Article.updated_at).filter(Article.id == id)


def all_users():
    return User.query.order_by(User.username)


def get_user(id):
    user = User.query.filter(User.id == id).one_or_none()
    return user


def add_user(username, password):
    user = User(username, password)
    db.session.add(user)
    db.session.commit()


def edit_user(id, username, password):
    user = get_user(id)
    user.username = username
    user.password = password
    db.session.commit()


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

    def __init__(self, username, password):
        self.username = username
        self.password = password

    def __repr__(self):
        return f"<Name {self.username}>"


articles_categories = db.Table("articles_categories",
                               db.Column("id", db.Integer, primary_key=True),
                               db.Column("article_id", db.Integer, db.ForeignKey("articles.id")),
                               db.Column("category_id", db.Integer, db.ForeignKey("categories.id"))
                               )


class Article(db.Model):
    __tablename__ = "articles"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    content = db.Column(db.Text)
    thumbnail = db.Column(db.String(255))
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)
    categories = db.relationship("Category", secondary=articles_categories, backref="articles")

    def __init__(self, title, description, content, thumbnail, created_at, updated_at):
        self.title = title
        self.description = description
        self.content = content
        self.thumbnail = thumbnail
        self.created_at = created_at
        self.updated_at = updated_at

    def __repr__(self):
        return f"<id {self.id}>"

    @staticmethod
    def all():
        return Article.query.order_by(Article.updated_at)


class Category(db.Model):
    __tablename__ = "categories"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f"<id {self.id}>"

    @staticmethod
    def all() -> flask_sqlalchemy.query.Query:
        return Category.query.order_by(Category.name)

    @staticmethod
    def get(cat_id: int) -> Union["Category", None]:
        category = Category.query.filter(Category.id == cat_id)
        if category.count() == 0:
            return None
        return category[0]

    @staticmethod
    def add(name) -> int:
        cat = Category(name)
        db.session.add(cat)
        db.session.commit()
        return cat.id

    def edit(self, new_name: str) -> "Category":
        self.name = new_name
        db.session.commit()
        return self

    def delete(self) -> str:
        name = self.name
        db.session.delete(self)
        db.session.commit()
        return name
