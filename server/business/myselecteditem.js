const itemuploadschema = require('../schema/itemuploadschema')
const myselecteditem=async(req,res)=>{
    const itemid=req.body.item;
    try {

        const items = await itemuploadschema.findOne({_id:itemid});

        res.status(200).json({ message: items });

    } catch (ex) {
console.log(ex);

        res.status(400).json({
            error: 'server error'
        })
    }

}
module.exports=myselecteditem;