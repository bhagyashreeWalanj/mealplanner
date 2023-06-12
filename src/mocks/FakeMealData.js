import { FaDownload } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { TbShoppingCartPlus } from "react-icons/tb";

export const workInfoData = [
  {
    image: <GiHotMeal className="text-amber-500 mx-auto w-24 h-20" />,
    title: "Choose Your Meal",
    text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
  },
  {
    image: <TbShoppingCartPlus className="text-amber-500 mx-auto w-24 h-20" />,
    title: "Add To Cart",
    text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
  },
  {
    image: <FaDownload className="text-amber-500 mx-auto w-24 h-20" />,
    title: "Download Meal Plan",
    text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
  },
];

const mealData = {
  week: {
    monday: {
      meals: [
        {
          id: 640965,
          imageType: "jpg",
          title: "Crushed Lentil Soup- Granola Style",
          readyInMinutes: 45,
          servings: 1,
          sourceUrl:
            "https://spoonacular.com/crushed-lentil-soup-granola-style-640965",
        },
        {
          id: 653251,
          imageType: "jpg",
          title: "Noodles and Veggies With Peanut Sauce",
          readyInMinutes: 30,
          servings: 4,
          sourceUrl:
            "https://spoonacular.com/noodles-and-veggies-with-peanut-sauce-653251",
        },
        {
          id: 637297,
          imageType: "jpg",
          title: "Cauliflower Chickpea Stew",
          readyInMinutes: 45,
          servings: 4,
          sourceUrl: "https://spoonacular.com/cauliflower-chickpea-stew-637297",
        },
      ],
      nutrients: {
        calories: 1971.57,
        protein: 44.53,
        fat: 75.66,
        carbohydrates: 285.63,
      },
    },
    tuesday: {
      meals: [
        {
          id: 640965,
          imageType: "jpg",
          title: "Crushed Lentil Soup- Granola Style",
          readyInMinutes: 45,
          servings: 1,
          sourceUrl:
            "https://spoonacular.com/crushed-lentil-soup-granola-style-640965",
        },
        {
          id: 642585,
          imageType: "jpg",
          title: "Farfalle with fresh tomatoes, basil and mozzarella",
          readyInMinutes: 15,
          servings: 4,
          sourceUrl:
            "https://spoonacular.com/farfalle-with-fresh-tomatoes-basil-and-mozzarella-642585",
        },
        {
          id: 638263,
          imageType: "jpg",
          title: "Chicken Pita Fajita",
          readyInMinutes: 45,
          servings: 4,
          sourceUrl: "https://spoonacular.com/chicken-pita-fajita-638263",
        },
      ],
      nutrients: {
        calories: 1835.7,
        protein: 53.73,
        fat: 66.71,
        carbohydrates: 255.52,
      },
    },
    wednesday: {
      meals: [
        {
          id: 665257,
          imageType: "jpg",
          title: "Whole Grain Pumpkin Bread",
          readyInMinutes: 45,
          servings: 24,
          sourceUrl: "https://spoonacular.com/whole-grain-pumpkin-bread-665257",
        },
        {
          id: 1697625,
          imageType: "jpg",
          title:
            "Light and Tasty Tomato Basil Mozzarella Pasta for a Hot Summer Evening",
          readyInMinutes: 25,
          servings: 2,
          sourceUrl:
            "https://spoonacular.com/light-and-tasty-tomato-basil-mozzarella-pasta-for-a-hot-summer-evening-1697625",
        },
        {
          id: 642585,
          imageType: "jpg",
          title: "Farfalle with fresh tomatoes, basil and mozzarella",
          readyInMinutes: 15,
          servings: 4,
          sourceUrl:
            "https://spoonacular.com/farfalle-with-fresh-tomatoes-basil-and-mozzarella-642585",
        },
      ],
      nutrients: {
        calories: 1752.72,
        protein: 53.59,
        fat: 65.41,
        carbohydrates: 241.46,
      },
    },
    thursday: {
      meals: [
        {
          id: 716417,
          imageType: "jpg",
          title: "Strawberry Shortcake w. Mini Strawberry PopTarts",
          readyInMinutes: 45,
          servings: 4,
          sourceUrl:
            "https://spoonacular.com/strawberry-shortcake-w-mini-strawberry-poptarts-716417",
        },
        {
          id: 1697625,
          imageType: "jpg",
          title:
            "Light and Tasty Tomato Basil Mozzarella Pasta for a Hot Summer Evening",
          readyInMinutes: 25,
          servings: 2,
          sourceUrl:
            "https://spoonacular.com/light-and-tasty-tomato-basil-mozzarella-pasta-for-a-hot-summer-evening-1697625",
        },
        {
          id: 654935,
          imageType: "jpg",
          title: "Pasta with Peas and Italian Sausage",
          readyInMinutes: 45,
          servings: 4,
          sourceUrl:
            "https://spoonacular.com/pasta-with-peas-and-italian-sausage-654935",
        },
      ],
      nutrients: {
        calories: 1836.28,
        protein: 55.46,
        fat: 65.38,
        carbohydrates: 258.36,
      },
    },
    friday: {
      meals: [
        {
          id: 1100990,
          imageType: "jpg",
          title:
            "Blueberry, Chocolate & Cocao Superfood Pancakes - Gluten-Free/Paleo/Vegan",
          readyInMinutes: 30,
          servings: 2,
          sourceUrl:
            "https://spoonacular.com/blueberry-chocolate-cocao-superfood-pancakes-gluten-free-paleo-vegan-1100990",
        },
        {
          id: 642585,
          imageType: "jpg",
          title: "Farfalle with fresh tomatoes, basil and mozzarella",
          readyInMinutes: 15,
          servings: 4,
          sourceUrl:
            "https://spoonacular.com/farfalle-with-fresh-tomatoes-basil-and-mozzarella-642585",
        },
        {
          id: 640982,
          imageType: "jpg",
          title: "Cuban Black Beans & Rice",
          readyInMinutes: 45,
          servings: 4,
          sourceUrl: "https://spoonacular.com/cuban-black-beans-rice-640982",
        },
      ],
      nutrients: {
        calories: 1875.57,
        protein: 48.24,
        fat: 66.03,
        carbohydrates: 278.16,
      },
    },
    saturday: {
      meals: [
        {
          id: 657761,
          imageType: "jpg",
          title: "Raised Doughnuts",
          readyInMinutes: 300,
          servings: 24,
          sourceUrl: "https://spoonacular.com/raised-doughnuts-657761",
        },
        {
          id: 1697625,
          imageType: "jpg",
          title:
            "Light and Tasty Tomato Basil Mozzarella Pasta for a Hot Summer Evening",
          readyInMinutes: 25,
          servings: 2,
          sourceUrl:
            "https://spoonacular.com/light-and-tasty-tomato-basil-mozzarella-pasta-for-a-hot-summer-evening-1697625",
        },
        {
          id: 647204,
          imageType: "jpg",
          title: "Honey Crescents",
          readyInMinutes: 45,
          servings: 4,
          sourceUrl: "https://spoonacular.com/honey-crescents-647204",
        },
      ],
      nutrients: {
        calories: 1811.38,
        protein: 52.29,
        fat: 69.67,
        carbohydrates: 242.66,
      },
    },
    sunday: {
      meals: [
        {
          id: 640965,
          imageType: "jpg",
          title: "Crushed Lentil Soup- Granola Style",
          readyInMinutes: 45,
          servings: 1,
          sourceUrl:
            "https://spoonacular.com/crushed-lentil-soup-granola-style-640965",
        },
        {
          id: 652417,
          imageType: "jpg",
          title: "Moroccan chickpea and lentil stew",
          readyInMinutes: 30,
          servings: 3,
          sourceUrl:
            "https://spoonacular.com/moroccan-chickpea-and-lentil-stew-652417",
        },
        {
          id: 652417,
          imageType: "jpg",
          title: "Moroccan chickpea and lentil stew",
          readyInMinutes: 30,
          servings: 3,
          sourceUrl:
            "https://spoonacular.com/moroccan-chickpea-and-lentil-stew-652417",
        },
      ],
      nutrients: {
        calories: 1761.36,
        protein: 50.04,
        fat: 57.8,
        carbohydrates: 267.96,
      },
    },
  },
};

