import React, { useState } from 'react';
import { Dropdown,Item,Divider} from "react-bulma-components";

const rowDropdown = () => {

   return (
    <Dropdown
    value={this.state.selected}
    onChange={this.onChange}
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
    <Dropdown.Divider />
    <Dropdown.Item value="divider">
      With divider
    </Dropdown.Item>
  </Dropdown>
    );
}


export default rowDropdown;