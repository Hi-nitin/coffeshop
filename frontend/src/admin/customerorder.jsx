import { useEffect, useState } from "react";
import './customerorder.css';
import axios from "axios";
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const CustomerOrder = () => {
  const [order, setOrder] = useState();
  const [emptyOrder, setEmptyOrder] = useState();
  const [dataLoading, setDataLoading] = useState('loading');

  const getOrderDetail = async () => {
    try {
      const response = await axios.get('http://localhost:3000/customerorder');
      const result = response.data;

      if (result.message === 'empty') {
        setDataLoading('');
        setEmptyOrder('empty');
      } else {
        setDataLoading('');
        setEmptyOrder('');
        setOrder(result.message);
      }
    } catch (ex) {
      alert(ex);
    }
  };

  useEffect(() => {
    getOrderDetail();
  }, []);

  useEffect(() => {
    socket.on('neworderplaced', () => {
      getOrderDetail();
    });

    return () => {
      socket.off('neworderplaced');
    };
  }, []);

  const orderComplete = async (itemId, customerId) => {
    try {
      const response = await axios.put('http://localhost:3000/completeorder', {
        itemId,
        customerId
      });

      if (response.data.message === 'Order status updated to completed') {
        alert('Order has been marked as completed');
        getOrderDetail();
      } else {
        alert('Failed to update order status');
      }
    } catch (error) {
      alert('Error completing the order');
      console.error(error);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Item Ordered</th>
            <th>Item Photo</th>
            <th>Quantity</th>
            <th>Customer Name</th>
            <th>Customer Number</th>
            <th>Customer Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {emptyOrder === 'empty' ? <h1>Data is empty</h1> : null}
          {order && order.map((val) => (
            <tr key={val._id}>
              <td>{val.item_id.itemName}</td>
              <td><img src={`http://localhost:3000/uploads/${val.item_id.itemPic}`} alt={val.item_id.itemName} /></td>
              <td>{val.quantity}</td>
              <td>{val.orderedby.name}</td>
              <td>{val.orderedby.contact}</td>
              <td>{val.orderedby.address}</td>
              <td>{val.status}</td> 
              <td>
                {val.status === 'pending' && (
                  <button onClick={() => orderComplete(val.item_id._id, val.orderedby._id)} id="comp">
                    Order Completed
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>{dataLoading}</h1>
    </>
  );
};

export default CustomerOrder;
