import React from "react"

const Toggler = ( props ) => {
    return (
        <div className="col-auto ml-auto toggler-wrapper">
            <div className={`toggler ${props.toggle ? `` : `open`}`} onClick={props.burgerEvent} onKeyDown={props.burgerEvent} role="button" aria-label="Menu" tabIndex={0}>
                <span className="toggler__bar"></span>
                <span className="toggler__bar"></span>
                <span className="toggler__bar"></span>
                <span className="toggler__bar"></span>
            </div>
        </div>
    )
}

export default Toggler
