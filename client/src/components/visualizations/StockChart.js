import React, { Component } from 'react';
import * as d3 from 'd3';
import { csv } from 'd3';


const width = 650;
const height = 400;
const margin = {top: 20, right: 5, bottom: 20, left: 35};
const red = '#eb6a5b';
const blue = '#52b6ca';


const row = d => {
        d.population = +d.population;
        return d;
    };
  
const dataset = d3.csv("./aapl.csv").then(function(data)
    {return data;
    });

const stock = dataset.then(function(value) {
    return Promise.all(value.map(function(results){
    return [results.close, results.date];
     }))});


class StockChart extends Component {

  state = {
    close: null, // svg path command for all the high temps
    date: null, // d3 helpers
    xScale: d3.scaleTime().range([margin.left, width - margin.right]),
    yScale: d3.scaleLinear().range([height - margin.bottom, margin.top]),
    lineGenerator: d3.line(),
  };

  xAxis = d3.axisBottom().scale(this.state.xScale)
    .tickFormat(d3.timeFormat('%b'));
  yAxis = d3.axisLeft().scale(this.state.yScale)
    .tickFormat(d => `${d}℉`);

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null; // data hasn't been loaded yet so do nothing
    const {data} = nextProps;
    const {xScale, yScale, lineGenerator} = prevState;

    // data has changed, so recalculate scale domains
    const timeDomain = d3.extent(data, d => d.date);
    const priceClose = d3.max(data, d => d.close);
    xScale.domain(timeDomain);
    yScale.domain([0, priceClose]);

    // calculate line for lows
    lineGenerator.x(d => xScale(d.date));
    // and then price
    lineGenerator.y(d => yScale(d.close));
    const price = lineGenerator(data);

    return {price};
  }

  componentDidUpdate() {
    d3.select(this.refs.xAxis).call(this.xAxis);
    d3.select(this.refs.yAxis).call(this.yAxis);
  }

  render() {

    return (
      <svg width={width} height={height}>
        <path d={this.state.price} fill='none' stroke={red} strokeWidth='2' />
        <g>
          <g ref='xAxis' transform={`translate(0, ${height - margin.bottom})`} />
          <g ref='yAxis' transform={`translate(${margin.left}, 0)`} />
        </g>
      </svg>
    );
  }
}

export default StockChart;
