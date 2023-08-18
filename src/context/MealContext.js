import { createContext, useState } from "react";

export const MealContext = createContext()

export const MealProvider = ({ ...props }) => {
    const [meals, setMeals] = useState([])
    const setPrice = (mealId, price) => {
        setMeals([...meals.filter((x) => x.idMeal != mealId), { idMeal: mealId, price: price }])
    }
    return <MealContext.Provider value={{ setPrice, meals }} {...props} />
}
