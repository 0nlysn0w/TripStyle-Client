import React, { Component } from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import { MenuItem } from 'semantic-ui-react';
import SearchBar from './SearchBar';
import { Button } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
import Home from './Home';
import ShoppingCart from './ShoppingCart';
import Login from './Login';



export default class TopHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

  render() {
    return (
        <Menu borderless size='massive' color='grey' inverted>
            <MenuItem>
                <Button basic compact secondary as={NavLink} to='/'>
                    <h1>TripStyle</h1>
                </Button>
            </MenuItem>
            <MenuItem position='right'>
                <SearchBar></SearchBar>
            </MenuItem>
            <MenuItem className="Login" position='right'>
                    <Login />
                </MenuItem>
                
            <MenuItem>
            <ShoppingCart />
            </MenuItem>
        </Menu>
    );
  }
}

/*export default class TopHeader extends Component {
    
    constructor(){
        super();
        this.state = {
          chartData:{}
        }
      }
    
      componentWillMount(){
        this.getChartData();
      }
    
      getChartData(){
        // Ajax calls here
        this.setState({
          chartData:{
            labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
            datasets:[
              {
                label:'Population',
                data:[
                  617594,
                  181045,
                  153060,
                  106519,
                  105162,
                  95072
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          }
        });
      }*/
    

  /*render() {
    return (
        <div>
            <Menu borderless size='massive' color='grey' inverted>
                <MenuItem>
                    <Button basic compact secondary as={NavLink} to='/'>
                        <h1>TripStyle</h1>
                    </Button>
                </MenuItem>
                <MenuItem position='right'>
                    <SearchBar />
                </MenuItem>
                <MenuItem className="Login" position='right'>
                        <Login />
                    </MenuItem>
                <MenuItem>
                <ShoppingCart />
                </MenuItem>
                <MenuItem>
                <Menu.Item as={Link} to="/chart">
                  Chart
                </Menu.Item>
                //<Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
                //</MenuItem>
            </Menu>
        </div>    
    );
  }
}*/