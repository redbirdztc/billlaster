import React from "react";
import PropTypes from "prop-types";

import "./App.css"

const UpperDrawer = ({ movement, children,  height }) => {
    const style = {
        transform: `translateY(calc(${-movement}px)) `,
        height: height,
        transformOrigin: "top",
        transition: "transform 0.1s"
    }

    console.log(movement)
    return (
        <div style={style} className="
            w-full
            top-0
            left-0
            overflow-hidden">
            {children}
        </div>
    )
}

UpperDrawer.propTypes = {
    movement: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    height: PropTypes.string,
    zIndex: PropTypes.number
}

export default UpperDrawer;