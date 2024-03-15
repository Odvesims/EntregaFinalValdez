const AddItemButton = ({
  setItemInCart,
  itemId,
  itemName,
  itemDescription,
  itemCount,
  itemImage,
  itemPrice,
}) => {
  const addItem = () => {
    setItemInCart(
      {
        id: itemId,
        name: itemName,
        description: itemDescription,
        image: itemImage,
        price: itemPrice,
      },
      itemCount
    );
  };
  return (
    <button className="btn btn-primary" onClick={addItem}>
      Add to cart
    </button>
  );
};
export default AddItemButton;
