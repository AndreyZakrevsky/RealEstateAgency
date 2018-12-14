import React, { Component } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';


class Header extends Component {
	render() {
		return (
			<header>
				<Navbar inverse collapseOnSelect className="navbar">
					<Navbar.Header className="navbar_header">
						<Navbar.Brand className="navbar_header_brand">
							<Link to="/">Estate Agency</Link>
						</Navbar.Brand>
						</Navbar.Header>
						<Navbar.Toggle className="navbar_toggle" />
						<Navbar.Collapse>
						<Nav pullRight className="nav_menu">
							<NavItem eventKey={1} componentClass={Link} href="/" to="/" className="nav_menu_item">
								Home
										</NavItem>
							<NavItem eventKey={2} componentClass={Link} href="/about" to="/about" className="nav_menu_item">
								About
										</NavItem>
							<NavItem eventKey={3} componentClass={Link} href="/contacts" to="/contacts" className="nav_menu_item">
								Contacts
										</NavItem>
							<NavItem eventKey={3} componentClass={Link} href="/brokers" to="/brokers" className="nav_menu_item">
								Brokers
										</NavItem>
							<NavDropdown eventKey={4} title="Realty" id="basic-nav-dropdown" className="nav_menu_item">
									<MenuItem eventKey={4.1} componentClass={Link} href="/about" to="/about">gggggggggg</MenuItem>
									<MenuItem eventKey={4.2}>Another action</MenuItem>
									<MenuItem eventKey={4.3}>Something else here</MenuItem>
									<MenuItem divider />
							</NavDropdown>
							<NavItem eventKey={5} componentClass={Link} href="#" to="/about" className="nav_menu_item">
								Login
							</NavItem>
							<NavItem eventKey={6} componentClass={Link} href="#" to="/about" className="nav_menu_item">
								Register
							</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>;
			</header>
		);
	}
}

export default Header;

