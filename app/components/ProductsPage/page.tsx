import Image from "next/image";
import Footer from "../Footer/Footer";
import { ShoppingCart } from "lucide-react";

export default function Product() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-auto mx-auto flex flex-col items-start justify-center w-[90vw] md:mx-auto md:flex md:justify-center">
  <div className="text-start">
    <h1 className="text-2xl sm:text-3xl sm:mx-10 font-semibold">All Products</h1>
  </div>
  <div>
    <div className="flex flex-wrap justify-center gap-10 mx-auto my-5">
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
    </div>
  </div>
</div>

      
      <div className="flex flex-col sm:flex-col gap-10 mx-10 justify-center items-center my-2 mt-10" >
        <div >
     <div className="my-2 text-center font-bold">
       <p className="text-3xl">Or Subsribe To The Newsletter</p>
     </div>
     <div>
  <form action="" className="flex justify-center gap-4">
    <input
      type="email"
      placeholder="Email Address"
      className="w-[70vw] sm:w-[50vw] border-b-2 border-black focus:outline-none focus:ring-0"
    />
    <button
      type="submit"
      className="w-[30vw] sm:w-[7vw] border-b-2 border-black focus:outline-none focus:ring-0 text-black"
    >
      Submit
    </button>
  </form>
</div>


        </div>
        <div className="my-2 font-bold">
       <p className="text-3xl">Follow products and discounts on Instagram</p>
     </div>
        <div>

        <div className="flex flex-col sm:flex-nowrap sm:flex-row justify-center gap-12 mx-auto my-5 overflow-x-auto -mb-96">
  <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
    <Image
      src="/hackaton-images/wooden-chair.png"
      alt="Logo"
      width={300}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
    <Image
      src="/hackaton-images/chair-beige.png"
      alt="Logo"
      width={300}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
    <Image
      src="/hackaton-images/chair-pink.png"
      alt="Logo"
      width={300}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
    <Image
      src="/hackaton-images/chair-white.png"
      alt="Logo"
      width={300}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
    <Image
      src="/hackaton-images/chair-orange.png"
      alt="Logo"
      width={300}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
    <Image
      src="/hackaton-images/desk-chair.png"
      alt="Logo"
      width={300}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>
</div>


        </div>

      </div>
    <Footer />
    </div>
  );
}