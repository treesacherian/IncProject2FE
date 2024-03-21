import axios from "axios";
import { useParams } from "react-router-dom";
import ItemStructure from "../item/ItemStructure";
import { useEffect, useState } from "react";
import CartStructure from "./CartStructure";
import { useNavigate } from "react-router";
import userLogo from "../../pictures/user.jpg";


function DisplayCartContent() {
    const params = useParams("");
    const itemList = []
    const [items, setItems] = useState([]);
    const [buyer, setBuyer] = useState("");
    let itemTotal = 0;
    let cartTotal = 0;
    const navigate = useNavigate();
    // const [cartId, setCartId] = useState();

    function getCartItems() {
        axios.get("http://localhost:8080/cart/get/" + params.id)
            .then((response) => {
                setItems(response.data.items)
                setBuyer(response.data.buyer)
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
           
            getCartItems={getCartItems}
        />

        )

    }
    for (const item of items) {
        cartTotal = cartTotal + item.itemPrice * item.itemQuantity

    }


    useEffect(() => { getCartItems() }, [])
    return (
        <div>

            <div style={{ backgroundColor: "#fcc72b", width: "100%" }}>
                <br></br>
                <div style={{backgroundColor:"white", marginLeft:"10px", marginRight:"10px"}}><h3> Contents of Cart :{params.id}&nbsp;&nbsp;<img style={{ width: "3%" }} src={userLogo}></img>{buyer}</h3>
                </div>
                <button style={{ width: "200px", height: "40px", margin: "5px", padding: "5px", color: "#fdc1da", float: "left" }} className="btn btn-success" onClick={() => { navigate("/item/" + params.id) }}><strong>Continue Shopping</strong></button>
                <button style={{ width: "200px", height: "40px", margin: "5px", padding: "5px", color: "#fdc1da", float: "right" }} className="btn btn-success" onClick={() => { navigate("/checkout/" + params.id) }}><strong>Checkout</strong></button>
                <button style={{ width: "200px", height: "40px", margin: "5px", padding: "5px", color: "#fdc1da", float: "right" }} className="btn btn-success" onClick={() => { navigate("/"); alert("Cart Saved") }}><strong>Save For Later</strong></button>
                <button style={{ width: "200px", height: "40px", margin: "5px", padding: "5px", color: "#fdc1da", float: "right" }} className="btn btn-success" onClick={() => { navigate(-1) }}><strong>Back</strong></button>
                <br></br><br></br><br></br>
                <div className="card" style={{ Width: "10%", backgroundColor: "#fdc1da", float: "right", marginRight: "5px", padding: "10px" }}>
                    <h4 >Total to pay: £
                        {cartTotal.toFixed(2)}
                    </h4>
                </div>
                <div style={{marginLeft:"10px"}}>
                {itemList}
                </div>
                <div>
                    <br></br>
                    <div className="card" style={{ Width: "30%", backgroundColor:"#fdc1da" }}>
                        <h4 style={{ position: "right" }}>Total to pay: £
                            {cartTotal.toFixed(2)}
                        </h4>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default DisplayCartContent;