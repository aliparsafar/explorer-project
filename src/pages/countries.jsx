import { useEffect, useState } from "react";
import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch countries");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10 text-xl">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  const regions = [...new Set(countries.map((country) => country.region).filter(region => region))];

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Countries List</h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-lg shadow-sm text-lg w-full max-w-md"
        />

        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="border p-2 rounded-lg shadow-sm text-lg w-full max-w-xs"
        >
          <option value="">All Regions</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <div key={country.cca3} className="border p-4 rounded-lg shadow-md">
              <img
                src={country.flags.svg}
                alt={country.name.common}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <h2 className="text-xl font-semibold">{country.name.common}</h2>
              <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-lg col-span-full">No countries found</p>
        )}
      </div>
    </div>
  );
};

export default Countries;
