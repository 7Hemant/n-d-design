import React from "react";

const Header = () => {
  return (
    <header className="bg-white z-50 shadow-md p-4 border-b w-full fixed">
      <nav>
        <ul className="flex capitalize space-x-9 text-orange-700">
          <li>User Name</li>
          <li>Logout</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
