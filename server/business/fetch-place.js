const Place = require('../schema/addplace'); // Import the Place model

const fetchplace=async(req,res)=>{
    try {
        const places = await Place.find(); // Fetch all places from the database
        res.json(places); // Send the places data as JSON
      } catch (err) {
        res.status(500).json({ message: 'Error fetching places', error: err });
      }
}

module.exports=fetchplace;