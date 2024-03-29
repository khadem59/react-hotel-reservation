import React from "react";
import { Link } from "react-router-dom";
import reservationData from "../../components/restaurantreservationData";

const Reservation = () => {
  return (
    <div className="background">
    <main>
      <section className="reservation py-5">
        <div className="container">
          <div className="text-center">
            <h3 className="">
              <p className="text-uppercase text-dark text-decoration-none ls-3 text-muted">
                رزرو
              </p>
            </h3>
            <h5>غذاها حاضر و آماده سرو هستند</h5>
          </div>

          {reservationData.map((data) => (
            <div className="card bg-white rounded overflow-hidden mt-5">
              <div className="row">
                <div className="col-md-2 p-0">
                  <img
                    src={data.img}
                    className="img-fluid h-100 w-100"
                    alt=""
                  />
                </div>
                <div className="col-md-6 p-3 m-auto">
                  <h3>{data.name}</h3>
                  <p className="text-warning">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <a href="/" className="text-primary text-decoration-none">
                      ({data.noOfReviews} Reviews)
                    </a>
                  </p>
                  <div className="d-flex mb-2 justify-content-start align-items-center hotel-icons text-muted">
                    <span className="d-inline-block me-3">
                      <i className="fa fa-bed"></i> {data.bed}
                    </span>
                    <span className="d-inline-block me-3">
                      <i className="fa fa-toilet"></i> {data.toilet}
                    </span>
                    <span className="d-inline-block me-3">
                      <i className="fa fa-users"></i> {data.users}
                    </span>
                  </div>
                  <p className="mb-0">{data.desc}</p>
                </div>
                <div className="col-md-3 text-end offset-md-1 p-3 m-auto">
                  <p>
                   قیمت
                    <span className="fw-bold text-success">ریال{data.price}</span>
                  </p>
                  <Link to="/checkoutrestauran" className="btn btn-success rounded-0">
                    غذا را انتخاب کنید
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* <!-- hotel list --> */}
        </div>
      </section>
    </main>
    </div>
  );
};

export default Reservation;
