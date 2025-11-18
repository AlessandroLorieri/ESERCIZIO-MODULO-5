
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../../assets/Logo.png'
import'./MyNav.css'


const MyNav = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid className='px-5'>

            <Navbar.Brand href='#'>
                <img
                    src={Logo}
                    alt='EpiBooks logo'
                    className="logo-img d-inline-block align-top me-2"

                />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='main-navbar' />

            <Navbar.Collapse id="main-navbar">

                <Nav className='me-auto'>
                    <Nav.Link href='#'>Home</Nav.Link>
                    <Nav.Link href='#'>About</Nav.Link>
                    <Nav.Link href='#'>Browse</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Container>

    </Navbar>
)

export default MyNav