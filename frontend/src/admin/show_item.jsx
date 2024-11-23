import { useEffect, useState } from "react";
import axios from 'axios';
import './show_item.css';
const ShowItem = () => {

    const [ourItem, setOurItem] = useState([]);

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

    return (
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
                                <tr key={val.id}>

                                    <td><img src={`http://localhost:3000/uploads/${val.itemPic}`} alt={val.itemName} className="item-img" /></td>
                                    <td>{val.itemName}</td>
                                    <td>${val.itemPrice}</td>
                                    <td>{val.itemDescription}</td>
                                    <td><button className="btn delete-btn">Delete</button></td>
                                    <td><button className="btn modify-btn">Modify</button></td>

                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ShowItem;
