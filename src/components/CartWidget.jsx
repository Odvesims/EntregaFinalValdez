import { NavItem, NavLink, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget({ itemsCount }) {
  return (
    <NavItem className="mr-auto">
      <NavLink to="cart">
        <FaShoppingCart className="cart-icon" size={24} />
        <Badge pill variant="danger" className="ml-1">
          {itemsCount}
        </Badge>
      </NavLink>
    </NavItem>
  );
}
export default CartWidget;
