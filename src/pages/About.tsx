import "../assets/styles/about.css";

const About = () => {
  return (
    <div className="about">
      <h1>A tiny catalog, on purpose.</h1>
      <p>
        This is a small product guide built for the five-minute gaps in a
        student day. It is not trying to become a warehouse.
      </p>

      <div className="about-grid">
        <div className="about-card dark">
          <h3>Simulated, not secret.</h3>
          <p>
            The catalog is powered by a small local service module. It returns
            product data with a short artificial delay, just like a real backend
            would, without needing an account, database, or network connection.
          </p>
        </div>

        <div className="about-card amber">
          <h3>Arrays do the work.</h3>
          <p>
            Search uses filter, sorting uses sort, and the shelf is rendered
            with map. The interface makes those everyday JavaScript methods feel
            useful.
          </p>
        </div>

        <div className="about-card light">
          <h3>Small choices matter.</h3>
          <p>
            Every card tells you the useful bit first: what it is, why it
            belongs on campus, and what it costs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
