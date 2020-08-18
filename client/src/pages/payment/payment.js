import React, { Fragment } from "react";
import "./payment.css";

const Payment = () => {
  return (
    <Fragment>
      <div className="payment-delivery">
        <h1 className="main-heading heading">Payment Method</h1>
        <div className="row tabs-row">
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col 3">
                <a className="tab-option active white-text" href="#payment">
                  Payment
                </a>
              </li>
              <li className="tab col 3">
                <a className="tab-option white-text" href="#delivery">
                  Delivery
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="payment" className="payment-container col s12">
        <h4 className="sub-heading heading">Payment</h4>
        <form action="#">
          <p className="option">
            <label>
              <input name="group1" type="radio" />
              <span>
                <i class="material-icons">credit_card</i> Credit/Debit
              </span>
            </label>
          </p>
          <p className="option">
            <label>
              <input name="group1" type="radio" />
              <span>
                <img
                  src="https://img.icons8.com/metro/26/000000/paypal.png"
                  alt="paypal"
                />{" "}
                Paypal
              </span>
            </label>
          </p>
        </form>
        <a href="#delivery" className="black btn white-text">
          Next
        </a>
      </div>

      <div id="delivery" className="delivery-container col s12">
        <h4 className="sub-heading heading">Delivery</h4>
        <form>
          <p className="option">
            <label>
              <input name="group2" type="radio" />
              <span>
                <i className="material-icons">local_shipping</i> Delivery
              </span>
              <span> Address </span>
              <input className="address" type="text"></input>
            </label>
          </p>
          <p className="option">
            <label>
              <input name="group2" type="radio" />
              <span>
                <i className="material-icons">store</i> Store Pickup
              </span>
            </label>
          </p>
        </form>
        <a href="/ThankYou" className="black btn white-text">
          Confirm
        </a>
      </div>
    </Fragment>
  );
};

export default Payment;
