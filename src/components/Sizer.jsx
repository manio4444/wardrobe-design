import {constToCssVar} from "../helpers";


export const Sizer = (props) => {
    const style = {
        left: constToCssVar(props.left),
        width: constToCssVar(props.width),
        bottom: constToCssVar(props.bottom),
        top: constToCssVar(props.top),
    }
    // console.log(style);
    return (
        <div
            className={`sizer lvl_${props.lvl} ${props.position} ${props.className || ''}`}
            data-sizer
            data-sizer-value={props.size && `${props.size}cm`}
            style={style}
        >
            {props.info && <div className={`info ${props.infoPosition || ''}`}>
                {props.info}
            </div>}
        </div>
    );
};