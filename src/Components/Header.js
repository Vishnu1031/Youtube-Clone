import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Store/appSlice";

const Header = () => {
  const dispatch = useDispatch()

  const handleClick = () =>{
    dispatch(toggleMenu())
  }

  return (
    <div className="flex h-20 justify-between p-4 shadow-2xl">
      <div className="flex">
        <img
          onClick={handleClick}
          alt="Hamburger-menu"
          src="https://marketplacedesignoye.s3.ap-south-1.amazonaws.com/HAMBURGER-MENU-black-line-bold-border-icon-logo-vector.png"
        />
        <img
          className="mx-2"
          alt="youtube-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhrhM4Tn6b7URM4DKhGcjxwDjk-NcyDqKBnw&s"
        />
      </div>
      <div>
        <input type="text" className="border border-gray-500 w-96 p-2 rounded-l-full"/>
        <button className="border border-gray-400 bg-gray-200 p-2 rounded-r-full">Search</button>
      </div>
      <img
        className=""
        alt="youtube-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhrhM4Tn6b7URM4DKhGcjxwDjk-NcyDqKBnw&s"
      />
    </div>
  );
};

export default Header;
