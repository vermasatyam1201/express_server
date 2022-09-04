const mongoose = require("mongoose");
const CarSchema = mongoose. Schema({
       company : {
       type : String, 
       required: true
       },
       model : {
       type: String, 
       required: true
       },
       registration_number : {
        type : String, 
        required: true,
        unique: true
       },
       userId: {
        type : mongoose.Schema.Types.ObjectId, 
        ref : "user",
        required: true
      },
       
    },
{timestamps : true});

module.exports = mongoose.model ("Car", CarSchema);