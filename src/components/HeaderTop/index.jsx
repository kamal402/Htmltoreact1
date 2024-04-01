import React from 'react'
import './index.css';
import { Container, Nav, NavDropdown, ListGroup, Navbar, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeaderTop = () => {
  return (
    <>
       <header id="header" className="header-main">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to='/home'>Forex Trading</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav as="ul">
                            <ListGroup.Item as="li" className='nav-item'>
                                <Link className='nav-link' to='/home'>Home</Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className='nav-item dropdown'>
                                <Link className='nav-link' to='/'>How Funding Works</Link>
                                <ListGroup as="ul">
                                    <ListGroup.Item as="li">
                                        <NavDropdown.Item href="#action3">Get Funded</NavDropdown.Item>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <NavDropdown.Item href="#action3">Surge Trader Audition</NavDropdown.Item>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <NavDropdown.Item href="#action3">Scaling Plan</NavDropdown.Item>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <NavDropdown.Item href="#action3">Trading Rules</NavDropdown.Item>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <NavDropdown.Item href="#action3">Tradable assets</NavDropdown.Item>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <NavDropdown.Item href="#action3">Technology</NavDropdown.Item>
                                    </ListGroup.Item>
                                </ListGroup>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className='nav-item'>
                                <Link className='nav-link' to='/home'>Learn Forex Trading</Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className='nav-item'>
                                <Link className='nav-link' to='/home'>FAQ</Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className='nav-item dropdown'>
                                <Link className='nav-link' to='/'>Resources</Link>
                                <ListGroup as="ul">
                                    <ListGroup.Item as="li">
                                        <NavDropdown.Item href="#action3">The Trader’s Corner Blog</NavDropdown.Item>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <NavDropdown.Item href="#action3">Trader Resources</NavDropdown.Item>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <NavDropdown.Item href="#action3">Trading Contest</NavDropdown.Item>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <NavDropdown.Item href="#action3">In the News</NavDropdown.Item>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <NavDropdown.Item href="#action3">BK Forex Membership</NavDropdown.Item>
                                    </ListGroup.Item>
                                </ListGroup>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className='nav-item dropdown'>
                                <Link className='nav-link' to='/'>About Us</Link>
                                <ListGroup as="ul">
                                    <ListGroup.Item as="li">
                                        <NavDropdown.Item href="#action3">Meet our founder</NavDropdown.Item>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <NavDropdown.Item href="#action3">SurgeTrader Team</NavDropdown.Item>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <NavDropdown.Item href="#action3">About-Surgetrader</NavDropdown.Item>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        <NavDropdown.Item href="#action3">Contact Us</NavDropdown.Item>
                                    </ListGroup.Item>
                                </ListGroup>
                            </ListGroup.Item>
                            <ListGroup.Item as="li" className='nav-item'>
                                <Link className='nav-link' to='/home'>Affiliate</Link>
                            </ListGroup.Item>
                        </Nav>
                        <div className='header-btns'>
                            <ListGroup as="ul" horizontal>
                                <ListGroup.Item as="li" >
                                    <div className='search-icon'>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M13.0001 4H19.0001M13.0001 7H16.0001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M20 10.5C20 15.75 15.75 20 10.5 20C5.25 20 1 15.75 1 10.5C1 5.25 5.25 1 10.5 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path opacity="0.4" d="M20.9999 21L18.9999 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" >
                                    <Link className='custom-btn outline-color-white' to={'/login'}>Get Funded</Link>
                                </ListGroup.Item>
                                <ListGroup.Item as="li" >
                                    <Link className='custom-btn fill-btn' to={'/login'}>Login</Link>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Navbar.Collapse>
                </Container>
                <div className='search-form'>
                    <Container>                        
                        <Form inline className='py-4'>
                            <div className='form-group'>
                                <Form.Control type="text" placeholder="Search" className=" mr-sm-2"/>
                            </div>
                        </Form>
                    </Container>
                </div>
            </Navbar>
        </header>
    </>
  )
}

export default HeaderTop;
