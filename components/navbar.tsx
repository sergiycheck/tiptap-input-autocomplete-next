import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">tip-tap-examples</div>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link href="/tip-tap-example-1" className="text-white hover:text-gray-200">
            tip-tap-example-1
          </Link>
          <Link href="/tip-tap-example-2" className="text-white hover:text-gray-200">
            tip-tap-example-2
          </Link>
          <Link href="/tip-tap-example-3" className="text-white hover:text-gray-200">
            tip-tap-example-3
          </Link>
          <Link href="/tip-tap-example-4" className="text-white hover:text-gray-200">
            tip-tap-example-4
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
