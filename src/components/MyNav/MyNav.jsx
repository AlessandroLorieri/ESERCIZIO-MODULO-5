
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../../assets/Logo.png'
import './MyNav.css'
import Form from 'react-bootstrap/Form'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext/ThemeContext'


const MyNav = ({ searchQuery, onSearchChange }) => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
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

                    <div className="ms-auto d-flex align-items-center gap-4">
                        <Form className='d-flex'>
                            <Form.Control
                                type='search'
                                placeholder='Cerca per titolo...'
                                className='ms-lg-3'
                                value={searchQuery}
                                onChange={(e) => onSearchChange(e.target.value)}
                            />
                        </Form>

                        <button
                            type="button"
                            className={`btn btn-sm ${theme === "light" ? "btn-outline-light" : "btn-outline-warning"
                                }`}
                            onClick={toggleTheme}
                        >
                            {theme === "light" ? "Dark" : "Light"}
                        </button>
                    </div>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}

export default MyNav