var mongoose = require('mongoose');

var Dish = mongoose.model('Dish', {
  dish: {
    type: String

  },
  rate: {
    type: Number,
    required:true
  }
});


module.exports={Dish};