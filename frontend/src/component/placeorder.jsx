import { useEffect, useState } from "react";
import axios from "axios";
import './placeorder.css';
import Cookies from 'js-cookie';

const placeorder = () => {
    const [itemdetail, setitemdetail] = useState();
    const [quantity, setquantity] = useState();

    useEffect(() => {

        const myorder = sessionStorage.getItem('myselecteditem');

        const showmyitem = async () => {
            try {
                const response = await axios.post('http://localhost:3000/myselecteditem', { item: myorder }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }

                });

                setitemdetail(response.data.message)


            } catch (ex) {
                console.log(ex);

            }


        }
        showmyitem()

    }, [])

    const placingorder = async () => {

        if (quantity) {
            Cookies.set('token', 'gadafamilyp', { expires: 1 / 24 });
            const myorder = sessionStorage.getItem('myselecteditem');
            try {
                const response = await axios.post('http://localhost:3000/placeorder', {
                    ordereditem: myorder,
                    quantity: quantity
                }, {
                    headers: {
                        'Content-Type': 'application/json'

                    },
                    withCredentials: true

                })
            } catch (ex) {
                alert(ex)
            }
        } else {
            alert('quantity should be mentioned!!!')
        }

    }
    return (
        <>

            {
                itemdetail ? <div>

                    <div className="itemdetail">

                        <div className="img">
                            <img src={`http://localhost:3000/uploads/${itemdetail.itemPic}`} />
                            <h2>Rs {itemdetail.itemPrice}</h2>
                        </div>
                        <div className="detail">
                            <div id="row1">
                                <h1>{itemdetail.itemName}</h1>
                                <p>{itemdetail.itemDescription}</p>
                            </div>


                            <div id="row2">
                                <input type="number" placeholder="    1" onChange={(e) => { setquantity(e.target.value) }} />
                                <button onClick={() => { placingorder() }}>hy</button>
                            </div>
                        </div>
                    </div>

                </div> : <p>loading...</p>


            }
        </>
    )
}

export default placeorder;