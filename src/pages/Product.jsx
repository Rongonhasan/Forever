import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  // const {productId} = useParams()
  // const {products} = useContext(ShopContext)
  // const [productData, setProductData] =useState(false)

  // const fetchProductData = async () => {
  //     products.map((item) => {
  //         if(item._id === productId) {
  //             setProductData(item)
  //             console.log(item);
  //             return null;
  //         }
  //     })
  // }

  // useEffect(() => {
  //     fetchProductData();
  // },)[productId,products]
  const { productId } = useParams();
  const { products, currency,  cartItems,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    const item = products.find((item) => item._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
      console.log(item);
    } else {
      console.log("Product not found");
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]); // Dependency array should include productId and products

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* p data  */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* p image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* p dec */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2"> {productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-3 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash On Delivery Is Available on This Product.</p>
            <p>Easy return and Exchange Policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* dec & view */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm"> Review (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that enables businesses
            to sell products or services directly to customers over the
            internet. It allows users to browse through various items, add them
            to a shopping cart, and complete purchases securely. These websites
            often include features like product reviews, payment gateways, and
            customer accounts to enhance the shopping experience
          </p>
          <p>
            With a global reach, e-commerce platforms make it easier for
            businesses to connect with customers worldwide. They are essential
            for modern retail, offering convenience and accessibility to both
            buyers and sellers.{" "}
          </p>
        </div>
      </div>
      {/* display r - p */}
     
     <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
