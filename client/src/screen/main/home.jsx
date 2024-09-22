import React, { useState } from "react";

function Home() {
  // Sample data for the cards (replace with actual data fetching logic)
  const [memories, setMemories] = useState([
    {
      id: 1,
      creator: "John Doe",
      title: "Beach Day",
      message: "Had a great day at the beach with friends!",
      tags: ["#beach", "#fun"],
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      id: 2,
      creator: "Jane Smith",
      title: "Mountain Hike",
      message: "Reached the summit after a long hike.",
      tags: ["#hiking", "#mountains"],
      image: "https://via.placeholder.com/150",
    },
  ]);

  // Handler to remove a memory card by its ID
  const handleRemove = (id) => {
    //  setMemories(memories.filter((memory) => memory.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Memories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {memories.map((memory) => (
          <div
            key={memory.id}
            className="bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition relative"
          >
            <img
              src={memory.image}
              alt={memory.title}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <div className="p-3">
              <h2 className="text-lg font-semibold text-gray-800">
                {memory.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">By: {memory.creator}</p>
              <p className="text-gray-700">{memory.message}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {memory.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-blue-500 text-xs bg-blue-100 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Remove Button */}
            <button
              onClick={() => handleRemove(memory.id)}
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded-full text-xs"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
