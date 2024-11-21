import { useState,useEffect } from "react";
const section4=()=>{

    const [ouritems, setouritem] = useState(null);
    const [loadingitem, setloadingitem] = useState('')
    useEffect(() => {
  
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
      getItem()
    }, []);

    return(

        <>
         <div className="menusection">

<div className='menu-details'>
  <h1>MENU</h1>
  <p>While most of the food in our menu changes from kitchen to kitchen and </p><p>from cook to cook ,what remains the same in our product from the bakery.</p>
</div>

<div className='menu-items-container'>


  {ouritems &&

    ouritems.map((val) => {
      return (
        <>
          <div className='menu-item'>
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