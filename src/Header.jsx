import React, { useEffect } from "react";
import { logo } from "../utility/constant";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { addUserData, removeUserData } from "../utility/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function Header() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid } = user;
        dispatch(addUserData({ email: email, uid: uid }));
      } else {
        // User is signed out
        dispatch(removeUserData());
      }
    });
  }, []);


  // const [state, setstate] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user.userData);

  const cartItemList = useSelector((store) => store.cart.cartItemList);
  const logOutFn = () => {
    navigate("/login");
    dispatch(removeUserData());
  };

  return (
    <div className="md:z-50 z-50  md:mx-1  md:px-1  md:flex md:items-center md:justify-between md:py-2 md:bg-gray-200 md:sticky md:top-0 md:shadow-lg flex items-center justify-between px-2 py-1 shadow-lg sticky top-0 ">
      <img src={logo} alt="logo" className=" rounded-full h-10" />
      <div>
        <ul className="md:flex md:items-center md:gap-5 flex items-center gap-[5px] relative -right-2 font-semibold md:-right-0 ">
          <Link to={"/"}>
            <li className="li">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="li">About</li>
          </Link>
          <Link to={"/products"}>
            <li className="li">Product</li>
          </Link>
          <Link to={"/contact"}>
            <li className="li">Contact</li>
          </Link>
          <Link to={"/cart"}>
            {userData?.email && (
              <li className="text-orange-900">
                <ShoppingCartOutlinedIcon />
                <span className="md:relative md:-top-3 md:text-xs md:-left-2 md:h-3 md:rounded-full md:px-1 md:text-white md:w-3  relative -top-3 text-xs -left-2 h-1 rounded-full px-1 text-white  bg-orange-950 ">
                  
                  {cartItemList.length}
                </span>
              </li>
            )}
          </Link>
          {!userData?.email && (
            <li>
              <Link to={"/login"}>
                <button className="md:text-white md:font-semibold md:text-xs md:px-2 md:py-1 md:bg-violet-600 text-xs font-semibold text-white bg-violet-600 px-2 mx-2 py-1">
                  LogIn
                </button>
              </Link>
            </li>
          )}
          {userData?.email && (
            <li className="text-orange-950">
              <AccountCircleIcon />
            </li>
          )}
          {userData?.email && (
            <li className="text-red-500" onClick={logOutFn}>
              <LogoutIcon />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
