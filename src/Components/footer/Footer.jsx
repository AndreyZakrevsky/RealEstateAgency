import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
import { Navbar, Nav, NavItem  } from 'react-bootstrap';


class Footer extends Component {
  render() {
    return (
      <footer>     
					<Navbar inverse collapseOnSelect className="navbar_footer">
						<Nav  className="navbar_footer_menu">
								<NavItem  eventKey={1} componentClass={Link} href="/" to="/" className="navbar_footer_menu_item">
										Home
								</NavItem>
								<NavItem eventKey={2} componentClass={Link} href="/about" to="/about" className="navbar_footer_menu_item">
										About
								</NavItem>
								<NavItem eventKey={3} componentClass={Link} href="/contacts" to="/contacts" className="navbar_footer_menu_item"> 
									Contacts
								</NavItem>
						</Nav>
				 </Navbar>
				<div className="footer_end">
						<p className="footer_end_req">© 2018 Estate Agency. All rights reserved </p>
				</div>
      </footer>
    );
  }
}

export default Footer;