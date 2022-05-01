const SingleItem = (props) => {
  const {
    name,
    description,
    image,
    price,
    company,
    category,
    shipping
  } = props;
  return (
    <div className="singleItemContainer">
      <p>{name}</p>
      <img className="itemImg" src={image} />
      <p>{price / 100}$</p>
    </div>
  );
};

export default SingleItem;
