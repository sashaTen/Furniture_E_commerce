const MarcosCollection = (props) => {
  const items = props.items;
  let macrosList = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].company === "marcos") {
      macrosList.push(items[i]);
    }
  }

  return (
    <div className="marcosContainer">
      <section className="marcosGreeting">
        <h3>
          {" "}
          new design from <span className="marcosFont">
            marcos
          </span> collection{" "}
        </h3>
        <p className="greyColor">
          Visit our shop to see amazing creations from our designers.
        </p>
      </section>
      <div className="marcosProductsContainer">
        {macrosList.map((item) => {
          return (
            <div className="singleMacrosItem" key={item.id}>
              <p>{item.name}</p>
              <img className="collectionImg" src={item.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarcosCollection;
