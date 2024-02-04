import React from "react";
import hotel2 from "../../assets/img/16.jpg";


const Checkout = () => {
  return (
    <div className="background">
    <main>
      <section className="checkout py-5">
        <div className="container">
          <h2 className="card-title ls-3 py-4">نتایج بررسی</h2>
          <div className="row">
            <div className="col-md-6 p-4">
              <div className="card border-0">
                <img src={hotel2} className="card-img-top" alt="" />
                <div className="card-body px-0">
                  <h2 className="card-title ls-3">قیمه</h2>
                  <p className="card-text mb-0">تعداد سفارش: 4</p>
                  <p className="card-text mb-0">قیمت: 2/000/000 ریال </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-4">
              <form action="/confirm">
                <div className="mb-3">
                  <label for="name" className="form-label">
                    نام
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    ایمیل
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label for="address" className="form-label">
                    آدرس
                  </label>
                  <textarea className="form-control" id="address"></textarea>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label for="checkin" className="form-label">
                       تاریخ تحویل
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="checkin"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label for="cardnumber" className="form-label">
                        شماره کارت
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cardnumber"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label for="expiration" className="form-label">
                       تاریخ انقضاء
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="expiration"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label for="cvv" className="form-label">
                        CV2
                      </label>
                      <input type="text" className="form-control" id="cvv" />
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <button type="submit" className="btn btn-orange mt-4">
                    تکمیل فرایند
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
};

export default Checkout;
