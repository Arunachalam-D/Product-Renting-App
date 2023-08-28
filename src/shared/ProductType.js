import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { useEffect } from "react";
 
export default function FurnitureType({Img,type}) {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      left:0,
    
    })
  },[])
  return (
    
    <div >
     <div>
    <Card className="w-full m-auto">
      <CardHeader shadow={false} floated={false}>
        <img
          src={Img}
          alt="card-image"
          className="baby h-[40vh] w-full object-cover"
        />
      </CardHeader>
      <CardBody>
      <div></div>
        
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-[#8be2efd1] font-normal text-gray-800 py-2 rounded shadow-none transition hover:duration-500 hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          {type}
        </Button>
      </CardFooter>
    </Card>
    </div>


   
    </div>
   
  );
}