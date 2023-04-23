from app import db


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


class Article(db.Model):
    __tablename__ = "articles"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    content = db.Column(db.Text)
    thumbnail = db.Column(db.String(255))
    created_at = db.Column(db.Time)
    updated_at = db.Column(db.Time)

    def __init__(self, title, description, content, thumbnail, created_at, updated_at):
        self.title = title
        self.description = description
        self.content = content
        self.thumbnail = thumbnail
        self.created_at = created_at
        self.updated_at = updated_at

    def __repr__(self):
        return f"<id {self.id}>"


class Category(db.Model):
    __tablename__ = "categories"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f"<id {self.id}>"
