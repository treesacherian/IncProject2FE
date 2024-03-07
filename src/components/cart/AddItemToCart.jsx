import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DisplayStockItems from "../item/DisplayStockItems";
function AddItemToCart() {

    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState(0.0);
    const [itemQuantity, setItemQuantity] = useState(0);
    const params = useParams("");
    const navigate = useNavigate();

    // function handleClick() {
    //     axios.post("http://localhost:8080/item/create", { itemName, itemPrice, itemQuantity, cart:{id: params.id} })

    //         .then(response => {
    //             setItemName("");
    //             // setItemPrice("");
    //             setItemQuantity("");
    //             navigate("/cart")

    //         })

    //         .catch(err => console.error(err))
    // }
    return (
        <div style={{ backgroundColor: "#fcc72b", padding: "50px", height:"1800px" }}>
            <form className="card" style={{ width: "50%", position: "center", margin: "20px" }}
                onSubmit={e => {

                    e.preventDefault()

                    axios.post("http://localhost:8080/item/create", { itemName, itemPrice, itemQuantity, cart: { id: params.id } })

                        .then(response => {
                            setItemName("");
                            setItemPrice("");
                            setItemQuantity("");
                            navigate("/cart/get/" + params.id)

                        })

                        .catch(err => console.error(err))

                }
                }
            >
                <div >
                    <div class="row g-3 align-items-center">
                        <div class="col-auto">

                            <div style={{ marginLeft: "10px", }} label htmlFor="itemName" className="form-label"><strong>Item Name</strong>
                            </div>
                            <div class="col-auto">
                                <input size="50"
                                    id="itemName"
                                    className="form-control border border-success rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                                    type="text"
                                    value={itemName}
                                    onChange={e => setItemName(e.target.value)}
                                    required
                                />

                            </div>
                        </div>
                    </div>

                    <div style={{ marginLeft: "10px" }} label htmlFor="itemPrice" className="form-label"><strong>Item Price</strong>
                        <input size="50"
                            id="itemPrice"
                            className="form-control border border-success rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "30px" }}
                            type="number"
                            value={itemPrice}
                            onChange={e => setItemPrice(e.target.value)}
                            required
                        />
                    </div>


                    <div style={{ marginLeft: "10px" }} label htmlFor="itemQuantity" className="form-label"><strong>Item Quantity</strong>
                        <input size="50"
                            id="itemQuantity"
                            className="form-control border border-success rounded" style={{ width: "250px", height: "37px", margin: "5px" }}
                            type="number"
                            value={itemQuantity}
                            onChange={e => setItemQuantity(e.target.value)}
                            required
                        />

                    </div>
                    {/* <div label htmlFor="itemQuantity" className="form-label">Cart
                        <input size="50"
                            id="cartid"
                            className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px" }}
                            type="number"
                            value={ params.id}
                            onChange={e => setItemQuantity(e.target.value)}
                            required
                        /> */}

                </div>


                <button style={{ margin: "5px", width: "150px", color:"#fdc1da" }} className="btn btn-success" type="submit"><strong>Submit</strong></button>

            </form>
            {/* <button className="btn btn-primary" style = {{margin: "5px"}} type="button" onClick={handleClick}>Submit</button> */}
        <br></br>
         <h3>Current Stock Items</h3>
            <DisplayStockItems />

        </div>
    );
}

export default AddItemToCart;