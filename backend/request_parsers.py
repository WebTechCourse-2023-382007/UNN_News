from flask_restx import reqparse, inputs

user_parser = reqparse.RequestParser()
user_parser.add_argument('username', type=str, help="user's username",
                         required=True, location='json')
user_parser.add_argument('password', type=str, help="user's password",
                         required=True, location='json')

json_article_parser = reqparse.RequestParser()
json_article_parser.add_argument('title', type=str, help="article's title",
                                 required=True, location='json')
json_article_parser.add_argument('description', type=str, help="article's short description",
                                 required=True, location='json')
json_article_parser.add_argument('content', type=str, help="article's text content",
                                 required=True, location='json')
json_article_parser.add_argument('thumbnail', type=str, help="path to image file",
                                 required=True, location='json')
json_article_parser.add_argument('created_at', type=inputs.datetime_from_iso8601,
                                 help="date and time of creation", required=True, location='json')
json_article_parser.add_argument('updated_at', type=inputs.datetime_from_iso8601,
                                 help="date and time of last update", required=True, location='json')
json_article_parser.add_argument('categories', type=int, help="list of article's categories",
                                 required=True, action='append', location="json")

articles_parser = reqparse.RequestParser()
articles_parser.add_argument('category', type=str, help="category to order by",
                             location="args")

category_parser = reqparse.RequestParser()
category_parser.add_argument('name', type=str, help='category name',
                             required=True, location='json')
