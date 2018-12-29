import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const BreadcrumbExampleSection = () => (
  <Breadcrumb>
    <Breadcrumb.Section link>
      <NavLink to='./'>
        Home
    </NavLink></Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section active>Search</Breadcrumb.Section>
  </Breadcrumb>
)

export default BreadcrumbExampleSection
