import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamCard = ({ member }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-2xl">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-auto sm:h-72 md:h-80 lg:h-[400px] object-cover object-top"
      />
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
        <p className="text-gray-600 mb-2">{member.title}</p>
        <a
          href={`tel:${member.phone}`}
          className="text-blue-600 font-medium block mb-4"
        >
          {member.phone}
        </a>
        <div className="flex justify-center space-x-6 text-xl">
          <a
            href={member.social.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="text-blue-600 hover:scale-110 transition-transform duration-200"
          >
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </a>
          <a
            href={member.social.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="text-sky-500 hover:scale-110 transition-transform duration-200"
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
          <a
            href={member.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-blue-700 hover:scale-110 transition-transform duration-200"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </a>
          <a
            href={member.social.google}
            target="_blank"
            rel="noreferrer"
            aria-label="Google Plus"
            className="text-red-600 hover:scale-110 transition-transform duration-200"
          >
            <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;