import axios from "axios";

import {useEffect, useState} from "react";
import CartStructure from "./CartStructure";

function CreateCart() {

    const cartList = []
        const [carts, setCarts] = useState([]);
    function getCarts(){
        axios.get("http://localhost:8080/cart/get")
        .then((response) => {setCarts(response.data)})
        .catch(console.log())}
        useEffect(()=> {getCarts()},[])
                for (const cart of carts){
                    cartList.push(<CartStructure
                        id={cart.id}
                        item={cart.itemId} />
                        
                    )
                
                }
    function handleclick() {
        axios.post("http://localhost:8080/cart/create")
            .then(response => {getCarts() })
            .catch(err => console.error(err))

            
    }

    


    return (
        <div>
            <button type="button" onClick={handleclick}>Create New Cart</button>
            <h3>Carts</h3>
           <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#ec97db", width: "80%" }}> {cartList}
           </div>
        </div>
    );
}

export default CreateCart;