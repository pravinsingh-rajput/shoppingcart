"use client";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <div className="w-full bg-slate-500 h-10 flex justify-between items-center p-4 py-6 ">
      <p className="text-white text-xl">ShoppingCart</p>
      <ShoppingCartIcon className="text-white cursor-pointer text-3xl md:mr-5 " />
    </div>
  );
};

export default Header;
