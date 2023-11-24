import { MDBFooter, MDBContainer, MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function Footer() {
  return (
    <div>
      <MDBFooter className="fixed-bottom bg-white text-center text-dark mt-5">
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            <MDBBtn
              outline
              color="dark"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="facebook" />
            </MDBBtn>

            <MDBBtn
              outline
              color="dark"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              outline
              color="dark"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn
              outline
              color="dark"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="dark"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              outline
              color="dark"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div className="text-center p-3" style={{ backgroundColor: "#f5f5f5" }}>
          © 2023 Copyright: Silvia Giardini
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
