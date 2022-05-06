const About = () => {
  const imgUrls = [
    "https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg",
    "https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.78991864.jpeg"
  ];
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutOrangaContainer"></div>
        <img className="aboutImg" src={imgUrls[0]} />
        <img className="aboutImg2" src={imgUrls[1]} />
        <section className="aboutSection">
          <h3> about us </h3>
          <p className="aboutDescription">
            Here I was, interviewing the architect Witold Rybczynski about his
            new book, an appreciation of the chair and its 5,000-year history,
            and I was doing it from a standing desk. Nearby, I had a perfectly
            tolerable chair, with snazzy features like a mesh-fabric seat,
            pneumatic seat-height adjustment, and polyurethane armrests. But it
            wasn’t looking so appealing, perhaps because the
          </p>
        </section>
      </div>
    </>
  );
};

export default About;
