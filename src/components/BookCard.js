import React, { useState } from 'react';
import { Card, Media, Content, Heading, Image } from "react-bulma-components"

const BookCard = () => {

  // image url, book title, short desc

  return (
    <Card>
      <Card.Image size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>John Smith</Heading>
            <Heading subtitle size={6}>@johnsmith</Heading>
          </Media.Item>
        </Media>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris.
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
      </Card.Content>
    </Card>
  )
}
 
export default BookCard;