import React,{useState} from 'react'
import './Login.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
import {NavLink} from 'react-router-dom'
const SignupSchema = Yup.object().shape({
  username: Yup.string()
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
  const [isLogIn, setIsLogIn] = useState(false);
  // const [login,setLogin]=useState({username:'',password:''})
  // const[signin,setSignin]=useState({email:'',contactno:'',username:'',password:''})
  
  const handleInfoItemClick = () => {
    setIsLogIn(prevState => !prevState);
   

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

    <div className='jaswanth'>
        <div className={`container ${isLogIn ? 'log-in' : ''} `}>
  <div className="box"></div>
  <div className="container-forms">
    <div className="container-info">
      <div className="info-item">
        <div className="table">
          <div className="table-cell">
            <p>
              Have an account?
            </p>
            <div  >
              <button className='btn' onClick={handleInfoItemClick} > Log in</button>
            </div>
          </div>
        </div>
      </div>
      <div className="info-item">
        <div className="table">
          <div className="table-cell">
            <p>
              Don't have an account? 
            </p>
            <div>
             <button className='btn'onClick={handleInfoItemClick}> Sign up</button> 
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="container-form" >
    <Formik
       initialValues={{
         username: '',
         password:''
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
      {({ errors, touched,handleSubmit,values,handleChange }) => (
      <form className="form-item log-in" onSubmit={handleSubmit}>
        <div className="table">
          <div className="table-cell">
            <input  name='username' placeholder="Username" type="text" value={values.username} onChange={handleChange} className={errors.username && touched.username ? 
                    "border-red-400 border focus:outline-none rounded-lg " : 'border border-gray-700 rounded-lg focus:outline-none'}/>
            {errors.username && touched.username ? (
             <div className='text-sm text-center  text-red-400'>{errors.username}</div>
           ) : null}
            <input  className={errors.password && touched.password ? 
                    "border-red-400 border focus:outline-none rounded-lg" : 'border border-gray-700 rounded-lg focus:outline-none'} name="password" placeholder="Password" type="Password" value={values.password} onChange={handleChange}/>
            <div >
            {errors.password && touched.password ? (
             <div className='text-sm text-center text-red-400'>{errors.password}</div>
           ) : null}
               <button className='btn' >Log in</button> 
            </div>
          </div>
        </div>
      </form>
      )}
      </Formik>
      <div className="form-item sign-up">
        <div className="table">
          <div className="table-cell">
            <input className='border border-gray-700 rounded-lg focus:outline-none' name="email" placeholder="Email" type="text"  />
            <input className='border border-gray-700 rounded-lg focus:outline-none' name="contactno" placeholder="Contact No" type="text"  />
            <input className='border border-gray-700 rounded-lg focus:outline-none' name="username" placeholder="Username" type="text"  />
            <input className='border border-gray-700 rounded-lg focus:outline-none' name="password" placeholder="Password" type="Password"  />
            
            <button className='btn' onSubmit={Formik.handleSubmit} > Sign up</button> 
            
          </div>
        </div>
      </div>
    </div>
   
  </div>
</div>

    </div>
  )
}

export default LoginSignin