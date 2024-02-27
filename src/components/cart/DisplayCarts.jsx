import { useEffect, useState } from "react";
import axios from "axios";

function DisplayCarts() {

    
        const cartList = []
        const [carts, setCarts] = useState([]);

        function getCarts(){
axios.get("http://localhost:8080/cart/get")
.then((response) => {setCarts(response.data)})
.catch(console.log())}
useEffect(()=> {getCarts()},[])
        for (const cart of carts){
            cartList.push(
                cart.id
            )
        
        }
        
    
    return ( 
        <div>
            {/* {cartList} */}
        </div>
     );
}

export default DisplayCarts;