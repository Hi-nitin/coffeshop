import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const section4 = () => {

  const [ouritems, setouritem] = useState(null);
  const [loadingitem, setloadingitem] = useState('')

  const navigate = useNavigate();

  const getItem = async () => {
    try {

      const response = await fetch('http://localhost:3000/ouritem');
      const result = await response.json();
      setouritem(result.message)
      setloadingitem('none')
    } catch (ex) {

      console.log(ex);

    }

  }
  useEffect(() => {

    getItem()
  }, []);


  const viewall = async () => {
    try {

      const response = await fetch('http://localhost:3000/allitem');
      const result = await response.json();
      setouritem(result.message)
      setloadingitem('none')
    } catch (ex) {

      console.log(ex);

    }
  }

  const itemclick = (itemid) => {
    sessionStorage.setItem('myselecteditem', itemid);
    navigate('/placeorder')
  }


  const livesearch = async (value) => {
    
if(value==''){
  getItem()
}else{
  try {

    const response = await axios.get(`http://localhost:3000/searchitem?q=${value}`);
    setouritem(response.data)
  
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
}

  }

  return (

    <>
      <div id='section4' className="menusection">

        <div className='menu-details'>
          <h1>MENU</h1>
          <p>While most of the food in our menu changes from kitchen to kitchen and </p><p>from cook to cook ,what remains the same in our product from the bakery.</p>
          <p onClick={() => { viewall() }} style={{ color: 'red', float: 'right', marginRight: '7rem' }}>view all</p>
        </div>

        <div className='menu-items-container'>

          <div style={{ width: "100%", marginBottom: '20px' }} className="search">
            <input type="search" onChange={(e) => { livesearch(e.target.value) }} placeholder="search item..." />
          </div>
          {ouritems &&

            ouritems.map((val) => {
              return (
                <>
                  <div onClick={() => { itemclick(val._id) }} className='menu-item'>
                    <img className="item-img" src={`http://localhost:3000/uploads/${val.itemPic}`} />
                    <div className='nameprice'>
                      <p>{val.itemName}</p>
                      <p id='price'>Rs {val.itemPrice}</p>
                    </div>
                  </div>
                </>
              )

            })
          }
        </div>
      </div>

    </>
  )
}

export default section4;