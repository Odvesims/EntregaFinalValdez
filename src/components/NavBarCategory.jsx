import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBarCategory({ categoryName, categoryPath }) {
  return (
    <NavItem className="mr-auto">
      <Link className="nav-link" to={`category/${categoryPath}`}>
        {categoryName}
      </Link>
    </NavItem>
  );
}
export default NavBarCategory;
