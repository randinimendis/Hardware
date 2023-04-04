const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const empSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    nic:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    position:{
        type:String,
        required:true
    },
});

module.exports=mongoose.model("Emp",empSchema);
//emps
