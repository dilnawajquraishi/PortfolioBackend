let mongoose=require("mongoose")
let model=new mongoose.Schema({
  name:String,
  email:{
    type:String,
    required:true,
  },
  number:Number,
  password:String,
  confirmpassword:String,
  gender:String,
  address:String,

})
module.exports=mongoose.model("CvCollection",model)