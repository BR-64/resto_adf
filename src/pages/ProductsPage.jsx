import React, { useEffect, useState } from 'react';
// import { addProduct } from '../service/productService.js';
import { getProducts } from '../service/productService';
import { Link, useNavigate } from 'react-router-dom';

const ProductsPage = () => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    /// fetch data from database
    const loadData = async () => {
      try {
        const result = await getProducts();
        setProductsData(result);
        console.log(productsData);
      } catch (err) {
        console.error('Failed to loaad Data', err);
      }
    };

    loadData();
  }, []);

  return (
    <div className='content bg-gray-100 text-black'>
      <h2>this is admin product page</h2>
      <br />
      <Link to='/addproduct' className='hover:text-gray-300'>
        <button className='bg-green-500 text-white px-3 py-1 rounded'>
          Add new Product
        </button>
      </Link>
      <br />
      <div className='p-4'>
        <h2 className='text-xl font-bold mb-4'>Product Management</h2>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='p-2 border'>Img</th>
              <th className='p-2 border'>Name</th>
              <th className='p-2 border'>Price</th>
              {/* <th className='p-2 border'>Stock</th> */}
              <th className='p-2 border'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {productsData.length === 0 ? (
              <tr>
                <td colSpan='4' className='text-center p-4 text-gray-500'>
                  No products found.
                </td>
              </tr>
            ) : (
              productsData.map((product) => (
                <tr key={product._id} className='hover:bg-gray-100'>
                  <td className='p-2 border'>
                    <img
                      className='w-24 h-30 object-cover '
                      src={`http://localhost:5000/${product.file[0]}`}
                      alt=''
                    />
                  </td>
                  <td className='p-2 border'>{product.name}</td>
                  <td className='p-2 border'>
                    ฿{product.price.toLocaleString()}
                  </td>
                  {/* <td className='p-2 border'>{product.stock || 0}</td> */}
                  <td className='p-2 border space-x-2'>
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
                  </td>
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
