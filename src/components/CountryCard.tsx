import React from "react";
import { Link } from "react-router-dom";

interface CountryCardProps {
  name: string;
  capital: string;
  population: number;
  region: string;
  flag: string;
  alpha3Code: string;
}

const CountryCard: React.FC<CountryCardProps> = ({
  name,
  capital,
  population,
  region,
  flag,
  alpha3Code,
}) => {
  return (
    <div className="country-card">
      <img src={flag} alt={`${name} flag`} className="country-flag" />
      <h3>{name}</h3>
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>Population:</strong> {population}</p>
      <p><strong>Region:</strong> {region}</p>
      <Link to={`/country/${alpha3Code}`} className="details-link">See Details</Link>
    </div>
  );
};

export default CountryCard;
