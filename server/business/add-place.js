const Place=require('../schema/addplace')
const addplace=async(req,res)=>{
    const { name, description, location, telephone, email } = req.body;
    const picture = req.file ? req.file.filename : '';
  
    const newPlace = new Place({
      name,
      description,
      location,
      telephone,
      email,
      picture
    });
  
    try {
      await newPlace.save();
      res.status(200).json({ message: 'Place saved successfully!' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
}

module.exports=addplace