import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import "./Statistics.css";
import {Bar} from 'react-chartjs-2';

export class Statistics extends Component {

constructor(props){
  super(props);
  this.state = {
    chartData: {
      labels: ['Shirts', 'Jackets', 'Sweaters', 'Blouses', 'Dresses', 'Pants', 'Shoes', 'Accessories'],
      datasets: [
        {
          label:'Amount sold',
          data:[
              4,
              5,
              6,
              6,
              4,
              8,
              4,
              3
          ],
          backgroundColor:[
          'rgba(54, 162, 235, 0.6)',
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
  }
}

  render() {
   
    return (
      <Container style={{ marginTop: "7em" }}>
        <div className="chart">
        <Bar
          height={250}
          width={100}
          data={this.state.chartData}
          options={{
            maintainAspectRatio: false,
            title:{
              display:true,
              text:'Sale 2018',
              fontSize: 25
            },
            legend:{
              display:true,
              position:'bottom'
            },
            scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
           }}
        />
        </div>
        
      </Container>
    );
  }
}

export default Statistics;

