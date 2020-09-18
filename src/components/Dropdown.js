import React, { useState } from 'react';
import { Dropdown } from "react-bulma-components";

const RowDropdown = () => {

  const [selected, setSelected] = useState(false);

   return (
    <div>
      <Dropdown
        value={selected}
        onChange={() => setSelected(prev => !prev)}>
        <Dropdown.Item value="item" >
          Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="other">
          Other Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="active">
          Active Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="other 2">
          Other Dropdown item
        </Dropdown.Item>
        <Dropdown.Item value="divider">
          With divider
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}


export default RowDropdown;