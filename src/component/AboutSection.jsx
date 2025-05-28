import React from "react";
import CarouselComponent from "./CarouselComponent";
import AppBox from "./AppBox";

const AboutSection = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
                {/* Carousel First in mobile, second in desktop */}
                <div className="w-full md:w-1/2 order-1 md:order-2">
                    <CarouselComponent />
                </div>
                {/* Left Content */}
                <div className="md:w-1/2">
                    <h1
                        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 mb-4"
                        style={{ fontFamily: 'inherit' }}
                    >
                        About Smart Cookie
                    </h1>

                    <p className="mb-6 text-gray-700 text-base">
                        Smart Cookie / Protsahan Bharti is a Student-Teacher Reward Program. It is a process of providing "Just in Time" Rewards for the encouragement of Students and Teachers to bring out the Best in them.
                    </p>

                    <div className="flex flex-wrap items-center gap-6 mb-8">
                        <a
                            href="https://smartcookie.in/core/about-us.php"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                        >
                            Know More
                        </a>

                        <a
                            href="https://helpdesk.smartcookie.in/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block bg-yellow-400 text-black px-6 py-4 rounded-full text-lg font-semibold text-center"
                            style={{ minWidth: '200px', lineHeight: '1.2' }}
                        >
                            Click Here For <br /> Helpdesk Chat
                        </a>
                    </div>

                    <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                        Download Our Apps From Here
                    </h2>



                    <div className="w-full flex flex-wrap justify-center gap-8 px-4">
                        <AppBox
                            imgSrc="/assets/images/student.png"
                            altText="Student App"
                            name="Smart Student App"
                            link="https://smartcookie.in/application/core/Download.php"
                        />
                        <AppBox
                            imgSrc="/assets/images/teacher.png"
                            altText="Teacher App"
                            name="Smart Teacher App"
                            link="https://smartcookie.in/application/core/Download1.php"
                        />
                        <AppBox
                            imgSrc="/assets/images/procoin1.png"
                            altText="Corporate App"
                            name="Smart Corporate App"
                            link="https://smartcookie.in/application/core/Download2.php"
                        />
                    </div>
                </div>

                {/* Right Image Carousel
                <div className="md:w-1/2 relative" style={{ marginTop: '-150px' }}>
                    <CarouselComponent />
                </div> */}
            </div>
        </div>
    );
};

export default AboutSection;