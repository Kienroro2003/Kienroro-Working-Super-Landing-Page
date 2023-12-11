import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header__shadow">
      <div className="w-[960px] mx-auto">
        <ul className="flex justify-center items-center">
          <li className="font-bold text-sm py-4 px-2">
            <Link className="py-2 px-2 text-third hover:text-secondary transition">
              Kienroro
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
