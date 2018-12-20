import React, { Component } from 'react';
import TopHeader from '../Header';
import FilterGrid from '../FilterGrid';
import FilterDropdown from '../FilterDropdown';
import { Container, Menu, MenuItem, Button,  } from 'semantic-ui-react';
import Footer from '../Footer';
import { NavLink } from 'react-router-dom';
 
 
export default class AdminPage extends Component {
    displayName = AdminPage.name
 
    render() {
        return (
            <div>
                <TopHeader />
                <Container>
                    <Menu borderless size='massive' color='grey' inverted>
                        <MenuItem>
                            <Button basic compact secondary as={NavLink} to='/'>
                                <h1>TripStyle</h1>
                            </Button>
                        </MenuItem>
                        <MenuItem position='right'>
                        </MenuItem>
                        <MenuItem className="Login" position='right'>
                        </MenuItem>
                        <MenuItem>
                        </MenuItem>
                    </Menu>
                </Container>
                <Footer />
            </div>
        );
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