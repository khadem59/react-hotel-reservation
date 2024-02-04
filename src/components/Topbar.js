import React from "react";

const Topbar = () => {
  return (
    <div className="background2"> 
    <section className="topbar bg-dark py-2 border-bottom border-dark">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0 text-white">
          اراک ، تقاطع چمران و ولي‌عصر، هتل فاطیما:{" "}
            <a
              href="tel:  08633446677"
              className="text-white text-decoration-none"
            >
              08633446677
            </a>
          </p>
          <p className="mb-0">
            <a href="/" className="text-decoration-none text-white">
              ENG
            </a>{" "}
            |
            <a href="/" className="text-decoration-none text-white">
              FA
            </a>
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Topbar;
