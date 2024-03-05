import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateCart from "./CreateCart";
import CartLogo from "../../pictures/shoppingCart.webp";
import userLogo from "../../pictures/user.jpg";
import 'bootstrap/dist/css/bootstrap.css';
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
            {/* <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col"> */}
    
           


            <div className="d-inline-flex " style={{ maxWidth: "40%", margin: "40px"  }}>
            <div class="container"> 
            <div class="row">
            

                <div className="card" /*style={{ padding: "5px", display: "inline-block",}}*/>
                    <div className="card-body" /*style={{ border: "show ", borderColor: "black",columnCount:"2" }}*/ ></div>


                    <h3 style={{marginLeft:"10px"}}>Cart:<img style={{ width: "5%" }} src={CartLogo}></img> {props.id} <></>   &nbsp; <img style={{ width: "5%" }} src={userLogo}></img> {props.buyer}</h3>
                    {/* <p> Item: {props.item}</p> */}

                    <div className="card-text" style={{ padding:"10px"}}>
                        <button className="btn btn-success" style={{ marginLeft: "10px", padding: "5px", color: "#fdc1da" }} onClick={() => navigate("/item/" + props.id)} ><strong>Add Items</strong></button>
                        <button className="btn btn-success" style={{ marginLeft: "10px", padding: "5px", paddingBottom: "5px", color: "#fdc1da" }} onClick={() => navigate("/cart/get/" + props.id)} ><strong>Select</strong></button>
                        {/* <button onClick={() => navigate("/cart/get/" + props.id)} >Update Items</button> */}
                        <button className="btn btn-success" style={{ marginLeft: "10px", padding: "5px", color: "#fdc1da" }} onClick={() => { deleteCart() }}><strong>Delete Cart</strong></button>

                    </div>
                   
               
                </div>
                </div>
             </div>
            
            </div>

        </div >
    );
}

export default CartStructure;