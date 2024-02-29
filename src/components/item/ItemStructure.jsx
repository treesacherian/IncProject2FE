import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import {useState} from "react";
import axios from "axios";
import UpdateCartItem from "./UpdateCartItem";

function ItemStructure(props) {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState();
    let itemTotal = props.price*props.quantity

    function deleteItem(){
        axios.delete("http://localhost:8080/item/delete/"+props.id)
        window.location.reload()
    }
    return (
        <div>
            <h5>Items: {props.id}</h5>

            <div className="row">
            <p className="col"> ITEM ID: {props.id} </p>
            <p className="col"> ITEM NAME: {props.name} </p>
            <p className="col"> ITEM PRICE: £{props.price} </p>
            <p className="col"> ITEM QUANTITY: {props.quantity} </p>
            {/* <button onClick={()=> setQuantity(props.quantity++)}>+</button> */}
        
            <p className="col"> ITEM Total: £{itemTotal} </p>
            <button style={{width: "200px",height: "50px", margin: "5px", padding: "5px"}}className="btn btn-danger col" onClick={() => navigate("/item/update/" + props.id)} >Update Quantity</button>
            {/* <button onClick={() => {<UpdateCartItem  id= {props.id}/>}} >Update </button> */}
            <button style={{width: "200px",height: "50px", margin: "5px", padding: "5px"}}className="btn btn-danger col" onClick={()=> {deleteItem()}}>Delete</button>
        </div>
        
            


        </div>
    );
}

export default ItemStructure;