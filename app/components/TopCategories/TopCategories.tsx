import React from "react";
import Image from "next/image";

const TopCategories = () => {
  return (
    <section className="p-8 mb-8 pb-16 rounded-xl md:[45%]">
    <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
    <div className="grid grid-cols-3 gap-3 ml-10 h-[300px]">
        <div className="p-4">
          <Image src="/hackaton-images/wing-chair.png" alt="Chair-white" className="w-full h-full mb-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-110" />
        </div>

        <div className="p-4">
          <Image src="/hackaton-images/wooden-chair.png" alt="Chair-white" className="w-full h-full mb-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-110" />
        </div>

        <div className="p-4">
          <Image src="/hackaton-images/desk-chair.png" alt="Chair-white" className="w-full h-full mb-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-110" />
        </div>
    </div>
  </section>
  );
};

export default TopCategories;
