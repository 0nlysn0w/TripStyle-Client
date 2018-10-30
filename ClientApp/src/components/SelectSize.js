import React from 'react'
import { Button, Container } from 'semantic-ui-react'

const SelectSize = () => 
    <Container>
        <Button>XS</Button>
        <Button>S</Button>
        <Button disabled>M</Button>
        <Button>L</Button>
        <Button>XL</Button>
        <Button>XXL</Button>
        <Button disabled>3XL</Button>
    </Container>

export default SelectSize