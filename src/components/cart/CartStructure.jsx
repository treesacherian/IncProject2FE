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



            <div  style={{ maxWidth: "40%", margin: "40px",  }}>
                <div  /*style={{ padding: "5px", display: "inline-block",}}*/>
                    <div className="col-lg-2 col-sm-6" /*style={{ border: "show ", borderColor: "black",columnCount:"2" }}*/ ></div>


                    <h3>Cart:<img style={{ width: "5%" }} src={CartLogo}></img> {props.id} <></>    <img style={{ width: "5%" }} src={userLogo}></img> {props.buyer}</h3>
                    {/* <p> Item: {props.item}</p> */}

                    <div className="card-text">
                        <button className="btn btn-success" style={{ marginLeft: "10px", padding: "5px" }} onClick={() => navigate("/item/" + props.id)} >Add Items</button>
                        <button className="btn btn-success" style={{ marginLeft: "10px", padding: "5px", paddingBottom: "5px" }} onClick={() => navigate("/cart/get/" + props.id)} >Select</button>
                        {/* <button onClick={() => navigate("/cart/get/" + props.id)} >Update Items</button> */}
                        <button className="btn btn-success" style={{ marginLeft: "10px", padding: "5px" }} onClick={() => { deleteCart() }}>Delete Cart</button>

                    </div>

                </div>

                {/* </div>
            </div> */}
            </div>

        </div >
    );
}

export default CartStructure;