import React from 'react'

export default props => {
    return (
        <div>
            <button onClick={props.setInc}>+</button>
            <button>ADD</button>
            <button onClick={props.setDec}>-</button>
        </div>
    )
}