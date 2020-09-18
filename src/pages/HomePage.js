import React from 'react';
import { Level, Side, Container } from "react-bulma-components"

import BookCard from "../components/BookCard";

const HomePage = () => {

  return (
      <Container breakpoint="widescreen">
        <Level>
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </Level>
      </Container>
  );
}
 
export default HomePage;