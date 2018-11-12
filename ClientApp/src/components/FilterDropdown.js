import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Featured', value: 1 },
  { key: 2, text: 'Price', value: 2 },
  { key: 3, text: 'Quality', value: 3 },
]

const DropdownExampleUncontrolled = () => (
  <Dropdown selection options={options} placeholder='Sort by...' />
)

export default DropdownExampleUncontrolled
