import React from "react";

const VisionSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            How Smart Cookie Works?
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3 aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/wOEz5ez1vHQ"
              title="How Smart Cookie Works?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;