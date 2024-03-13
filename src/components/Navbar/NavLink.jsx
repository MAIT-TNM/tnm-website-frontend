import React from 'react';

const NavLink = ({ href, title }) => {
  return (
    <a href={href} className='hover:text-darkviolet'>
      {title}
    </a>
  );
};

export default NavLink;
