import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";

import { firebaseProject } from "../firebase";
import "firebase/firestore";

import { Button } from "react-bulma-components";

export default function AddRating({ bookKey }) {
  return (
    <div>
      <Button className="btn danger" onClick={() => setRating(1)}>
        1 Star
      </Button>
      <Button className="btn danger" onClick={() => setRating(2)}>
        2 Star
      </Button>
      <Button className="btn danger" onClick={() => setRating(3)}>
        3 Star
      </Button>
      <Button className="btn danger" onClick={() => setRating(4)}>
        4 Star
      </Button>
      <Button className="btn danger" onClick={() => setRating(5)}>
        5 Star
      </Button>
    </div>
  );
}
