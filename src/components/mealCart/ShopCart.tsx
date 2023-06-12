import React from "react";
import { BiCloudDownload } from "react-icons/bi";
const ShoppingCart = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-5xl text-5xl font-black title-font mb-2 text-gray-900">
              YOUR 7-DAY MEAL PLANNER
            </h1>
            <p className=" mx-auto leading-relaxed text-base">
              Banh mi cornhole echo park skateboard authentic crucifix neutra
              tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
              twee
            </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-10 py-10 title-font tracking-wider font-extrabold text-gray-900 text-lg bg-[#fe9e0d] rounded-tl rounded-bl">
                    Type
                  </th>
                  <th className="px-10 py-10 title-font tracking-wider font-extrabold text-gray-900 text-lg bg-[#fe9e0d]">
                    Monday
                  </th>
                  <th className="px-10 py-10 title-font tracking-wider font-extrabold text-gray-900 text-lg bg-[#fe9e0d]">
                    Tuesday
                  </th>
                  <th className="px-10 py-10 title-font tracking-wider font-extrabold text-gray-900 text-lg bg-[#fe9e0d]">
                    Wednesday
                  </th>
                  <th className="px-10 py-10 title-font tracking-wider font-extrabold text-gray-900 text-lg bg-[#fe9e0d]">
                    Thursday
                  </th>
                  <th className="px-10 py-10 title-font tracking-wider font-extrabold text-gray-900 text-lg bg-[#fe9e0d]">
                    Friday
                  </th>
                  <th className="px-10 py-10 title-font tracking-wider font-extrabold text-gray-900 text-lg bg-[#fe9e0d]">
                    Saturday
                  </th>
                  <th className="px-10 py-10 title-font tracking-wider font-extrabold text-gray-900 text-lg bg-[#fe9e0d]">
                    Sunday
                  </th>
                  <th className="w-10 title-font tracking-wider font-extrabold text-gray-900 text-lg bg-[#fe9e0d] rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-10 py-10 text-lg text-black">Breakfast</td>
                  <td className="px-10 py-10">Oats Poha</td>
                  <td className="px-10 py-10">Sandwich Grill</td>
                  <td className="px-10 py-10 ">Upma</td>
                  <td className="border-t-2 border-gray-200 px-10 py-10 ">
                    Dosa
                  </td>
                  <td className="border-t-2 border-gray-200 px-10 py-10 ">
                    Croissant
                  </td>
                  <td className="border-t-2 border-gray-200 px-10 py-10 ">
                    Moong Dal Dosa
                  </td>
                  <td className="border-t-2 border-gray-200 px-10 py-10 ">
                    Upma
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-10 py-10 text-lg text-black">
                    Lunch
                  </td>
                  <td className="px-10 py-10 border-t-2">Oats Poha</td>
                  <td className="px-10 py-10 border-t-2">Sandwich Grill</td>
                  <td className="px-10 py-10 border-t-2">Upma</td>
                  <td className="border-t-2 border-gray-200 px-10 py-10 ">
                    Dosa
                  </td>
                  <td className="border-t-2 border-gray-200 px-10 py-10">
                    Croissant
                  </td>
                  <td className="border-t-2 border-gray-200 px-10 py-10 ">
                    Moong Dal Dosa
                  </td>
                  <td className="border-t-2 border-gray-200 px-10 py-10 ">
                    Upma
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-10 py-10 text-lg text-black">
                    Dinner
                  </td>
                  <td className="border-t-2 border-gray-200 px-10 py-10">
                    Chicken Grill
                  </td>
                  <td className="border-t-2 border-gray-200 px-10 py-10">
                    Cauliflower and Roti with Curd and salad
                  </td>
                  <td className="border-t-2 border-gray-200 px-10 py-10 ">
                    Chicken shawarma
                  </td>
                  <td className="border-t-2 border-gray-200 px-10 py-10 ">
                    Salmon Grill with veggies
                  </td>
                  <td className="border-t-2 border-gray-200 px-10 py-10 ">
                    Chicken shawarma
                  </td>
                  <td className="border-t-2 border-gray-200 px-10 py-10 ">
                    Salmon Grill with veggies
                  </td>
                  <td className="border-t-2 border-gray-200 px-10 py-10 ">
                    Salmon Grill with veggies
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <button className="flex ml-auto justify-center items-center text-white bg-[#fe9e0d] border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
              <BiCloudDownload className="mr-1 flex justify-center items-center font-[2rem]" />
              Download
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
