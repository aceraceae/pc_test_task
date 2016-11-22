import React from 'react';

export default ({type}) => {
    return (
        <div className={`${type}-header`}>
            <div className={`${type}-header-product`}>Product</div>
            <div className={`${type}-header-item`}>Price</div>
            <div className={`${type}-header-item`}>Amount</div>
        </div>
    );
}
