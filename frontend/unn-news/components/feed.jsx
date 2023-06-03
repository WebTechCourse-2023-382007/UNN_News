import Link from 'next/link';
import PostPreview from './post-preview';

export default function Feed({ category, postsData }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{category.title}</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">{category.description}</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {postsData.length !== 0 ?
          postsData?.map((post) => PostPreview({ post })) :
          <h1 className='mt-2 text-lg grow inline-flex justify-center items-center'>В этой рубрике пока нет постов!</h1>}
      </div>
    </div>
  )
}
