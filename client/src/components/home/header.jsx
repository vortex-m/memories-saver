import React from "react";

function NavBar() {
  const user = null;
  return (
    <header className="flex justify-between items-center p-4 rounded-full mt-3 bg-blue-100 shadow-md">
      {/* Logo / Brand */}
      <div className="flex items-center gap-2">
        <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
        <h1 className="text-3xl font-bold text-blue-600">Memories</h1>
      </div>

      {/* Logout Button */}
      <div>
        {user ? (
          <button className="text-lg text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-2xl transition duration-300">
            Logout
          </button>
        ) : (
          <button className="text-lg text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-2xl transition duration-300">
            Login
          </button>
        )}
      </div>
    </header>
  );
}

export default NavBar;
