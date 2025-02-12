const Place = require('../schema/addplace');

const fetchplace=async(req,res)=>{
    try {
        const places = await Place.find(); 
        res.json(places); 
      } catch (err) {
        res.status(500).json({ message: 'Error fetching places', error: err });
      }
}

module.exports=fetchplace;