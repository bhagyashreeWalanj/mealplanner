import React from "react";

function MealPlan() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const meals = ["Breakfast", "Lunch", "Dinner"];
  return (
    <>
      <section className="text-gray-600">
        <h1 className="sm:text-4xl text-5xl font-['Montserrat']  font-black title-font mr-auto ml-auto text-center mb-2 text-gray-900">
          A Week Meal Plan
        </h1>
        <div className="container px-5 py-24 mx-auto">
          {/* days */}

          {/* meal plan     */}
          <div className="flex flex-wrap -m-4 ">
            <div className="grid grid-cols-6 gap-10 pb-12">
              <div className="flex flex-col w-52 items-center justify-center col-span-1">
                <span className="font-bold text-lg"></span>
              </div>
              {days.map((day) => (
                <div className=" flex flex-col items-center h-10 bg-pink-500 justify-center col-span-1">
                  <span className="font-bold text-base text-white mx-1">
                    {day}
                  </span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-10">
              <div className="bg-pink-500 h-40 flex flex-col items-center justify-center justify-self-end w-12 relative col-span-1">
                <span className="text-white font-bold transform -rotate-90 origin-top-center absolute ">
                  Breakfast
                </span>
              </div>
              <div className="bg-gray-200 h-40 flex flex-col items-center justify-center col-span-1">
                <span className="font-bold text-lg">Column 2</span>
                <span className="mt-2">Content goes here</span>
              </div>
              <div className="bg-gray-200 h-40 w-52 flex flex-col items-center justify-center">
                <span className="font-bold text-lg">Column 2</span>
                <span className="mt-2">Content goes here</span>
              </div>
              <div className="bg-gray-200 h-40 w-52 flex flex-col items-center justify-center">
                <span className="font-bold text-lg">Column 3</span>
                <span className="mt-2">Content goes here</span>
              </div>
              <div className="bg-gray-200 h-40 w-52 flex flex-col items-center justify-center">
                <span className="font-bold text-lg">Column 4</span>
                <span className="mt-2">Content goes here</span>
              </div>
              <div className="bg-gray-200 h-40 w-52 flex flex-col items-center justify-center">
                <span className="font-bold text-lg">Column 5</span>
                <span className="mt-2">Content goes here</span>
              </div>
              <div className="bg-pink-500 h-40 flex flex-col items-center justify-center justify-self-end w-12 relative col-span-1">
                <span className="text-white font-bold transform -rotate-90 origin-top-center absolute ">
                  Lunch
                </span>
              </div>

              <div className="bg-gray-200 h-40 w-52 flex items-center justify-center">
                1
              </div>
              <div className="bg-gray-200 h-40 w-52 flex items-center justify-center">
                2
              </div>
              <div className="bg-gray-200 h-40 w-52 flex items-center justify-center">
                3
              </div>
              <div className="bg-gray-200 h-40 w-52 flex items-center justify-center">
                4
              </div>
              <div className="bg-gray-200 h-40 w-52 flex items-center justify-center">
                5
              </div>
              <div className="bg-pink-500 h-40 flex flex-col items-center justify-center justify-self-end w-12 relative col-span-1">
                <span className="text-white font-bold transform -rotate-90 origin-top-center absolute ">
                  Dinner
                </span>
              </div>
              <div className="bg-gray-200 h-40 w-52 flex items-center justify-center">
                1
              </div>
              <div className="bg-gray-200 h-40 w-52 flex items-center justify-center">
                2
              </div>
              <div className="bg-gray-200 h-40 w-52 flex items-center justify-center">
                3
              </div>
              <div className="bg-gray-200 h-40 w-52 flex items-center justify-center">
                4
              </div>
              <div className="bg-gray-200 h-40 w-52 flex items-center justify-center">
                5
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MealPlan;
