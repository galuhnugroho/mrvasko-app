import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <div className="navbar shadow-lg">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-3xl">
          MrVasko
        </Link>
      </div>
      <div className="flex-none font-semibold">
        <ul className="menu menu-horizontal px-1 hidden sm:flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Dropdown for small screens */}
        <div className="dropdown dropdown-end sm:hidden">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            {/* Menggunakan Icon Hamburger dari Heroicons */}
            <Bars3Icon className="w-6 h-6" />
          </label>
          <ul tabIndex={0} className="dropdown-content menu menu-compact p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
