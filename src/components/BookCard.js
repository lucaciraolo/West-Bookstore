import React from "react";
import { Card, Media, Content, Heading } from "react-bulma-components";
import AddRating from "./rating/AddRating";

const BookCard = ({ bookKey, title, desc, rating }) => {
  // image url, book title, short desc

  return (
    <Card className="space">
      <Card.Header>
        <Card.Header.Title>{title}</Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <Media>
          <Media.Item>
            <Heading size={4}>Rating: {rating}</Heading>
          </Media.Item>
        </Media>
        <Content>{desc}</Content>
        <AddRating bookKey={bookKey} title={title} />
      </Card.Content>
    </Card>
  );
};

export default BookCard;
