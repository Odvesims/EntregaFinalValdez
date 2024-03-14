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
import { useState, useEffect } from 'react';

import { useErrorToast } from '../context/ErrorToastContext';
import { apiRequest } from '../utils/api';

const NavBar = ({ appName }) => {
  const { showError } = useErrorToast();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const itemsCategories = await apiRequest('getProductsCategories');
      console.log('categories', itemsCategories);
      itemsCategories.valid
        ? setCategories(itemsCategories.data)
        : showError(itemsCategories.message);
    };
    fetchCategories();
  }, [showError]);

  return (
    <Navbar bg="light" expand="lg" display="flex">
      <NavbarBrand as={Link} to="/">
        {appName}
      </NavbarBrand>
      <NavbarToggle aria-controls="basic-navbar-nav" />
      <NavbarCollapse id="basic-navbar-nav" className="justify-content-between">
        <Nav className="mr-auto">
          {categories &&
            categories.map(({ id, title, path }) => {
              return (
                <NavBarCategory
                  key={id}
                  categoryName={title}
                  categoryPath={path}
                />
              );
            })}
        </Nav>
        <Nav className="float-right">
          <CartWidget />
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
};
export default NavBar;
