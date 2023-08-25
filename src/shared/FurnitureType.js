import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import Baby from '../assests/Baby1.png'
import Bedroom from '../assests/Bed1.png'
import LivingRoom from '../assests/Live2.png'
import DiningRoom from '../assests/Dining1.png'
import Work from '../assests/Work3.png'
import General from '../assests/General2.png'
import Layout from "../Layout/Layout";
import { useEffect } from "react";
 
export default function FurnitureType() {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      left:0,
    
    })
  },[])
  return (
    <Layout>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-[85vw] m-auto my-[20vh] ">
     <div>
    <Card className="w-full m-auto">
      <CardHeader shadow={false} floated={false}>
        <img
          src={Baby}
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
          Baby
        </Button>
      </CardFooter>
    </Card>
    </div>


    <div>
    <Card className="w-full m-auto">
      <CardHeader shadow={false} floated={false}>
        <img
          src={LivingRoom}
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
          Living Area
        </Button>
      </CardFooter>
    </Card>
    </div>

    <div>
    <Card className="w-full m-auto">
      <CardHeader shadow={false} floated={false}>
        <img
          src={DiningRoom}
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
          Dining Room
        </Button>
      </CardFooter>
    </Card>
    </div>

    <div>
    <Card className="w-full m-auto">
      <CardHeader shadow={false} floated={false}>
        <img
          src={Bedroom}
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
          Bedroom
        </Button>
      </CardFooter>
    </Card>
    </div>

    <div>
    <Card className="w-full m-auto">
      <CardHeader shadow={false} floated={false}>
        <img
          src={Work}
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
          Work Essentials
        </Button>
      </CardFooter>
    </Card>
    </div>

    <div>
    <Card className="w-full m-auto">
      <CardHeader shadow={false} floated={false}>
        <img
          src={General}
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
          General
        </Button>
      </CardFooter>
    </Card>
    </div>
    </div>
    </Layout>
  );
}