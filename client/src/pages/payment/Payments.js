import React, { Fragment } from "react";
import "./payment.css";

const Payment = () => {
  return (
    <Fragment>
      <div className="payment-container">
        <h1 className="main-heading heading">Payment Method</h1>
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col 3">
                <a className="active" href="#payment">
                  Payment
                </a>
              </li>
              <li className="tab col 3">
                <a href="#delivery">Delivery</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="payment" classname="payment-container col s12">
        <h4 className="sub-heading heading">Payment</h4>
        <form action="#">
          <p>
            <label>
              <input name="group1" type="radio" />
              <span>
                <i class="material-icons">credit_card</i> Credit/Debit
              </span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" />
              <span>
                <img
                  src="https://img.icons8.com/color/48/000000/paypal.png"
                  alt="Paypal"
                />
                Paypal
              </span>
            </label>
          </p>
        </form>
      </div>

      <div id="delivery" className="delivery-container col s12">
        <h4 className="sub-heading heading">Delivery</h4>
        <form>
          <p>
            <label>
              <input name="group2" type="radio" />
              <span>
                <i class="material-icons">local_shipping</i> Delivery
              </span>
            </label>
          </p>
          <p>
            <label>
              <input name="group2" type="radio" />
              <span>
                <i className="material-icons">store</i> Store Pickup
              </span>
            </label>
          </p>
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;
