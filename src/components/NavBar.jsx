import NavBarCategory from './NavBarCategory';
import CartWidget from './CartWidget';
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
} from 'react-bootstrap';

function NavBar({ appName, categories }) {
  return (
    <Navbar bg="light" expand="lg" display="flex">
      <NavbarBrand href="#home">{appName}</NavbarBrand>
      <NavbarToggle aria-controls="basic-navbar-nav" />
      <NavbarCollapse id="basic-navbar-nav" className="justify-content-between">
        <Nav className="mr-auto">
          {categories.map(({ id, name, path }) => {
            return (
              <NavBarCategory
                key={id}
                categoryName={name}
                categoryPath={path}
              />
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
