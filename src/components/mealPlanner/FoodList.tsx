import MealCard from "./MealCard";

interface IMealList {
  id: number;
  meal_name: string;
  mealtype: string;
  meal_img: string;
}

interface ICategories {
  category: string;
  mealList: IMealList[];
}
function FoodList({ category, mealList }: ICategories) {
  return (
    <>
      {mealList &&
        mealList.map((card: any) => {
          if (category === card.mealtype) {
            return (
              <>
                <div className="w-full xl:w-1/4 md:w-1/2 p-4 " key={card.id}>
                  <MealCard
                    title={card.meal_name}
                    id={card.id}
                    image={card.meal_img}
                    servings={4}
                  />
                </div>
              </>
            );
          } else {
            return false;
          }
        })}
    </>
  );
}

export default FoodList;
