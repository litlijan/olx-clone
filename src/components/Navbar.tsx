import { useState } from "react";
import Login from "./Login";

import olx from "../assets/olx.png";
import lens from "../assets/lens.png";
import arrow from "../assets/arrow.png";
import search from "../assets/search.png";

type SearchProps = {
  setSearch: (value: string) => void;
};

const Navbar = ({ setSearch }: SearchProps) => {
  const [loginPop, setLoginPop] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-white w-full bg-slate-100 shadow-md ">
        <img src={olx} className="w-11 h-9" />
        <div className="flex items-center border p-2 border-black">
          <img src={lens} className="w-6 h-5 mt-1" />
          <input placeholder="Location" className="ml-2 outline-none" />
          <img src={arrow} className="w-8 h-7 ml-2" />
        </div>
        <div className="flex items-center border-2 border-black mx-2 p-2">
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Find Cars, Mobile phones and more"
            className="ml-2 w-96 outline-none"
          />
          <img src={search} className="w-8 h-5 mx-2 my-1" />
        </div>
        <div className="flex items-center cursor-pointer mx-2">
          <h1 className="font-semibold">ENGLISH</h1>
          <img src={arrow} className="w-8 h-7 ml-1" />
        </div>
        <div
          onClick={() => setLoginPop(!loginPop)}
          className="flex items-center cursor-pointer underline hover:no-underline mx-2"
        >
          <h1 className="font-bold text-lg">Login</h1>
        </div>
        <div className="flex items-center cursor-pointer rounded-full border border-yellow-500 p-2 mx-2">
          <h1 className="font-bold text-lg">+sell</h1>
        </div>
      </div>
      {loginPop && <Login setLoginPop={setLoginPop} />}
    </>
  );
};

export default Navbar;
