import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';


class Footer extends Component {
  render() {
    return (
      <footer>
          
					<nav>
						<ul  className="m-menu">
							<li><a href="#" className="menu-link"><Link to="/">Home</Link></a></li>
							<li><a href="#" className="menu-link"><Link to="/about">About</Link></a></li>
							<li><a href="#" className="menu-link"><Link to="/contacts">Contacts</Link></a></li>
						</ul>
					</nav>
					<a href="#" className="m-menu-link">
						<i className="fa fa-bars"></i>
					</a>
      </footer>
    );
  }
}

export default Footer;