import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import supabase from "../../api/authprovider";

interface ICart {
  isOpen: boolean;
}
interface IMeal {
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

export default function SideBarShoppingCart({ isOpen }: ICart) {
  const { closeCart, cartItems, removeFromCart, removeAllFromCart } =
    useShoppingCart();
  const [mealDays, setMealDays] = useState<string[]>([]);
  const { register, handleSubmit } = useForm();

  const getMealDays = () => {
    const days: string[] = [];
    cartItems.forEach((meal) => {
      if (!days.includes(meal.mealday)) {
        days.push(meal.mealday);
      }
    });

    setMealDays(days);
  };
  useEffect(() => {
    getMealDays();
  }, [cartItems]);

  const handleSavePlan = async () => {
    const finalObj = cartItems.map((item) => {
      return {
        //id: item.id,
        name: item.title,
        description: "",
        type: item.mealtype,
        quantity: item.quantity,
        day: item.mealday,
        status: "selected",
        isfinish: false,
        weekid: item.id,
        icon:
          item.mealtype === "Breakfast"
            ? "icons/breakfast.png"
            : item.mealtype === "Lunch"
            ? "icons/lunch.png"
            : "icons/dinner.png",
      };
    });
    try {
      const { data, error } = await supabase.from("weekplan").insert(finalObj);
      removeAllFromCart();
      closeCart();
    } catch (error) {
      console.error("Error Adding weekmeals in DB:", error);
      return null;
    }
  };

  const deleteAllMeal = async () => {
    setMealDays([]);

    const { data, error } = await supabase
      .from("weekplan")
      .update({ status: "removed" })
      .eq("status", "selected");
    toast.success("Removed All from the list");
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <form onSubmit={handleSubmit(handleSavePlan)}>
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Meal Cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={closeCart}
                            >
                              <span className="sr-only">Close panel</span>
                              <AiFillCloseCircle
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {mealDays.map((mealDay) => (
                                <>
                                  <div className="flex bg-[#fe9e0d] text-white justify-center">
                                    <h2 className="text-2xl">{mealDay}</h2>
                                  </div>
                                  {cartItems
                                    .filter(
                                      (meal: any) => meal.mealday === mealDay
                                    )
                                    .map((meal) => (
                                      <>
                                        <li key={meal.id} className="flex py-4">
                                          <div className="ml-4 flex flex-1 flex-row">
                                            <div>
                                              <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                  <a href={"#"}>{meal.title}</a>
                                                </h3>
                                              </div>
                                              <p className="mt-2 text-sm text-gray-500">
                                                {meal.mealtype}
                                              </p>
                                            </div>
                                            <div className="flex flex-1 items-start justify-end text-sm">
                                              <p className="text-gray-500 mr-8">
                                                Qty {meal.quantity}
                                              </p>
                                              <div className="flex">
                                                <button
                                                  type="button"
                                                  onClick={() =>
                                                    removeFromCart(meal.id)
                                                  }
                                                  className="font-medium text-gray-500 hover:text-indigo-500"
                                                >
                                                  Remove
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      </>
                                    ))}
                                </>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        {/* <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p> */}
                        <div className="mx-auto flex">
                          <button
                            type="button"
                            onClick={() => {
                              deleteAllMeal();
                              removeAllFromCart();
                            }}
                            className="flex  mr-4 items-center justify-center rounded-md border border-transparent bg-[#fe9e0d] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Remove All
                          </button>
                          <button
                            type="submit"
                            className="flex items-center justify-center rounded-md border border-transparent bg-[#fe9e0d] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Save Plan
                          </button>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            {" or "}
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              //onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
