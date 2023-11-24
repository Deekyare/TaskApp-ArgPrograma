import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://img.freepik.com/foto-gratis/fondo-negro-plano-taza-cafe-portatil-vista-superior-calculadora_169016-36166.jpg?w=900&t=st=1700768193~exp=1700768793~hmac=4e99980d59322218e47e28360668eecf72f7865145952e98b9f9fa6197b1cd0c"
            alt="slide1"
            className="d black w-100"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Agregar y gestionar sus tareas</h3>
            <p>Usted puede agregar sus tareas futuras</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://img.freepik.com/foto-gratis/contemporaneo-lugar-trabajo-lugar-oficina-suministros-concepto_53876-31812.jpg?w=900&t=st=1700768272~exp=1700768872~hmac=ebe1b38e314a9b838a6472f4f816a3c6dff2fac6a3e295e2bf5bcf9b1c14210b"
            alt="slide2"
            className="d black w-100"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Estados</h3>
            <p>Elegir y cambiar el estado de cada una de sus tareas</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://img.freepik.com/foto-gratis/felices-jovenes-empresarios-asia-mujeres-negocios-que-reunen-intercambiar-ideas-sobre-nuevos-colegas-proyecto-papeleo-que-trabajan-juntos-planificacion-estrategia-exito-disfrutan-trabajo-equipo-pequena-oficina-moderna_7861-2535.jpg?w=900&t=st=1700768162~exp=1700768762~hmac=a441013718dd0ffe257d3987eb221b8f224be206681e2a728a96e90d1fe68af3"
            alt="slide3"
            className="d black w-100"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Eliminar tareas</h3>
            <p>Una vez finalizada cada tarea usted podra eliminarla.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselHome;
