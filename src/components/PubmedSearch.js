import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import axios from "axios";

export default function PubmedSearch() {
  let [searchword, setSearchword] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    //documentation for wikiAPI: https://api.wikimedia.org/wiki/API_reference/Core/Search/Search_content
    let apiUrl = `https://api.wikimedia.org/core/v1/wikipedia/en/search/page?q=${searchword}&limit=10`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSearch(event) {
    setSearchword(event.target.value);
  }

  return (
    <Container>
      <div>Search for a topic</div>
      <form onSubmit={search}>
        <input type="search" onChange={handleSearch}></input>
      </form>
      <Button>Search</Button>
    </Container>
  );
}
