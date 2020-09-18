import React from 'react';
import { Heading } from "react-bulma-components";

const Title = ({ title }) => {
  return ( 
    <div className="space-title">
      <Heading>{title}</Heading>
    </div>
   );
}
 
export default Title;