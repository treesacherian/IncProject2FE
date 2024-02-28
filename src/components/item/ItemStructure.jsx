import PropTypes from "prop-types";
import { useNavigate } from "react-router";

function ItemStructure(props) {
    const navigate = useNavigate();
    let itemTotal = props.price*props.quantity
    return (
        <div>
            <h5>Items: {props.id}</h5>

            <div className="row">
            <p className="col"> ITEM ID: {props.id} </p>
            <p className="col"> ITEM NAME: {props.name} </p>
            <p className="col"> ITEM PRICE: {props.price} </p>
            <p className="col"> ITEM QUANTITY: {props.quantity} </p>
            <p className="col"> ITEM Total: {itemTotal} </p>
            <button onClick={() => navigate("/item/update/" + props.id)} >Update </button>
        </div>
        
            


        </div>
    );
}

export default ItemStructure;