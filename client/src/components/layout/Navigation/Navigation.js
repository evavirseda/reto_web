import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'
import logo from './logo.png'

const Navigation = () => {

    return (
        <Navbar bg="light" variant="light" expand="md" className="navbar">
            <Navbar.Brand>
                <img alt="logo" src={logo} width="30"
                    height="30"/>
            </Navbar.Brand>
            <Link to="/" className="navbarlink" >Catalog</Link>
        </Navbar >
    )
}

export default Navigation