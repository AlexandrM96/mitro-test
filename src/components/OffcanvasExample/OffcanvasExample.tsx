import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link, useNavigate} from "react-router-dom";

export default function OffcanvasExample() {
  return (
    <>
        <Navbar bg="light" expand='false' className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Александр</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  <div className='d-flex flex-column align-items-center'>
                    <div className='w-50'>
                      <img className='w-100' src='/images/user2.png' alt='user2'/>
                    </div>
                    <div>Александр</div>
                    <div>141214</div>
                    <div>super.dwtd2013@yandex.ru</div>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">
                    <Link to='/'>Список постов</Link>
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    <Link to='/about-me'>Обо мне</Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}