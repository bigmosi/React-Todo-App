import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNabarOpen] = useState(false);

  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];

  const handleToggle = () => { setNabarOpen((prevState) => !prevState); };

  const closeMenu = () => setNabarOpen(false);

  return (
    <nav className="navBar">
      <button type="button" onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
        ) : (
          <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
        )}

      </button>
      <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
        {
          links.map((link) => (
            <li key={link.id}>
              <NavLink onClick={closeMenu} to={link.path} activeClassName="active-link" exact>
                {link.text}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Navbar;
