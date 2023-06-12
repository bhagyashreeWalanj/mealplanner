import React, { useState } from "react";
// import "../style/navbar.scss";
import { BsCart2 } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";

import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import BannerBackground from "../assets/home-banner-background.png";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CreateMealModal from "./Modal/CreateMealModal";
import useNavigation from "../hooks/useNavigation";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const { openCart, cartQuantity } = useShoppingCart();
  const [showCreateMeal, setShowCreateMeal] = useState(false);
  const { currentRoute, setCurrentRoute } = useNavigation();

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },

    {
      text: "Meal Plan",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  console.log("path ", currentRoute);
  return (
    <>
      <nav id="header" className=" w-full text-white">
        <div className="w-1/2 absolute right-5 z-0 max-w-3xl">
          {" "}
          <img src={BannerBackground} alt="" />
        </div>
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
          <div className="pl-4 flex items-center">
            <Link to="/">
              <h3 className="flex toggleColour text-[#fe9e0d] tracking-[0.8rem] no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                <FaLeaf className="h-8 fill-current inline mr-4" />
                Plan&Eat
              </h3>
            </Link>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              onClick={() => setOpenMenu(true)}
              id="nav-toggle"
              className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <Drawer
            open={openMenu}
            onClose={() => {
              setOpenMenu(false);
            }}
            anchor="right"
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => setOpenMenu(false)}
              onKeyDown={() => setOpenMenu(false)}
            >
              <List>
                {menuOptions.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Box>
          </Drawer>
          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-10"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <Link
                  to="/"
                  onClick={() => setCurrentRoute("/")}
                  className={`inline-block py-2 px-4 text-black ${
                    currentRoute === "/" ? "font-bold" : ""
                  }  no-underline`}
                >
                  Home
                </Link>
              </li>
              <li className="mr-3">
                <Link
                  to="/plan"
                  onClick={() => setCurrentRoute("/plan")}
                  className={`inline-block  text-black ${
                    currentRoute === "/plan" ? "font-bold" : ""
                  }  no-underline hover:text-gray-800 hover:text-underline py-2 px-4`}
                >
                  Your Plan
                </Link>
              </li>
              <li className="mr-3">
                <Link
                  to="/browsefood"
                  onClick={() => setCurrentRoute("/browsefood")}
                  className={`inline-block text-black ${
                    currentRoute === "/browsefood" ? "font-bold" : ""
                  }  no-underline hover:text-gray-800 hover:text-underline py-2 px-4`}
                >
                  Browse Food
                </Link>
              </li>
            </ul>
            <div className="flex items-center mr-8">
              <div className=" cursor-pointer" onClick={openCart}>
                <BsCart2 className="text-4xl" />
                {cartQuantity > 0 && (
                  <div
                    className="absolute  bg-white rounded-[50%] right-56 top-6 p-2 flex items-center justify-center
                   w-6 h-6"
                  >
                    {cartQuantity}
                  </div>
                )}
              </div>
            </div>

            <button
              id="navAction"
              onClick={() => setShowCreateMeal(true)}
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Create Meal
            </button>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
      {showCreateMeal && (
        <>
          <CreateMealModal
            status={showCreateMeal}
            setStatus={(status: boolean) => setShowCreateMeal(status)}
          />
        </>
      )}
    </>
  );
}

export default Navbar;
