import Link from 'next/link';
import { CategoriesCommand } from '../app/categories';

export default function PostPreview({ post }) {
    return (
        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
            <img className="h-full w-full object-cover object-center lg:h-full lg:w-full" src={post.imgSrc}></img>

            <div className="grow flex-wrap flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                </time>
                {post.categoriesId?.map((categoryId) => <Link key={categoryId} href={'/category/' + CategoriesCommand.getCategoryFromId(categoryId).path} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 hover:font-medium text-gray-600 bg-gray-100">{CategoriesCommand.getCategoryFromId(categoryId).title}</Link>)}
            </div>

            <div className="group relative">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-400">
                    <Link href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                    </Link>
                </h3>

                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
            </div>

            <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                        </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                </div>
            </div>
        </article>
    )
}