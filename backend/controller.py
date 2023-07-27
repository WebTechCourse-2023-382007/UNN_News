from flask_restx import Api, Resource, reqparse, abort
from request_parsers import json_article_parser, category_parser, user_parser, \
    articles_parser
from repos import ArticleRepo, CategoryRepo, UserRepo, save_session
from schemas import ArticleSchema, CategorySchema, UserSchema
from app import app

api = Api(app)
articles_namespace = api.namespace("articles", description="Articles operations")
categories_namespace = api.namespace("categories", description="Categories operations")
user_namespace = api.namespace("users", description="Users operations")


"""
ARTICLES
"""

article_schema = ArticleSchema()
articles_schema = ArticleSchema(many=True)


@articles_namespace.route("")
class ArticlesController(Resource):
    @api.doc(parser=articles_parser)
    def get(self):
        category = articles_parser.parse_args()["category"]
        if category:
            articles = ArticleRepo.all_by_category(category)
        else:
            articles = ArticleRepo.all()

        return articles_schema.dump(articles)

    @api.doc(parser=json_article_parser)
    def post(self):
        json_view = reqparse.request.get_json()
        new_article = article_schema.load(json_view)
        ArticleRepo.add(new_article)
        return article_schema.dump(new_article)


@articles_namespace.route("/<int:article_id>")
class ArticleController(Resource):
    @staticmethod
    def get_article(article_id):
        category = ArticleRepo.get_by_id(article_id)
        if category:
            return category
        abort(404, "Статья не найдена")

    def get(self, article_id):
        article = self.get_article(article_id)
        return article_schema.dump(article)

    @api.doc(parser=json_article_parser)
    def put(self, article_id):
        article = self.get_article(article_id)
        json_view = reqparse.request.get_json()
        article_schema.load(json_view, instance=article, partial=True)
        save_session()
        return article_schema.dump(article)

    def delete(self, article_id):
        article = self.get_article(article_id)
        return ArticleRepo.delete(article)


"""
CATEGORIES
"""

category_schema = CategorySchema()
categories_schema = CategorySchema(many=True)


@categories_namespace.route("")
class CategoriesController(Resource):
    def get(self):
        categories = CategoryRepo.all()
        return categories_schema.dump(categories)

    @api.doc(parser=category_parser)
    def post(self):
        json_view = reqparse.request.get_json()
        cat = category_schema.load(json_view)
        CategoryRepo.add(cat)
        return category_schema.dump(cat)


@categories_namespace.route("/<int:cat_id>")
class CategoryController(Resource):
    @staticmethod
    def get_category(cat_id):
        category = CategoryRepo.get_by_id(cat_id)
        if category:
            return category
        abort(404, "Категория не найдена")

    def get(self, cat_id):
        category = self.get_category(cat_id)
        return category_schema.dump(category)

    @api.doc(parser=category_parser)
    def put(self, cat_id):
        cat = self.get_category(cat_id)
        json_view = reqparse.request.get_json()
        category_schema.load(json_view, instance=cat, partial=True)
        save_session()
        return category_schema.dump(cat)

    def delete(self, cat_id):
        cat = self.get_category(cat_id)
        return CategoryRepo.delete(cat)


"""
USERS
"""

user_schema = UserSchema(load_only=["username", "password"], dump_only=["id"])
users_schema = UserSchema(many=True)


@user_namespace.route("")
class UsersController(Resource):
    def get(self):
        return users_schema.dump(UserRepo.all())

    @api.doc(parser=user_parser)
    def post(self):
        json_view = reqparse.request.get_json()
        user = user_schema.load(json_view)
        UserRepo.add(user)
        return user_schema.dump(user)


@user_namespace.route("/<int:user_id>")
class UserController(Resource):
    @staticmethod
    def get_user(user_id):
        user = UserRepo.get_by_id(user_id)
        if user:
            return user
        abort(404, "Пользователь не найден")

    def get(self, user_id):
        user = self.get_user(user_id)
        return user_schema.dump(user)

    @api.doc(parser=user_parser)
    def put(self, user_id):
        user = self.get_user(user_id)
        user_schema.load(reqparse.request.get_json(), instance=user, partial=True)
        save_session()
        return user_schema.dump(user)

    def delete(self, user_id):
        user = self.get_user(user_id)
        return UserRepo.delete(user)


if __name__ == '__main__':
    app.run("0.0.0.0")