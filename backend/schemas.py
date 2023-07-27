from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from models import Category, Article, User, db


class CategorySchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Category
        load_instance = True
        include_relationships = True
        sqla_session = db.session


class ArticleSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Article
        load_instance = True
        include_relationships = True
        sqla_session = db.session


class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User
        load_instance = True
        include_relationships = True
        sqla_session = db.session
