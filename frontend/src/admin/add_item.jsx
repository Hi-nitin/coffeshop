import React, { useState } from 'react';
import './add_item.css';

const ItemUploadForm = () => {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemPic, setItemPic] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setMessage('');

        const formData = new FormData();
        formData.append('itemName', itemName);
        formData.append('itemPrice', itemPrice);
        formData.append('itemPic', itemPic);

        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            console.log(result);
            if (result.message == 'Item uploaded successfully') {

                setMessage("Item uploaded successfully");
            }

            if (result.message == 'Server error') {
                setMessage("Server error");
            }

            if (result.message == 'All fields are required') {
                setMessage("All fields are required");
            }



        } catch (error) {
            console.error(error);
            setMessage("Server error");
        } finally {
            setIsSubmitting(false);
            setItemName('');
            setItemPrice('');
            setItemPic(null);
        }
    };

    const handleFileChange = (e) => {
        setItemPic(e.target.files[0]);
    };

    return (
        <div className="item-upload-form">
            <h2>Upload Item</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="itemName">Item Name:</label>
                    <input
                        type="text"
                        id="itemName"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                     
                    />
                </div>

                <div>
                    <label htmlFor="itemPrice">Item Price:</label>
                    <input
                        type="number"
                        id="itemPrice"
                        value={itemPrice}
                        onChange={(e) => setItemPrice(e.target.value)}
                       
                    />
                </div>

                <div>
                    <label htmlFor="itemPic">Item Picture:</label>
                    <input
                        type="file"
                        id="itemPic"
                        accept="image/*"
                        onChange={handleFileChange}
                      
                    />
                </div>

                {itemPic && (
                    <div>
                        <p>Selected File: {itemPic.name}</p>
                        <img
                            src={URL.createObjectURL(itemPic)}
                            alt="Preview"
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                    </div>
                )}

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default ItemUploadForm;
