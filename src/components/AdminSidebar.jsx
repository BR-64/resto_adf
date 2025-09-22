import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminSidebar() {
  return (
    <div className='w-64 bg-gray-800 text-white p-4'>
      <h2 className='text-xl font-bold mb-6'>Admin Dashboard</h2>
      <nav className='flex flex-col space-y-4'>
        <Link to='/productsAdmin' className='hover:text-gray-300'>
          Products
        </Link>
        <Link to='/ordersAdmin' className='hover:text-gray-300'>
          Orders
        </Link>
        <Link to='/userManagement' className=''>
          Users
        </Link>
        {/* <a href='#' className='hover:bg-gray-700 p-2 rounded'>
          Settings
        </a> */}
      </nav>
    </div>
  );
}
