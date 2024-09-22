import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import NavBar from "./header";

function HomeLayout() {
  const LoggedIn = true;
  const navigate = useNavigate();
  return (
    <div className="w-[90%] mx-auto">
      {LoggedIn ? (
        <>
          <NavBar />
          <div className="flex gap-4 px-10 mt-4">
            {/* Outlet */}
            <div className="flex-1">
              <Outlet />
            </div>

            {/* Create Memory */}
            <div className="w-1/3 bg-white p-4 border rounded shadow-md">
              <h1 className="text-xl font-semibold text-gray-800 mb-4">
                Create Memory
              </h1>
              <form className="flex flex-col space-y-3">
                <input
                  type="text"
                  placeholder="Creator"
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  placeholder="Title"
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                  placeholder="Message"
                  rows="3"
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                <input
                  type="text"
                  placeholder="Tags (comma separated)"
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="file"
                  className="p-2 border border-gray-300 rounded focus:outline-none"
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="flex-1 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <div className="flex h-screen justify-center items-center">
          <div className="w-1/3 bg-white p-6 border rounded-lg shadow-lg text-center">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              Access Your Memories
            </h1>
            <p className="text-gray-600 mb-6">
              Log in to start creating and sharing your favorite moments.
            </p>
            <button
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
              onClick={() => navigate("/auth/login")}
            >
              Login Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeLayout;
