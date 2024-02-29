import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
function CartStructure(props) {
    const navigate = useNavigate();
    // const params = useParams();
    // const itemList = []
    // const [items, setItems] = useState([]);
    


    return (
        <div>
            <h5>Cart: {props.id}</h5>
            {/* <p> Item: {props.item}</p> */}


            <button onClick={() => navigate("/item/" + props.id)} >Add Items</button>
            <button /*disabled={props.status}*/ onClick={() => navigate("/cart/get/" + props.id)} >Display Items</button>
            <button onClick={() => navigate("/cart/get/" + props.id)} >Update Items</button>
           


        </div>
    );
}

export default CartStructure;