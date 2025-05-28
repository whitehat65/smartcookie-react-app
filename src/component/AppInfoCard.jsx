import React from "react";

const infoItems = [
  {
    icon: "📈", // simple emoji icon
    title: "Our mission",
    description:
      "Phasellus et elit eget purus efficitur dignissim. Sed eget pretium quam, non rutrum nisi.",
  },
  {
    icon: "🏪",
    title: "Our vision",
    description:
      "Phasellus et elit eget purus efficitur dignissim. Sed eget pretium quam, non rutrum nisi.",
  },
  {
    icon: "🎯",
    title: "Dedicated support",
    description:
      "Phasellus et elit eget purus efficitur dignissim. Sed eget pretium quam, non rutrum nisi.",
  },
];

const AppInfoSection = () => {
  return (
    <section
      id="about"
      className="relative bg-sky-100 py-24 px-6"
      style={{ marginTop: "900px" }}
    >
      <div className="area-bg absolute inset-0 -z-10 bg-gray-200 opacity-20"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="rkassets/img/about/about-3.png"
              alt="About"
              className="-mt-32 max-w-full h-auto"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-10">
            {infoItems.map(({ icon, title, description }, i) => (
              <div
                key={i}
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md"
              >
                <div className="text-4xl">{icon}</div>
                <div>
                  <h5 className="text-xl font-semibold text-gradient mb-2">
                    {title}
                  </h5>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppInfoSection;