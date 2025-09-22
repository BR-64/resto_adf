import React, { useEffect, useState } from 'react';
// import { addProduct } from '../service/productService.js';
import { getAllOrders } from '../service/orderService';
import { Link, useNavigate } from 'react-router-dom';

const ProductsPage = () => {
  const [ordersData, setOrdersData] = useState([]);
  useEffect(() => {
    /// fetch data from database
    const loadData = async () => {
      try {
        const result = await getAllOrders();
        setOrdersData(result.data);
        console.log(ordersData);
      } catch (err) {
        console.error('Failed to loaad Data', err);
      }
    };

    loadData();
  }, []);

  return (
    <div className='content bg-gray-100 text-black'>
      <h2>this is admin order page</h2>
      <br />
      <br />
      <div className='p-4'>
        <h2 className='text-xl font-bold mb-4'>Orders Management</h2>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='p-2 border'>No.</th>
              <th className='p-2 border'>ID</th>
              <th className='p-2 border'>Total Price</th>
              <th className='p-2 border'>Created</th>
              <th className='p-2 border'>Customer</th>
              {/* <th className='p-2 border'>Stock</th> */}
              <th className='p-2 border'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.length === 0 ? (
              <tr>
                <td colSpan='4' className='text-center p-4 text-gray-500'>
                  No products found.
                </td>
              </tr>
            ) : (
              ordersData.map((order, index) => (
                <tr key={order._id} className='hover:bg-gray-100'>
                  <td className='border px-4 py-2'>{index + 1}</td>
                  <td className='p-2 border'>{order._id}</td>
                  <td className='p-2 border'>
                    {order.total.toLocaleString(2)}
                  </td>
                  <td className='p-2 border'>{order.createdAt}</td>
                  <td className='p-2 border'>{order.userId}</td>
                  <td className='border px-4 py-2'>
                    <Link to={`/edit/order/${order._id}`}>
                      <button className='bg-blue-500 text-white px-3 py-1 rounded'>
                        Edit
                      </button>
                    </Link>
                  </td>
                  {/* <td className='p-2 border'>{product.name}</td>
                  <td className='p-2 border'>
                    ฿{product.price.toLocaleString()}
                  </td> */}
                  {/* <td className='p-2 border'>{product.stock || 0}</td> */}
                  {/* <td className='p-2 border space-x-2'>
                    <Link to={`/edit/${product._id}`}>
                      <button className='bg-blue-500 text-white px-3 py-1 rounded'>
                        Edit
                      </button>
                    </Link>
                    <button
                      className='bg-red-500 text-white px-3 py-1 rounded'
                      onClick={() => handleDelete(product._id)}>
                      Delete
                    </button>
                  </td> */}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsPage;
