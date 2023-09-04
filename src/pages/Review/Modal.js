import React, { useRef } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter
} from "@material-tailwind/react";
import './Modal.css'
import emailjs from 'emailjs-com';


export default function MessageDialog() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault(); 
    emailjs.sendForm('service_wyl3w7j', 'template_3hut7ih', form.current, 'MQoEZAtTSaoCqwwI2')
      .then((result) => {
        console.log(result)
      
      }, (error) => {
        console.log(error)
        
      });
  };

  return (
    <div className="flex m-auto">
      <button onClick={handleOpen} className="text-white p-2 bg-gray-900 border border-black m-auto flex">Write a Review</button>
      <Dialog open={open} handler={handleOpen} className="m-auto w-[80vw] lg:w-[40vw] my-[10vh] btn rounded-[10px]">
        <form ref={form} onSubmit={sendEmail}>
        <div className="flex items-center justify-between">
          <DialogHeader className="font-bold text-xl">Share your thoughts</DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5 cursor-pointer"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            <input name="name" type="text" placeholder="name" required className="rounded p-1 mt-3 border border-gray"/>
            <input name="position" type="text" placeholder="position" className="rounded p-1   border border-gray"/>
            <input name="organisation" type="text" placeholder="organisation" className="rounded p-1 border border-gray"/>
            <textarea name="review" placeholder="review" className="resize-none rounded p-1 border border-gray"/>
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2  mt-3">
          <button className="border border-red-400 hover:shadow-md text-red-400 px-2 py-1 rounded" onClick={handleOpen}>
            Close
          </button>
          <button type="submit" className="bg-green-500 text-white hover:shadow-md px-2 py-1 rounded" onClick={handleOpen}>
            Send Message
          </button>
        </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
}