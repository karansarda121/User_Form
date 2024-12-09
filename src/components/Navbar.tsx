import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  // Check login status on mount
  useEffect(() => {
    const userEmail = localStorage.getItem("logged");
    if (userEmail) {
      setIsLoggedIn(true); 
    }
  });

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("logged"); 
    setIsLoggedIn(false); 
    navigate("/login"); 
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md sticky top-0 z-10">
      <div className="text-xl font-semibold tracking-wide">Better</div>
      <ul className="flex gap-6">
        {isLoggedIn ? (
          // If logged in, show Logout button
          <li>
            <button
              onClick={handleLogout}
              className="px-6 py-2 text-white bg-red-600 rounded-full hover:bg-white hover:text-red-600 border-2 border-red-600 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Logout
            </button>
          </li>
        ) : (
          // If not logged in, show Sign Up and Login buttons
          <>
            <li>
              <Link
                to="/signup"
                className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-white hover:text-blue-500 border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-white hover:text-blue-500 border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
