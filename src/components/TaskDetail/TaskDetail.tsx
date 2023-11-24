import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TasksService } from "../../services/TaskService";
import { Estados, Tarea } from "../../types/Task";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { toast } from "react-toastify";

const TaskDetail = () => {
  //Aquí se guardará nuestra tarea
  const [task, setTask] = useState<Tarea>();

  const [taskStatus, setTaskStatus] = useState<Estados>();

  //Extraemos state de useLocation, va a tener todos los parametros
  const { state } = useLocation();
  //Extraemos el id de state
  const { id } = state;
  const navigate = useNavigate();
  useEffect(() => {
    //Buscamos la tarea en nuestra base de datos
    const fetchTask = async () => {
      const _task = await TasksService.getTarea(id);
      if (_task.id) {
        setTask(_task);
        setTaskStatus(_task.estado);
      }
    };

    //Ejecutamos la función
    fetchTask();
  }, [id]);

  //Handle para eliminar la tarea

  const handleDeleteTask = async (): Promise<void> => {
    try {
      if (task?.id) {
        await TasksService.deleteTask(task.id);

        toast.success(`Tarea se ha eliminado correctamente`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        navigate("/");
      }
    } catch (error) {
      toast.error(`Error al eliminar la tarea, ${error}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
  };

  //Handle para actualizar la tarea
  const handleUpdate = async (): Promise<void> => {
    try {
      if (task?.id) {
        await TasksService.updateTarea(task.id, {
          ...task,
          estado: taskStatus as Estados,
        });

        toast.success(`Tarea se ha actualizado correctamente`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(`Error al actualizar la tarea, ${error}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
  };

  return task ? (
    <div className="m-5 d-flex justify-content-center">
      <Row>
        <Col xs={12}></Col>
      </Row>

      <Row>
        <Col xs={4}>
          <Image style={{ width: "100%" }} src={task.imagen} />
        </Col>
        <Col xs={8}>
          <h3 className="fs-1">{task.titulo}</h3>
          <p className="lead">{task.descripcion}</p>
          <p>Tiempo: {task.tiempo}</p>
          <p>Responsable: {task.responsable}</p>

          <div className="d-flex gap-2 mr-5">
            <Form.Select
              size="sm"
              name="estado"
              value={taskStatus}
              onChange={(e) => setTaskStatus(e.target.value as Estados)}
            >
              <option value={"PORHACER"}>Por hacer</option>
              <option value={"ENPRODUCCION"}>En producción</option>
              <option value={"PORTESTEAR"}>Por testear</option>
              <option value={"COMPLETADA"}>Completadas</option>
            </Form.Select>

            <Button value={task.estado} onClick={handleUpdate}>
              Cambiar
            </Button>

            {/* Boton eliminar tarea */}

            <Button variant="outline-danger" onClick={handleDeleteTask}>
              <i className="bi bi-trash"></i>
            </Button>
            {/* Boton salir */}
            <Button variant="danger" onClick={() => navigate("/")}>
              Salir
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  ) : (
    <p>Cargando...</p>
  );
};

export default TaskDetail;
