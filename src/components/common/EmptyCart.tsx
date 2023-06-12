import React from "react";
import noplans from "../../assets/noplans.png";
import { Link } from "react-router-dom";
function EmptyCart() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="w-40 mb-10  object-center h-40 rounded"
            alt="hero"
            src={noplans}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Not decided Yet ?
            </h1>
            <p className="mb-8 leading-relaxed">Get Your Meal Plan</p>
            <div className="flex justify-center">
              <Link to={"/browsefood"}>
                <button className="inline-flex text-white bg-[#fe9e0d] border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                  Go To Browse Food
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EmptyCart;
