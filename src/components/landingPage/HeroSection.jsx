import React from "react";
import "../../assets/css/herosection.css";
import img2 from "../../assets/images/Rectangle 1.svg";
import img1 from "../../assets/images/Rectangle 6 (1).svg";
import img3 from "../../assets/images/Star 2.svg";

const HeroSection = () => {
  return (
    <div className="px-10 md:px-20 mt-20">
      <div className="flex set-bg-color">
        <div className="set-bg-color1 hidden md:block"></div>
        <div className="set-bg-color2"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 parent-div">
        <div class="item1 col-span-8">
          <div>
            <div className="text-right">
              <h2>React</h2>
              <h2>Conference</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 mt-5">
              <div className="first-img order-3 md:order-1">
                <img src={img1} alt="img1" />
              </div>
              <div className="order-1 md:order-2">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  accusamus nemo provident voluptatum quaerat ipsa. Unde,
                  cupiditate quasi. Eligendi, reprehenderit.
                </p>
                <div className="bookiong-btn">
                  <p className="mr-5">Buy Tickets</p>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </p>
                </div>
                <div className="flex scroll-down items-center">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </p>
                  <p className="hidden md:block">Scroll down </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item2 col-span-7 md:col-span-4 mt-28">
          <img className="img2 w-full" src={img2} alt="img2" />
          <img className="img3" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
