import React from "react";

function Cart() {
  return (
    <div>
      <h3>Your Cart (7)</h3>

      <ul>
        <li>
          <div>
            <span>Classic Tiramisu</span>
            <div>
              <span>1x</span>
              <span>@ $5.50</span>
              <span>$5.50</span>
            </div>
          </div>

          <button>
            <img src="/images/icon-remove-item.svg" alt="" />
          </button>
        </li>
        <li>
          <div>
            <span>Vanilla Bean Creme Brulee</span>
            <div>
              <span>4x</span>
              <span>@ $7.00</span>
              <span>$28.00</span>
            </div>
          </div>

          <button>
            <img src="/images/icon-remove-item.svg" alt="" />
          </button>
        </li>
        <li>
          <div>
            <span>Vanilla Panna Cotta</span>
            <div>
              <span>2x</span>
              <span>@ $6.50</span>
              <span>$13.00</span>
            </div>
          </div>

          <button>
            <img src="/images/icon-remove-item.svg" alt="" />
          </button>
        </li>
      </ul>

      <hr />

      <div>
        <p>Order Total</p>
        <span>$46.50</span>
      </div>

      <div>
        <img src="/images/icon-carbon-neutral.svg" alt="" />
        <p>
          This is a <strong>carbon-neutral</strong> delivery
        </p>
      </div>

      <button>Confirm Order</button>
    </div>
  );
}

export default Cart;
