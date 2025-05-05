import React from "react";

function Order() {
  return (
    <div>
      <div>
        <div>
          <img src="/images/icon-order-confirmed.svg" alt="" />

          <div>
            <h4>Order Confirmed</h4>
            <p>We hope you enjoy your food!</p>
          </div>
        </div>

        <div>
          <ul>
            <li>
              <div>
                <img src="/images/image-tiramisu-thumbnail.jpg" alt="" />

                <div>
                  <p>Classic Tiramisu</p>
                  <div>
                    <span>1x</span>
                    <span>@ $5.50</span>
                  </div>
                </div>
              </div>

              <span>$5.50</span>
            </li>

            <li>
              <div>
                <img src="/images/image-creme-brulee-thumbnail.jpg" alt="" />

                <div>
                  <p>Vanilla Bean Creme B...</p>
                  <div>
                    <span>4x</span>
                    <span>@ $7.00</span>
                  </div>
                </div>
              </div>

              <span>$28.00</span>
            </li>

            <li>
              <div>
                <img src="/images/image-panna-cotta-thumbnail.jpg" alt="" />

                <div>
                  <p>Vanilla Panna Cotta</p>
                  <div>
                    <span>2x</span>
                    <span>@ $6.50</span>
                  </div>
                </div>
              </div>

              <span>$13.00</span>
            </li>
          </ul>

          <hr />

          <div>
            <p>Order total</p>
            <span>$46.50</span>
          </div>
        </div>

        <button>Start New Order</button>
      </div>
    </div>
  );
}

export default Order;
