import { useEffect } from "react";
import axios from "axios";
const customerorder = () => {

    useEffect(() => {

        const get_order_detail = async () => {
            try {

                const response = await axios.get('http://localhost:3000/customerorder');
                const result = response.data;
                console.log(result);

            } catch (ex) {
                console.log(ex);

            }
        }
        get_order_detail()
    }, [])
    return (
        <>

        </>

    )
}

export default customerorder;