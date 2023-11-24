import * as Yup from "yup";
import { useFormik } from "formik";
import { Tarea } from "../../types/Task";
import { TasksService } from "../../services/TaskService";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AddTask.css";
import { toast } from "react-toastify";
const AddTasks = () => {
  //Valores iniciales de nuestro formulario
  const task: Tarea = {
    titulo: "",
    descripcion: "",
    imagen: "",
    estado: "PORHACER",
    responsable: "",
    tiempo: 0,
  };

  const navigate = useNavigate();
  //Función onSubmit que se va a ejecutar cuando enviemos nuestro formulario
  const onSubmit = async (values: Tarea) => {
    const res = await TasksService.createTarea(values);
    if (res.id) {
      formik.resetForm();

      toast.success("La tarea se agregó correctamente", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2500,
      });
      navigate("/?status=PORHACER");
    }
  };

  //Objeto Yup
  const validationSchema = Yup.object().shape({
    titulo: Yup.string().required("El titulo es requerido"),
    imagen: Yup.string().required("La URL de la imagen es requerida"),
    descripcion: Yup.string().required("La descripcion es requerida"),
    tiempo: Yup.number()
      .min(1, "El tiempo mínimo es 1")
      .required("El tiempo es requerido"),
    responsable: Yup.string().required("El responsable es requerido"),
    estado: Yup.string().required("El estado es requerido"),
  });

  //Objeto Formik
  const formik = useFormik({
    validationSchema,
    onSubmit,
    initialValues: task,
  });

  return (
    <>
      <Container className="d-flex justify-content-center mt-5 container-form">
        <Form onSubmit={formik.handleSubmit} className="w-50">
          <Form.Group controlId="titulo">
            <Form.Label>Título</Form.Label>
            <Form.Control
              name="titulo"
              type="text"
              value={formik.values.titulo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(formik.errors.titulo && formik.touched.titulo)}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.titulo}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="descripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              name="descripcion"
              type="text"
              value={formik.values.descripcion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(
                formik.errors.descripcion && formik.touched.descripcion
              )}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.descripcion}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="tiempo">
            <Form.Label>Tiempo (días)</Form.Label>
            <Form.Control
              name="tiempo"
              type="number"
              value={formik.values.tiempo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(formik.errors.tiempo && formik.touched.tiempo)}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.tiempo}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="imagen">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              name="imagen"
              type="text"
              value={formik.values.imagen}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(formik.errors.imagen && formik.touched.imagen)}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.imagen}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="responsable">
            <Form.Label>Responsable</Form.Label>
            <Form.Control
              name="responsable"
              type="text"
              value={formik.values.responsable}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(
                formik.errors.responsable && formik.touched.responsable
              )}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.responsable}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="estado">
            <Form.Label>Estado</Form.Label>
            <Form.Select
              name="estado"
              value={formik.values.estado}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(formik.errors.estado && formik.touched.estado)}
            >
              <option value={"PORHACER"}>Por hacer</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {formik.errors.estado}
            </Form.Control.Feedback>
          </Form.Group>
          <Button className="w-100 mt-2" type="submit">
            <i className="bi bi-plus"></i> Agregar
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddTasks;
