import React, { Component } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
          <div className="logo">
						<img src="img/Logo.png" alt="Логотип"/>
					</div>
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
      </header>
    );
  }
}

export default Header;