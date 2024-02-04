import React from "react";
import Room from "../../components/Room";

const Rooms = () => {
  return (
    <div className="background">
    <main>
      {/* <!-- our gallery --> */}
      <section className="gallery py-5">
        <div className="container">
          <h3 className=" mb-4">
            <p className="text-uppercase text-dark text-decoration-none ls-3 text-muted">
             اتاق های موجود
            </p>
          </h3>
          <Room />
        </div>
      </section>
      {/* <!-- our gallery --> */}
    </main>
    </div>
  );
};

export default Rooms;
