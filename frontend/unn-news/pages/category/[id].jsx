import '../../styles/globals.css';
import Feed from '../../components/feed.jsx';
import Header from '../../components/header.jsx';
import Footer from '../../components/footer.jsx';
import { CategoriesCommand } from '../../app/categories.js'

export const getStaticPaths = async () => {

    const categoriesPaths = CategoriesCommand.getCategoriesPaths();
    const paths = categoriesPaths.map(path => ({
        params: { id: path },
    }));

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {

    const path = context.params.id;
    const category = CategoriesCommand.getCategoryFromPath(path);
    const posts = CategoriesCommand.getPostsFromCategory(category);

    return {
        props: {
            category,
            posts,
        }
    }
}

export default function Category(props) {

    return (
        <div>
            <Header></Header>
            <main className='mx-auto max-w-7xl px-6 lg:px-8'>
                <Feed category={props.category} postsData={props.posts} ></Feed>
            </main>
            <Footer></Footer>
        </div>
    )
}