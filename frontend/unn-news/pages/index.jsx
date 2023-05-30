import Head from 'next/head';
import Layout from '../app/layout.jsx';
import Link from 'next/link';
import '../app/globals.css'
import Feed from './posts/feed-posts.jsx'

export default function Home() {

    return (
        <Layout>
            <Feed></Feed>
        </Layout>
    )
}