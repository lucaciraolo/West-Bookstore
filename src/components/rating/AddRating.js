import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { firebaseProject } from "../../firebase";

import "./AddRating.css";

export default function AddRating({ bookKey }) {
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
    <div class="rating">
      <button className="btn danger" onClick={() => setRating(1)}>
        <span>☆</span>
      </button>
      <button className="btn danger" onClick={() => setRating(2)}>
        <span>☆</span>
      </button>
      <button className="btn danger" onClick={() => setRating(3)}>
        <span>☆</span>
      </button>
      <button className="btn danger" onClick={() => setRating(4)}>
        <span>☆</span>
      </button>
      <button className="btn danger" onClick={() => setRating(5)}>
        <span>☆</span>
      </button>
    </div>
  );
}
