const Ordered = require('../schema/orderdetailschema'); 
const ordercompleted=async(req,res)=>{

    const { itemId, customerId } = req.body;
  try {
    const order = await Ordered.findOne({ 
      'item_id': itemId, 
      'orderedby': customerId 
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = 'completed';
    await order.save();

    return res.status(200).json({ message: 'Order status updated to completed' });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating order status', error });
  }

}

module.exports=ordercompleted;