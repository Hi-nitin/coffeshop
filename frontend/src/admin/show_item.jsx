import { useEffect, useState } from "react";
import axios from 'axios';
import './show_item.css';
import io from 'socket.io-client';
const socket = io('http://localhost:3000');
import Nav from './navbar'

const ShowItem = () => {

    const [ourItem, setOurItem] = useState([]);
    const [showModal, setShowModal] = useState(false);  // State to toggle the modal
    const [selectedItem, setSelectedItem] = useState(null);  // To hold the item to be modified

    useEffect(() => {
        const getItem = async () => {
            try {
                const response = await axios.get('http://localhost:3000/ouritem');
                setOurItem(response.data.message);
            } catch (ex) {
                alert('Error: ' + ex);
            }
        }

        getItem();
    }, []);

    useEffect(() => {
        socket.on('fog', () => {
            console.log('Response received');
        });

        return () => {
            socket.off('fog');
            console.log('Socket cleaned up');
        };
    }, []);

    const deleteItem = async (itemId) => {
        try {
            await axios.delete(`http://localhost:3000/ouritem/${itemId}`);
            setOurItem(ourItem.filter(item => item._id !== itemId));  // Remove item from state
            alert('Item deleted successfully');
        } catch (error) {
            alert('Error deleting item');
        }
    }

    const modifyItem = (itemId) => {
        // Find the selected item from the list and open the modal
        const itemToModify = ourItem.find(item => item._id === itemId);
        setSelectedItem(itemToModify);
        setShowModal(true);
    }

    const handleUpdateItem = async () => {
        try {
            const updatedItem = await axios.put(`http://localhost:3000/ouritem/${selectedItem._id}`, selectedItem);
            setOurItem(ourItem.map(item => item._id === selectedItem._id ? updatedItem.data.item : item));  // Update item in state
            setShowModal(false);  // Close the modal
            alert('Item updated successfully');
        } catch (error) {
            alert('Error updating item');
        }
    }

    return (
        <>
            <Nav />
            <div className="table-container">
                <table className="item-table">
                    <thead>
                        <tr>
                            <th>Item Pic</th>
                            <th>Item Name</th>
                            <th>Item Price</th>
                            <th>Item Description</th>
                            <th>Delete</th>
                            <th>Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ourItem && ourItem.map((val) => {
                                return (
                                    <tr key={val._id}>
                                        <td><img src={`http://localhost:3000/uploads/${val.itemPic}`} alt={val.itemName} className="item-img" /></td>
                                        <td>{val.itemName}</td>
                                        <td>${val.itemPrice}</td>
                                        <td>{val.itemDescription}</td>
                                        <td><button className="btn delete-btn" onClick={() => { deleteItem(val._id) }}>Delete</button></td>
                                        <td><button className="btn modify-btn" onClick={() => { modifyItem(val._id) }}>Modify</button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>

            {/* Modify Item Modal */}
            {showModal && selectedItem && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-btn" onClick={() => setShowModal(false)}>&times;</span>
                        <h2>Modify Item</h2>
                        <input
                            type="text"
                            value={selectedItem.itemName}
                            onChange={(e) => setSelectedItem({ ...selectedItem, itemName: e.target.value })}
                            placeholder="Item Name"
                        />
                        <input
                            type="number"
                            value={selectedItem.itemPrice}
                            onChange={(e) => setSelectedItem({ ...selectedItem, itemPrice: e.target.value })}
                            placeholder="Item Price"
                        />
                        <textarea
                            value={selectedItem.itemDescription}
                            onChange={(e) => setSelectedItem({ ...selectedItem, itemDescription: e.target.value })}
                            placeholder="Item Description"
                        ></textarea>
                        <button className="btn" onClick={handleUpdateItem}>Update Item</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ShowItem;
