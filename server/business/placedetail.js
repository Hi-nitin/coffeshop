const Place = require('../schema/addplace');
const placedetail=async(req,res)=>{
    try {
        const place = await Place.findById(req.params.id);
        if (!place) {
          return res.status(404).json({ message: 'Place not found' });
        }
        res.json(place);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

module.exports=placedetail