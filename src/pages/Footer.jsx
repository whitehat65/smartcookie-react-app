import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="md:w-1/3 text-center md:text-left">
            <div className="mb-6">
              <a href="#">
                <img src="/assets/images/logo.png" height={210} width={500} alt="Smart Cookie Logo" className="mx-auto md:mx-0 h-12" />
              </a>
            </div>
            <p className="text-gray-700">Smart Cookie believes in the power of youth.</p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Pages</h4>
              <ul className="space-y-2 text-gray-700">
                <li><a href="https://smartcookie.in/new/events/" target="_blank" rel="noopener noreferrer">Events</a></li>
                <li><a href="help/index1.php" target="_blank" rel="noopener noreferrer">Help</a></li>
                <li><a href="https://smartcookie.in/core/contact-us.php" target="_blank" rel="noopener noreferrer">Contact us</a></li>
                <li><a href="https://smartcookie.in/core/SmartCookie.pdf" target="_blank" rel="noopener noreferrer">Info</a></li>
                <li><a href="https://smartcookie.in/core/student.php" target="_blank" rel="noopener noreferrer">Students</a></li>
                <li><a href="https://smartcookie.in/core/college.php" target="_blank" rel="noopener noreferrer">School/College</a></li>
                <li><a href="https://smartcookie.in/core/teacher.php" target="_blank" rel="noopener noreferrer">Teachers</a></li>
                <li><a href="https://smartcookie.in/core/parent.php" target="_blank" rel="noopener noreferrer">Parents</a></li>
                <li><a href="https://smartcookie.in/core/sponsor.php" target="_blank" rel="noopener noreferrer">Vendors/Sponsors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Social Media</h4>
              <ul className="space-y-2 text-gray-700">
                <li><a href="https://www.facebook.com/Smarcookie-108920238009055" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://twitter.com/smartcookieinn" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/smart-cookie-1537aa210/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/smartcookie360/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-700">
                <li><a href="https://smartcookie.in/core/tnc.php" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
                <li><a href="https://discord.com/" target="_blank" rel="noopener noreferrer">Security Policy</a></li>
                <li><a href="https://smartcookie.in/new/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                <li><a href="https://www.reddit.com/user/smartcookieinn" target="_blank" rel="noopener noreferrer">Media</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} <a href="https://smartcookie.in" target="_blank" rel="noopener noreferrer" className="underline">Smart Cookie</a> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;