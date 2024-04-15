/* eslint-disable @next/next/no-img-element */
import { CartContext } from '@/context/CartContext';
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { FaShoppingBag } from "react-icons/fa";



const Header = () => {
    const router = useRouter();
    const { pathname } = router;

    const { cartProducts } = useContext(CartContext);

    const active = 'text-red-600 transition border border-red-300  rounded-md hover:text-red-500/75 p-2';
    const inactive = 'text-red-500 transition hover:text-red-500/75';

    const { data: session } = useSession()
    return (
        <>
            <header className="bg-red-50 py-1 sticky top-0 border border-b-red-100 backdrop-filter backdrop-blur-sm bg-opacity-50 z-10">
                <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 md:flex md:items-center md:gap-12">
                            <Link className="block text-red-600 text-2xl line-clamp-1" href="/">
                                <span className="sr-only">Home</span>
                                Jay Rose Nursery
                            </Link>
                        </div>

                        <div className="md:flex md:items-center md:gap-[1rem]">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center gap-6 text-lg">
                                    <li>
                                        <Link className={pathname === '/' ? active : inactive} href="/"> Home </Link>
                                    </li>
                                    {/*
                                    <li>
                                        <Link className={pathname === '/categories' ? active : inactive} href="/categories"> Categories </Link>
                                    </li> */}

                                    <li>
                                        <Link className={pathname === '/products' ? active : inactive} href="/products"> All Products </Link>
                                    </li>
                                    {/* 
                                    <li>
                                        <Link className={pathname === '/services' ? active : inactive} href="/services"> Services </Link>
                                    </li> */}
                                </ul>
                            </nav>

                            <div className="flex items-center justify-center gap-4">
                                <div className="flex gap-4 items-center justify-center">

                                    <div>
                                        {session ? (
                                            <div className="sm:flex sm:gap-2 border-r border-primary pr-4">
                                                <div className="h-9 w-9">
                                                    <img className="h-full w-full rounded-full object-cover object-center" src={session.user.image} alt={session.user.email} />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="sm:flex sm:gap-2 border-r border-red-400 pr-4">
                                                <Link
                                                    className=" text-md font-medium text-red-600 hidden md:flex"
                                                    href="/"
                                                >
                                                    Account
                                                </Link>
                                                <Link
                                                    className=" text-md font-medium text-text hidden max-md:flex md:hidden"
                                                    href="/"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>

                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    <div >
                                        <Link href={"/cart"} className='flex items-center justify-center gap-2 bg-red-100 hover:bg-red-200 border border-red-500 p-2 rounded-md transition-all ease-in-out duration-500' >
                                            <FaShoppingBag className='text-2xl text-red-500' />
                                            <span className='text-black font-bold group-hover:text-text'>
                                                {cartProducts.length}
                                            </span>
                                        </Link>
                                    </div>

                                </div>

                                <div className="block md:hidden">
                                    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header