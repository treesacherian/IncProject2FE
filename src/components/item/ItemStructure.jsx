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
    // let itemTotal = props.price * props.quantity
    let visiblity = false;



    function deleteItem() {
        axios.delete("http://localhost:8080/item/delete/" + props.id)
        // window.location.reload()
        alert(props.name + " deleted");
        props.getCartItems();
    }

    function updateQuantity() {
        axios.patch("http://localhost:8080/item/update/" + props.id, { itemQuantity })
        setItemTotal(props.price * itemQuantity);
        alert("Quantity updated");
        props.getCartItems();

    }

    // function getCarts() {
    //     axios.get("http://localhost:8080/cart/get")
    //     .then((response) => {
    //       setCarts(response.data);
    //     });
    //   }
    //   useEffect(getCarts, []);

    // function addToBasket(e) {
    //     // console.log("event.target:", e.target.value);
    //     axios.get("http://localhost:8080/item/get/" + props.id)
    //         .then((response) => {
    //             setItem(response.data);
    //             console.log("response.data: ", item);

    //         })
    //         .catch(console.log())
    //     // 
    //     axios.patch("http://localhost:8080/cart/update/" + params.id, { itemQuantity })

    //         .then(response => {
    //             // setItemQuantity(0);

    //             // navigate(-1)
    //             alert("added to basket");

    //         })

    //         .catch(err => console.error(err))

    // }


    if (!props.quantity) { visiblity = "none"; }
    return (
        <div style={{ width: "30%" }}>
            <h5><u>Items: {props.id}</u></h5>





            <div className="card" style={{ Width: "20%" }}>
                <p className="col">  ID: {props.id} </p>
                <p className="col"> ITEM : {props.name} </p>
                <p className="col">  PRICE: £{props.price} </p>
                <div style={{ display: "inline-block" }}>
                    <p style={{ display: visiblity }} className="col"  >  QUANTITY: {itemQuantity} </p>
                    <button className="btn btn-success" style={{ display: visiblity, width: "50px", height: "50px", margin: "5px", padding: "5px", color: "#fdc1da" }} onClick={() => setItemQuantity(itemQuantity + 1)}>+</button>
                    <button className="btn btn-success" style={{ display: visiblity, width: "50px", height: "50px", margin: "5px", padding: "5px", color: "#fdc1da" }} onClick={() => setItemQuantity(itemQuantity - 1)}>-</button>
                </div>
                <p style={{ display: visiblity }} className="col" > <strong> Total: £{itemTotal.toFixed(2)}</strong> </p>
            </div>






            <button
                className="btn btn-success"
                style={{ display: visiblity, width: "200px", height: "50px", margin: "5px", padding: "5px", color: "#fdc1da" }}
                onClick={() => {
                    updateQuantity();
                }

                }
            >
                <strong>Update Quantity</strong>
            </button>

            <button className="btn btn-success" style={{ width: "200px", height: "50px", margin: "5px", padding: "5px", color: "#fdc1da" }} onClick={() => { deleteItem() }}><strong>Delete</strong></button>
            {/* <button style={{ width: "200px", height: "50px", margin: "5px", padding: "5px" }} className="btn btn-danger col" onClick={(e) => { addToBasket(e) }} >Add to basket</button> */}
        </div>







    );
}

//     ItemStructure.propTypes = {
//         quantity: PropTypes.number
// }

export default ItemStructure;