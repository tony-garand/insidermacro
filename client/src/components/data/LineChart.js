import React, { useRef, useEffect, useState } from "react";
import { select, line, axisBottom, scaleLinear }from 'd3'


export default function LineChart() {

    const [data, setData] = useState([25, 30, 45, 60, 100])
    const svgRef = useRef();

    // will be called initially and on every data change
    useEffect(() => {
        const svg = select(svgRef.current);

        
        const xScale = scaleLinear()
            .domain([0, data.length - 1])
            .range([0, 300]);
        const yScale = scaleLinear()
            .domain([0, 75])
            .range([150, 0])

        const xAxis = axisBottom(xScale);
        // generates the "d" attribute of a path element
        const myLine = line()
            .x((value, index) => xScale(index))
            .y(yScale);
        svg
        .selectAll("path")
        .data([data])
        .join("path")
        .attr("d", value => myLine(value))
        .attr("fill", "none")
        .attr("stroke", "blue");
    }, [data]);

    return (
        <div>
            <svg ref={svgRef}>
                <g className="x-axis" />
            </svg>
            <br />
            <button onClick={() => setData(data.map(value => value + 5))}>
            Update data
            </button>
            <button onClick={() => setData(data.filter(value => value <= 35))}>
            Filter data
            </button>
        </div>
    )
}