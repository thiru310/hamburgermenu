import React, { Component } from 'react'
import { SimpleDropdown } from 'react-js-dropdavn'
import 'react-js-dropdavn/dist/index.css'

const data = [
  {label: 'Ex opt 1', value: 1},
  {label: 'Ex opt 2', value: 2},
  {label: 'Ex opt 3', value: 3},
  {label: 'Ex opt 4', value: 4},
]

class ReactSimpleDropDown extends Component {
  render() {
    return (
    <SimpleDropdown
        options={data}
        clearable
        searchable
        configs={
          { position: { y: 'top', x: 'center' } }
        }
      />
      );
  }
}

export default ReactSimpleDropDown;