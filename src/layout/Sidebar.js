import { NavLink } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"

const Sidebar = () => {
    return (
        <>
            <Nav vertical >
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/products">Product</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/customers">Customer</NavLink>
                </NavItem>
            </Nav>
        </>
    )
}

export default Sidebar;