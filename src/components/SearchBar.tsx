import React from "react";

interface SearchBarProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchBar;
