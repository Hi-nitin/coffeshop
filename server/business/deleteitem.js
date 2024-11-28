const Item = require('../schema/itemuploadschema');

const deleteitem=async(req,res)=>{

   
        try {
            const { id } = req.params;
            const deletedItem = await Item.findByIdAndDelete(id);
            if (!deletedItem) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.status(200).json({ message: 'Item deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting item', error });
        }


    }



module.exports=deleteitem