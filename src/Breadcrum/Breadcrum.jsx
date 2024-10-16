import React from "react";
import arrow_icon from "../Assests/breadcrum_arrow.png"
const Breadcrum =(props)=>
{
    const {product} = props;
    return(
        <div className="bredecrum">
         HOME <img src={arrow_icon}alt="" />  SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
    )  
}
export default Breadcrum