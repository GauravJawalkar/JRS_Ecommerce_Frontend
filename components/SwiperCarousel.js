/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { CiShoppingBasket } from "react-icons/ci";



import { FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { CartContext } from '@/context/CartContext';
import { useContext } from 'react';
import toast from 'react-hot-toast';

const SwiperCarousel = ({ products }) => {

    const { addProduct } = useContext(CartContext);
    return (
        <div className='px-6 my-20 mx-auto max-w-screen-2xl py-8'>
            <Swiper slidesPerView={4} spaceBetween={20} freeMode={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }} modules={[FreeMode, Pagination]} className="mySwiper">
                {products?.length > 0 && products.map((product) => (
                    <SwiperSlide key={Math.random(Math.floor())} className='max-w-2xl'>
                        <div className="group block overflow-hidden my-6 border-red-100 border-4 rounded-md">
                            <div className="relative h-[350px] sm:h-[450px]" >
                                <Link href={"/products/" + product._id}>

                                    <img
                                        src={product.images[0]}
                                        alt=""
                                        className="absolute inset-0 h-full w-full object-center object-fill opacity-100 group-hover:opacity-0"
                                    />

                                    <img
                                        src={product.images[1]}
                                        alt=""
                                        className="absolute inset-0 h-full w-full object-center object-fill opacity-0 group-hover:opacity-100"
                                    />
                                </Link>
                            </div>

                            <div className="relative bg-red-50 px-3 py-5">
                                <Link href={"/products/" + product._id} className="text-md line-clamp-1 text-black  decoration-red-400 ">
                                    <span className='text-2xl'>{product.title}</span>
                                </Link>

                                <div className="mt-1.5 flex items-center justify-between text-black">
                                    <p className="tracking-wide text-xl font-normal">₹ {product.price}</p>

                                    <button onClick={() => {
                                        addProduct(product._id);
                                        toast.success('Item added to cart!!')
                                    }} type="button" className="flex items-center justify-center gap-2 text-lg uppercase bg-red-50 hover:bg-red-100 hover:text-black px-4 py-2 rounded-md line-clamp-1 border-2 border-red-200 hover:border-red-300">
                                        <CiShoppingBasket className='w-6 h-6 ' /> shop</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>))}
            </Swiper>
        </div>
    )
}

export default SwiperCarousel