import React from 'react';
import { Level, Side, Container } from "react-bulma-components"

import Title from "../components/Title";
import BookCard from "../components/BookCard";

const HomePage = () => {

  return (
      <Container breakpoint="widescreen">
        <Title title="Most popular books" />
        <Level>
          <BookCard title={"Harry Potter"} rating={7} desc={"Harry potter is a good book"} />
          <BookCard title={"Harry Potter"} rating={7} desc={"Harry potter is a good book"} />
          <BookCard title={"Harry Potter"} rating={7} desc={"Harry potter is a good book"} />
          <BookCard title={"Harry Potter"} rating={7} desc={"Harry potter is a good book"} />
        </Level>
      </Container>
  );
}
 
export default HomePage;