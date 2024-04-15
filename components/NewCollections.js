/* eslint-disable @next/next/no-img-element */

import Link from "next/link"


const NewCollections = ({ newCollectionProduct }) => {
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                        <div className="grid place-content-center rounded bg-red-50 p-6 sm:p-8 border-red-200 border-2">
                            <div className="mx-auto max-w-md text-center lg:text-left">
                                <header>
                                    <h2 className="text-xl font-bold text-black sm:text-4xl">{newCollectionProduct.title}</h2>

                                    <p className="mt-4 text-gray-700 line-clamp-5">
                                        {newCollectionProduct.description}
                                    </p>
                                </header>
                                <div className="mt-4">
                                    <h1 className="text-4xl font-bold">₹ {newCollectionProduct.price}</h1>
                                </div>

                                <Link href="/products" className="mt-8 inline-block rounded border border-red-600 hover:bg-transparent px-12 py-3 text-md font-medium  transition hover:shadow focus:outline-none focus:ring hover:text-red-600 bg-red-500 text-white" >
                                    Shop All
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-2 lg:py-8">
                            <ul className="grid grid-cols-2 gap-4">
                                <li>
                                    <div className="group block border-red-100 border-4">
                                        <img
                                            src={newCollectionProduct.images[0]}
                                            alt=""
                                            className="aspect-square w-full rounded object-contain "
                                        />
                                    </div>
                                </li>

                                <li>
                                    <div className="group block border-red-100 border-4">
                                        <img src={newCollectionProduct.images[1]}
                                            alt="" className="aspect-square w-full rounded object-contain " />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default NewCollections