import PropTypes from "prop-types";

import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import UpdateCartItem from "./UpdateCartItem";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { useParams } from "react-router-dom";

function ItemStructure(props) {
    const navigate = useNavigate();
    const [itemQuantity, setItemQuantity] = useState();
    const [item, setItem] = useState();
    const params = useParams("");
    let itemTotal = props.price * props.quantity
    let visiblity = false;


    function deleteItem() {
        axios.delete("http://localhost:8080/item/delete/" + props.id)
        window.location.reload()
    }
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
        <div style={{width:"30%"}}>
            <h5><u>Items: {props.id}</u></h5>





            <div className="card" style={{Width:"30%"}}>
                <p className="col">  ID: {props.id} </p>
                <p className="col"> ITEM : {props.name} </p>
                <p className="col">  PRICE: £{props.price} </p>
                <p style={{ display: visiblity }} className="col"  >  QUANTITY: {props.quantity} </p>
                <p style={{ display: visiblity }} className="col"> <strong> Total: £{itemTotal.toFixed(2)}</strong> </p>
            

                {/* <div style={{ marginLeft: "10px" }} label htmlFor="itemQuantity" className="form-label">Item Quantity
                            <input size="50"
                                id="itemQuantity"
                                className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                                type="number"
                                value={itemQuantity}
                                onChange={e => setItemQuantity(e.target.value)}
                                contentEditable
                            />
                        </div> */}
            </div>



            {/* <button onClick={()=> setQuantity(props.quantity++)}>+</button> */}

            
            <button className="btn btn-success" style={{ display: visiblity, width: "200px", height: "50px", margin: "5px", padding: "5px",color:"#fdc1da" }}  onClick={() =>/*<UpdateCartItem qty={props.quantity}/> */navigate("/item/update/" + props.id)} ><strong>Update Quantity</strong></button>
            {/* <button onClick={() => {<UpdateCartItem  id= {props.id}/>}} >Update </button> */}
            <button className="btn btn-success" style={{ width: "200px", height: "50px", margin: "5px", padding: "5px",color:"#fdc1da" }}  onClick={() => { deleteItem() }}><strong>Delete</strong></button>
            {/* <button style={{ width: "200px", height: "50px", margin: "5px", padding: "5px" }} className="btn btn-danger col" onClick={(e) => { addToBasket(e) }} >Add to basket</button> */}
        </div>







    );
}

//     ItemStructure.propTypes = {
//         quantity: PropTypes.number
// }

export default ItemStructure;