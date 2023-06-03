from flask_restx import Api, Resource, reqparse, abort
import models as ms
from app import app
from view import categories_schema, category_schema, article_schema, articles_schema

api = Api(app, prefix="/articles")
user_namespace = api.namespace("users", description="Users operations")
articles_namespace = api.namespace("articles", description="Articles operations")
categories_namespace = api.namespace("categories", description="Categories operations")


class RequestParsers:
    @staticmethod
    def user_parser():
        res = reqparse.RequestParser()
        res.add_argument('username', type=str, help="user's username")
        res.add_argument('password', type=str, help="user's password")
        return res

    @staticmethod
    def category_parser():
        res = reqparse.RequestParser()
        res.add_argument('name', type=str, help='category name')
        return res


@categories_namespace.route("")
class CategoriesController(Resource):
    parser = RequestParsers.category_parser()

    def get(self):
        categories = ms.Category.all()
        return categories_schema.dump(categories)

    @api.doc(parser=parser)
    def post(self):
        name = self.parser.parse_args()["name"]
        return ms.Category.add(name)


@categories_namespace.route("/<int:cat_id>")
class CategoryController(Resource):
    parser = RequestParsers.category_parser()

    @staticmethod
    def get_category(cat_id):
        category = ms.Category.get(cat_id)
        if category is None:
            abort(404, "Категория не найдена")
        return category

    def get(self, cat_id):
        category = self.get_category(cat_id)
        return category_schema.dump(category)

    @api.doc(parser=parser)
    def put(self, cat_id):
        name = self.parser.parse_args()['name']
        cat = self.get_category(cat_id)
        cat.edit(name)
        return category_schema.dump(cat)

    def delete(self, cat_id):
        cat = self.get_category(cat_id)
        return cat.delete()


@articles_namespace.route("")
class ArticlesController(Resource):
    def get(self):
        articles = ms.Article.all()
        return articles_schema.dump(articles)


@user_namespace.route("")
class AllUsersController(Resource):
    parser = RequestParsers.user_parser()

    def get(self):
        return ms.all_users().count()

    @api.doc(parser=parser)
    def post(self):
        args = self.parser.parse_args()
        username = args['username']
        password = args['password']
        ms.add_user(username, password)


@user_namespace.route("/<int:user_id>")
class OneUserController(Resource):
    parser = RequestParsers.user_parser()

    def get(self, user_id):
        user = ms.get_user(user_id)
        if user is None:
            return {}, 404
        return {"id": user.id,
                "username": user.username,
                "password": user.password}

    @api.doc(parser=parser)
    def put(self, user_id):
        args = self.parser.parse_args()
        username = args['username']
        password = args['password']
        ms.edit_user(user_id, username, password)


if __name__ == '__main__':
    app.run("0.0.0.0")
