import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useEffect } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  // const {currency} = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLER"} />
        {/* <p className="w-3/4 m-auo text-center text-xs sm:text-sm md:text-base text-gray-600">
                   Discover our Best Seller Collection, featuring customer favorites known for their style and quality. Shop the most popular pieces 
                   </p> */}
        <p className="w-3/4 mx-auto text-center text-xs sm:text-sm md:text-base text-gray-600">
          Discover our Best Seller Collection, featuring customer favorites
          known for their style and quality. Shop the most popular pieces.
        </p>
      </div>
      <div  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
            bestSeller.map((item,index) => (
                <ProductItem key={index}
                id={item._id}   
                image={item.image}
                name={item.name}
                price= {item.price} 
                
                ></ProductItem>
            ))
        }

      </div>
    </div>
  );
};

export default BestSeller;
