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
import { useLoading } from '../context/LoadingContext';

const NavBar = ({ appName }) => {
  const { showError } = useErrorToast();
  const [categories, setCategories] = useState([]);
  const { setLoading } = useLoading();

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const itemsCategories = await apiRequest('getProductsCategories');
      itemsCategories.valid
        ? setCategories(itemsCategories.data)
        : showError(itemsCategories.message);
      setLoading(false);
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
