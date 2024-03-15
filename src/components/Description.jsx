const Description = ({ item }) => {
  return (
    <div>
      <div className="card-img">
        <img className="img-detail" src={item.image} />
      </div>
      <div className="card-header">
        <h5 className="card-title">{item.title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{item.description}</p>
      </div>
      <div className="card-footer">
        <b>Price: </b>
        {item.price}
      </div>
    </div>
  );
};
export default Description;
