import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

export default function PubmedSearch() {
  let [searchword, setSearchword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`searching for ${searchword}`);
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
