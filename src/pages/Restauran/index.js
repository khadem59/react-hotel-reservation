import React from "react";
import Restauran from "../../components/Restauran";

const Restaurans = () => {
  return (
    <div className="background">
    <main>
      {/* <!-- our gallery --> */}
      <section className="gallery py-5">
        <div className="container">
          <h3 className=" mb-4">
            <p className="text-uppercase text-dark text-decoration-none ls-3 text-muted">
             غذاهای موجود
            </p>
          </h3>
          <Restauran/>
        </div>
      </section>
      {/* <!-- our gallery --> */}
    </main>
    </div>
  );
};

export default Restaurans;
