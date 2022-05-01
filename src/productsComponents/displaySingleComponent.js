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
      <img src={image} />
      <p>{price / 10}$</p>
    </div>
  );
};

export default SingleItem;
