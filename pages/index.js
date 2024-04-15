import Hero from "@/components/Hero";
import Heading from "@/components/Heading";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";
import SwiperCarousel from "@/components/SwiperCarousel";
import NewCollections from "@/components/NewCollections";


export default function Home({ featuredProduct, newProducts, newCollectionProduct }) {
  return (
    <>
      <Hero product={featuredProduct} />
      <Heading headingName={'Latest Occurences'} />
      <SwiperCarousel products={newProducts} />
      <Heading headingName={'New Collections'} />
      <NewCollections newCollectionProduct={newCollectionProduct} />
    </ >
  );
}


export async function getServerSideProps() {
  await mongooseConnect();

  const featuredId = "65b7b35d2bc959dabee10839"
  const newCollectionId = "65baa691c594df2646cd02a0"

  const featuredProduct = await Product.findById(featuredId);
  const newCollectionProduct = await Product.findById(newCollectionId);
  const newProducts = await Product.find({}, null, { sort: { '_id': 1 }, limit: 10 });

  return {
    props: {
      newCollectionProduct: JSON.parse(JSON.stringify(newCollectionProduct)),
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    }
  }
}
