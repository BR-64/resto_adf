import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ username: '', email: '', role: 'user' });
  const [editingUser, setEditingUser] = useState(null);

  const API_URL = `${import.meta.env.VITE_API_URL}/api/users`;

  // Fetch users
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API_URL}`);
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle form change
  //   const handleChange = (e) => {
  //     setForm({ ...form, [e.target.name]: e.target.value });
  //   };

  //   // Add or Update user
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       if (editingUser) {
  //         await axios.put(
  //           `http://localhost:5000/api/users/${editingUser._id}`,
  //           form
  //         );
  //       } else {
  //         await axios.post('http://localhost:5000/api/users', form);
  //       }
  //       setForm({ username: '', email: '', role: 'user' });
  //       setEditingUser(null);
  //       fetchUsers();
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  // Delete user
  const handleDelete = async (id) => {
    if (window.confirm('Delete this user?')) {
      await axios.delete(`${API_URL}/${id}`);
      fetchUsers();
    }
  };

  //   // Edit user
  //   const handleEdit = (user) => {
  //     setForm({ username: user.username, email: user.email, role: user.role });
  //     setEditingUser(user);
  //   };

  // truncateText ...
  const truncateText = (text, maxLength = 5) => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <div className='p-6'>
      <h2 className='text-xl font-bold mb-4'>User Management</h2>

      {/* Form */}
      {/* <form onSubmit={handleSubmit} className='mb-6 flex gap-2'>
        <input
          type='text'
          name='username'
          placeholder='UserName'
          value={form.username}
          onChange={handleChange}
          className='border p-2 rounded'
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={form.email}
          onChange={handleChange}
          className='border p-2 rounded'
          required
        />
        <select
          name='role'
          value={form.role}
          onChange={handleChange}
          className='border p-2 rounded'>
          <option value='user'>User</option>
          <option value='admin'>Admin</option>
        </select>
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded'>
          {editingUser ? 'Update' : 'Add'}
        </button>
      </form> */}

      {/* Users Table */}
      <table className='table-auto border-collapse border border-gray-300 w-full'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='border px-4 py-2'>#</th>
            <th className='border px-4 py-2'>UserName</th>
            <th className='border px-4 py-2'>Email</th>
            <th className='border px-4 py-2'>Line ID</th>
            {/* <th className='border px-4 py-2'>Role</th> */}
            <th className='border px-4 py-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, index) => (
            <tr key={u._id}>
              <td className='border px-4 py-2'>{index + 1}</td>
              <td className='border px-4 py-2'>{u.username}</td>
              <td className='border px-4 py-2'>{u.email}</td>
              <td className='border px-4 py-2'>{truncateText(u.lineId)}</td>
              {/* <td className='border px-4 py-2'>{u.role}</td> */}
              <td className='border px-4 py-2'>
                {/* <button
                  onClick={() => handleEdit(u)}
                  className='bg-yellow-400 px-2 py-1 rounded mr-2'>
                  Edit
                </button> */}
                <button
                  onClick={() => handleDelete(u._id)}
                  className='bg-red-500 text-white px-2 py-1 rounded'>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
