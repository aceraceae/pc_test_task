import React from 'react';

export default (props) => {
        const cl = "product-item";
         return (<div className={`${cl}`}>
                     <div className={`${cl}-name`}>{props.name}</div>
                     <div className={`${cl}-price`}>{props.price.toFixed(2)}</div>
                         <form className={`${cl}-form`} onSubmit={props.add}>
                            <input  className={`${cl}-form-input`} type="text" name="amount" defaultValue="1" />
                            <button className={`${cl}-btn`} type="submit">Add</button>
                         </form>
                 </div>);
}
