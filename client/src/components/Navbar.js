
import { Navbar, Container } from 'react-bootstrap';
import logo from '../assests/Logo.png';
function BrandExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="90"
              height="30"
              className="d-inline-block align-center"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;