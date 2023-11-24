import Toast from "react-bootstrap/Toast";

function ComponentAlert({
  mensaje,
  handleClose,
}: {
  mensaje: string;
  handleClose: Function;
}) {
  return (
    <>
      {["Success", "Warning"].map((variant, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg={variant.toLowerCase()}
          key={idx}
          onClose={() => handleClose()}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
          </Toast.Header>
          <Toast.Body>{mensaje}</Toast.Body>
        </Toast>
      ))}
    </>
  );
}

export default ComponentAlert;
