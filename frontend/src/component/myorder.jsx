import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './myorder.css'
import Navbar from '../component/navbar2';
const Orders = ({ userId }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3000/myorder', {
          withCredentials: true
        });
        setOrders(response.data); 
        setLoading(false);
      } catch (err) {
        setError('Login to see your order.');
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  if (loading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
 <div style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%' }}>
    <Navbar />
</div>

    
 
    
    <div>
      
      <h2>Your Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.item_id ? order.item_id.itemName : 'N/A'}</td>
              <td>{order.quantity}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Orders;
