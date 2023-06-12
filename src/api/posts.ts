import { toast } from "react-toastify";
import supabase from "./authprovider";

interface meal_categories {
  mealtype: string;
}
// Custom sorting order for weekdays
const weekdaysOrder: { [key: string]: number } = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

export async function fetchSortedWeekmeals(): Promise<any[] | null> {
  try {
    const { data, error } = await supabase
      .from("weekplan")
      .select("*")
      .eq("status", "selected");

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching sorted weekmeals:", error);
    return null;
  }
}

export function sortWeekmealsByWeekdays(weekmeals: any[]): any[] {
  return weekmeals.sort((a, b) => {
    const aIndex = weekdaysOrder[a.day];
    const bIndex = weekdaysOrder[b.day];
    return aIndex - bIndex;
  });
}

export async function getMealCategories() {
  const data = await supabase.from("category").select("*");

  console.log("first", data);
  if (data) return data;
}

export async function getWeeklyPlan() {
  const data = await supabase.from("weekplan").select("*");

  console.log("weekly plan", data);
  if (data) return data;
}

export async function removeItemFromWeekPlan(
  id: number
): Promise<any[] | null> {
  try {
    const { data, error } = await supabase
      .from("weekplan")
      .update({ status: "removed" })
      .eq("id", id);
    console.log("data", data);

    if (error) {
      throw error;
    }
    if (data) {
      toast.success("Removed from The Plan");
    }

    return data;
  } catch (error) {
    console.error("Error fetching sorted weekmeals:", error);
    return null;
  }
}
