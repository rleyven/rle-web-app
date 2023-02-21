import React from "react";
import "./home.scss";
import { FaHubspot } from "react-icons/fa";
import { DiJira } from "react-icons/di";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import Bg1 from "../img/bg1.jpg";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="contact">
          <div className="conDetails">
            Get in touch
            <div className="emailno">
              E-MAIL: info@rlesoftware.com
              <br></br>
              PHONE: (+63) 910 788 3160
            </div>
          </div>
        </div>
        <div className="container">
          <div className="containerHead">
            {/* <h6>Software Solutions Provider</h6> */}
            <h6>Expedite your business success with our solutions</h6>
          </div>
          <div className="content">
            <li className="link">
              <span>
                <FaHubspot className="icon" />
              </span>
              <h6>Software Integration</h6>
              <p>
                In this digital age, software integration is a key factor in
                business enhancement. It can help businesses to optimize their
                operations and increase efficiency. Software integration allows
                businesses to connect different applications and systems
                together, enabling them to access data from multiple sources in
                one place.
              </p>
              <br></br>
              <p>
                By leveraging software integration, businesses can improve their
                operations and gain a competitive edge in the market.
              </p>
            </li>

            <li className="link">
              <span>
                <DiJira className="icon" />
              </span>
              <h6>Benefits</h6>
              <p>
                Software is a powerful tool that can help businesses of all
                sizes to increase their efficiency and productivity. It can
                automate mundane tasks, provide insights into customer
                behaviour, and streamline operations. In addition, software also
                offers many other benefits such as improved collaboration,
                better decision-making capabilities, and enhanced customer
                service. By leveraging the right software solutions, companies
                can gain a competitive edge in their respective industries.
              </p>
            </li>

            <li className="link">
              <span>
                <RiMoneyDollarBoxFill className="icon" />
              </span>
              <h6>Investment</h6>
              <p>
                Investing in the right software can be a great way to improve
                the efficiency of your business. Whether you are looking for
                software to help manage your finances, automate processes, or
                increase productivity, there is a wide range of options
                available. With the right software, you can save time and money
                while also improving customer satisfaction and increasing
                profits. Investing in the right software can help you stay ahead
                of the competition and ensure that your business is running
                smoothly.
              </p>
            </li>
          </div>
        </div>
        <div className="container-2">
          <p className="text-p">
            Our objective is to simplify your existing infrastructure using the
            effective and proven tools and to provide a significant result
            through lowering your operating costs.
          </p>
          <img data-aos="flip-up" data-aos-duration="1000" src={Bg1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
