const cars = [
    {brand: "Ford", model: "F150", type: "Truck", },
    {brand: "Ford", model: "Ford Focus", type: "Sedan", },
    {brand: "Dodge", model: "Ram", type: "Truck", },
    {brand: "Honda", model: "Civic", type: "Sedan", }
];


module.exports = {
    getCars
};

function getCars(){
    return cars;
}