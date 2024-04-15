/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

const NewPlants = ({ products }) => {
    return (
        <>
            <div className="flex items-center justify-center py-14">
                <div className=" grid grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2 gap-y-8">
                    {products?.length > 0 && products.map((product) => (
                        <div key={Math.random(Math.floor())} className="group relative mx-6">
                            <div className="group block overflow-hidden border-4 border-red-500 rounded-xl border-opacity-10">
                                <div className="p-1">
                                    <div className="relative h-[300px] w-[250px] sm:h-[300px]">
                                        <img src={product.images[0]} alt="" className="absolute inset-0 h-full w-full object-fill opacity-100 group-hover:opacity-0 rounded-lg" />
                                        <img src={product.images[1]} alt="" className="absolute inset-0 h-full w-full object-fill opacity-0 group-hover:opacity-100 rounded-lg" />
                                    </div>
                                </div>
                                <div className="relative pt-1 border bg-red-50 rounded-md mt-2">
                                    <p className="py- line-clamp-1 text-center text-lg text-red-400">{product.title}</p>
                                    <div className="flex items-center justify-between px-4 my-2">
                                        <p className="text-xl">₹ {product.price}</p>
                                        <button role="button" className=" px-3 py-2 border border-red-400 bg-red-200 rounded-md my-2 hover:bg-red-300">Add Cart</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div >
            <div className="flex items-center justify-center py-4">
                <Link href={'/'} className=" inline-block rounded bg-gradient-to-tl from-red-600 via-red-500 to-red-300 p-[2px] text-white focus:outline-none focus:ring active:text-opacity-75 hover:bg-gradient-to-r px-12 py-3 text-lg" role="button">
                    More Plants
                </Link>
            </div>
        </>
    )
}

export default NewPlants