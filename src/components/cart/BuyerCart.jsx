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
        axios.post("http://localhost:8080/cart/create", { buyer })
            .then(response => {

                console.log("handleclick:", response.data);
                setCart(response.data);
                console.log(response.data);


                // console.log(response.data.id)
            })

            .catch(err => console.error(err))



    }





    return (



        <div style={{ backgroundColor: "#5dbc4d", width: "100%",marginTop:"10px" }}>
            <div id="cartCreate" className="card-body " style={{ backgroundColor: "#5dbc4d", width: "40%", border: "show ", borderColor: "black" }}></div>
            <div className="card" style={{ width: "50%"}}>
            <div style={{ marginLeft: "28px" }} label htmlFor="buyer" className="form-label">Customer Name
                <input size="50"
                    id="buyer"
                    className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px", marginTop: "30px" }}
                    type="text"
                    value={buyer}
                    onChange={e => { setBuyer(e.target.value); console.log(e.target.value); }}
                />
            </div>

            <button className="btn btn-success" style={{ width: "200px", height: "40px", margin: "5px", marginLeft: "5px", marginTop: "15px" }} type="button" onClick={handleclick}>Create New Cart</button>
            </div>
            <h3>Shopping Cart</h3>
            <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#5dbc4d", width: "80%" }}>
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