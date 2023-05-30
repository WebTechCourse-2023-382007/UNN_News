import Layout from '../../app/layout.jsx';
import Link from 'next/link'
import Head from 'next/head';

export default function Post({ body }, { title }) {
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                {body}
                <Link href="/">← Back to home</Link>
            </main>
        </Layout>
    )
}