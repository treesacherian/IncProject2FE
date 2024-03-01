import axios from "axios";

import { useEffect, useState } from "react";
import CartStructure from "./CartStructure";

function Shop  () {
    const [cart, setCart] = useState("{}");
    
    useEffect(() => {})
    
    function getCart() {
        axios.get("http://localhost:8080/cart/get")
            .then((response) => { setCart(response.data) })
            .catch(console.log())
    }
    <CartStructure
            id={cart.id}
            />

    axios.post("http://localhost:8080/cart/create")
        .then(response => { getCart(); 
            console.log();
         })
        .catch(err => console.error(err))
   
    return (

        <div>
{cart}
        </div>
      );
}

export default Shop ;