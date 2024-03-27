import PropTypes from "prop-types";

import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import UpdateCartItem from "./UpdateCartItem";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { useParams } from "react-router-dom";

function ItemStructure(props) {
    const navigate = useNavigate();
    const [itemQuantity, setItemQuantity] = useState(props.quantity);

    const params = useParams("");
    const [itemTotal, setItemTotal] = useState(props.price * props.quantity);
    let visiblity, visible = false;

    var disableStatus = false;
    const [items, setItems] = useState([]);



    function deleteItem() {
        axios.delete("http://localhost:8080/item/delete/" + props.id)


        alert(props.name + " deleted");
        window.location.reload()
        //  props.getCartItems();
    }

    function deleteItemFromCart() {

        if (props.compStatus === "AddItem") { deleteItem(); }
        else {

            axios.patch("http://localhost:8080/item/checkIn/" + props.id)

            alert(props.name + " deleted");
            window.location.reload()
        }
    }

    function updateQuantity() {
        axios.patch("http://localhost:8080/item/update/" + props.id, { itemQuantity })
        setItemTotal(props.price * itemQuantity);
        alert("Quantity updated");
        props.getCartItems();

    }









    function addToBasket() {
        axios.patch('http://localhost:8080/item/checkOut/' + props.id + '/' + params.id)
        alert("item added to basket");

        navigate("/cart/get/" + params.id);
        console.log("props.id: ", props.id);
    }






    if (!props.quantity) { visiblity = "none"; }
    if (props.cartId) { disableStatus = true; }

    console.log("params.id:", params.id);
    if (!params.id || props.visStatus === "none") { visible = "none"; }

    return (
        <div style={{ width: "60%" }}>
            <div style={{ display: "inline-block" }}>

                <div className="card" style={{ Width: "100%" }}>
                    <p className="col">  ID: {props.id} </p>
                    <p className="col"> ITEM : {props.name} </p>
                    <p className="col">  PRICE: £{props.price} </p>
                    <div style={{ display: "inline-block" }}>
                        <p style={{ display: visiblity }} className="col"  >  QUANTITY: {itemQuantity} </p>

                        <button className="btn btn-success" style={{ display: visiblity, width: "50px", height: "50px", margin: "5px", padding: "5px", color: "#fdc1da", backgroundColor: "#11663f" }} onClick={() => setItemQuantity(itemQuantity + 1)}>+</button>
                        <button className="btn btn-success" style={{ display: visiblity, width: "50px", height: "50px", margin: "5px", padding: "5px", color: "#fdc1da", backgroundColor: "#11663f" }} onClick={() => setItemQuantity(itemQuantity - 1)}>-</button>
                        <button
                    className="btn btn-success"
                    style={{ display: visiblity, width: "150px", height: "50px", margin: "5px", padding: "5px", color: "#fdc1da", backgroundColor: "#11663f" }}
                    onClick={() => {
                        updateQuantity();

                        // navigate("/item/update/" + props.id)

                    }

                    }
                >
                    <strong>Update </strong>
                </button>
                    </div>
                    <p style={{ display: visiblity }} className="col" > <strong> Total: £{itemTotal.toFixed(2)}</strong> </p>
                </div>

                


                <button className="btn btn-success" style={{ width: "200px", height: "50px", margin: "5px", padding: "5px", color: "#fdc1da", backgroundColor: "#11663f" }} onClick={() => { deleteItemFromCart() }}><strong>Delete</strong></button>

                <button disabled={disableStatus} style={{ display: visible, width: "200px", height: "50px", margin: "5px", padding: "5px" }} className="btn btn-danger col" onClick={() => { addToBasket() }} >Add to basket</button>
            </div>
            <br></br><br></br><br></br>
        </div>







    );
}

ItemStructure.propTypes = {
    quantity: PropTypes.number,
    getCartItems: PropTypes.func.isRequired
}

export default ItemStructure;