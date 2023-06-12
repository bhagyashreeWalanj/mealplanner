import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import CommonModal from "./CommonModal";

interface IProps {
  id: number;
  title: string;
  status: boolean;
  setStatus: (status: any) => void;
}

// interface ICartItems {
//   title: string;
//   mealtype: string;
//   mealday: string;
// }
export default function MealPlanModal(props: IProps) {
  const { title, status, setStatus, id } = props;
  const cancelButtonRef = useRef(null);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMealType, setSelectedMealType] = useState("");
  // const [mealData, setMealData] = useState<ICartItems>({
  //   title: title,
  //   mealday: "",
  //   mealtype: "",
  // });
  const { register, handleSubmit } = useForm();

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const mealType = ["Breakfast", "Lunch", "Dinner"];
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    // removeFromCart,
    showCartData,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  const onSubmit = async (submitdata: any) => {
    // setMealData(submitdata);
    showCartData(id, submitdata);
    setStatus(false);
    // const { data, error } = await supabase
    // .from('meal-plan')
    // .insert([
    //   { some_column: 'someValue', other_column: 'otherValue' },
    // ])
  };
  const handleDayChange = (e: any) => {
    setSelectedDay(e.target.value);
  };

  const handleMealTypeChange = (e: any) => {
    setSelectedMealType(e.target.value);
  };

  return (
    <>
      {status ? (
        <CommonModal status={status} setStatus={setStatus} title={title}>
          <form
            className="max-w-md mx-auto  p-6 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4">
              <input
                type="text"
                className="hidden"
                value={title}
                defaultValue={title}
                {...register("title")}
              />
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Meal Day:
              </label>
              <select
                {...register("mealday")}
                value={selectedDay}
                onChange={handleDayChange}
                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              >
                {dayNames.map((day, index: number) => (
                  <>
                    <option value={day} key={index}>
                      {day}
                    </option>
                  </>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Meal Type:
              </label>
              <select
                id="mealtype"
                value={selectedMealType}
                {...register("mealtype")}
                onChange={handleMealTypeChange}
                className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              >
                {mealType.map((type, index: number) => (
                  <>
                    <option value={type} key={index}>
                      {type}
                    </option>
                  </>
                ))}
              </select>
            </div>
            <div className="mb-4 text-center">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Quantity:
              </label>
              <div className="flex items-center flex-row justify-center gap-2">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </button>
                <div>
                  <span className="ml-2">{quantity}</span>
                </div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="px-4 py-3 sm:flex sm:flex-row sm:px-6 justify-center">
              <div className="flex items-center  flex-col gap-2 ">
                <div className="flex mx-5">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={() => setStatus(false)}
                ref={cancelButtonRef}
              >
                Cancel
              </button>
            </div>
          </form>
        </CommonModal>
      ) : (
        ""
      )}
    </>
  );
}
