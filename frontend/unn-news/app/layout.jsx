import './globals.css'
import Head from 'next/head';
import Link from 'next/link';
import { Popover } from '@headlessui/react';
import Footer from "./footer.jsx";
// import {Bars3Icon} from '@heroicons/react/24/solid'; // иконка navBar

function Sect() {
  const allPostsData = [
    {
      nameSection: "Игры",
      refSection: "/refff",
    },
    {
      nameSection: "Сессия Депрессия",
      refSection: "/refff",
    },
    {
      nameSection: "Андрей Лох",
      refSection: "/refff",
    },
    {
      nameSection: "Саша крутой",
      refSection: "/refff",
    },
    {
      nameSection: "Алгебра",
      refSection: "/refff",
    },

  ];
  allPostsData
  return allPostsData;
}

export default function Layout({ children }) {
  const sections = Sect();
  return (
    <Popover>
      <header className={"container mx-auto flex items-center border-b-2 px-6 py-2 h-20"}>
        <h1 className="font-bold">UNN News</h1>

        <div className='grow inline-flex flex-wrap justify-center items-center'>
          {sections?.map(({ refSection, nameSection }) => {
            return <Link href={refSection} className="px-4">{nameSection}</Link>
          })}
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
          <Link href="register" className="mr-2 font-bold">
            Sing in
          </Link>
        </div>
      </header>

      <main className='mx-auto max-w-7xl px-6 lg:px-8'>
        {children}
      </main>

      <Footer></Footer>
    </Popover>
  );
}
