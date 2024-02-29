import PropTypes from "prop-types";

import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import UpdateCartItem from "./UpdateCartItem";

function ItemStructure(props) {
    const navigate = useNavigate();
    const [quantity, setQuantity]=useState(0);
    let itemTotal = props.price*props.quantity
    return (
        <div>
            <h5>Items: {props.id}</h5>

            <div className="row">
            <p className="col"> ITEM ID: {props.id} </p>
            <p className="col"> ITEM NAME: {props.name} </p>
            <p className="col"> ITEM PRICE: {props.price} </p>
            <p className="col" contentEditable = "true"  aria-readonly= "false"> ITEM QUANTITY: {props.quantity}
            <button onClick={() =>{props.quantity.contentEditable="true";  setQuantity(props.quantity++)}}>+</button> </p>
            <p className="col"> ITEM Total: {itemTotal} </p>
            {/* <button onClick={() => navigate("/item/update/" + props.id)} >Update </button> */}
            <button onClick={() => <UpdateCartItem cart={props.cart}/>} >Update </button>
        </div>
        
            


        </div>
    );
}

    ItemStructure.propTypes = {
        quantity: PropTypes.number
}

export default ItemStructure;