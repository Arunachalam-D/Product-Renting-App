const mongoose = require('mongoose');
const jwt =require('jsonwebtoken')
const joi =require('joi')
const passwordcomplexity =require('joi-password-complexity')

const userSchema =new mongoose.Schema({
    fullname:{type:String,required:true},
    email:{type:String,required:true},
    contactno:{type:String,required:true},
    password:{type:String,required:true}
});

userSchema.methods.genarateAuthToken =()=>{
    const Token = jwt.sign({_id:this.id},process.env.JWT,{expiresIn:"7d"})
    return Token;
}

const User =mongoose.model('register',userSchema)

const validate =(data)=>{
    const schema =joi.object({
        fullname:joi.string().required().label("FullName"),
        email:joi.string().required().label("Email Address"),
        contactno:joi.string().required().label("Contactno"),
        password:passwordcomplexity().required().label("Password")
        
    })
    return schema.validate(data);
};

module.exports={User,validate}