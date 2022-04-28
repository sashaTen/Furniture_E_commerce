const Category = (props) => {
  const items = props.items;
  let categories = [];
  for (let i = 0; i < items.length; i++) {
    categories.push(items[i].category);
  }
  //let uniqueChars = [...new Set(chars)];
  let uniqueCategories = [...new Set(categories)];
  console.log(uniqueCategories);

  return (
    <div className="categoryContainer">
      {uniqueCategories.map((item, index) => {
        return <p key={item}>{item}</p>;
      })}
    </div>
  );
};

export default Category;
