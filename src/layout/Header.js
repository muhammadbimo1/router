import { NavLink } from "react-router-dom"
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap"

const Header = () => {
    return (
        <>
        <Navbar dark color="primary" className="shadow mb-4">
            <NavbarBrand className="mr-auto">Hello</NavbarBrand>
        </Navbar>
        </>
    )
}

export default Header;