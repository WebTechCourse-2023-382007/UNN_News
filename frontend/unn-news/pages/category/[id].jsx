import '../../styles/globals.css';
import Feed from '../../components/feed.jsx';
import Header from '../../components/header.jsx';
import Footer from '../../components/footer.jsx';

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
        section: { title: 'Игры', id: 1, href: 'game' },
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
        section: { title: 'Игры', id: 1, href: 'game' },
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
        title: 'Boost your conversion rate',
        imgSrc: '../../DeathStranding.jpg',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        section: { title: 'Алгебра', id: 6, href: 'game' },

        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        id: 4,
        title: 'Студент переиграл в видео игры и не сдал сессию',
        imgSrc: '../images/DeathStranding.jpg',
        href: '#',
        description:
            'Студент третьего курса играл в Death Stranding и не стал готовиться к экзаменам. Теперь его ждет отчисление.',
        date: 'Май 29, 2023',
        datetime: '2020-03-16',
        section: { title: 'Алгебра', id: 6, href: 'game' },

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
        section: { title: 'Алгебра', id: 6, href: 'game' },

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
        section: { title: 'Алгебра', id: 6, href: 'algebra' },

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

const sections = [
    {
        id: 1,
        title: "Игры",
        description: "Будь в курсе киберспорта",
        name: "game",
    },
    {
        id: 2,
        title: "Сессия Депрессия",
        description: "Будь в курсе киберспорта",
        name: "session",
    },
    {
        id: 3,
        title: "Андрей Лох",
        description: "Будь в курсе киберспорта",
        name: "andreyLox",
    },
    {
        id: 4,
        title: "Саша крутой",
        description: "Будь в курсе киберспорта",
        name: "sashaCool",
    },
    {
        id: 5,
        title: "Живая лента",
        description: "Узнай главные новости университета",
        name: "main",
    },
    {
        id: 6,
        title: "Алгебра",
        description: "Все о математике и геометрии. А так же немного запретного...",
        name: "algebra",
    },

];

function getSectionFromRef(name) {
    return sections.find((section) => {
        return section.name === name;
    })
}

export const getStaticPaths = async () => {

    const paths = sections.map(section => ({
        params: { id: section.name },
    }));

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const section = getSectionFromRef(id);
    return {
        props: {
            id,
            section,
        }
    }
}

export default function Category(props) {

    function GetPosts(section) {
        const postList = [];

        if (section.id === 5)
            return posts;

        posts.forEach((post) => {
            if (post.section.id === section.id) postList.push(post);
        });

        return postList;
    }

    return (
        <div>
            <Header sections={sections} ></Header>
            <main className='mx-auto max-w-7xl px-6 lg:px-8'>
                <Feed section={props.section} postsData={GetPosts(props.section)} ></Feed>
            </main>
            <Footer></Footer>
        </div>
    )
}