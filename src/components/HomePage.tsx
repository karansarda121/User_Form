import React from "react";
import "../styles/HomePage.css"; 

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Better (Prev: Jalan Technologies)</h1>
      </header>
      <main className="home-content">
        <section className="intro">
          <p>
            Better is an AI powered software development agency and builds web,
            mobile, and custom applications with solid engineering foundations.
            We are the preferred agency by top-notch entrepreneurs, enterprises,
            and venture-backed startups.
          </p>
        </section>
        <section className="contrast">
          <p>
            Unlike 99% of agency-built software that struggles with poor
            foundations, leading to costly rebuilds and bug-ridden iterations,
            we prioritize creating a rock-solid technical base from the start.
            This ensures smoother scaling and easier future development.
          </p>
        </section>
        <section className="experience">
          <p>
            Over the last 7 years, we've had the privilege of working with
            bootstrapped companies that have gone on to generate over $100M in
            revenue, as well as unicorns and startups backed by Techstars, top
            VCs like Andreessen Horowitz, and executives from industry giants
            like Apple and Google.
          </p>
        </section>
      </main>
      <footer className="home-footer">
        <p>© 2024 Better Software. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
