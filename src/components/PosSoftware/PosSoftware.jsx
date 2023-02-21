import React from "react";
import "./possoftware.scss";
import posPackage from "../img/pos.jpg";

function PosSoftware() {
  return (
    <div>
      <div className="possoftware">
        <div className="container">
          <div className="post">
            <span>
              <h6>RLE POS Software</h6>
              <p>
                Transform the way you do business with POS - the all-in-one
                solution for automating your shop or store. With our intuitive,
                easy-to-use platform, you can now manage inventory and sales in
                one place, simplify basic accounting processes, and streamline
                customer experience - all from the comfort of your home. Get
                started today and let POS do all the work for you!
              </p>
              <div className="inquire">
                <button>Inquire Now</button>
              </div>
            </span>
            <img
              data-aos="flip-up"
              data-aos-duration="1000"
              src={posPackage}
              alt=""
            />
          </div>
          <div className="post-2">
            <div className="content-2">
              <h3>
                Express <br />
                (Stand-alone Setup)
              </h3>
              <ul>
                <li>Sales Monitoring</li>
                <li>Cashier's Report (X & Z Reading)</li>
                <li>Flexible Discount Features</li>
                <li>Inventory/Stocks Management</li>
              </ul>

              <div className="specs">
                <h2>Equipment</h2>

                <li>
                  <b>(Client/Server)</b>
                </li>
                <li>
                  Intel Core i3 or AMD Ryzen 3 PC (Desktop Set) with <br />
                  17"/19" Inches Monitor, <br />
                  ASUS/Gigabyte Motherboard, <br />
                  DDR3 4gb/8gb RAM, <br />
                  120gb/240gb/512gb SSD, <br />
                  600VA UPS
                </li>
                <li>Cash Drawer (5Bill - 5Coin)</li>
                <li>
                  Transaction Slip/Receipt Printer <br />
                  Options: Thermal/Dot Matrix Printer
                </li>
              </div>
            </div>
            <div className="content-2">
              <h3>
                Complete <br />
                (Network Setup)
              </h3>

              <li>Sales Monitoring</li>
              <li>Cashier's Report (X & Z Reading)</li>
              <li>Flexible Discount Features</li>
              <li>Inventory/Stocks Management</li>
              <li>
                Custom Barcode Printing
                <br />
                (Store/Company Brand - Logo)
              </li>
              <li>
                Suki/Loyalty Card Number and Pointing Features
                <br />
                (Accumulate and Redeem Rewards)
              </li>
              <li>
                Basic Accounting <br></br> (Accounts Receivables Monitoring)
              </li>

              <div className="specs">
                <h2>Equipment</h2>

                <li>
                  <b>(Client)</b>
                </li>
                <li>
                  Intel Core i3 or AMD Ryzen 3 PC (Desktop Set) with <br />
                  17"/19" Inches Monitor, <br />
                  ASUS/Gigabyte Motherboard, <br />
                  DDR3 4gb/8gb RAM, <br />
                  120gb/240gb/512gb SSD, <br />
                  600VA UPS
                </li>
                <li>Cash Drawer (5Bill - 5Coin)</li>
                <li>
                  Transaction Slip/Receipt Printer <br />
                  Options: Thermal/Dot Matrix Printer
                </li>

                <li>
                  <b>(Server)</b>
                </li>
                <li>
                  Desktop Set with <br />
                  9th/10th/11th Gen Intel Core i5 Processor, <br />
                  17"/19" Inches Monitor, <br />
                  DDR4 16gb RAM, <br />
                  512gb SSD, <br />
                  600VA UPS
                </li>

                <li>(Network Peripherals)</li>
                <li>Gigabit Router and Switch Hub</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PosSoftware;
