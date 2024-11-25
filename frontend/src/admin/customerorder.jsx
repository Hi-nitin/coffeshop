import { useEffect, useState } from "react";
import './customerorder.css'
import axios from "axios";


const customerorder = () => {

    const [order, setorder] = useState();

 

    useEffect(() => {

        const get_order_detail = async () => {
            try {

                const response = await axios.get('http://localhost:3000/customerorder');
                const result = response.data;

                setorder(result.message)
              

            } catch (ex) {

                alert(ex)

            }
        }
        get_order_detail()
    }, []);


   

    return (
        <>
            <table>
                <tr>
                    <th>Item Ordered</th>
                    <th>Item photo</th>
                    <th>Quantity</th>
                    <th>Customer Name</th>
                    <th>Customer Number</th>
                    <th>Customer Address</th>
                    <th>Action</th>

                </tr>

                {
                    order ? order.map((val) => {
                        return (
                            <>
                                <tr>
                                    <td>{val.item_id.itemName}</td>
                                    <td>{val.item_id.itemPic}</td>
                                    <td>{val.quantity}</td>
                                    <td>{val.orderedby.name}</td>
                                    <td>{ }</td>
                                    <td>{ }</td>
                                    <td><button id="comp">Completed</button></td>
                                </tr>
                            </>
                        )
                    })


                        : <p>loading...</p>
                }
            </table>



        </>

    )
}

export default customerorder;