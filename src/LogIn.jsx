import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { checkValidData } from "../utility/checkValidData";
import { auth } from "../firebase";
import {  createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword  } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserData, removeUserData } from "../utility/userSlice";

export default function LogIn() {
  const dispatch = useDispatch()
    const [errorMessage, seterrorMessage] = useState(null);
    const navigate = useNavigate()
    const [email, setemail] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const [password, setpassword] = useState("");
  const [signIn, setsignIn] = useState(false);
// const navigate = useNavigate()
  

  const signInToggle = () => {
    setsignIn(!signIn);
  };
  const toggleShowFn = () => {
    setshowPassword(!showPassword);
  };
  const signInBtn =()=>{
    // navigate("/products")
    const a = checkValidData(email,password);
    seterrorMessage(a)
    if (errorMessage) return;     
    if (!signIn) {
        // signup
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    seterrorMessage("Signed Up SuccessFul")
    setemail("")
    setpassword("")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorMessage)
  });
    }else{
        // signin logic
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch(addUserData({email:user.email, uid:user.uid}))
    navigate('/')

    
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorMessage)
  });
    //  navigate("/home")   
    }
    
  }
  return (
    <div className="w-screen md:h-fit h-screen ">
      <img
        src="https://images.pexels.com/photos/4560092/pexels-photo-4560092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="img"
        className="-z-50 md:static absolute top-12  w-screen md:h-fit h-screen "
      />
      <div className=" z-50 md:w-1/4 w-2/4 py-3 text-center ml-[22%] mt-[45%] bg-gray-500 md:ml-[37%] md:-top-[60%] opacity-70 fixed  px-2">
        
        <div className="flex flex-col gap-3">
          <h2 className="text-white font-bold">
            {signIn ? "Sign In" : "Sign Up"}
          </h2>
          <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-2">
            <input
            value={email}
            className="bg-gray-300 w-full px-3 outline-none text-xs font-semibold py-1"
            placeholder="abc@gmail.com"
            onChange={(e)=>setemail(e.target.value)}
          />
          <div className="flex items-center relative">
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              className="bg-gray-300 w-full px-3 outline-none text-xs font-semibold py-1"
              placeholder="Enter Password"
            />
            <span onClick={toggleShowFn} className="absolute right-1">
             {showPassword?<VisibilityOffIcon/>:<VisibilityIcon />} 
            </span>
          </div>
          <p className="text-[8px] font-semibold text-red-700">{errorMessage}</p>
          <button className="bg-red-700 w-full text-white" onClick={signInBtn}>
            {signIn ? "Sign In" : "Sign Up"}
          </button>
          </form>
          <p className="text-xs font-semibold">
            New To RaazStore?{" "}
            <span
              onClick={signInToggle}
              className="text-red-500 cursor-pointer underline"
            >
              {signIn?"Sign Up":"Sign In"}
            </span>{" "}
            Now
          </p>
        </div>
      </div>
      
    </div>
  );
}
