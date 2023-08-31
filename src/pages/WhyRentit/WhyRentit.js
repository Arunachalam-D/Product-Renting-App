import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

  
  export default function WhyRentit({head,text,icon}) {
    return (
      <Card className="rounded shadow-lg">
        <CardBody >
        <div className="text-red-400 text-2xl">
        {icon}
        </div>
          <Typography variant="h5"  className="my-2 ">
            {head}
          </Typography>
          <Typography>
            {text}
          </Typography>
        </CardBody>
        
      </Card>
    );
  }