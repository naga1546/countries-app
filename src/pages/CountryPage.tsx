import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCountries } from "../services/countryService";

const CountryPage: React.FC = () => {
  const { alpha3Code } = useParams<{ alpha3Code: string }>();
  const [country, setCountry] = useState<any | null>(null);

  useEffect(() => {
    const getCountry = async () => {
      const data = await fetchCountries();
      const countryData = data.find((country: any) => country.cca3 === alpha3Code);
      setCountry(countryData);
    };
    getCountry();
  }, [alpha3Code]);

  if (!country) return <div>Loading...</div>;

  return (
    <div className="country-page">
      <img src={country.flags.svg} alt={`${country.name.common} flag`} className="country-flag" />
      <h1>{country.name.common}</h1>
      <p><strong>Native Name:</strong> {country.name.official}</p>
      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Sub Region:</strong> {country.subregion}</p>
      <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
      <p><strong>Currencies:</strong> {Object.values(country.currencies).map((currency: any) => currency.name).join(", ")}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(", ")}</p>
    </div>
  );
};

export default CountryPage;
