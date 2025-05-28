import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeBanner = () => {
  return (
    <div className="bg-gray-100 py-2 px-4">
      <Marquee pauseOnHover={true} gradient={false} speed={60}>
        <span className="text-[20px] font-serif">
          <strong>
            College students! Are you looking for internship where you can do meaningful things that make a difference in your career.{" "}
            <a
              href="https://www.startupworld.in/register.php"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              Register Here
            </a>
          </strong>
        </span>
      </Marquee>
    </div>
  );
};

export default MarqueeBanner;