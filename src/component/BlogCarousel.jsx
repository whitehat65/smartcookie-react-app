import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const blogPosts = [
  {
    title: "Campus Radio",
    link: "https://www.startupworld.in/project_radio.html",
    imgSrc: "rkassets/img/blog/campusradio.jpg",
    description: "Campus Radio",
  },
  {
    title: "Campus TV",
    link: "https://campustv.rocks",
    imgSrc: "rkassets/img/campustv.jpg",
    description: "Campus TV",
  },
  {
    title: "Market research",
    link: "https://www.startupworld.in/internship/market_research.html",
    imgSrc: "Images/landing_project_img/market_research.jpg",
    description: "Market research",
  },
  {
    title: "Campus Radio/TV Projects",
    link: "https://www.startupworld.in/project_radio.html",
    imgSrc: "Images/landing_project_img/campus_radio.png",
    description: "Campus Radio/TV Projects",
  },
  {
    title: "Create Campus Radio/TV Ads",
    link: "https://www.startupworld.in/internship/campus_RadioTV_Ads.html",
    imgSrc: "Images/landing_project_img/dj.jpg",
    description: "Create Campus Radio/TV Ads",
  },
  {
    title: "Design Music Radio",
    link: "https://www.startupworld.in/internship/music_radio.html",
    imgSrc: "Images/landing_project_img/radio.jpg",
    description: "Design Music Radio",
  },
  {
    title: "Design Employment Radio",
    link: "https://www.startupworld.in/internship/employment_radio.html",
    imgSrc: "Images/landing_project_img/employement.jpg",
    description: "Design Employment Radio",
  },
  {
    title: "HR Radio",
    link: "https://www.startupworld.in/internship/hr_radio.html",
    imgSrc: "Images/landing_project_img/hr.jpg",
    description: "HR Radio",
  },
  {
    title: "Create Revenue Models",
    link: "https://www.startupworld.in/internship/Revenue-models.html",
    imgSrc: "Images/landing_project_img/Revenue.jpg",
    description: "Create Revenue Models",
  },
  {
    title: "Gaming Portal",
    link: "https://www.startupworld.in/internship/Gaming.html",
    imgSrc: "Images/landing_project_img/PUBG.jpg",
    description: "Gaming Portal"
  },
  {
    title: "Help Desk Management",
    link: "https://www.startupworld.in/internship/helpdesk.html",
    imgSrc: "Images/landing_project_img/help.jpg",
    description: "Help Desk Management"
  },
  {
    title: "Translate into other country language",
    link: "https://www.startupworld.in/internship/Translate-into-other-country-language.html",
    imgSrc: "Images/landing_project_img/lang.png",
    description: "Translate into other country language"
  },
  {
    title: "Customizing Campus Radio for promoting art, music, poetry",
    link: "https://www.startupworld.in/internship/employment_radio.html",
    imgSrc: "Images/landing_project_img/micc.jpg",
    description: "Customizing Campus Radio for promoting art, music, poetry"
  },
  {
    title: "Use of AI and Machine Learning for the Rewards Engine",
    link: "https://www.startupworld.in/internship/AI-and-Machine-Learning-for-the-Rewards-Engine.html",
    imgSrc: "Images/landing_project_img/ai.jpg",
    description: "Use of AI and Machine Learning for the Rewards Engine"
  },
  {
    title: "Attract Funding",
    link: "https://www.startupworld.in/internship/Attract-Funding.html",
    imgSrc: "Images/landing_project_img/Crowdfundin.jpg",
    description: "Attract Funding"
  },
  {
    title: "Attract different Arts clubs",
    link: "https://www.startupworld.in/internship/art_club.html",
    imgSrc: "Images/landing_project_img/club.png",
    description: "Attract different Arts clubs"
  },
  {
    title: "Global Testers",
    link: "https://www.startupworld.in/internship/Startup-World-Projects.html",
    imgSrc: "Images/landing_project_img/Globaltest.png",
    description: "Global Testers"
  },
  {
    title: "Friends of Shark Tank",
    link: "https://www.startupworld.in/internship/sharktank.html",
    imgSrc: "Images/landing_project_img/student_techer.jpg",
    description: "Friends of Shark Tank"
  },
  {
    title: "ThankQ Artist",
    link: "https://www.startupworld.in/internship/ThankQ-Artist.html",
    imgSrc: "Images/landing_project_img/tank_you.jpg",
    description: "ThankQ Artist"
  },
  {
    title: "Education An Interesting Process",
    link: "https://www.startupworld.in/internship/startup-world.html",
    imgSrc: "Images/landing_project_img/learn.jpg",
    description: "Education An Interesting Process"
  },
  {
    title: "Block chain for Smart Cookie Reward points system",
    link: "https://www.startupworld.in/internship/Block-chain-for-Smart-Cookie-Reward-points-system.html",
    imgSrc: "Images/landing_project_img/block.jpg",
    description: "Block chain for Smart Cookie Reward points system"
  },
  {
    title: "Design Music Radio",
    link: "https://www.startupworld.in/internship/music_radio.html",
    imgSrc: "Images/landing_project_img/radio.jpg",
    description: "Design Music Radio"
  },
  {
    title: "Data Collection and Analytics for the Sponsors",
    link: "https://www.startupworld.in/internship/smartcookie-datacollection.html",
    imgSrc: "Images/landing_project_img/data_analyst.jpg",
    description: "Data Collection and Analytics for the Sponsors"
  },
  {
    title: "Corporate Currents (Business):",
    link: "https://www.startupworld.in/internship/corporate-Current-(Business).html",
    imgSrc: "Images/landing_project_img/bussiness_smc.jpg",
    description: "Corporate Currents (Business):"
  },
  {
    title: "Auto generation of websites",
    link: "https://www.startupworld.in/internship/Auto-genenration-of-website.html",
    imgSrc: "Images/landing_project_img/auto_generate.jpg",
    description: "Auto generation of websites"
  },
  {
    title: "Measure Social Footprint of a Student and reward him/her",
    link: "https://www.startupworld.in/internship/smartcookie-measure-social-footprint.html",
    imgSrc: "Images/landing_project_img/measure social media.jpg",
    description: "Measure Social Footprint of a Student and reward him/her"
  },
  {
    title: "Startup World",
    link: "https://startupworld.in",
    imgSrc: "rkassets/img/blog/startupworld.jpg",
    description: "Startup World"
  },
  {
    title: "Learning Planet",
    link: "http://learningplanet.in/",
    imgSrc: "rkassets/img/blog/learningplanet.jpg",
    description: "eLearning"
  },
  {
    title: "Internships",
    link: "https://www.startupworld.in/",
    imgSrc: "rkassets/img/blog/internships.jpg",
    description: "Internships"
  },
  {
    title: "Innovation",
    link: "https://us06web.zoom.us/j/83187188656?pwd=MlUxNW9sZ0IyWTJ2QWVjZUZ0ZFRnZz09",
    imgSrc: "rkassets/img/blog/innovation.jpg",
    description: "Innovation"
  }
  // Add more featured products here ...
];

const BlogCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500, // transition speed (0.5s)
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000, // slide every 3 seconds
    responsive: [
      {
        breakpoint: 1024, // tablet and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="news"
      className="blog-area py-24 bg-gray-50 wow fadeIn"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold">
            Campus Connect companion Products
          </h2>
        </div>

        <Slider {...settings}>
          {blogPosts.map(({ title, link, imgSrc, description }, index) => (
            <div key={index} className="p-4">
              <div className="single-blog-item bg-white shadow-md rounded-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={imgSrc}
                    alt={title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </a>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link text-blue-600 hover:underline"
                    >
                      {description}
                    </a>
                  </p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition"
                  >
                    {title}
                  </a>
                  <div className="mt-4">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="read-more text-blue-600 hover:underline font-medium"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BlogCarousel;