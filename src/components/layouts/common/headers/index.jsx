import React, { Component } from 'react';
import {
  Navbar,
  NavDropdown,
  Nav
  // Form,
  // FormControl,
  // Button
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      showSearch: false
    };
    this.onShowMenu = this.onShowMenu.bind(this);
    this.onShowSearch = this.onShowSearch.bind(this);
  }
  onShowMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }
  onShowSearch() {
    this.setState({
      showSearch: !this.state.showSearch
    });
  }

  render() {
    return (
      <header>
        <Navbar fixed="top" expand="md" className="bg-cl-white">
          <Navbar.Brand>
            {this.state.showSearch ? (
              <div className="navbar-input">
                <input type="text" placeholder="Cari" />
                {/* <FontAwesomeIcon icon={faSearch} className="iconSearch" /> */}
              </div>
            ) : (
              <Link to="/" className="">
                lojualguebeli
              </Link>
            )}
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <div className="navbar__icon left" onClick={this.onShowMenu}>
            <FontAwesomeIcon icon={this.state.showMenu ? faTimes : faBars} />
          </div>
          <div className="navbar__icon right" onClick={this.onShowSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          {/* <h1 clasName="haha" id="haha">haha</h1> */}
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={this.state.showMenu ? 'show' : ''}
          >
            <Nav className="mr-auto">
              <Nav>
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </Nav>
              <Nav>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </Nav>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
