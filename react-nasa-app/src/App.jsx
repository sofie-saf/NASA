import React, { useState, useEffect } from 'react';
import './App.css';

// Hent API-nøkkelen fra miljøvariablene
const apiKey = import.meta.env.VITE_NASA_API_KEY;

const App = () => {
  const [apodData, setApodData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Hent "Astronomy Picture of the Day" (APOD)
  useEffect(() => {
    const fetchApod = async () => {
      setLoading(true);
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
      const data = await response.json();
      setApodData(data);
      setLoading(false);
    };

    fetchApod();
  }, []);

  // Hent bilder fra NASA galleri basert på søk
  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await fetch(`https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image`);
    const data = await response.json();
    setSearchResults(data.collection.items);
    setLoading(false);
  };

  return (
    <div className="App">
      <header>
        <h1>Astronomy Picture of the Day (APOD)</h1>
      </header>

      <main>
        {/* Vis APOD hvis data er lastet inn */}
        {loading && <p>Loading...</p>}

        {apodData && !loading && (
          <section className="apod">
            <h2>{apodData.title}</h2>
            <img src={apodData.url} alt={apodData.title} className="apod-image" />
            <p>{apodData.explanation}</p>
          </section>
        )}

        {/* Søkefelt */}
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for space images (e.g., moon, mars)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {/* Vis søkeresultater */}
        {searchResults.length > 0 && !loading && (
          <section className="search-results">
            <h2>Search Results</h2>
            <div className="results">
              {searchResults.map((item, index) => (
                <div key={index} className="result-item">
                  <img
                    src={item.links[0].href}
                    alt={item.data[0].title}
                    className="search-image"
                  />
                  <p>{item.data[0].title}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
