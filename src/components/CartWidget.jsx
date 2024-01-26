import { NavLink, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget({ itemsCount }) {
  return (
    <NavLink to="cart" className="mr-auto">
      <FaShoppingCart className="cart-icon" size={24} />
      <Badge pill variant="danger" className="ml-1">
        {itemsCount}
      </Badge>
    </NavLink>
  );
}
export default CartWidget;
