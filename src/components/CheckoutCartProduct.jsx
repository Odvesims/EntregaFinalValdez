const CheckoutCartProduct = ({ name, count, total }) => {
  return (
    <li className="list-group-item d-flex justify-content-between lh-sm">
      <div>
        <h6 className="my-0">
          {name} ({count})
        </h6>
      </div>
      <span className="text-body-secondary">${total}</span>
    </li>
  );
};
export default CheckoutCartProduct;
