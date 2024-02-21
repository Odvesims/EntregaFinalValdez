import NavBarCategory from './NavBarCategory';
import CartWidget from './CartWidget';
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

function NavBar({ appName, categories }) {
  return (
    <Navbar bg="light" expand="lg" display="flex">
      <NavbarBrand as={Link} to="/">
        {appName}
      </NavbarBrand>
      <NavbarToggle aria-controls="basic-navbar-nav" />
      <NavbarCollapse id="basic-navbar-nav" className="justify-content-between">
        <Nav className="mr-auto">
          {categories.map(({ id, title }) => {
            return (
              <NavBarCategory key={id} categoryName={title} categoryPath={id} />
            );
          })}
        </Nav>
        <Nav className="float-right">
          <CartWidget itemsCount="5" />
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
}
export default NavBar;
