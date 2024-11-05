import React, { useEffect, useState } from "react";
import supabase from "../../api/authprovider";
import FoodList from "./FoodList";

function Categories() {
  const [openTab, setOpenTab] = React.useState(1);
  const mealCategories = [
    { id: 1, category: "Breakfast" },
    { id: 2, category: "Lunch" },
    { id: 3, category: "Dinner" },
  ];
  const [mealList, setMealList] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const response: any = await supabase
        .from("mealmaster")
        .select()
        .eq("isDisabled", "true");
      if (response) {
        setMealList(response.data);
        console.log("first", response.data);
      } else {
        setMealList([]);
      }
    }
    getCategories();
  }, []);

  const getNoMealData = () => {
    return mealList.filter(function (item: any) {
      return !item.mealtype;
    });
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {mealCategories &&
              mealCategories.map((category: any) => {
                return (
                  <li
                    className="-mb-px mr-2 last:mr-0 flex-auto text-center"
                    key={category.id}
                  >
                    <a
                      className={
                        "text-lg font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal  " +
                        (openTab === category.id
                          ? "text-white bg-[#cdc33f]"
                          : "text-gray-800 bg-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(category.id);
                      }}
                      data-toggle="tab"
                      href={`#link${category.id}`}
                      role="tablist"
                    >
                      {category.category}
                    </a>
                  </li>
                );
              })}
          </ul>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                {mealCategories &&
                  mealCategories.map((category: any) => (
                    <>
                      <div
                        className={
                          openTab === category.id ? "flex flex-wrap" : "hidden"
                        }
                        id={`link${category.id}`}
                      >
                        <FoodList
                          category={category.category}
                          mealList={mealList}
                        />
                      </div>
                    </>
                  ))}
                {mealList.length === 0 && <h2>No Meal List</h2>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/tabs/text

export default Categories;
