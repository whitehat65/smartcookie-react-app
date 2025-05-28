import React from "react";
import { FaMap, FaPhone, FaGlobe, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Contact</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Contact Details */}
          <div className="col-span-2 space-y-6">
            <ContactItem icon={<FaMap size={24} />} title="Location">
              55 Anmol, Prashant Society, Kothrud, Pune. (Maharashtra) India.
            </ContactItem>
            <ContactItem icon={<FaPhone size={24} />} title="Contact Number">
              +91-7219193815
            </ContactItem>
            <ContactItem icon={<FaGlobe size={24} />} title="Online">
              Web: <a href="https://smartcookie.in" className="text-blue-600">https://smartcookie.in</a>
            </ContactItem>
            <ContactItem icon={<FaEnvelope size={24} />} title="Email ID">
              help@smartcookie.in<br />
              info@smartcookie.in
            </ContactItem>
          </div>

          {/* Meetings */}
          <div className="bg-gray-100 rounded-lg shadow p-4">
            <h4 className="text-center font-bold text-black bg-cyan-300 py-1 rounded mb-2">Internships</h4>
            <a href="https://www.startupworld.in/" className="block text-center hover:underline mb-2">Startup World</a>
            <h4 className="text-center font-bold text-black bg-cyan-300 py-1 rounded mb-2">Help Meetings</h4>
            <MeetingLink time="10:00 AM To 11:00 AM" />
            <MeetingLink time="06:00 PM To 07:00 PM" />
            <h4 className="text-center font-bold text-black bg-cyan-300 py-1 rounded mb-2">Sessions</h4>
            <MeetingLink time="Session 1: 10:00 AM To 11:00 AM" />
            <MeetingLink time="Session 2: 06:00 PM To 07:00 PM" />
          </div>

          {/* Events */}
          <div className="bg-gray-100 rounded-lg shadow p-4">
            <h4 className="text-center font-bold text-black bg-cyan-300 py-1 rounded mb-2">Daily Events</h4>
            <EventLink title="Innovation Sunday" href="https://us06web.zoom.us/j/83187188656?pwd=MlUxNW9sZ0IyWTJ2QWVjZUZ0ZFRnZz09" />
            <EventLink title="Healthy Wednesday" href="https://us06web.zoom.us/j/83806261722?pwd=OCttYW5TYTd5bHFJSkM4M1MyNkk4Zz09" />
            <EventLink title="Network Building" href="https://us06web.zoom.us/j/86447280462?pwd=TERCZXhiZHhlRDlYOU5SUS9sL3FhUT09" />
            <EventLink title="Placement Fever" href="https://us06web.zoom.us/j/81662493491?pwd=ZllIMWg2bVpRWHNzTzNxMURxVnlhdz09" />
            <h4 className="text-center font-bold text-black bg-cyan-300 py-1 rounded mt-4 mb-2">AICTE Events</h4>
            <EventLink title="FDC 360" href="https://meet.google.com/ayv-bdrb-wyd" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="text-blue-600">{icon}</div>
    <div>
      <h5 className="font-semibold">{title}</h5>
      <p className="text-gray-700">{children}</p>
    </div>
  </div>
);

const MeetingLink = ({ time }) => (
  <a
    href="https://meet.google.com/ayv-bdrb-wyd"
    className="block text-center hover:underline text-gray-800 mb-2"
  >
    {time}
  </a>
);

const EventLink = ({ title, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block text-center hover:underline text-gray-800 mb-2"
  >
    {title}
  </a>
);

export default ContactSection;