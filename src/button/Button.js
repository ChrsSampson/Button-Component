import './Button.css'

export default function Button (props) {

    let classList = ['Button']
    let disabled = 0;

    if(props.variant === "outline"){
        classList.push("outline")
    }
    else if(props.variant === "text"){
        classList.push("text")
    }
    if(props.disableShadow){
        classList.push("noShadow")
    }
    if(props.disabled){
            classList.push("disabled")
            disabled = 1;
            classList.shift()
        if(props.variant === "text"){
            classList.push("disabled-text")
        }
    }
    if(!props.color || props.color === "default"){
        if(!classList.includes("Button") && !classList.includes("disabled")){
            classList.push("default")
        }
    }
    else if(props.color === "primary"){
        classList.push("primary")
    }
    else if(props.color === "secondary"){
        classList.push("secondary")
    }
    else if(props.color === "danger"){
        classList.push("danger")
    }

    if(props.startIcon || props.endIcon){
        classList.push("icon")
    }

    if(props.size){
        switch (props.size) {
            default:
                classList.push("btn-md")
                break;
            case "sm":
                classList.push("btn-sm")
                break;
            case "md":
                classList.push("btn-md")
                break;
            case "lg":
                classList.push("btn-lg")
                break;
        }
    } 


    // Create string of classes
    let output = classList.join(' ')

    return(
        <button
            className={output}
            disabled={disabled ? 1 : undefined} >
                {props.startIcon ? <span className="material-icons">{props.startIcon}</span> : null}
                Default
                {props.endIcon ? <span className="material-icons">{props.endIcon}</span> : null}
        </button>
    )
}