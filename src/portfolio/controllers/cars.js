const Car = require('../models/car');

const mongoose = require('mongoose');

module.exports = {
    index
};

// function index(req, res){
//     res.render("./cars", {
//         cars : Car.getCars()
//     });
// }

function index(req,res){
    // const carSchema = new mongoose.Schema({
    //     brand: String,
    //     model: String,
    //     type: String
    // },{
    //     timestamps:true
    // });

    // const cars = mongoose.model('cars_collection', carSchema);

    Car.find().then(car =>{
        console.log(car);
        res.render('cars/index',{cars:car})
    });
    
    
}





