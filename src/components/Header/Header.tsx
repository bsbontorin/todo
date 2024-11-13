import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='header-container'>
      <h1>Meu Site</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
