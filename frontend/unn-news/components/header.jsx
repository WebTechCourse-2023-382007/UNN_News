import Link from 'next/link';
import { Popover } from '@headlessui/react';
// import {Bars3Icon} from '@heroicons/react/24/solid'; // иконка navBar
import { CategoriesCommand } from '../app/categories';


export default function Header() {
    const categories = CategoriesCommand.getCategories();

    return (
        <Popover>
            <header className={"container mx-auto flex items-center border-b-2 px-6 py-2 h-20"}>
                <Link href="/" className="font-bold">UNN News</Link>

                <div className='grow inline-flex flex-wrap justify-center items-center'>
                    {categories?.map((category) => <Link key={category.id} href={"/category/" + category.path} className='px-4 hover:px-6'>{category.title}</Link>)}
                </div>

                {/*Отображает navBar при маленьком размере экрана
             <div className="flex grow items-center justify-end sm:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
              hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
              </Popover.Button>
            </div> */}

                <div className="hidden sm:block">
                    <Link href="/login" className="mr-2 font-bold">
                        Sing in
                    </Link>
                </div>
            </header>
        </Popover>
    );
}
