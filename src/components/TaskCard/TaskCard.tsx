import { Tarea } from "../../types/Task";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

interface Props {
  task: Tarea;
}

const TaskCard = ({ task }: Props) => {
  //Instancia de useNavigate para redirigir a otra pantalla
  const navigate = useNavigate();

  //Extraemos todos los datos que vamos a utilizar de nuestro objeto mediante destructuring
  const { id, imagen, descripcion, titulo, estado } = task;

  return (
    <Card className="m-3" style={{ width: "300px", height: "500px" }}>
      <Card.Img
        variant="top"
        src={imagen}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column pb-1">
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
      </Card.Body>
      <div style={{ fontSize: "10px" }}>
        <Card.Text>{estado}</Card.Text>
      </div>
      <Card.Footer className="text-center">
        <Button
          className="align-self-center pb-1"
          variant="dark"
          onClick={() =>
            navigate("/task", {
              state: {
                id,
              },
            })
          }
        >
          Ver más
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default TaskCard;
