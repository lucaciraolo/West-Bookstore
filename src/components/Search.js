import React, { useState, useEffect } from "react";

function Search() {
  const URL =
    "https://openlibrary.org/search.json?q=harry+potter&mode=everything";

  const [searchTerm, setSearchTerm] = useState(null);
  const [searchBoxInput, setSearchBoxInput] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function fetchSearch() {
      const resp = await fetch(URL);
      const books = await resp.json();
      setResults(books.docs);
    }
    fetchSearch();
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
        {results.map((result) => {
          console.log(result);
          return (
            <div>
              <h3>{result.title} </h3>
              <p>
                {" "}
                {result.author_name &&
                  result.author_name.map((author) => author).join(",")}{" "}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Search;
