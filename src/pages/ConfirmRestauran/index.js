import React from "react";
import { Link } from "react-router-dom";
import "../scss/_form-control.scss";
import "../css/bootstrap.css";
import "../scss/_utilities.scss";

const Confirm = () => {
  return (
    <div className="background">
    <main>
      <section className="confirm py-5">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
              تایید سفارش
              </h2>
              <hr />
              <div className="row">
                <div className="col-sm-6">
                  
                  <p>
                    <strong>نوع غذا:</strong> قیمه 
                  </p>
                  <p>
                    <strong>تعداد سفارش:</strong> 4 پرس
                  </p>
                </div>
                <div className="col-sm-6">
                  <p>
                    <strong>نام: فاطمه خادمی </strong> 
                  </p>
                  <p>
                    <strong>test@test.com :ایمیل </strong> 
                  </p>
                  <p>
                    <strong>شماره همراه:  +98-999999999</strong>
                  </p>
                </div>
              </div>
              <hr />
              <div className="text-center">
                <p className="mb-4">
                .از اینکه هتل ما را برای اقامت خود انتخاب کردید سپاسگزاریم
                ما مشتاق دیدار شما هستیم
                </p>
                <Link to="/" className="btn btn-orange">
                  بازگشت به صفحه اصلی 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
};

export default Confirm;
