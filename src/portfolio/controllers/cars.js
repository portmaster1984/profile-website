const car = require('../models/car');


module.exports = {
    index
};

function index(req, res){
    res.render("./cars", {
        cars : car.getCars()
    });
}