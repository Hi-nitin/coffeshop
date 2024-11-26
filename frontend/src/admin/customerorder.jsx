import { useEffect, useState } from "react";
import './customerorder.css'
import axios from "axios";

import io from 'socket.io-client';
const socket = io('http://localhost:3000');
const customerorder = () => {

    const [order, setorder] = useState();

    const [empty_order, setempty_order] = useState();
    const [dataloading, setdataloading] = useState('loading');

    const get_order_detail = async () => {
        try {

            const response = await axios.get('http://localhost:3000/customerorder');
            const result = response.data;

            if (result.message == 'empty') {
                setdataloading();
                setempty_order('empty')

            } else {
                setdataloading()
                setempty_order()
                setorder(result.message)
            }




        } catch (ex) {

            alert(ex)

        }
    }

    useEffect(() => {
        get_order_detail()
    }, []);



    useEffect(() => {
        socket.on('neworderplaced', () => {

            get_order_detail()
        });

        return () => {
            socket.off('neworderplaced');
        };
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
                {empty_order == 'empty' ? <h1>data is empty</h1> : null}
                {
                    order && order.map((val) => {
                        return (
                            <>
                                <tr>
                                    <td>{val.item_id.itemName}</td>
                                    <td><img src={`http://localhost:3000/uploads/${val.item_id.itemPic}`}/></td>
                                    <td>{val.quantity}</td>
                                    <td>{val.orderedby.name}</td>
                                    <td>{ }</td>
                                    <td>{ }</td>
                                    <td><button id="comp">Completed</button></td>
                                </tr>
                            </>
                        )
                    })



                }
            </table>

            <h1>{dataloading}</h1>

        </>

    )
}

export default customerorder;