/* eslint-disable @next/next/no-img-element */
import { CartContext } from '@/context/CartContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import toast from 'react-hot-toast';

const Hero = ({ product }) => {

    const { addProduct } = useContext(CartContext);
    function addItemToCart() {
        addProduct(product._id);
        toast.success("Item Added Successfully")
    }

    return (
        <>
            <section className='flex items-center justify-center'>
                <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto max-w-screen-2xl">
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                        <div className="mx-auto max-w-2xl text-left lg:mx-0 ">
                            <h2 className="text-3xl font-bold sm:text-5xl">
                                <span className='text-red-600 animate-pulse'> SALE ! 50% OFF</span>&nbsp;
                                <br />
                                <span>{product.title}</span></h2>

                            <p className="mt-4 text-gray-600 text-lg line-clamp-5">
                                {product.description}
                            </p>

                            <Link onClick={addItemToCart} href="/" className="mt-8 inline-block rounded bg-red-500 px-12 py-3 text-lg font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring focus:ring-yellow-400">
                                Add To Cart
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring h-auto w-auto" href="/accountant">
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <img className="h-full w-full rounded-md object-cover object-center" src={product.images[0]} alt="" />
                                </span>
                            </a>

                            <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/accountant">
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <img className="h-full w-full rounded-md object-cover object-center" src={product.images[1]} alt="" />
                                </span>
                            </a>

                            <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/accountant">
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <img className="h-full w-full rounded-md object-cover object-center" src={product.images[2]} alt="" />
                                </span>
                            </a>

                            <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring" href="/accountant">
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <img className="h-full w-full rounded-md object-cover object-center" src={product.images[3]} alt="" />
                                </span>
                            </a>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero