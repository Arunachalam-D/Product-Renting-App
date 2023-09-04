const router = require('express').Router();
const {User} =require('../models/user');
const joi =require('joi');
const bcrypt =require('bcrypt');


router.post('/',async(req,res)=>{
   

    try {

        const {error}=validate(req.body)
        if(error)
           return res.status(400).send({message:error.details[0].message})
        const user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(401).json({message:'invalid Email or Password'})
         }
        const validatePassword = await bcrypt.compare(
            req.body.password,user.password
        );
        if(!validatePassword){
            return res.status(401).json({message:'invalid Email or Password'})
        }
        const token =user.genarateAuthToken();
        res.status(200).json({data:token,message:"Logged successfully"})
    } 
    catch (err) {
        console.log(err)
        return  res.status(500).json({message:"Internal server Error"});
    }
})

const validate=(data)=>{
    const schema =joi.object({
        email:joi.string().required().label("Email Address"),
        password:joi.string().required().label('Password')
    });
    return schema.validate(data);
}

module.exports= router
