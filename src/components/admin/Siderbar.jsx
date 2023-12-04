import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/img/Logo.png';

const navs = [
  { to: '/admin/brands', text: 'Brands' },
  { to: '/admin/products', text: 'Products' },
  { to: '/admin/orders', text: 'Orders' },
  { to: '/admin/statistical', text: 'Statistical' },
  { to: '/admin/Users', text: 'Users' },
];

const Siderbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickLogout = () => {
    localStorage.removeItem('admin_id');
    navigate('/login');
  };

  const renderNavs = () => {
    return navs.map((nav) => {
      return (
        <div
          key={nav.to}
          onClick={() => navigate(nav.to)}
          className={`cursor-pointer hover:text-red-500 transition-all duration-150
           ease-linear p-2 text-2xl ${location.pathname === nav.to && 'text-red-500'}`}
        >
          {nav.text}
        </div>
      );
    });
  };

  return (
    <div className='h-screen shadow-2xl'>
      <h1 className='font-bold text-6xl text-center py-5'>
        <div className='text-white text-2xl font-semibold flex items-center'>
          <div className='w-16 h-16 mr-2 flex items-center justify-center border border-white rounded-full'>
            <img
              src={logo}
              alt='logo'
              srcSet=''
              className='w-20 h-20'
            />
          </div>
          <p className='text-35px font-bold text-main-red'>
            <span style={{ textDecoration: 'underline', transform: 'rotate(-5deg)' }}>W</span>
            <span style={{ transform: 'rotate(5deg)' }}>A</span>
            <span style={{ textDecoration: 'underline', transform: 'rotate(-5deg)' }}>T</span>
            <span style={{ transform: 'rotate(5deg)' }}>C</span>
            <span style={{ textDecoration: 'underline', transform: 'rotate(-5deg)' }}>H</span>
            <span style={{ transform: 'rotate(5deg)' }}> </span>
            <span style={{ textDecoration: 'underline', transform: 'rotate(-5deg)' }}>S</span>
            <span style={{ transform: 'rotate(5deg)' }}>H</span>
            <span style={{ textDecoration: 'underline', transform: 'rotate(-5deg)' }}>O</span>
            <span style={{ transform: 'rotate(5deg)' }}>P</span>
          </p>
        </div>
      </h1>
      <div className='p-10'>{renderNavs()}</div>
      <div className='text-center'>
        <button
          className='bg-red-600 text-white text-lg px-5 py-3 rounded-lg
           hover:bg-red-500 transition-all duration-150 ease-linear'
          onClick={handleClickLogout}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Siderbar;
