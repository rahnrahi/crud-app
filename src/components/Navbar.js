import {Navbar, Container, Nav} from "react-bootstrap";
function Header() {
    return ( 
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
     );
}

export default Header;