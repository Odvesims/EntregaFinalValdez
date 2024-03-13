import { NavItem, NavLink, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cartItemsCount } = useContext(CartContext);

  return (
    <NavItem className="mr-auto">
      <NavLink to="cart">
        <FaShoppingCart className="cart-icon" size={24} />
        <Badge pill variant="danger" className="ml-1">
          {JSON.stringify(cartItemsCount)}
        </Badge>
      </NavLink>
    </NavItem>
  );
};
export default CartWidget;
