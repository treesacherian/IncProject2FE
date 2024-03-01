import axios from "axios";

import { useEffect, useState } from "react";
import CartStructure from "./CartStructure";
import { useParams } from "react-router-dom";

function BuyerCart() {


    const cartList = []
    const [carts, setCarts] = useState([]);
    const [cart, setCart] = useState();
    //  const [cartId, setCartId] = useState(0);
    // let cartId;
    // useEffect(() => { }, [])
    // function getCarts(cartId) {
    //     axios.get("http://localhost:8080/cart/get")
    //         .then((response) => {
    //             setCarts(response.data);
    //             console.log("carts:", response.data)
    //         })
    //         .catch(console.log())
    //     console.log("cart ID:", cartId);

    //     for (const cart of carts) {
    //         cartList.push(
    //             <CartStructure
    //                 id={cart.id}
    //             />)
    //     }
    //     console.log("cart ID after for loop:", cartId);

    //      for (const cart of cartList){
    //         // let i=0
    //         // for (i=1; i<=cartList.length; i++){
    //         console.log("cart Id in the loop:", cartId);
    //     if (cart.id === cartId) {
    //         setCart(cart);
    //         console.log("cart:", cart);



    //         break

    //     }
    // }
    // }




    function handleclick() {
        axios.post("http://localhost:8080/cart/create")
            .then(response => {

                console.log("handleclick:", response.data);
                setCart(response.data);
                console.log(response.data);
                

                // console.log(response.data.id)
            })

            .catch(err => console.error(err))



    }





    return (
        <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#295821", width: "80%" }}>
            <button style={{ width: "200px", height: "40px", margin: "5px", marginLeft: "5px", marginTop: "15px" }} type="button" onClick={handleclick}>Create New Cart</button>
            <h3>Shopping Cart</h3>
            <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#295821", width: "80%" }}> 
            {cart && <CartStructure
                    id={cart.id}
                    items={cart.items}
                />}
                
            </div>
        </div>
    );
}

export default BuyerCart;