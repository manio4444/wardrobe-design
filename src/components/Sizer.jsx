import {constToCssVar} from "../helpers";
import {useState} from "react";


export const Sizer = (props) => {
    const [left] = useState(constToCssVar(props.left));
    const [width] = useState(constToCssVar(props.width));
    const [bottom] = useState(constToCssVar(props.bottom));
    const [top] = useState(constToCssVar(props.top));
    console.log({
        left: constToCssVar(props.left),
        width: constToCssVar(props.width),
        bottom: constToCssVar(props.bottom),
        top: constToCssVar(props.top),
        info: constToCssVar(props.info),
    })
    return (
        <div
            className={`sizer lvl_${props.lvl} ${props.position} ${props.className || ''}`}
            data-sizer
            data-sizer-value={props.size && `${props.size}cm`}
            style={{
                left,
                width,
                bottom,
                top,
            }}
        >
            {props.info && <div className={`info ${props.infoPosition || ''}`}>
                {props.info}
            </div>}
        </div>
    );
};