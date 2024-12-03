const mongoose=require('mongoose')
const placeSchema = new mongoose.Schema({
    name: String,
    description: String,
    location: String,
    telephone: String,
    email: String,
    picture: String
  });
  
  const Place = mongoose.model('Place', placeSchema);
  module.exports=Place;