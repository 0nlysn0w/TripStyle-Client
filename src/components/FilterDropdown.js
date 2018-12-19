import React, { Component } from 'react'
import { Dropdown, FormField } from 'semantic-ui-react'

export default class Filterbutton extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <form>
        <formfield>
        <Dropdown
          fluid
          placeholder='Sort by...'
          openOnFocus={false}
          selection
          options={[
            { key: 1, text: 'Featured', value: 1 },
            { key: 2, text: 'Lowest price', value: 2 },
            { key: 3, text: 'Highest price', value: 3 },
          ]}
        />
      </formfield>
      </form>
      
    )
  }

}
