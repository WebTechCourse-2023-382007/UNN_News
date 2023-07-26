import Header from '../../components/header.jsx';
import Footer from '../../components/footer.jsx';
import '../../styles/globals.css';
import { useState } from 'react';


export default function Post() {

    return (
        <div>
            <Header></Header>
            <main className='mx-auto max-w-7xl px-6 lg:px-8'>
                <h1>First Post title!</h1>
            </main>
            <Footer></Footer>
        </div>
    )
}