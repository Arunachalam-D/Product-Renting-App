import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  
} from "@material-tailwind/react";


import Logo from '../assests/Logo3.png'
import {NavLink} from 'react-router-dom';
import Data from './SearchFilter/index'
 
export default function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 text-black flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <div className="m-auto">
     <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-light"
      >
       <NavLink to='/lessor'><p className=" flex justify-center  bg-[#8be2efd1] p-1.5 px-2 rounded-[10px] items-center m-auto">
          Become a lessor
        </p></NavLink> 
      </Typography>
      </div>
      {/* <div className="flex hidden pr-5 justify-center m-auto w-[fit-content]  md:bg-transparent  p-1 px-2 rounded-[10px]">
      <FaCartShopping className="m-auto mr-1 text-[#13a6c7d1]"/>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1  font-normal"
      >
        <a href="/" className="flex items-center  justify-center">
          Cart
        </a>
      </Typography>
      
      </div> */}
        <Data/>
      
      <select className="border border-gray-200 -z-1 m-auto w-[80vw] md:w-[fit-content] outline-0 rounded-[10px] p-1.5" >
    <option  value="Madurai">Madurai</option>
    <option value="Chennai">Chennai</option>
    <option value="Coimbatore">Coimbatore</option>
    <option value="Sivagangai">Sivagangai</option>
  </select>
  <NavLink to='/login' ><Button className="hidden text-black lg:inline-block bg-[#8be2efd1] p-1.5 px-2 rounded-[10px] border border-transparent hover:bg-white hover:border hover:border-[#13a6c7d1] hover:text-[#13a6c7d1] font-light text-sm">
          Login / Signup
    </Button></NavLink>
   
    </ul>
    
  );
 
  return (
    <Navbar className="mx-auto z-[100] bg-white fixed top-0 w-screen shadow-lg py-2 px-4 lg:px-8 lg:py-4">
      <div className="mx-auto flex items-center justify-between text-blue-gray-900">
       
        <img src={Logo} alt='error' className="h-[50px] w-[50px] rounded-[100%]"/>
       
        <div className="hidden w-full lg:block">{navList}</div>
        
        
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 mb-auto text-inherit text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="mx-auto">
            
          {navList}
          <div className="flex justify-center">
          <NavLink to='/login' ><Button  size="sm" fullWidth className="w-[fit-content] mb-2 text-black bg-[#8be2efd1] p-2 rounded-[10px] border border-transparent hover:bg-white hover:border hover:border-[#13a6c7d1] hover:text-[#13a6c7d1] font-light text-sm">
            <span>Login / Signup</span>
          </Button></NavLink>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}