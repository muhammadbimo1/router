import { NavLink } from "react-router-dom"
import { Col, Nav, Navbar, NavbarBrand, NavItem, Row } from "reactstrap"
import AppRouters from "../routes/AppRouters";
import Header from "./Header";
import Sidebar from "./Sidebar";

const ColumnLayout = () => {
    return (
        <>
            <Row>
                <Col sm="12" className="p-0">
                    <Header/>
                </Col>
            </Row>
            <Row>
                <Col sm="4" md="3" lg="2" className="d-none d-sm-block">
                    <Sidebar/>
                </Col>
                <Col sm="8" mg="9" lg="10" className="d-none d-sm-block">
                    <AppRouters/>
                </Col>
            </Row>
        </>
    )
}

export default ColumnLayout;