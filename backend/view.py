from app import app
from flask_marshmallow import Marshmallow
from marshmallow_sqlalchemy import fields
from models import Category, Article, User, db

ma = Marshmallow(app)


class CategorySchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Category
        load_instance = True
        sqla_session = db.session


class ArticleSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Article
        load_instance = True
        sqla_session = db.session

    categories = fields.Nested(CategorySchema, many=True)


category_schema = CategorySchema()
categories_schema = CategorySchema(many=True)

article_schema = ArticleSchema()
articles_schema = ArticleSchema(many=True)




