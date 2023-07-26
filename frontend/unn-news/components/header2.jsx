import Link from 'next/link';
import { Popover } from '@headlessui/react';
import { CategoriesCommand } from '../app/categories';
import Logo from './logo';

export default function Header2({ commandClick }) {
    const categories = CategoriesCommand.getCategories();

    return (
        <Popover>
            <header className={"container mx-auto flex items-center border-b-2 px-6 py-2 h-20"}>
                <Logo></Logo>

                <div className='grow inline-flex flex-wrap justify-center items-center'>
                    {categories?.map((category) => <button id={category.id} key={category.id} onClick={commandClick} className='px-4 hover:px-6'>{category.title}</button>)}
                </div>

                <div className="hidden sm:block">
                    <Link href="/login" className="mr-2 font-bold">
                        Sing in
                    </Link>
                </div>
            </header>
        </Popover>
    );
}
