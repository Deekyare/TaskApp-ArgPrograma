import { Tarea } from "../types/Task";

const BASE_URL = "http://localhost:3000";

//DIFERENTES LLAMADAS A LA API

export const TasksService = {
  getTareas: async (): Promise<Tarea[]> => {
    const cachedTask = localStorage.getItem("tasks");
    if (cachedTask) {
      return JSON.parse(cachedTask);
    } else {
      const response = await fetch(`${BASE_URL}/tasks`);
      const data = await response.json();
      localStorage.setItem("tasks", JSON.stringify(data));
      return data;
    }
  },
  getTarea: async (id: number): Promise<Tarea> => {
    const response = await fetch(`${BASE_URL}/tasks/${id}`);
    const data = await response.json();
    return data;
  },
  createTarea: async (product: Tarea): Promise<Tarea> => {
    const response = await fetch(`${BASE_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    localStorage.clear();
    return data;
  },
  updateTarea: async (id: number, product: Tarea): Promise<Tarea> => {
    const response = await fetch(`${BASE_URL}/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    localStorage.clear();
    return data;
  },
  //VOID PORQUE NO RECIBE NADA, SOLO ELIMINA
  deleteTask: async (id: number): Promise<void> => {
    await fetch(`${BASE_URL}/tasks/${id}`, {
      method: "DELETE",
    });
    localStorage.clear();
  },
};
