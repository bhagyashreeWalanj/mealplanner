import React, { useState } from "react";
import "../style/mealplannerform.scss";

function MealPlannerForm() {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMealType, setSelectedMealType] = useState("");
  const [mealName, setMealName] = useState("");

  const handleDayChange = (e: any) => {
    setSelectedDay(e.target.value);
  };

  const handleMealTypeChange = (e: any) => {
    setSelectedMealType(e.target.value);
  };

  const handleMealNameChange = (e: any) => {
    setMealName(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("data", e);
    // Handle form submission here
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="meal-planner-form">
        <div className="form-group">
          <label htmlFor="day">Day:</label>
          <select id="day" value={selectedDay} onChange={handleDayChange}>
            <option value="">Select a day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="mealType">Meal Type:</label>
          <select
            id="mealType"
            value={selectedMealType}
            onChange={handleMealTypeChange}
          >
            <option value="">Select a meal type</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="mealName">Meal Name:</label>
          <input
            type="text"
            id="mealName"
            value={mealName}
            onChange={handleMealNameChange}
          />
        </div>
        <button type="submit" className="meal-planner-form__button">
          Add Meal
        </button>
      </form>
    </>
  );
}

export default MealPlannerForm;
