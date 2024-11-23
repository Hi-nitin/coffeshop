import { useEffect, useState } from "react";
import axios from "axios";
import './placeorder.css';
const placeorder = () => {
    const [itemdetail, setitemdetail] = useState();
    const [a, b] = useState([1, 2, 3])

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
                                <button>hy</button>
                            </div>
                        </div>
                    </div>

                </div> : <p>loading...</p>


            }
        </>
    )
}

export default placeorder;