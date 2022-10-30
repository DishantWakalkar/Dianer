
import { Navbar, Container } from 'react-bootstrap';
import logo from '../assets/Logo.png';
function BrandExample() {
  return (
    <>
      <Navbar bg="black" variant="black">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="90"
              height="30"
              className="d-inline-block align-center"
              style={{flexDirection:'column'}}
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;