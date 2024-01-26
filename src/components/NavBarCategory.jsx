import { NavLink } from 'react-bootstrap';

function NavBarCategory({ categoryName, categoryPath }) {
  return (
    <NavLink to={categoryPath} className="mr-auto">
      {categoryName}
    </NavLink>
  );
}
export default NavBarCategory;
