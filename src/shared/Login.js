import React,{useState} from 'react'
import './Login.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
   email: Yup.string().email('Invalid email').required('Email Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(16, 'Too Long!')
    .required(' Password Required'),
//   email: Yup.string().email('Invalid email').required('Required'),
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
    // email: Yup.string().email('Invalid email').required('Required'),
  });
function LoginSignin() {
  const [isActive, setIsActive] = useState(false);
  
  // const [login,setLogin]=useState({username:'',password:''})
  // const[signin,setSignin]=useState({email:'',contactno:'',username:'',password:''})
  
  const handleInfoItemClick = () => {
    setIsActive(prevState => !prevState);
   

  };

// const handleOnchange =(e)=>{
//   setLogin(
//     ...login,
//     {
    
//    name:e.target.value
//   })
// }
// const handleOncorrect =(e)=>{
//   setSignin(
//     ...signin,
//     {
//    name:e.target.value
//   })
// }
  
  return (

//     <div className='jaswanth'>
//         <div className={`container ${isLogIn ? 'log-in' : ''} `}>
//   <div class="box"></div>
//   <div class="container-forms">
//     <div class="container-info">
//       <div class="info-item">
//         <div class="table">
//           <div class="table-cell">
//             <p>
//               Have an account?
//             </p>
//             <div  >
//               <button className='btn' onClick={handleInfoItemClick} > Log in</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="info-item">
//         <div class="table">
//           <div class="table-cell">
//             <p>
//               Don't have an account? 
//             </p>
//             <div>
//              <button className='btn'onClick={handleInfoItemClick}> Sign up</button> 
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
    
//     <div class="container-form" >
//     <Formik
//        initialValues={{
//          username: '',
//          password:''
//        }}
//        validationSchema={SignupSchema}
//        onSubmit={values => {
//          // same shape as initial values
//          console.log(values);
//        }}
//      >
//       {({ errors, touched,handleSubmit,values,handleChange }) => (
//       <form class="form-item log-in" onSubmit={handleSubmit}>
//         <div class="table">
//           <div class="table-cell">
//             <input  name='username' placeholder="Username" type="text" value={values.username} onChange={handleChange} className={errors.username && touched.username ? 
//                     "border-red-400 border focus:outline-none rounded-lg  text-sm" : 'border border-gray-700 rounded-lg focus:outline-none text-sm '}/>
//             {errors.username && touched.username ? (
//              <div className='text-sm text-center  text-red-400'>{errors.username}</div>
//            ) : null}
//             <input  className={errors.password && touched.password ? 
//                     "border-red-400 border focus:outline-none rounded-lg  text-sm" : 'border border-gray-700 rounded-lg focus:outline-none  text-sm'} name="password" placeholder="Password" type="Password" value={values.password} onChange={handleChange}/>
//             <div >
//             {errors.password && touched.password ? (
//              <div className='text-sm text-center text-red-400'>{errors.password}</div>
//            ) : null}
//                <button className='btn' >Log in</button> 
//             </div>
//           </div>
//         </div>
//       </form>
//       )}
//       </Formik>
//       <Formik
//        initialValues={{
//         email:'',
//         contactno:'',
//          username: '',
//          password:''
//        }}
//        validationSchema={SigninSchema}
//        onSubmit={values => {
//          // same shape as initial values
//          console.log(values);
//        }}
//      >
//      {({ errors, touched,handleSubmit,values,handleChange }) => (
      
//       <form class="form-item sign-up" onSubmit={handleSubmit}>
//         <div class="table">
//           <div class="table-cell">
//             <input className={errors.email && touched.email ? 
//                     "border-red-400 border focus:outline-none rounded-lg  text-sm" : 'border border-gray-700 rounded-lg focus:outline-none  text-sm'} name="email" placeholder="Email" type="text" value={values.email} onChange={handleChange} />
//             {errors.email && touched.email ? (
//              <div className='text-sm text-center text-red-400'>{errors.email}</div>
//            ) : null}
//             <input className={errors.contactno && touched.contactno ? 
//                     "border-red-400 border focus:outline-none rounded-lg  text-sm" : 'border border-gray-700 rounded-lg focus:outline-none  text-sm'} name="contactno" placeholder="Contact No" type="text" value={values.contactno} onChange={handleChange}  />
//             {errors.contactno && touched.contactno ? (
//              <div className='text-sm text-center text-red-400'>{errors.contactno}</div>
//            ) : null}
//             <input  name="username" placeholder="Username" type="text" value={values.username} onChange={handleChange} className={errors.username && touched.username ? 
//                     "border-red-400 border focus:outline-none rounded-lg  text-sm " : 'border border-gray-700 rounded-lg focus:outline-none  text-sm'}  />
//              {errors.username && touched.username ? (
//              <div className='text-sm text-center  text-red-400'>{errors.username}</div>
//            ) : null}
//             <input name="password" placeholder="Password" type="Password" className={errors.password && touched.password ? 
//                     "border-red-400 border focus:outline-none rounded-lg  text-sm" : 'border border-gray-700 rounded-lg focus:outline-none  text-sm'} value={values.password} onChange={handleChange} />
//             {errors.password && touched.password ? (
//              <div className='text-sm text-center text-red-400'>{errors.password}</div>
//            ) : null}
//             <button className='btn'  > Sign up</button> 
            
//           </div>
//         </div>
//       </form>
     
//       )}
//       </Formik>
//     </div>
   
//   </div>
// </div>

//     </div>
    <div class="container m-auto">
    <section id="formHolder">
 
       <div class=" row sm:grid-cols-2 grid grid-cols-1 ">
 
         
          <div class=" brand">
             <a href="#" class="logo">Nothing <span>.</span></a>
 
             <div class="heading">
                <h2>Brand</h2>
                <p>Your Right Choice</p>
             </div>
 
             <div class="success-msg">
                <p>Great! You are one of our members now</p>
                <a href="#" class="profile">Your Profile</a>
             </div>
          </div>
 
 
          
          <div class=" form">
 
             
             <div className={`login form-peice ${!isActive ? 'switched' : ''}`}>
             <Formik
       initialValues={{
         email: '',
         password:''
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
      {({ errors, touched,handleSubmit,values,handleChange }) => (
                <form class="login-form" action="#" method="post" onSubmit={handleSubmit}>
                   <div  className={`form-group ${errors.email && touched.email ? 
                    "hasError" : ''}`}>
                      <label for="loginemail">Email Adderss</label>
                      <input type="email"  name="email" id="loginemail" value={values.email} onChange={handleChange}/>
                      {errors.email && touched.email ? (
             <span className='text-[#f95959] text-sm'>{errors.email}</span>
           ) : null}
                   </div>
 
                   <div className={`form-group ${errors.password && touched.password ? 
                    "hasError" : ''}`}>
                      <label for="loginPassword">Password</label>
                      <input type="password" name="password" id="loginPassword" value={values.password} onChange={handleChange} />
                      {errors.password && touched.password ? (
             <span className='text-[#f95959] text-sm'>{errors.password}</span>
           ) : null}
                   </div>
 
                   <div class="CTA">
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
         // same shape as initial values
         console.log(values);
       }}
     >
     {({ errors, touched,handleSubmit,values,handleChange }) => (
                <form class="signup-form" onSubmit={handleSubmit}>
 
                   <div className={`form-group ${errors.name && touched.name ? 
                    "hasError" : ''}`}>
                      <label for="name">Full Name - <small>Optional</small></label>
                      <input type="text" name="name" id="name" class="name" value={values.name} onChange={handleChange}/>
                      <span class="error"></span>
                   </div>
 
                   <div className={`form-group ${errors.email && touched.email ? 
                    "hasError" : ''}`}>
                      <label for="email">Email Adderss</label>
                      <input type="email" name="email" id="email" class="email"
                      value={values.email} onChange={handleChange}/>
                      <span class="error"></span>
                   </div>
 
                   <div className={`form-group ${errors.phone && touched.phone ? 
                    "hasError" : ''}`}>
                      <label for="phone">Phone Number </label>
                      <input type="text" name="phone" id="phone" value={values.phone} onChange={handleChange}/>
                   </div>
 
                   <div className={`form-group ${errors.password && touched.password ? 
                    "hasError" : ''}`}>
                      <label for="password">Password</label>
                      <input type="password" name="password" id="password" class="pass" value={values.password} onChange={handleChange}/>
                      <span class="error"></span>
                   </div>
 
                  
 
                   <div class="CTA">
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
  )
}

export default LoginSignin