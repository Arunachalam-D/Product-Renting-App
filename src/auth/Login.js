import React,{useState} from 'react'
import './Login.css'
import { Formik } from 'formik';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {NavLink} from 'react-router-dom'
import axios from 'axios';


function LoginSignin() {
  const [isActive, setIsActive] = useState(false);

  const handleInfoItemClick = () => {
    setIsActive(prevState => !prevState);
 };

 const phoneRegExp =
 /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = Yup.object().shape({
 fullname: Yup.string()
     .required('Firstname is required')
     .matches(
         /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
         'Name can only contain Latin letters.'
     ),

 
 email: Yup.string()
     .email('Must be a valid email')
     .max(255)
     .required('Email is required'),
 phone: Yup.string()
     .matches(phoneRegExp, 'Phone number is not valid')
     // .typeError("That doesn't look like a phone number")
     .min(10, 'A phone number must be 10 characters')
     .max(10)
     .required('A phone number is requsired'),
password: Yup.string().required('Password is required'),
});
const formik = useFormik({
 initialValues: {
     fullname: '',
     email: '',
     phone: '',
     password:'',
 },
 validationSchema,
 validateOnChange: true,
 // validateOnBlur: false,
 onSubmit: (data) => {
    const {data:res} =  axios.post('http://localhost:8000/api/user',{
   fullname:data.fullname,
    email:data.email,
    contactno:data.phone,
    password:data.password,
    })
    .then(()=>{
      console.log(res.data)
      //  if(res.message==='User created'){
      // formik.values.fullname='';
      // formik.values.email='';
      // formik.values.phone="";
      // formik.values.password="";
      //  setIsActive(true);
      // }
    })
 },
 
});
const validatationsignupSchema = Yup.object().shape({
   email: Yup.string()
     .email('Must be a valid email')
     .max(255)
     .required('Email is required'),
   password: Yup.string()
    .required(' Password Required'),
});
const formiklogin = useFormik({
   initialValues: {
       email: '',
       password:'',
   },
   validationSchema:validatationsignupSchema,
   validateOnChange: true,
   // validateOnBlur: false,
   onSubmit: (data) => {
      // console.log(JSON.stringify(data))
      const res =  axios.post('http://localhost:8000/api/auth',{
      email:data.email,
      password:data.password,
      })
      
      formik.values.email='';
      formik.values.password="";
   },
   
  });
  
  return (

    <div className='jaswanth'>
    <div className="container lg:py-[2.5%] xl:py-0 m-auto">
    <section id="formHolder">
 
       <div className=" row sm:grid-cols-2 grid grid-cols-1 ">
 
         
          <div className=" brand">
             <a href="" className="logo">Nothing <span>.</span></a>
 
             <div className="heading">
                <h2 className='text-2xl'>RENT-IT</h2>
                <p>Your Right Choice</p>
             </div>
 
             <div className="success-msg">
                <p>Great! You are one of our members now</p>
                <a href="#" className="profile">Your Profile</a>
             </div>
          </div>
 
 
          
          <div className=" form">
 
             
             <div className={`login form-peice ${!isActive ? 'switched' : ''}`}>
            
                <form className="login-form"  onSubmit={formiklogin.handleSubmit}>
                   <div  className={`form-group ${formiklogin.errors.email && formiklogin.touched.email ? 
                    "hasError" : ''}`}>
                      <label htmlFor="loginemail">Email Adderss</label>
                      <input type="email"  name="email" id="loginemail" value={formiklogin.values.email} onChange={formiklogin.handleChange}/>
                      {formiklogin.errors.email && formiklogin.touched.email ? (
             <span className='text-[#f95959] text-sm'>{formiklogin.errors.email}</span>
           ) : null}
                   </div>
 
                   <div className={`form-group ${formiklogin.errors.password && formiklogin.touched.password ? 
                    "hasError" : ''}`}>
                      <label htmlFor="loginPassword">Password</label>
                      <input type="password" name="password" id="loginPassword" value={formiklogin.values.password} onChange={formiklogin.handleChange} />
                      {formiklogin.errors.password && formiklogin.touched.password ? (
             <span className='text-[#f95959] text-sm'>{formiklogin.errors.password}</span>
           ) : null}
                   </div>
 
                   <div className="CTA">
                      <input className="cursor-pointer" type="submit" value="Login"/>
                      <span className={`switch  underline underline-offset-2 text-gray-400 hover:text-red-400 cursor-pointer ${isActive ? 'active' : ''}`} onClick={handleInfoItemClick} >I'm New</span>
                   </div>
                </form>
                
             </div>
 
 
             
             <div className={`signup form-peice ${!isActive ? "" :'switched'  }`}>
             {/* <Formik
       initialValues={{
        email:'',
         phone:'',
         name: '',
         password:''
       }}
       validationSchema={SigninSchema}
       onSubmit ={onSubmit}
 { values => {
        console.log(values)
     const response =  axios.post('http://localhost:8000/api/user',{
   fullname:values.name,
    email:values.email,
    contactno:values.phone,
    password:values.password,
 })
       }}
     > */}
     {/* {({ errors, touched,handleSubmit,values,handleChange }) => ( */}
                <form className="signup-form" onSubmit={formik.handleSubmit}>
 
                   <div className={`form-group ${formik.errors.fullname && formik.touched.fullname ? 
                    "hasError" : ''}`}>
                      <label htmlFor="fullname">Full Name</label>
                      <input type="text" name="fullname" id="fullname" className="name" value={formik.values.fullname} onChange={formik.handleChange}/>
                      {formik.errors.fullname && formik.touched.fullname ? (
             <span className='text-[#f95959] text-xs'>{formik.errors.fullname}</span>
           ) : null}
                   </div>
 
                   <div className={`form-group ${formik.errors.email && formik.touched.email ? 
                    "hasError" : ''}`}>
                      <label htmlFor="email">Email Adderss</label>
                      <input type="email" name="email" id="email" className="email"
                      value={formik.values.email} onChange={formik.handleChange}/>
                     {formik.errors.email && formik.touched.email ? (
             <span className='text-[#f95959] text-xs'>{formik.errors.email}</span>
           ) : null}
                   </div>
 
                   <div className={`form-group ${formik.errors.phone && formik.touched.phone ? 
                    "hasError" : ''}`}>
                      <label htmlFor="phone">Phone Number </label>
                      <input type="text" name="phone" id="phone" value={formik.values.phone} onChange={formik.handleChange}/>
                      {formik.errors.phone && formik.touched.phone ? (
             <span className='text-[#f95959] text-xs'>{formik.errors.phone}</span>
           ) : null}
                   </div>
 
                   <div className={`form-group ${formik.errors.password && formik.touched.password ? 
                    "hasError" : ''}`}>
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" id="password" className="pass" value={formik.values.password} onChange={formik.handleChange}/>
                      {formik.errors.password && formik.touched.password ? (
             <span className='text-[#f95959] text-xs'>{formik.errors.password}</span>
           ) : null}
                   </div>
 
                  
 
                   <div className="CTA">
                      <input className="cursor-pointer" type="submit" value="Signup Now" id="submit"/>
                      <span className={`switch underline underline-offset-2 text-gray-400 hover:text-red-400 cursor-pointer ${isActive ? 'active' : ''}`} onClick={handleInfoItemClick}>I have an account</span>
                   </div>
                </form>
                {/* )}
                </Formik> */}
             </div>
          </div>
       </div>
 
    </section>
 
 </div>
 </div>
  )
}

export default LoginSignin