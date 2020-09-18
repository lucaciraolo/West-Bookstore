import React, { useState, useEffect } from "react";
import BookCard from "../BookCard";

function Search() {
  const URL = "https://openlibrary.org/search.json?q=";
  const SEARCHEND = "&mode=everything";

  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBoxInput, setSearchBoxInput] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function fetchSearch() {
      const resp = await fetch(URL + encodeURI(searchTerm) + SEARCHEND);
      const books = await resp.json();
      setResults(books.docs);
    }
    if (searchTerm.length > 0) {
      fetchSearch();
    }
  }, [searchTerm]);

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={searchBoxInput}
          onChange={(event) => {
            setSearchBoxInput(event.target.value);
          }}
          placeholder="Book to search"
        />
        <button onClick={() => setSearchTerm(searchBoxInput)}>Search</button>
      </header>
      <section>
        {loading}
        {results.map((result) => {
          const description =
            result.author_name &&
            result.author_name.map((author) => author).join(",");
          return (
            <BookCard
              bookKey={result.key.substring(7)}
              title={result.title}
              desc={description}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Search;
