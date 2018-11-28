import React from 'react'
import { Button, Container } from 'semantic-ui-react'

const SelectSize = () => 
    <Container>
        <Button basic>XS</Button>
        <Button basic>S</Button>
        <Button disabled basic>M</Button>
        <Button basic>L</Button>
        <Button basic>XL</Button>
        <Button basic>XXL</Button>
        <Button disabled basic>3XL</Button>
    </Container>

export default SelectSize