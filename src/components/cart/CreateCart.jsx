import axios from "axios";

import { useEffect, useState } from "react";
import  CartStructure from "./CartStructure";
import Shop from "./Shop";


    function CreateCart() {

        const cartList = []
        const [carts, setCarts] = useState([]);
        const [cart, setCart] = useState("{}");
        const [buyer, setBuyer] = useState("");
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
            function getCart() {
                axios.get("http://localhost:8080/cart/get")
                    .then((response) => { setCart(response.data) })
                    .catch(console.log())
            }
            <CartStructure
                    id={cart.id}
                    // item={cart.item.id}
                    // status={disabledStatus}
                    />
        
                
           
    
    
        
        function handleclick() {
            axios.post("http://localhost:8080/cart/create")
                .then(response => { getCarts(); console.log(buyer); })
                .catch(err => console.error(err))
    
    
        }
        function handleShop() {
             
            axios.post("http://localhost:8080/cart/create")
                .then(response => { getCart(); 
                    console.log(buyer);
                 })
                .catch(err => console.error(err))
    
    
        }
    
    
    
    
        return (
    
            <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#295821", width: "80%" }}>
                <div style={{marginLeft: "28px"}} label htmlFor="buyer" className="form-label">Customer Name
                    <input size="50"
                        id="buyer"
                        className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px", marginTop: "30px" }}
                        type="text"
                        value={buyer}
                        onChange={e => {setBuyer(e.target.value); console.log(e.target.value);} }                  
                    />
                    </div>
                <button  style= {{width: "200px", height: "40px", margin: "5px", marginLeft: "5px", marginTop:"15px"}}type="button" onClick={handleclick}>Create New Cart</button>

                <button  style= {{width: "200px", height: "40px", margin: "5px", marginLeft: "5px", marginTop:"15px"}}type="button" onClick={handleShop}>Shop</button>
                <h3>Carts</h3>
               <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#295821", width: "80%" }}> {cartList}
               </div>
            </div>
        );
    }
    