const Company = (props) => {
  const items = props.items;
  let companies = [];
  for (let i = 0; i < items.length; i++) {
    companies.push(items[i].company);
  }
  let uniqueCompanies = [...new Set(companies)];

  console.log(uniqueCompanies);

  return (
    <div>
      {uniqueCompanies.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
};

export default Company;
