import { createContext, ReactNode, useContext, useState } from "react";
// import { SideBarShoppingCart } from "../components/mealCart/SideBarShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage";
import SideBarShoppingCart from "../components/mealCart/SideBarShoppingCart";
import { toast } from "react-toastify";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
  title: string;
  mealtype: string;
  mealday: string;
};

type ICartItemData = {
  title: string;
  mealtype: string;
  mealday: string;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;

  getItemQuantity: (id: number) => number;
  showCartData: (id: number, meal: ICartItemData) => void;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  removeAllFromCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function showCartData(id: number, meal: ICartItemData) {
    setCartItems((currItems: any) => {
      if (currItems.find((item: any) => item.id === id) == null) {
        return [
          ...currItems,
          {
            title: meal.title,
            mealday: meal.mealday,
            mealtype: meal.mealtype,
          },
        ];
      } else {
        return currItems.map((item: any) => {
          if (item.id === id) {
            return {
              ...item,
              title: meal.title,
              mealday: meal.mealday,
              mealtype: meal.mealtype,
            };
          } else {
            return item;
          }
        });
      }
    });
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems: any) => {
      if (currItems.find((item: any) => item.id === id) == null) {
        return [
          ...currItems,
          {
            id,
            quantity: 1,
          },
        ];
      } else {
        return currItems.map((item: any) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
    toast.success("Item has been Removed from the list");
  }

  function removeAllFromCart() {
    setCartItems([]);
    //toast.success("Plan Added Sucessfully");
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        removeAllFromCart,
        showCartData,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <SideBarShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
