import React from "react";

interface DropdownProps {
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ selectedRegion, onSelectRegion }) => {
  const regions = ["Africa", "Asia", "Europe", "Oceania", "Americas"];
  
  return (
    <select
      value={selectedRegion}
      onChange={(e) => onSelectRegion(e.target.value)}
      className="region-dropdown"
    >
      <option value="">Select Region</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
