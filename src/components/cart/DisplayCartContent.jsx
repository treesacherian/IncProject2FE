import axios from "axios";
import { useParams } from "react-router-dom";
import ItemStructure from "../item/ItemStructure";
import { useEffect, useState } from "react";
import CartStructure from "./CartStructure";



function DisplayCartContent() {
    const params = useParams("");
    const itemList = []
    const [items, setItems] = useState([]);
    let itemTotal=0;
    let cartTotal=0;
    const [cartId, setCartId] = useState();

    function getCartItems() {
        axios.get("http://localhost:8080/cart/get/" + params.id)
            .then((response) => { setItems(response.data.items) })
            .catch(console.log())
            console.log( items);
    }
    setCartId(params.id);
    <ItemStructure cart={cartId}/>

    for (const item of items) {
        itemList.push(<ItemStructure cartid={params.id}
            id={item.id}
            name={item.itemName}
            price={item.itemPrice}
            quantity ={item.itemQuantity} 
           
        />

        )

    }
    for (const item of items) {
       cartTotal=cartTotal+ item.itemPrice*item.itemQuantity
       
    }
    

    useEffect(() => { getCartItems() }, [])
    return (
        <div>
            <h3>Cart Contents</h3>
            <div>
                
                {itemList}
                <h4>Total to pay:</h4>
                {cartTotal}
            </div>

        </div>
    );
}

export default DisplayCartContent;