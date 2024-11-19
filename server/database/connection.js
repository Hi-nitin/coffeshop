const mongoose = require('mongoose');
const connection=()=>{

    const mongoDB_URI = 'mongodb://localhost:27017/coffeeShop'; 
    mongoose.connect(mongoDB_URI)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        });
    

}

module.exports=connection