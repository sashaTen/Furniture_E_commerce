const MarcosCollection = (props) => {
  const items = props.items;
  let macrosList = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].company === "marcos") {
      macrosList.push(items[i]);
    }
  }

  console.log(macrosList);

  return (
    <div className="marcosContainer">
      <section className="marcosGreeting">
        <h3> new design from marcos collection </h3>
        <p className="greyColor">
          Visit our shop to see amazing creations from our designers.
        </p>
      </section>
      <div className="marcosProductsContainer">
        {macrosList.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </div>
  );
};

export default MarcosCollection;
