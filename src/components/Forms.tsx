import { useState, useEffect } from "react";
import type { Dispatch } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Activity } from "../types";
import { categories } from "../data/categories";
import type {
  ActivityAction,
  ActivityState,
} from "../reducers/activity-reducer";

type FormProps = {
  dispatch: Dispatch<ActivityAction>;
  state: ActivityState;
};

const initialState: Activity = {
  id: uuidv4(),
  category: 1,
  name: "",
  calories: 0,
};

export default function Form({ dispatch, state }: FormProps) {
  const [activity, setActivity] = useState<Activity>(initialState);

  useEffect(() => {
    if (state.activeId) {
      const selectedActivity = state.activities.filter(
        (stateActivity) => stateActivity.id === state.activeId
      )[0];
      setActivity(selectedActivity);
    }
  }, [state.activeId, state.activities]);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ["category", "calories"].includes(e.target.id);

    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Asegurarse de que dispatch es una función antes de llamarla
    if (typeof dispatch === "function") {
      dispatch({ type: "save-activity", payload: { newActivity: activity } });
    } else {
      console.error("dispatch no es una función", dispatch);
    }

    setActivity({
      ...initialState,
      id: uuidv4(),
    });
  };

  const isValidActivity = () => {
    const { name, calories } = activity;
    return name.trim() !== "" && calories > 0;
  };

  return (
    <form
      className="space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Categoria:
        </label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          name=""
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          {activity.category === 1 ? "Comida:" : "Actividad:"}
        </label>
        <input
          type="text"
          id="name"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej: Comida, Jugo de Naranja, Ensalada, ejercicio, Pesas, Bicicleta"
          value={activity.name}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          Calorias:
        </label>
        <input
          type="number"
          id="calories"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej: 200, 300, 400"
          value={activity.calories}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
        value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
        disabled={!isValidActivity()}
      />
    </form>
  );
}
