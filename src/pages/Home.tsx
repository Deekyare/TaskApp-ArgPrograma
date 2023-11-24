import { useEffect, useMemo, useState } from "react";
import { TasksService } from "../services/TaskService";
import { Tarea } from "../types/Task";
import TasksSection from "../components/TasksSection/TasksSection";
import { useLocation } from "react-router-dom";
import CarouselHome from "../components/CarouselHome/CarouselHome";

const mapaEstados: Record<string, string> = {
  PORHACER: "Por hacer",
  ENPRODUCCION: "En producción",
  PORTESTEAR: "Por testear",
  COMPLETADA: "Completada",
};
function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

const Home = () => {
  let query = useQuery();
  //Estado donde se guardarán las tareas
  const [tasks, setTasks] = useState<Tarea[]>([]);
  const [seccionTitle, setSeccionTitle] = useState<string>("Tareas");

  //Con este useEffect se buscarán todas las tareas utilizando nuestro service
  useEffect(() => {
    const fetchTasks = async () => {
      const _tasks = await TasksService.getTareas();
      //Agregamos las tareas que buscamos a nuestro estado

      const filter = query.get("status");

      console.log(filter, _tasks);
      if (filter === null) {
        setTasks(_tasks);
        setSeccionTitle("Tareas");
      } else {
        const tareasFiltradasPorEstado = _tasks.filter(
          (task) => task.estado === filter
        );

        setTasks(tareasFiltradasPorEstado);
        setSeccionTitle(mapaEstados[filter]);
      }
    };

    //Se ejecuta la función
    fetchTasks();
  }, [query]);

  useEffect(() => {});

  return (
    <>
      <CarouselHome />

      {/* 
        Llamamos a los componentes TaskFunction. 
        Le enviamos como props:
          -El título de la sección
          -Un array de tareas que van a filtrarse de acuerdo a su estado
      */}

      <TasksSection title={seccionTitle} tasks={tasks} />
    </>
  );
};

export default Home;
