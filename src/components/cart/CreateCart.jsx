import axios from "axios";

import { useEffect, useState } from "react";
import CartStructure from "./CartStructure";

function CreateCart() {

    const cartList = []
    const [carts, setCarts] = useState([]);
    function getCarts() {
        axios.get("http://localhost:8080/cart/get")
            .then((response) => { setCarts(response.data) })
            .catch(console.log())
    }
    useEffect(() => { getCarts() }, [])
    // let disabledStatus = false
    for (const cart of carts) {
        //  if (cart.items===null) disabledStatus = true
        cartList.push(<CartStructure
            id={cart.id}
            // item={cart.item.id}
            // status={disabledStatus}
            />

        )
       


    }
    function handleclick() {
        axios.post("http://localhost:8080/cart/create")
            .then(response => { getCarts() })
            .catch(err => console.error(err))


    }




    return (
        <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#295821", width: "80%" }}>
            <button  style= {{width: "200px", height: "40px", margin: "5px", marginLeft: "5px", marginTop:"15px"}}type="button" onClick={handleclick}>Create New Cart</button>
            <h3>Carts</h3>
           <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#295821", width: "80%" }}> {cartList}
           </div>
        </div>
    );
}

export default CreateCart;