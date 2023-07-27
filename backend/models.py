from app import app
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy(app)

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

    def __repr__(self):
        return f"<id {self.id}>"


class Category(db.Model):
    __tablename__ = "categories"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)

    def __repr__(self):
        return f"<id {self.id}>"


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f"<Name {self.username}>"
