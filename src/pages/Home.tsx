import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCountries } from "../services/countryService";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";

const Home: React.FC = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
      setFilteredCountries(data);
    };
    getCountries();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterCountries(query, selectedRegion);
  };

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    filterCountries(searchQuery, region);
  };

  const filterCountries = (query: string, region: string) => {
    let filtered = countries;
    if (query) {
      filtered = filtered.filter((country: any) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (region) {
      filtered = filtered.filter((country: any) => country.region === region);
    }
    setFilteredCountries(filtered);
  };

  return (
    <div className="home">
      <div className="filters">
        <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
        <Dropdown selectedRegion={selectedRegion} onSelectRegion={handleRegionSelect} />
      </div>

      <div className="countries-list">
        {filteredCountries.sort((a, b) => a.name.common.localeCompare(b.name.common)).map((country: any) => (
          <CountryCard
            key={country.cca3}
            name={country.name.common}
            capital={country.capital?.[0] || "N/A"}
            population={country.population}
            region={country.region}
            flag={country.flags.svg}
            alpha3Code={country.cca3}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
