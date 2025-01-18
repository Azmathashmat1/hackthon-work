import Image from "next/image";
import { Heart, Trash2 } from "lucide-react";


export default function Cart() {
return(
<div className="flex flex-col md:flex-row gap-10 mx-10 items-center justify-center my-20">
  <div className="w-[80vw] h-auto mx-auto">
    <div>
      <p className="font-bold text-xl mb-5">Bag</p>
    </div>
    <div className="flex justify-between border-b ">
      <div className="flex mt-5 mb-5">
        <div className="mr-10">
          <Image src="/hackaton-images/chair-orange.png" alt="" width={130} height={130} />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <p>Library Stool Chair</p>
          </div>
          <div className="font-thin">
            <p>Ashen Slate/Cobalt Bliss</p>
            <div className="flex justify-between">
              <p>Size L</p>
              <span>Quantity</span>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="hover:bg-gray-200 rounded-full p-2">
             <Heart />
            </div>
            <div className="hover:bg-gray-200 rounded-full p-2">
             <Trash2 />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>MPR: $99</p>
      </div>
    </div>

    <div className="flex justify-between mt-5 border-t border-b">
      <div className="flex mt-5 mb-5">
        <div className="mr-10">
          <Image
            src="/hackaton-images/chair-beige.png"
            alt=""
            width={130}
            height={130}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <p>Library Stool Chair</p>
          </div>
          <div className="font-thin">
            <p>Ashen Slate/Cobalt Bliss</p>
            <div className="flex justify-between">
              <p>Size L</p>
              <span>Quantity</span>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="hover:bg-gray-200 rounded-full p-2">
              <Heart />
            </div>
            <div className="hover:bg-gray-200 rounded-full p-2">
              <Trash2 />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>MPR: $99</p>
      </div>
    </div>
  </div>

  <div className="w-full min-h-auto md:w-1/3  mx-auto my-auto gap-10 flex flex-col">
    <div className="gap-10 flex flex-col">
      <div className="text-3xl">
        Summary
      </div>
      <div>
        <div className="flex justify-between">
          <p>Sub Total</p>
          <p>$198.00</p>
        </div>
        <div className="flex justify-between">
          <p>Estimated Delivery And Handling</p>
          <p>Free</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p>Total</p>
        <p>$198.00</p>
      </div>
    </div>
    <div className="mt-5">
     <button className="bg-teal-600 text-white rounded-full p-2 hover:bg-teal-700 hover:rounded-xl duration-200">Member Checkout</button>
    </div>
  </div>
</div>

);
}