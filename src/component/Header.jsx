import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (e) => {
    const value = e.target.value;
    if (value && value !== "#") {
      // For internal routes, use react-router navigation
      if (value.startsWith('/')) {
        window.history.pushState(null, '', value);
        window.dispatchEvent(new PopStateEvent('popstate')); // triggers router update
      } else {
        // For external links fallback
        window.location.href = value;
      }
    }
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/assets/images/logo.png" alt="logo" className="h-10" />
          </Link>

          {/* Hamburger for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } absolute md:static top-full left-0 w-full md:w-auto bg-white md:flex md:items-center md:gap-6 p-4 md:p-0 shadow md:shadow-none transition-all`}
          >
            <ul className="flex flex-col md:flex-row gap-4">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="/team" className="hover:text-blue-600">Team</Link></li>
              <li><Link to="/login" className="hover:text-blue-600">Login As</Link></li>
              <li><Link to="/products" className="hover:text-blue-600">Products</Link></li>
              <li><Link to="/sponsors" className="hover:text-blue-600">Our Sponsors</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
              <li>
                <a href="https://smartcookie.in/core/express_registration_sp.php" target="_blank" rel="noreferrer" className="hover:text-blue-600">Register</a>
              </li>
              <li>
                <select
                  name="formal"
                  onChange={handleSelect}
                  className="border border-gray-300 px-2 py-1 text-sm rounded"
                >
                  <option value="#">Find</option>
                  <option value="/college_id/home">Find College ID</option>
                  <option value="/core/otpForm">Find Member ID</option>
                </select>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;