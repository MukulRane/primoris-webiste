import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Dropdown.css';

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="dropdown-title">
        {title} <FontAwesomeIcon icon={faAngleDown} className="fa-angle-down" />
      </div>
      {isOpen && (
        <div className="dropdown-menu-container">
          <div className="spacer"></div> {/* Empty box for spacing */}
          <div className="dropdown-menu">
            {items.map((item, index) => (
              <Link key={index} to={item.link} className="dropdown-item">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
