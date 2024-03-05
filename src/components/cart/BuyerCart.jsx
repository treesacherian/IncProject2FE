import axios from "axios";

import { useEffect, useState } from "react";
import CartStructure from "./CartStructure";
import { useParams } from "react-router-dom";

function BuyerCart() {


    const cartList = []
    const [carts, setCarts] = useState([]);
    const [cart, setCart] = useState();
    const [buyer, setBuyer] = useState("");




    function handleclick() {

        if (!buyer) alert("Please enter customer name")
        else
        {axios.post("http://localhost:8080/cart/create", { buyer })
            .then(response => {

                console.log("handleclick:", response.data);
                setCart(response.data);
                console.log(response.data);
                setBuyer("");


                // console.log(response.data.id)
            })

            .catch(err => console.error(err))


        }
    }





    return (



        <div style={{ backgroundColor: "#fcc72b", width: "100%", height: "900px" }}>
            <div style={{marginLeft:"30px"}}>
            
            <div id="cartCreate" className="card-body " style={{ backgroundColor: "#fcc72b", width: "40%", border: "show ", borderColor: "black", marginLeft: "10px" }}>
                <h3>Start shopping by creating a cart</h3></div>
            <div className="card" style={{ width: "50%", marginLeft:"10px"}}>
            <div style={{ marginLeft: "28px" }} label htmlFor="buyer" className="form-label"><strong>Customer Name</strong>
                <input size="50"
                    id="buyer"
                    className="form-control border-3 border-success rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px", marginTop: "30px" }}
                    type="text"
                    value={buyer}
                    onChange={e => { setBuyer(e.target.value); console.log(e.target.value); }}
                    required
                />
            </div>

            <button className="btn btn-success" style={{ width: "200px", height: "40px", margin: "5px", marginLeft: "5px", marginTop: "15px", color:"#fdc1da" }} type="button" onClick={handleclick}><strong>Create New Cart</strong></button>
            </div>
            </div>
            <br></br><br></br>
            <h3 style={{marginLeft:"10px"}}><u>Shopping Cart</u></h3>
            <div  style={{ backgroundColor: "#fcc72b", width: "100%" }}>
                {cart && <CartStructure
                    id={cart.id}
                    buyer={cart.buyer}
                    items={cart.items}
                />}

            </div>
        </div>
    );
}

export default BuyerCart;