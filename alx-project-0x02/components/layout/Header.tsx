import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 bg-gray-100 shadow">
      <nav className="flex gap-6">
        {/* Link to HOME page */}
        <Link href="/home">
          Home
        </Link>

        {/* Link to ABOUT page */}
        <Link href="/about">
          About
        </Link>

        {/* Add more links as needed */}
      </nav>
    </header>
  );
};

export default Header;
