// src/services/productService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/orders';

const getAllOrders = async () => {
  const response = await axios.get(`${API_URL}/`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  return { success: true, data: response.data.orders };
};

const getOrderbyId = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  console.log('getOrderbyId response', response);

  return { success: true, data: response.data.order };
};
// const deleteProductById = async (id) => {
//   const res = await axios.delete(`${API_URL}/delete/${id}`);
//   if (res.status === 200) {
//     console.log('Product deleted successfully');
//   } else {
//     console.error(res);
//   }
// };

export { getAllOrders, getOrderbyId };
