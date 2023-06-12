import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MdOutlineSettings } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IconType } from "react-icons";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { removeItemFromWeekPlan } from "../../api/posts";
import { toast } from "react-toastify";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
interface IMenu {
  id: number;
  icon: IconType;
  title: string;
  mealId: number;
}

interface IMenuIcon {
  menus: IMenu[];
}

export default function MenuIcon({ menus }: IMenuIcon) {
  const { removeFromCart } = useShoppingCart();
  const handleCallbackFn = (fnCall: any, ...props: any) => {
    if (fnCall === "remove") {
      removeItemFromWeekPlan(props[0]);
      // toast.success("item removed from the week plan");
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left -top-6 py-2">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-sm font-semibold text-gray-900 ">
          <MdOutlineSettings
            className="-mr-1 h-5 w-5 text-gray-900"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -top-24 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {menus &&
              menus.map((menu) => (
                <>
                  <Menu.Item key={menu.id}>
                    {({ active }) => (
                      <>
                        <button
                          type="button"
                          onClick={() =>
                            handleCallbackFn("remove", menu.mealId)
                          }
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "flex justify-start items-center px-4 py-2 text-sm hover:bg-gray-300"
                          )}
                        >
                          {" "}
                          <menu.icon className="w-4 h-7 mx-3" />
                          {menu.title}
                        </button>
                      </>
                    )}
                  </Menu.Item>
                </>
              ))}

            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "flex justify-start items-center px-4 py-2 text-sm"
                  )}
                >
                  <RiDeleteBin5Line className="w-4 h-4 mx-3" />
                  Remove From List
                </a>
              )}
            </Menu.Item> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
