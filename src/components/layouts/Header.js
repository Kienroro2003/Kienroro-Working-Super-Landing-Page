import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header__shadow">
      <div className="w-[960px] mx-auto">
        <ul className="flex items-center justify-center">
          <li className="px-2 py-4 font-bold">
            <Link className="px-2 py-2 text-sm transition text-third hover:text-secondary">
              Kienroro
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
