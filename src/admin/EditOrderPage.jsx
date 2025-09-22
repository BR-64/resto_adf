import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOrderbyId } from '../service/orderService';

const EditOrderPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const result = await getOrderbyId(id);
        console.log('fetch order result', result.data);
        setOrder(result.data);
        // console.log('order set', order);
      } catch (err) {
        console.error('Failed to load order data', err);
      }
    };

    fetchOrder();
  }, [id]);

  useEffect(() => {
    console.log('order updated', order);
  }, [order]);

  if (!order) {
    return (
      <div className='flex h-screen items-center justify-center'>
        Loading order...
      </div>
    );
  }

  return (
    // <div className='flex h-screen'>
    <div className='p-6 max-w-4xl mx-auto'>
      {/* <h1>This is order info</h1>
      <br />
      <h3>{id}</h3> */}

      <h1 className='text-2xl font-bold mb-4'>Order Details</h1>
      {/* <p>{order._id}</p> */}

      <div className='bg-white shadow rounded-lg p-6'>
        <h2 className='text-lg font-semibold'>Order ID: {order._id}</h2>
        <p className='text-gray-600'>Status: {order.status}</p>
        <p className='text-gray-600'>
          Date: {new Date(order.createdAt).toLocaleString()}
        </p>
        <p className='text-gray-600'>
          Customer: {order.user?.name || 'Unknown'}
        </p>
        <p className='text-gray-600'>Email: {order.user?.email || 'Unknown'}</p>

        <hr className='my-4' />

        <h3 className='text-lg font-semibold mb-2'>Items:</h3>
        <ul className='space-y-2'>
          {order.items.map((item, index) => (
            <li key={index} className='flex justify-between '>
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>฿ {(item.price * item.quantity).toLocaleString()}</span>
            </li>
          ))}
        </ul>

        <hr className='my-4' />

        <p className='text-right font-bold text-lg'>
          Total: ฿ {order.total.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default EditOrderPage;
