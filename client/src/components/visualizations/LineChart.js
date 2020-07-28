import React, { useRef, useEffect, useState } from "react";
import { select, line, axisBottom, axisRight, scaleLinear } from 'd3';
import useResizeObserver from "../functions/ResizeObserver";


export default function LineChart() {

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

        let xScale = scaleLinear()
            .domain([0, data.length])
            .range([0, dimensions.width]);

        let yScale = scaleLinear()
            .domain([0, leftScale])
            .range([dimensions.height, 0])

        // Scales
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

        // black drop shadow

        var defs = svg.append("defs");

        var filter = defs.append("filter")
            .attr("id", "drop-shadow")

        filter.append("feGaussianBlur")
            .attr("in", "SourceAlpha")
            .attr("stdDeviation", 3)
            .attr("result", "blur");
        filter.append("feOffset")
            .attr("in", "blur")
            .attr("dx", 0)
            .attr("dy", 5)
            .attr("result", "offsetBlur");

        var feMerge = filter.append("feMerge");

        feMerge.append("feMergeNode")
            .attr("in", "offsetBlur")
        feMerge.append("feMergeNode")
            .attr("in", "SourceGraphic");

        // generates the "d" attribute of a path element add .curve() if you want a curve
        const myLine = line()
            .x((value, index) => xScale(index))
            .y(yScale)
        svg
        .selectAll(".line")
        .data([data])
        .join("path")
        .attr("class", "line")
        .attr("d", value => myLine(value))
        .attr("fill", "none")
        .attr("stroke", "blue")
        .style("filter", "url(#drop-shadow)");

    }, [data, dimensions, leftScale]);

    return (
        <div>
            <div ref={wrapperRef} className="chartContainer"> 
                <svg className="line-chart" ref={svgRef} style={{ width: '100%', height: '600px'}}>
                    <g className="x-axis" />
                    <g className="y-axis" />
                </svg>
            </div>
            <div className="row chart__buttons"> 
                <button 
                    className="btn btn-large blue"
                    style={{width: '120px'}}
                    onClick={() => setData(data.map(value => value + 5))}>
                    Update
                </button>
                <button
                    className="btn btn-large blue"
                    style={{width: '120px'}}
                    onClick={() => setData(data.filter(value => value <= 35))}>
                    Filter
                </button>
                <button
                    className="btn btn-large blue"
                    style={{width: '120px'}}
                    onClick={() => setData([...data, Math.round(Math.random() * 100)])}
                    >
                    Add
                </button>
            </div>
        </div>
    )
}