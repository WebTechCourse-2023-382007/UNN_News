const posts = [
    {
        id: 1,
        title: 'Студент переиграл в видео игры и не сдал сессию',
        imgSrc: '../images/DeathStranding.jpg',
        href: `/posts/DeathStranding`,
        description:
            'Студент третьего курса играл в Death Stranding и не стал готовиться к экзаменам. Теперь его ждет отчисление.',
        date: 'Май 29, 2023',
        datetime: '2020-03-16',
        categoriesId: [1, 2, 3, 4, 5],
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        imgSrc:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        categoriesId: [1],
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Все категории в одном',
        imgSrc: '../images/DeathStranding.jpg',
        href: '#',
        description:
            'Тестовый пост, содержащий в себе все категории. Это позволяет проверить поведение текста при переполнении контейнера',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        categoriesId: [1, 2, 3, 4, 5],

        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }
    },
    {
        id: 4,
        title: 'Студент переиграл в видео игры и не сдал сессию',
        imgSrc: '../images/DeathStranding.jpg',
        href: '#',
        description:
            'Студент третьего курса играл в Death Stranding и не стал готовиться к экзаменам. Теперь его ждет отчисление.',
        date: 'Май 29, 2023',
        datetime: '2020-03-16',
        categoriesId: [1, 2, 3],

        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 5,
        title: 'Boost your conversion rate',
        imgSrc: '../images/DeathStranding.jpg',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        categoriesId: [1, 2],

        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 6,
        title: 'Boost your conversion rate',
        imgSrc: '../images/DeathStranding.jpg',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        categoriesId: [2],

        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
];

const categories = [
    {
        id: 0,
        title: "Живая лента",
        path: "Feed",
        description: "Узнай главные новости университета",
    },
    {
        id: 1,
        title: "Игры",
        path: "Game",
        description: "Будь в курсе киберспорта",
    },
    {
        id: 2,
        title: "Сессия",
        path: "Session",
        description: "Будь в курсе киберспорта",
    },
    {
        id: 3,
        title: "Алгебра",
        path: "Algebra",
        description: "Все о математике и геометрии. А так же немного запретного...",
    },
    {
        id: 4,
        title: "Российские студенческие отряды",
        path: "RST",
        description: "Будь в курсе киберспорта",
    },
    {
        id: 5,
        title: "Столовая ННГУ",
        path: "Kithen UNN",
        description: "Все о математике и геометрии. А так же немного запретного...",
    },
];
export class PostsCommand {
    static getPostFromId(id) {
        return posts.find((post) => {
            return post.id == id;
        })
    }

    static getPosts() {
        return posts;
    }
}

export class CategoriesCommand {

    static getCategoryFromPath(path) {
        return categories.find((category) => {
            return category.path == path;
        })
    }

    static getCategoryFromId(id) {
        return categories.find((category) => {
            return category.id == id;
        })
    }

    static getCategories() {
        return categories;
    }

    static getCategoriesPaths() {
        return categories.map(category => category.path);
    }

    static getPostsFromCategory(category) {
        const postList = [];

        if (category.id == 0)
            return posts;

        posts.forEach((post) => {
            if (post.categoriesId.indexOf(category.id) != -1) postList.push(post);
        });

        return postList;
    }
}