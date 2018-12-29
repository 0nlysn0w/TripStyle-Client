import React, { Component } from 'react';
import TopHeader from './AdminTopHeader';
import FilterGrid from '../FilterGrid';
import FilterDropdown from '../FilterDropdown';
import { Container, Menu, MenuItem, Button,  } from 'semantic-ui-react';
import Footer from '../Footer';
import { NavLink } from 'react-router-dom';
import { Grid, Image, Card, CardContent, Icon, Divider } from 'semantic-ui-react';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';
 
export default class AdminPage extends Component {
    displayName = AdminPage.name
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false
        }
      }
    componentDidMount() {
        fetch('https://localhost:5001/api/product')
          .then(res => res.json())
          .then(json => {
            this.setState({
              isLoaded: true,
              items: json
            })
          });
      }

      render() {

    var { isLoaded, items, images } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    if (items && (items.length)) {
      console.log(this.props)
      return (
        <div>
        <TopHeader />
        <Container>
        <Grid>
          <Grid.Row columns={5} centered relaxed>
            {items.map(item => (
              <Grid.Column key={item.productId}>

                  <Card color='teal'>
                      <Image src= 'http://placekitten.com/g/200/300' />
                    <CardContent>
                      <Card.Header><Icon name='euro sign' />{item.price}</Card.Header>
                      <Card.Meta>{item.name}</Card.Meta>
                      <Card.Meta>{item.stock}</Card.Meta>
                      <Button circular size='small' color='green'></Button>
                      <Button circular size='small' color='red'></Button>
                    </CardContent>
                  </Card>
                  <Divider hidden />

              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
        </Container>
      <Footer />
  </div>
      )
    } else {
      return <div>No items found</div>
    }
  }
}

// import React, { Component } from 'react';
// import TopHeader from './Header';
// import FilterGrid from './FilterGrid';
// import FilterDropdown from './FilterDropdown';
// import { Container, Menu, MenuItem, Button,  } from 'semantic-ui-react';
// import Footer from './Footer';
// import { NavLink } from 'react-router-dom';
 
 
// export default class AdminPage extends Component {
//     displayName = AdminPage.name
 
//     render() {
//         return (
//             <div>
//                 <TopHeader />
//                 <Container>
//                     <Menu borderless size='massive' color='grey' inverted>
//                         <MenuItem>
//                             <Button basic compact secondary as={NavLink} to='/'>
//                                 <h1>TripStyle</h1>
//                             </Button>
//                         </MenuItem>
//                         <MenuItem position='right'>
//                         </MenuItem>
//                         <MenuItem className="Login" position='right'>
//                         </MenuItem>
//                         <MenuItem>
//                         </MenuItem>
//                     </Menu>
//                 </Container>
//                 <Footer />
//             </div>
//         );
//     }
// }