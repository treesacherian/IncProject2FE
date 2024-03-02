import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateCart from "./CreateCart";
import CartLogo from "../../pictures/shoppingCart.webp";
function CartStructure(props) {
    const navigate = useNavigate();
    // const params = useParams();
    // const itemList = []
    // const [items, setItems] = useState([]);

    function deleteCart() {
        axios.delete("http://localhost:8080/cart/delete/" + props.id);
        window.location.reload()
    }




    return (
        <div>
            <h3>Cart:<img style={{width: "15%"}}src={CartLogo}></img> {props.id}     Customer: {props.buyer}</h3>
            {/* <p> Item: {props.item}</p> */}

            <div>
                <button style={{ width: "200px", height: "40px", margin: "5px", marginTop: "50px", padding: "5px" }} className="btn btn-danger col" onClick={() => navigate("/item/" + props.id)} >Add Items</button>
                <button style={{ width: "200px", height: "40px", margin: "5px",marginBottom: "10px", padding: "5px", paddingBottom: "5px" }} className="btn btn-danger col" onClick={() => navigate("/cart/get/" + props.id)} >Display Items/Update</button>
                {/* <button onClick={() => navigate("/cart/get/" + props.id)} >Update Items</button> */}
                <button style={{ width: "200px", height: "40px", margin: "5px", padding: "5px" }} className="btn btn-danger col" onClick={() => { deleteCart() }}>Delete Cart</button>
                

            </div>

        </div>
    );
}

export default CartStructure;