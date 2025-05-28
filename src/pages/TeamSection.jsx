import React from "react";
import TeamCard from "../component/TeamCard";

const teamMembers = [
  {
    name: "Avinash Kulkarni",
    title: "Founder & CEO - Smart Cookie",
    phone: "+1 973 568 0605",
    image: "/assets/images/Team/avikulkarni.png",
    social: {
      facebook: "https://www.facebook.com/Smarcookie-108920238009055",
      twitter: "https://twitter.com/smartcookieinn",
      linkedin: "https://www.linkedin.com/in/smart-cookie-1537aa210/",
      google: "https://ads.google.com/home/?subid=ww-ww-et-g-aw-a-vasquette_ads_1!o2",
    },
  },
  {
    name: "Rakesh Khatri",
    title: "CTO - Smart Cookie",
    phone: "+91 996 090 3132",
    image: "/assets/images/Team/rakeshkhatri.png",
    social: {
      facebook: "https://www.facebook.com/Smarcookie-108920238009055",
      twitter: "https://twitter.com/smartcookieinn",
      linkedin: "https://www.linkedin.com/in/smart-cookie-1537aa210/",
      google: "https://ads.google.com/home/?subid=ww-ww-et-g-aw-a-vasquette_ads_1!o2",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="team">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          We Have An Awesome Team
        </h2>
        <div className="grid md:grid-cols-2 gap-10 justify-center">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;