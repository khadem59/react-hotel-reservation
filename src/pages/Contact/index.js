import React from "react";
import { Link } from "react-router-dom";
import Gallery from "../../components/Gallery";
const Contact = () => {
  return (
    <div className="background">
      <main>
      <section className="contact py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="mb-4">
                <p className="text-uppercase text-dark text-decoration-none ls-3 text-muted">
                  ارتباط با ما
                </p>
              </h3>
              <form action="">
                <div className="mb-3">
                  <label for="name" className="form-label"> 
                    نام
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="نام خود را وارد نمائید"
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="ایمیل خود را وارد نمائید"
                  />
                </div>
                <div className="mb-3">
                  <label for="phone" className="form-label">
                    شماره همراه
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="شماره همراه خود را وارد نمائید"
                  />
                </div>
                <div className="mb-3">
                  <label for="message" className="form-label">
                  پیام
                  </label>
                  <textarea
                    name=""
                    id="message"
                    className="form-control"
                    rows="5"
                    placeholder="پیام خود را وارد نمائید"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark">
                  ثبت نام
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <h3 className="mb-4">
                <p className="text-uppercase text-dark text-decoration-none ls-3 text-muted">
                موقعیت مکانی
                </p>
              </h3>
              <div>
										<figure><iframe width="480" height="550" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://neshan.org/maps/@34.102444,49.748576,15z,0p/places/4a3fbbf0bdf203762ec73cadf66aea75"></iframe></figure>
							
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-3">
              <h3 className="mb-4">
                <p className="text-uppercase text-dark text-decoration-none ls-3 text-muted">
                  گالری
                </p>
              </h3>
              <Gallery />
            </div>
            <div className="col-md-6 p-3">
              <h3 className="mb-4">
                <p className="text-uppercase text-dark text-decoration-none ls-3 text-muted">
              اطلاعات تماس
                </p>
              </h3>
              <p className="lead">
               {" "}
                <a
                  href="mailto:test@test.com"
                  className="test-primary text-decoration-none"
                >
                  test@test.com  :ایمیل 
                </a>
              </p>
              <p className="lead">
              {" "}
                <a
                  href="tel:123456789"
                  className="test-primary text-decoration-none"
                >
                  123456789 :شماره همراه 
                </a>
              </p>
              <p className="lead">
               {" "}
                <Link
                  to="https://goo.gl/maps/4Z5Z9Z9Z9Z9Z9Z9Z9"
                  className="test-primary text-decoration-none"
                  target="_blank"
                >
                آدرس :  اراک، هتل فاطیما
                </Link>
              </p>
              <p className="lead">
              {" "}
                <Link
                  to="https://www.google.com/"
                  className="test-primary text-decoration-none"
                  target="_blank"
                >
                  www.google.com :وب سایت
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
};

export default Contact;
