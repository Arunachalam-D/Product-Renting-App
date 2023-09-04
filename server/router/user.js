const router =require('express').Router();
const {User,validate} =require('../models/user')
const bcrypt =require('bcrypt')


router.post('/',async(req,res)=>{
  const {fullname,email,contactno,password}=req.body
 
    try{
      const {error}=validate(req.body);

      if(error){
        return res.status(400).json({message:error.details[0].message})
      }
      const user =await User.findOne({email:email});
      if(user){
        return res.status(409).json({message:"User with given Email is already exist"});
      }
     
      const salt =await bcrypt.genSalt(Number(process.env.SALT))
      const hashpassword = await bcrypt.hash(password,salt);

      // await new User({...req.body, Password : hashpassword}).save();
      await User.insertMany({fullname,email,contactno,password:hashpassword})
      res.status(201).json({message:'User created'});


      }
    
    catch(error){
     return  res.status(500).send({message:"Internal server Error"});
    }
})


module.exports = router