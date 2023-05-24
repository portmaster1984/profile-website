//Database list
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: String,
    model: String,
    type: String
});

module.exports = mongoose.model("Cars_collection", carSchema);



//Normal list
// const cars = [
//     {brand: "Ford", model: "F150", type: "Truck", },
//     {brand: "Ford", model: "Ford Focus", type: "Sedan", },
//     {brand: "Dodge", model: "Ram", type: "Truck", },
//     {brand: "Honda", model: "Civic", type: "Sedan", }
// ];


// module.exports = {
//     getCars,
//     // carExport
// };

// function getCars(){
//     return cars;
// }