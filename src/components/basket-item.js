import React from 'react'

export default (props) => {
    const cl = "basket-item";
    return (
        <div className={`${cl}`}>
            <div className={`${cl}-name`}>{props.name}</div>
            <div className={`${cl}-price`}>{props.price.toFixed(2)}</div>
            <div className={`${cl}-amount`}>
            <button className={`${cl}-btn`} onClick={props.add}>+</button>
                {props.amount}
            <button className={`${cl}-btn`} onClick={() => props.remove(1)}>-</button>
            <button className={`${cl}-btn remove`} onClick={props.remove}>Remove</button>
            </div>
        </div>
    );
}
