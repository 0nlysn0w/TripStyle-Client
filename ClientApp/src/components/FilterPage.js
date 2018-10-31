import React, { Component } from 'react';
import TopHeader from './Header';
import FilterGrid from './FilterGrid';
import FilterDropdown from './FilterDropdown';
import { Container } from 'semantic-ui-react';
import { Divider } from 'semantic-ui-react';

export class FilterPage extends Component {
  displayName = FilterPage.name

  render() {
    return ( 
      <div>
        <TopHeader />
        <Container>
          <FilterDropdown />
        </Container>
        <Divider hidden />
        <Container>
          <FilterGrid />
        </Container>
        <Divider hidden />
      </div>
    );
  }
}
