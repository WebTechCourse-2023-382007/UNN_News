import '../styles/globals.css';
import Feed from '../components/feed.jsx';
import Header from '../components/header.jsx';
import Header2 from '../components/header2.jsx';
import Footer from '../components/footer.jsx';
import { useState } from 'react';
import { CategoriesCommand, PostsCommand } from '../app/categories.js'

export default function Home() {

    const [category, setСategory] = useState(CategoriesCommand.getCategoryFromId(0));
    const [postList, setPosts] = useState(PostsCommand.getPosts());

    function chancheСategory(e) {
        const newCategory = CategoriesCommand.getCategoryFromId(e.target.id);
        const newPosts = CategoriesCommand.getPostsFromCategory(newCategory);

        setСategory(newCategory);
        setPosts(newPosts);
    }

    const categories = CategoriesCommand.getCategories();
    return (
        <div>
            <Header2 commandClick={chancheСategory}></Header2>
            <main className='mx-auto max-w-7xl px-6 lg:px-8'>
                <Feed category={category} postsData={postList}></Feed>
            </main>
            <Footer></Footer>
        </div>
    )
}

