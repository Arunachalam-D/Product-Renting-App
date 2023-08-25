import React,{useState} from 'react'
import './Login.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
import {NavLink} from 'react-router-dom'
const SignupSchema = Yup.object().shape({
   email: Yup.string().email('Invalid email').required('Email Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(16, 'Too Long!')
    .required(' Password Required'),
});
const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email Required'),
    phone:Yup.number().required('Contact no Required')
    .min(10,'Enter a valid contact no')
    .max(10,''),
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Username Required'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(16, 'Too Long!')
      .required(' Password Required'),

  });
function LoginSignin() {
  const [isActive, setIsActive] = useState(false);

  const handleInfoItemClick = () => {
    setIsActive(prevState => !prevState);
   

  };

  
  return (

    <div className='jaswanth'>
    <div className="container lg:py-[2.5%] m-auto">
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
             <Formik
       initialValues={{
         email: '',
         password:''
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
    
         console.log(values);
       }}
     >
      {({ errors, touched,handleSubmit,values,handleChange }) => (
                <form className="login-form"  onSubmit={handleSubmit}>
                   <div  className={`form-group ${errors.email && touched.email ? 
                    "hasError" : ''}`}>
                      <label htmlFor="loginemail">Email Adderss</label>
                      <input type="email"  name="email" id="loginemail" value={values.email} onChange={handleChange}/>
                      {errors.email && touched.email ? (
             <span className='text-[#f95959] text-sm'>{errors.email}</span>
           ) : null}
                   </div>
 
                   <div className={`form-group ${errors.password && touched.password ? 
                    "hasError" : ''}`}>
                      <label htmlFor="loginPassword">Password</label>
                      <input type="password" name="password" id="loginPassword" value={values.password} onChange={handleChange} />
                      {errors.password && touched.password ? (
             <span className='text-[#f95959] text-sm'>{errors.password}</span>
           ) : null}
                   </div>
 
                   <div className="CTA">
                      <input type="submit" value="Login"/>
                      <a href="#" className={`switch ${isActive ? 'active' : ''}`} onClick={handleInfoItemClick} >I'm New</a>
                   </div>
                </form>
                )}
                </Formik>
             </div>
 
 
             
             <div className={`signup form-peice ${!isActive ? "" :'switched'  }`}>
             <Formik
       initialValues={{
        email:'',
         phone:'',
         name: '',
         password:''
       }}
       validationSchema={SigninSchema}
       onSubmit={values => {
       
         console.log(values);
       }}
     >
     {({ errors, touched,handleSubmit,values,handleChange }) => (
                <form className="signup-form" onSubmit={handleSubmit}>
 
                   <div className={`form-group ${errors.name && touched.name ? 
                    "hasError" : ''}`}>
                      <label htmlFor="name">Full Name - <small>Optional</small></label>
                      <input type="text" name="name" id="name" className="name" value={values.name} onChange={handleChange}/>
                      <span className="error"></span>
                   </div>
 
                   <div className={`form-group ${errors.email && touched.email ? 
                    "hasError" : ''}`}>
                      <label htmlFor="email">Email Adderss</label>
                      <input type="email" name="email" id="email" className="email"
                      value={values.email} onChange={handleChange}/>
                      <span className="error"></span>
                   </div>
 
                   <div className={`form-group ${errors.phone && touched.phone ? 
                    "hasError" : ''}`}>
                      <label htmlFor="phone">Phone Number </label>
                      <input type="text" name="phone" id="phone" value={values.phone} onChange={handleChange}/>
                   </div>
 
                   <div className={`form-group ${errors.password && touched.password ? 
                    "hasError" : ''}`}>
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" id="password" className="pass" value={values.password} onChange={handleChange}/>
                      <span className="error"></span>
                   </div>
 
                  
 
                   <div className="CTA">
                      <input type="submit" value="Signup Now" id="submit"/>
                      <a href="#" className={`switch ${isActive ? 'active' : ''}`} onClick={handleInfoItemClick}>I have an account</a>
                   </div>
                </form>
                )}
                </Formik>
             </div>
          </div>
       </div>
 
    </section>
 
 </div>
 </div>
  )
}

export default LoginSignin