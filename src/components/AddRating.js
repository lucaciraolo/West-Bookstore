import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";

import { firebaseProject } from "../firebase";
import "firebase/firestore";

import { Button } from "react-bulma-components";

export default function AddRating({ bookKey }) {
  const [rating] = useState([]);

  const user = useContext(UserContext);

  const setRating = (rating) => {
    var db = firebaseProject.firestore();
    db.collection("rating")
      .add({
        UserID: user.uid,
        rating: rating,
        BookID: bookKey,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div>
      <Button className="btn danger" onClick={() => this.setRating(1)}>
        1 Star
      </Button>
      <Button className="btn danger" onClick={() => this.setRating(2)}>
        2 Star
      </Button>
      <Button className="btn danger" onClick={() => this.setRating(3)}>
        3 Star
      </Button>
      <Button className="btn danger" onClick={() => this.setRating(4)}>
        4 Star
      </Button>
      <Button className="btn danger" onClick={() => this.setRating(5)}>
        5 Star
      </Button>
    </div>
  );
}
