import React from "react";

export default function Contact() {
  return (
    <div className=" bg-gray-300">
      <iframe
        className="m-auto w-full px-1 "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.625686067157!2d90.23394317293726!3d26.273809236518787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375867b11b46599f%3A0x107256171c9f0db2!2sRaaz%20palace!5e0!3m2!1sen!2sin!4v1702662027853!5m2!1sen!2sin"
        width="1200"
        height="300"
        // style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className=" mt-2 bg-gray-200">
        
        <form
          className="flex w-96 m-auto  bg-gray-400 gap-2 p-3 flex-col"
          action="https://formspree.io/f/xrgnzgog"
          method="POST"
        >
          <h1 className=" font-bold ">Contact Us:</h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            autoComplete="off"
            className="px-5 py-1  bg-violet-500 border-none outline-none"
          />
          <input
            className="px-5 py-1  bg-violet-500 border-none outline-none"
            type="email"
            name="Email"
            placeholder="abc@gmail.com"
            required
            autoComplete="off"
            
          />
          <textarea
            className="px-5 py-1 font-semibold text-white bg-gray-700 border-none outline-none"
            name="message"
            cols="10"
            rows="5"
            required
            placeholder="Enter Your Querry "
          ></textarea>
          <input type="submit"  value="Submit" className="bg-green-600 hover:opacity-80 hover:text-black text-white font-bold cursor-pointer py-2 "/>
          
        </form>
      </div>
    </div>
  );
}
