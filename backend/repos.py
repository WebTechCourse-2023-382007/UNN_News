from abc import ABC, abstractmethod
from typing import Union
import flask_sqlalchemy.query
from models import Article, Category, User, db

session = db.session


def save_session():
    session.commit()


class BaseRepo(ABC):
    @staticmethod
    @abstractmethod
    def all() -> flask_sqlalchemy.query.Query:
        pass

    @staticmethod
    @abstractmethod
    def get_by_id(obj_id: int) -> db.Model:
        pass

    @staticmethod
    def add(new_obj: db.Model) -> db.Model:
        session.add(new_obj)
        save_session()
        return new_obj

    @staticmethod
    def delete(obj: db.Model) -> int:
        temp_id = obj.id
        session.delete(obj)
        save_session()
        return temp_id


class ArticleRepo(BaseRepo):
    @staticmethod
    def all():
        return Article.query.order_by(Article.created_at)

    @staticmethod
    def get_by_id(article_id: int) -> Union[None, Article]:
        return Article.query.filter(Article.id == article_id).one_or_none()

    @staticmethod
    def all_by_category(category: str) -> flask_sqlalchemy.query.Query:
        return Article.query.filter(Article.categories.any(Category.name == category))


class CategoryRepo(BaseRepo):
    @staticmethod
    def all():
        return Category.query.order_by(Category.name)

    @staticmethod
    def get_by_id(category_id: int):
        return Category.query.filter(Category.id == category_id).one_or_none()

    @staticmethod
    def get_by_name(category_name: str):
        return Category.query.filter(Category.name == category_name).one_or_none()


class UserRepo(BaseRepo):
    @staticmethod
    def all():
        return User.query.order_by(User.username)

    @staticmethod
    def get_by_id(user_id: int):
        return User.query.filter(User.id == user_id).one_or_none()

    @staticmethod
    def get_by_username(username: str):
        return User.query.filter(User.username == username).one_or_none()





