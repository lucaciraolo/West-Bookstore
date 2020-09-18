import React from 'react';
import { Level, Container } from "react-bulma-components"

import Title from "../components/Title";
import BookCard from "../components/BookCard";

const HomePage = () => {
  return (
      <Container breakpoint="widescreen">
        <Title title="Most popular books" />
        <Level>
          {/* {books.map((book) => {
            return (
              <BookCard
                title={book.title}
                bookKey={book.bookId}
                rating={book.rating}
              />
            );
          })} */}
          <BookCard title={"Harry Potter and the Philosopher's stone"} rating={7} desc={"Harry potter is a very good book"} />
          <BookCard title={"Harry Potter and the Goblet of Fire"} rating={2} desc={"Harry potter is a medicore book"} />
          <BookCard title={"Harry Potter and the Prisoner of Askaban"} rating={9} desc={"Harry potter is a excellent book"} />
          <BookCard title={"Harry Potter and the Half Blood Prince"} rating={8} desc={"Harry potter is a good book"} />
        </Level>
      </Container>
  );
}
 
export default HomePage;