drop table if exists articles_categories;
drop table if exists categories;
drop table if exists articles;
drop table if exists users;

create table if not exists users
(
    id       bigserial primary key,
    username varchar(255) unique not null,
    password varchar(255)        not null
);

comment on table users is 'Таблица с данными пользователя. Будем использовать для регистрации и аутентификации пользователя';
comment on column users.username is 'Уникальный псевдоним пользователя';
comment on column users.password is 'Пароль пользователя. Храним в зашифрованном виде';

create table if not exists articles
(
    id          bigserial primary key,
    title       varchar(255) not null,
    description text,
    content     text,
    thumbnail   varchar(255),
    created_at  timestamp,
    updated_at  timestamp
);

comment on table articles is 'Таблица статей';
comment on column articles.title is 'Название статьи';
comment on column articles.description is 'Описание статьи';
comment on column articles.content is 'Содержимое статьи в текстовом формате. Будет полезно для поиска по ключевым словам';
comment on column articles.thumbnail is 'Имя файла изображения, используемого как превью для статьи';

create table if not exists categories
(
    id   bigserial primary key,
    name varchar(128) unique not null
);

comment on table categories is 'Таблица категорий';
comment on column categories.name is 'Название категории';

create table if not exists articles_categories
(
    id          bigserial primary key,
    article_id  bigint references articles (id) on delete cascade,
    category_id bigint references categories (id) on delete cascade
);