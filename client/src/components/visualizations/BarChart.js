import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from "d3";
import useResizeObserver from "../functions/ResizeObserver";

function BarChart() {
  const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);
  const svgRef = useRef();
  let dataScale = Math.max.apply(Math, data);
  let leftScale = (dataScale *= 1.25);
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);

    if(!dimensions) return;

    // scales
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, dimensions.width])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, leftScale])
      .range([dimensions.height, 0]);

    const colorScale = scaleLinear()
      .domain([75, 100, 150])
      .range(["green", "orange", "red"])
      .clamp(true);


    const xAxis = axisBottom(xScale).ticks(data.length);
    svg
      .select(".x-axis")
      .style("transform", `translateY(${dimensions.height}px)`)
      .call(xAxis);

    // create y-axis
    const yAxis = axisRight(yScale);
    svg
      .select(".y-axis")
      .style("transform", `translateX(${dimensions.width}px)`)
      .call(yAxis);

    // draw the bars
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(index))
      .attr("y", -dimensions.height)
      .attr("width", xScale.bandwidth())
      .on("mouseenter", (value, index) => {
        svg
          .selectAll(".tooltip")
          .data([value])
          .join(enter => enter.append("text").attr("y", yScale(value) - 4))
          .attr("class", "tooltip")
          .text(value)
          .attr("x", xScale(index) + xScale.bandwidth() / 2)
          .attr("text-anchor", "middle")
          .transition()
          .attr("y", yScale(value) - 8)
          .attr("opacity", 1);
      })
      .on("mouseleave", () => svg.select(".tooltip").remove())
      .transition()
      .attr("fill", colorScale)
      .attr("height", value => dimensions.height - yScale(value));
  }, [data, dimensions, leftScale]);

  return (
    <div>
        <div ref={wrapperRef} className="chartContainer">
            <svg ref={svgRef} style={{height: '600px'}}>
            <g className="x-axis" />
            <g className="y-axis" />
            </svg>
        </div>
        <div className="row chart__buttons"> 
            <button 
                className="btn btn-large green"
                style={{width: '120px'}}
                onClick={() => setData(data.map(value => value + 5))}>
                Update
            </button>
            <button 
                className="btn btn-large green"
                style={{width: '120px'}}
                onClick={() => setData(data.filter(value => value < 35))}>
                Filter
            </button>
            <button
                className="btn btn-large green"
                style={{width: '120px', float: 'right'}}
                onClick={() => setData([...data, Math.round(Math.random() * 100)])}
                >
                Add
            </button>
        </div>
    </div>

  );
}

export default BarChart;