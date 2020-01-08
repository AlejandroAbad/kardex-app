import React, {useState} from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { MdBuild, MdKeyboardArrowRight } from 'react-icons/md';
import OptionsModal from 'components/OptionsModal';




const Navigation = (props) => {

    const [optionsModalShow, setOptionsModalShow] = useState(false);

    const optionsAccepted = (options) => {
        props.onOptionsChanged(options);
        setOptionsModalShow(false);
    }

    const optionsCancel = () => {
        setOptionsModalShow(false);
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand >Kardex Santomera</Navbar.Brand>
            <Navbar.Brand className='d-none d-lg-inline-block'><MdKeyboardArrowRight /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/articulos"><Nav.Link>Articulos</Nav.Link></LinkContainer>
                    <LinkContainer to="/ubicaciones"><Nav.Link>Ubicaciones</Nav.Link></LinkContainer>
                </Nav>
                <Nav>
                    <Nav.Link onClick={() => setOptionsModalShow(true)}><MdBuild size='26px'/></Nav.Link>
                    <OptionsModal baseUrl={props.baseUrl} show={optionsModalShow} onCancel={optionsCancel} onAccept={optionsAccepted} />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}



export default Navigation;