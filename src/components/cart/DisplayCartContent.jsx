import axios from "axios";
import { useParams } from "react-router-dom";
import ItemStructure from "../item/ItemStructure";
import { useEffect, useState } from "react";
import CartStructure from "./CartStructure";
import { useNavigate } from "react-router";
import UpdateCartItem from "../item/UpdateCartItem";



function DisplayCartContent() {
    const params = useParams("");
    const itemList = []
    const [items, setItems] = useState([]);
    let itemTotal = 0;
    let cartTotal = 0;
    const navigate = useNavigate();
    // const [cartId, setCartId] = useState();

    function getCartItems() {
        axios.get("http://localhost:8080/cart/get/" + params.id)
            .then((response) => {
                setItems(response.data.items)
                console.log("response.data.items:", response.data.items);
            })
            .catch(console.log())

        console.log("items:", items);
    }
    // setCartId(params.id);
    // <ItemStructure cart={cartId}/>
    

    for (const item of items) {
        itemList.push(<ItemStructure
            id={item.id}
            name={item.itemName}
            price={item.itemPrice}
            quantity={item.itemQuantity}

        />

        )

    }
    for (const item of items) {
        cartTotal = cartTotal + item.itemPrice * item.itemQuantity

    }


    useEffect(() => { getCartItems() }, [])
    return (
        <div>
            <h3> Contents of Cart :{params.id}</h3>
            <div /*class="border border-primary p-2 mb-2 border-4"*/ style={{ backgroundColor: "#5dbc4d", width: "80%" }}>


                <button style={{ width: "200px", height: "40px", margin: "5px", padding: "5px" }} className="btn btn-primary" onClick={() => { navigate("/") }}>Checkout</button>
                <button style={{ width: "200px", height: "40px", margin: "5px", padding: "5px" }} className="btn btn-primary" onClick={() => { navigate("/") }}>Save For Later</button>
                <button style={{ width: "200px", height: "40px", margin: "5px", padding: "5px" }} className="btn btn-primary" onClick={() => { navigate(-1) }}>Back</button>
                <div className="card" style={{ Width: "10%",backgroundColor:"yellow" }}>
                <h4 >Total to pay: £
                    {cartTotal}
                </h4>
            </div>
            {itemList}
            <div className="border border-primary p-2 mb-2" style={{ border: "solid" }}>
                <div className="card" style={{ Width: "30%" }}>
                    <h4 style={{ position: "right" }}>Total to pay: £
                        {cartTotal}
                    </h4>
                </div>
            </div>
        </div>

        </div >
    );
}

export default DisplayCartContent;