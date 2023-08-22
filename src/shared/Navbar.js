import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  
} from "@material-tailwind/react";
import { FaSistrix } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import Logo from '../assests/Logo3.png'

 
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
      
     <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="hidden lg:block flex justify-center items-center">
          About
        </a>
      </Typography>
      <div className="flex pr-5 justify-center m-auto w-[fit-content]  md:bg-transparent bg-[#8be2efd1] p-1 px-2 rounded-[10px]">
      <FaCartShopping className="m-auto mr-1 text-white md:text-[#13a6c7d1]"/>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center  justify-center">
          Cart
        </a>
      </Typography>
      
      </div>
  <div className="relative search m-auto">
      <input placeholder="search" className="outline-0 placeholder:font-light w-[80vw] md:w-[50vw] p-1 border border-gray-300 rounded-[10px]"/>
     <span className="absolute icon right-[2vw] text-[#13a6c7d1] top-[1.5vh] md:right-[1vw] md:top-[1.5vh] focus:hidden"><FaSistrix/></span>
    </div>
      
      <select className="border border-gray-200 m-auto w-[80vw] md:w-[fit-content] outline-0 rounded-[10px] p-1.5" >
    <option  value="Madurai">Madurai</option>
    <option value="Chennai">Chennai</option>
    <option value="Coimbatore">Coimbatore</option>
    <option value="Sivagangai">Sivagangai</option>
  </select>
  <Button className="hidden text-black lg:inline-block bg-[#8be2efd1] p-1.5 px-2 rounded-[10px] border border-transparent hover:bg-white hover:border hover:border-[#13a6c7d1] hover:text-[#13a6c7d1] font-light text-sm">
          <span>Login / Signup</span>
    </Button>
   
    </ul>
    
  );
 
  return (
    <Navbar className="mx-auto fixed top-0 w-screen shadow-lg py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
       
        <img src={Logo} alt='error' className="h-[50px] w-[50px] rounded-[100%]"/>
       
        <div className="hidden lg:block">{navList}</div>
        
        
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
        <div className="container mx-auto">
            
          {navList}
          <div className="flex justify-center">
          <Button  size="sm" fullWidth className="mb-2 text-black bg-[#8be2efd1] p-2 rounded-[10px] border border-transparent hover:bg-white hover:border hover:border-[#13a6c7d1] hover:text-[#13a6c7d1] font-light text-sm">
            <span>Login / Signup</span>
          </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}