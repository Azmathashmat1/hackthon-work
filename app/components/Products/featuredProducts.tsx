import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";


const FeaturedProducts: React.FC = () => {
  return (
    <section className="p-8 mb-8 pb-16 rounded-xl md:[45%]">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-4 gap-4 h-[300px]">
          <div className="p-4">
            <Image src="/hackaton-images/chair-white.png" alt="Chair-white" className="w-full h-50 mb-2 rounded-xl  transition-transform duration-300 ease-in-out hover:scale-110" />
            <h3 className="text-teal-600">Library Stool Chair</h3>
            <p>$20</p>
            <button className=" bg-teal-600 border text-white rounded-xl p-2 flex hover:rounded-none hover:duration-200 ml-auto mb-10 -mt-10 hover:bg-white hover:text-teal-600">
             <ShoppingCart />
             </button>
          </div>

          <div className="p-4">
            <Image src="/hackaton-images/chair-pink.png" alt="Chair-white" className="w-full h-50 mb-2 rounded-xl  transition-transform duration-300 ease-in-out hover:scale-110" />
            <h3>Library Stool Chair</h3>
            <p>$20</p>
            <button className=" bg-white border rounded-xl p-2 flex hover:rounded-none hover:duration-200 ml-auto mb-10 -mt-10 hover:bg-black hover:text-white">
             <ShoppingCart />
             </button>
          </div>

          <div className="p-4">
            <Image src="/hackaton-images/chair-orange.png" alt="Chair-white" className="w-full h-50 mb-2 rounded-xl  transition-transform duration-300 ease-in-out hover:scale-110" />
            <h3>Library Stool Chair</h3>
            <p>$20</p>
            <button className=" bg-white border rounded-xl p-2 flex hover:rounded-none hover:duration-200 ml-auto mb-10 -mt-10 hover:bg-black hover:text-white">
             <ShoppingCart />
             </button>
          </div>

           <div className="p-4">
            <Image src="/hackaton-images/chair-white2.png" alt="Chair-white" className="w-full h-50 mb-2 rounded-xl  transition-transform duration-300 ease-in-out hover:scale-110" />
            <h3>Library Stool Chair</h3>
            <p>$20</p>
            <button className=" bg-white border rounded-xl p-2 flex hover:rounded-none hover:duration-200 ml-auto mb-10 -mt-10 hover:bg-black hover:text-white ">
             <ShoppingCart />
             </button>
          </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
