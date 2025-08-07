import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className='flex h-screen'>
      <AdminSidebar />
      <main className='flex-1 p-6 bg-gray-100 overflow-auto'>
        <Outlet />
      </main>
    </div>
  );
}
