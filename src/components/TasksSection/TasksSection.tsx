import { Alert, Container, Stack } from "react-bootstrap";
import { Tarea } from "../../types/Task";
import TaskCard from "../TaskCard/TaskCard";
import { useNavigate } from "react-router-dom";

interface Props {
  title?: string;
  tasks: Tarea[];
}

const TasksSection = ({ title, tasks }: Props) => {
  //Instancia de useNavigate para redirigir a otra pantalla
  const navigate = useNavigate();

  return (
    <div style={{ marginBottom: "200px" }}>
      <h3
        className="fs-1 text-center mt-5"
        style={{ fontFamily: "roboto", fontWeight: "bolder" }}
      >
        {title}
      </h3>
      <Stack
        direction="horizontal"
        className="mx-auto d-flex flex-wrap justify-content-center"
      >
        {
          //Si tasks tiene una longitud mayor a 0 se ejecutará el map. Si no se mostrará una alerta
          tasks.length > 0 ? (
            tasks.map((task, key) => <TaskCard key={key} task={task} />)
          ) : (
            <Container>
              <Alert variant={"light"}>
                No hay tareas para esta sección.{" "}
                <Alert.Link onClick={() => navigate("add-task")}>
                  Agrega mas tareas aquí
                </Alert.Link>
              </Alert>
            </Container>
          )
        }
      </Stack>
    </div>
  );
};

export default TasksSection;
