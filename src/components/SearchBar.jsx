import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="my-4 mx-auto max-w-xl">
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-gray-600 font-medium border-2 rounded p-2 max-w-xl w-full mx-auto"
      />
    </div>
  );
}

export default SearchBar;
