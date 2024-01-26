import { NavItem, NavLink } from 'react-bootstrap';

function NavBarCategory({ categoryName, categoryPath }) {
  return (
    <NavItem className="mr-auto">
      <NavLink to={categoryPath}>{categoryName}</NavLink>
    </NavItem>
  );
}
export default NavBarCategory;
