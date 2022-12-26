import NewSection1 from "../Components/HomeComponents/NewSection1.js";
import NewSection2 from "../Components/HomeComponents/NewSection2.js";
import Section1 from "../Components/HomeComponents/Section1.js";
import Section2 from "../Components/HomeComponents/Section2.js";
import Section3 from "../Components/HomeComponents/Section3.js";
import Section4 from "../Components/HomeComponents/Section4.js";
import { client } from "../lib/client";

export default function Home({products}) {
  return (
    <>
      
      <Section1 />
      <Section2 />
      <NewSection1 />
      <NewSection2 products = {products}/>
      <Section3 />
      <Section4 />

    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "bestSellersProduct"]';
  const products = await client.fetch(query);
  return {
    props: { products }
  }
}