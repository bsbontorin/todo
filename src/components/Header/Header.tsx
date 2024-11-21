import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='header-container'>
      <h1 className='title'>Meu Site</h1>
      <nav className='menu'>
        <ul className='list'>
          <li className='item'>
            <a href='/'>Home</a>
          </li>
          <li className='item'>
            <a href='/recycle'>Lixeira</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
