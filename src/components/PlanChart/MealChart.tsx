import React, { useState, useEffect } from "react";
import { fetchSortedWeekmeals, sortWeekmealsByWeekdays } from "../../api/posts";
import CommonHero from "../common/CommonHero";
import { CDNURL } from "../../api/authprovider";
import EmptyCart from "../common/EmptyCart";
import { BsThreeDots } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import MenuIcon from "../common/MenuIcon";
import { GrFavorite } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";

interface Meal {
  id: number;
  name: string;
  description: string;
  type: string;
  quantity: number;
  day: string;
  status: string;
  isfinish: boolean;
  weekid: number;
  icon?: string;
}

interface DayMeal {
  id: number;
  day: string;
  meals: Meal[];
}
function MealChart() {
  const [weeklyMeal, setWeeklyMeal] = useState<DayMeal[]>([]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    let id = 0;
    const getWeekPlan = async () => {
      await fetchSortedWeekmeals().then((weekmeals) => {
        if (weekmeals) {
          const sortedWeekmeals = sortWeekmealsByWeekdays(weekmeals);
          const dayWiseMeals: any = {};

          sortedWeekmeals?.forEach((item) => {
            const { day } = item;
            if (!dayWiseMeals[day]) {
              dayWiseMeals[day] = [];
            }
            dayWiseMeals[day].push(item);
          });
          const resultArray: any = Object.entries(dayWiseMeals).map(
            ([day, meals]) => {
              return { id: id++, day, meals };
            }
          );
          setWeeklyMeal(resultArray);
        }
      });
    };

    getWeekPlan();
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden -z-0 relative">
        {weeklyMeal.length <= 0 ? (
          <>
            <EmptyCart />
          </>
        ) : (
          <>
            <CommonHero title="Get Your Plan" description="">
              <div className="container px-5 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                  {weeklyMeal &&
                    weeklyMeal.map((weekmeal) => (
                      <>
                        <div
                          className="py-8 flex flex-wrap md:flex-nowrap"
                          key={weekmeal.id}
                        >
                          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-bold text-2xl title-font text-gray-700">
                              {weekmeal.day}
                            </span>
                          </div>
                          <div className="md:flex-grow">
                            <div className="flex flex-wrap -m-4">
                              {weekmeal.meals.map((meal) => (
                                <>
                                  <div
                                    className="xl:w-1/3 md:w-1/2 p-4 "
                                    key={meal.id}
                                  >
                                    <div className="border border-gray-200 p-4 rounded-lg shadow-md">
                                      <div className="flex items-center justify-between">
                                        <div className="w-8 h-8 sm:mr-8  mb-4 inline-flex items-center justify-center rounded-full  text-grey-800 flex-shrink-0">
                                          <img
                                            src={`${CDNURL}${meal.icon}`}
                                            alt={"breakfast"}
                                          />
                                        </div>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2 pr-5">
                                          {meal.name}
                                        </h2>

                                        <div>
                                          <MenuIcon
                                            menus={[
                                              {
                                                id: 1,
                                                mealId: meal.id,
                                                icon: GrFavorite,
                                                title: "Add To Favourite",
                                              },
                                              {
                                                id: 2,
                                                mealId: meal.id,
                                                icon: RiDeleteBin5Line,
                                                title: "Remove From the List",
                                              },
                                            ]}
                                          />
                                        </div>
                                      </div>
                                      <h3 className="text-sm text-gray-400">
                                        {meal.type}
                                      </h3>
                                      <p className="leading-relaxed text-base">
                                        {meal.description}
                                      </p>
                                    </div>
                                  </div>
                                </>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                </div>
              </div>
            </CommonHero>
          </>
        )}
      </section>
    </>
  );
}

export default MealChart;
