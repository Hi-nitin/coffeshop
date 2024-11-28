const Ordered = require('../schema/orderdetailschema'); 
const ordercompleted=async(req,res)=>{


    console.log(req.body);
    
  try {
    const order = await Ordered.findOne({ 
  _id:req.body.orderId
     
    });

    if (!order) {
 
      return res.status(404).json({ message: 'Order not found' });
      
      
    }

    order.status = 'completed';
    await order.save();

    return res.status(200).json({ message: 'Order status updated to completed' });
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({ message: 'Error updating order status', error });
  }

}

module.exports=ordercompleted;