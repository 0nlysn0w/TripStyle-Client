import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { items, item } from './Grid2'

const options = [
  { key: 1, text: 'Featured', value: 1 },
  { key: 2, text: 'Lowest price', value: 2 },
  { key: 3, text: 'Highest price', value: 3 },
]

const DropdownExampleUncontrolled = () => (
  <Dropdown selection options={options} placeholder='Sort by...' />
)

export default DropdownExampleUncontrolled
