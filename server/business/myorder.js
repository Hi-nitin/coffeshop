const Ordered = require('../schema/orderdetailschema');  

const myorder=async(req,res)=>{
    const userId = req.userId; 

    try {
      const orders = await Ordered.find({ orderedby: userId }).populate('item_id');
      res.status(200).json(orders);
    } catch (err) {
      console.error('Error fetching orders:', err);
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
}

module.exports=myorder;