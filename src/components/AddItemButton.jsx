const AddItemButton = ({ setItemInCart, itemId, itemCount }) => {
  const addItem = () => {
    setItemInCart({ id: itemId }, itemCount);
  };
  return (
    <button className="btn btn-primary" onClick={addItem}>
      Agregar
    </button>
  );
};
export default AddItemButton;
