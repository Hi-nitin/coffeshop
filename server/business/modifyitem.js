const Item = require('../schema/itemuploadschema');

const modifyitem=async(req,res)=>{
    try {
        const { id } = req.params;
        const updatedItem = await Item.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item updated successfully', item: updatedItem });
    } catch (error) {
        res.status(500).json({ message: 'Error updating item', error });
    }
}

module.exports=modifyitem