export const foodListData = [
  {
    id: 640965,
    mealtype: "breakfast",
    title: "Crushed Lentil Soup- Granola Style",
    readyInMinutes: 45,
    servings: 1,
    sourceUrl: "./imgs/crushed-lentil-soup.jpeg",
  },
  {
    id: 652417,
    mealtype: "lunch",
    title: "Moroccan chickpea and lentil stew",
    readyInMinutes: 30,
    servings: 3,
    sourceUrl: "./imgs/moroccan-chickpea.jpeg",
  },
  {
    id: 652418,
    mealtype: "dinner",
    title: "Varan Bhat",
    readyInMinutes: 30,
    servings: 3,
    sourceUrl: "./imgs/raised-doughnuts.jpeg",
  },
  {
    id: 657761,
    mealtype: "breakfast",
    title: "Raised Doughnuts",
    readyInMinutes: 300,
    servings: 24,
    sourceUrl: "./imgs/raised-doughnuts.jpeg",
  },
  {
    id: 1697625,
    mealtype: "lunch",
    title:
      "Light and Tasty Tomato Basil Mozzarella Pasta for a Hot Summer Evening",
    readyInMinutes: 25,
    servings: 2,
    sourceUrl: "./imgs/mozzarella-pasta.jpeg",
  },
  {
    id: 647204,
    mealtype: "dinner",
    title: "Honey Crescents",
    readyInMinutes: 45,
    servings: 4,
    sourceUrl: "./imgs/honey-crescents.jpeg ",
  },
];
