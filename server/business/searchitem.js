const Item = require('../schema/itemuploadschema');

const searchitem = async (req, res) => {
  const query = req.query.q || ''; 

  if (!query.trim()) {
    return res.json([]); 
  }

  try {
    const results = await Item.find({
      itemName: { $regex: `^${query}`, $options: 'i' }  
    }).limit(10);  
    
    res.json(results);  
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = searchitem;
