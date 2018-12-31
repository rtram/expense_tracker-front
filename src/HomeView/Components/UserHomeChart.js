import React, { Component } from "react"
import {Line} from 'react-chartjs-2'

export default class Chart extends Component {

  render() {

    let dataObject = {
      data: {
          labels: this.props.label,
          datasets: [{
              label: 'Money Spent',
              data: this.props.data,
              backgroundColor: [
                  'rgba(60, 180, 75, .25)',
              ],
              borderColor: [
                  'green',
              ],
              borderWidth: 1
          }]
      },
    }

    return (
      <div className="chart">
        <Line
          data={dataObject.data}
          width={750}
          height={500}
          options={{
            title: {
              display: true,
              text: "Last Three Months's Spending",
              fontsize: 100
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }}
        />
      </div>
    )
  }
}