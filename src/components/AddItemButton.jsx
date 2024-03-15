const AddItemButton = ({
  setItemInCart,
  itemId,
  itemName,
  itemDescription,
  itemCount,
  itemImage,
  itemPrice,
  itemUrlKey,
}) => {
  const addItem = () => {
    setItemInCart(
      {
        id: itemId,
        url_key: itemUrlKey,
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
