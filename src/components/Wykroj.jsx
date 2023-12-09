import {constToCssVar} from "../helpers";
import {plyta} from "../consts";
import {orientationType} from "../config";

import {Sizer} from "./Sizer";


export const Wykroj = (props) => {
    const {width, height} =
        orientationType.HORIZONTAL === orientationType.HORIZONTAL ? {
            width: props.width,
            height: plyta,
        } : {
            width: plyta,
            height: props.width,
        };

    const style = {
        left: constToCssVar(props.left),
        top: constToCssVar(props.top),
        width: constToCssVar(width),
        height: constToCssVar(height),
    }
    console.log({name: props.name, ...style});
    return (<>
            <div
                className={`deska ${props.orientation || ''} ${props.colorType || ''} ${props.className || ''}`}
                style={style}
            ></div>
            {props.helperLeft && <div
                className={`helper ${props.orientation} left`}
                style={{
                    left: constToCssVar(props.left),
                }}
            />}
            {props.helperRight && <div
                className={`helper ${props.orientation} right`}
                style={{
                    left: constToCssVar(props.left + props.width),
                }}
            />}
            {props.sizer && <Sizer
                {...props.sizer}
                left={props.left}
                size={props.width}
                width={props.width}
            />}
        </>
    );
};