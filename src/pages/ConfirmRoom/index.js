import React from "react";
import { Link } from "react-router-dom";

const Confirm = () => {
  return (
    <div className="background">
    <main>
      <section className="confirm py-5">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
              تایید رزرو
              </h2>
              <hr />
              <div className="row">
                <div className="col-sm-6">
                  <p>
                    <strong>تاریخ شروع:</strong> 15th March 2023
                  </p>
                  <p>
                    <strong>تاریخ پایان:</strong> 20th March 2023
                  </p>
                  <p>
                    <strong>نوع اتاق:</strong> اتاق دوبلکس
                  </p>
                  <p>
                    <strong>تعداد مهمان ها:</strong> بزرگسال 2و بچه 1
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
                از اینکه هتل ما را برای اقامت خود انتخاب کردید سپاسگزاریم
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
