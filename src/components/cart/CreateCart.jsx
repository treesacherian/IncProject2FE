import axios from "axios";

import { useEffect, useState } from "react";
import CartStructure from "./CartStructure";
import Shop from "./Shop";


function CreateCart() {

    const cartList = [];
    const [carts, setCarts] = useState([]);
    const [cart, setCart] = useState("{}");
    const [buyer, setBuyer] = useState("");
    const [filter, setFilter] = useState("");


    function getCarts() {
        axios.get("http://localhost:8080/cart/get")
            .then((response) => { setCarts(response.data) })
            .catch(console.log())
    }
    useEffect(() => { getCarts() }, [])


    for (const cart of carts) {

        // *******************
        if (filter && !cart.buyer.toLowerCase().includes(filter.toLowerCase())) continue;
        //    *************************


        cartList.push(<CartStructure
            id={cart.id}
            buyer={cart.buyer}

        />

        )
    }





    function handleclick() {

        axios.post("http://localhost:8080/cart/create", { buyer })
            .then(response => { getCarts(); setBuyer(""); console.log(buyer); })
            .catch(err => console.error(err))


    }





    return (
        <div className="border border-primary p-2 mb-2 " style={{ backgroundColor: "#5dbc4d", width: "100%" }}>


            <div id="cartCreate" className="card-body " style={{ backgroundColor: "#5dbc4d", width: "40%", border: "show ", borderColor: "black" }}>
                <div className="card">
                    <div style={{ marginLeft: "28px", }} label htmlFor="buyer" className="form-label">Customer Name
                        <input size="50"
                            id="buyer"
                            className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px", marginTop: "30px", display: "inline" }}
                            type="text"
                            value={buyer}
                            onChange={e => { setBuyer(e.target.value); console.log(e.target.value); }}
                        />
                        <button className="btn btn-success" style={{ width: "200px", height: "40px", margin: "5px", marginLeft: "5px", marginTop: "15px" }} type="button" onClick={handleclick}>Create New Cart</button>
                    </div>
                </div>
            </div>




            {/* ************************************************ */}

            <div id="cartSearch" className="card-body" style={{ backgroundColor: "#5dbc4d", width: "20%", padding: "20px", border: "show ", borderColor: "black" }}>
            <div className="card">
                <div style={{ marginLeft: "28px" }} label htmlFor="buyer" className="form-label">Cart Search
                    <input size="50"
                        id="filter"
                        className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px", marginTop: "30px" }}
                        type="text"
                        placeholder="Enter customer name"
                        value={filter}
                        onChange={e => { setFilter(e.target.value); console.log(e.target.value); }}
                    />
                </div>
                </div>

            </div>

            {/* ******************************************************** */}





            {/* <button style={{ width: "200px", height: "40px", margin: "5px", marginLeft: "5px", marginTop: "15px" }} type="button" onClick={handleShop}>Shop</button> */}
            <h3>Carts</h3>
            <div className="border border-primary p-2 mb-2 " style={{ backgroundColor: "#5dbc4d", width: "80%" }}> {cartList}
            </div>
        </div>
    );
}
export default CreateCart;
