import Home from "./components/Home";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import MealList from "./components/mealPlanner/BrowseFood";

import ShoppingCart from "./components/mealCart/ShopCart";
import ScrollTop from "./components/scrollToTop/ScrollTop";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import About from "./components/About/About";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MealChart from "./components/PlanChart/MealChart";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Searchfood from "./components/SearchFood/Searchfood";

const queryClient = new QueryClient({});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ShoppingCartProvider>
          <div className="leading-normal tracking-normal text-white bg-white ">
            <Router>
              <ToastContainer />
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/browsefood" element={<MealList />}></Route>
                <Route path="/searchfood" element={<Searchfood />}></Route>
                <Route path="/plan" element={<MealChart />}></Route>
                <Route path="/shoppingcart" element={<ShoppingCart />}></Route>
              </Routes>
            </Router>
            <ScrollTop />
            <Footer />
          </div>
        </ShoppingCartProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
