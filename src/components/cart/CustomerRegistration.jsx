import { useEffect, useState } from "react";
import axios from "axios";
import CartStructure from "./CartStructure"
import { useNavigate } from "react-router-dom";


function CustomerRegistration(props) {
    const [id, setId] = useState();
    const [buyer, setBuyer] = useState("");
    const [tel, setTel] = useState("");
    const [address, setAddress] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState();
    const [cart, setCart] = useState();

    var visibility;
    var quantity = 0;
    var status = true;

    // if (!id) visibility = "none";
    const navigate = useNavigate();

    function handleSubmit() {

        console.log("Existing carts: ", props.carts);
        for (const cart of props.carts) {
            if (cart.userId === userId) {

                alert("user id already taken, please create a new user id");
                status = false;
                break;
            }
            else if (cart.buyer === buyer && cart.tel === tel && cart.address === address) {
                alert("user already exists, please sign in with the right credentials")
                status = false;
                navigate('/shopping');
                break;
            }
        }

        if (status == true) {



        axios.post("http://localhost:8080/cart/create", { buyer, address, tel, userId, password })


                .then(response => {
                    setCart(response.data)
                    // if (!buyer) visibility = "none";else visibility="inline"
                    // console.log("buyer, vis:",buyer, visibility);
                    setBuyer("");
                    setTel("");
                    setAddress("");
                    setUserId("");
                    setPassword("");
                    visibility = "none";




                    // navigate('/shopping');

                    // getItems();

                })

                .catch(err => console.error(err))

        }

    }

    return (
        <div style={{ backgroundColor: "#fcc72b", padding: "50px", height: "1800px" }} >
            <div style={{ float: "right", width: "50%" }}>
                <h2>Customer Registration</h2>

                <form className="card"
                    style={{ width: "100%", position: "center", margin: "20px" }}
                    onSubmit={e => {

                        e.preventDefault();
                        handleSubmit();


                    }
                    }

                >
                    <div style={{ marginLeft: "10px", display: "inline-block" }} label htmlFor="itemName" className="form-label"><strong>Customer Name</strong>
                        <input size="50"
                        placeholder="Enter name.."
                            id="buyer"
                            className="form-control border border-success rounded"
                            style={{ display: "inline-block", width: "250px", height: "37px", margin: "5px", marginLeft: "20px", marginTop: "30px" }}
                            type="text"
                            value={buyer}
                            onChange={e => setBuyer(e.target.value)}

                        />

                    </div>

                    <div style={{ marginLeft: "10px", display: "inline-block" }} label htmlFor="itemPrice" className="form-label"><strong>Telephone Number</strong>
                        <input size="50"
                            id="tel"
                            placeholder="Enter phone number.."
                            className="form-control border border-success rounded"
                            style={{ display: "inline-block", width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                            type="text"
                            value={tel}
                            onChange={e => setTel(e.target.value)}

                        />
                    </div>


                    <div style={{ marginLeft: "10px", display: "inline-block" }} label htmlFor="itemQuantity" className="form-label"><strong>Address</strong>
                        <input size="50"
                            id="address"
                            placeholder="Enter address.."
                            className="form-control border border-success rounded"
                            style={{ display: "inline-block", width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                            type="text"
                            value={address}
                            onChange={e => setAddress(e.target.value)}

                        />

                    </div>

                    <div style={{ marginLeft: "10px", display: "inline-block" }} label htmlFor="itemQuantity" className="form-label"><strong>User Id</strong>
                        <input size="50"
                            id="userId"
                            placeholder="Enter user ID.."
                            className="form-control border border-success rounded"
                            style={{ display: "inline-block", width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                            type="text"
                            value={userId}
                            onChange={e => setUserId(e.target.value)}

                        />

                    </div>

                    <div style={{ marginLeft: "10px", display: "inline-block" }} label htmlFor="itemQuantity" className="form-label"><strong>Password</strong>
                        <input size="50"
                            id="password"
                            placeholder="Enter password.."
                            className="form-control border border-success rounded"
                            style={{ display: "inline-block", width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}

                        />

                    </div>

                    <div style={{ float: "right" }}>
                        <button id="itemSubmit" style={{ float: "right", margin: "5px", width: "150px", color: "#fdc1da", backgroundColor: "#11663f" }} className="btn btn-success" type="submit"><strong>Submit</strong></button>

                    </div>


                </form >
            </div>

            <div style={{ width: "50%", margin: "20px" }} >
                {cart && <CartStructure id={cart.id}
                    buyer={cart.buyer}
                    itemCount={quantity}
                    tel={tel}
            address={address}
            userId={userId}
                    />
                }

            </div>

        </div>
    );
}

export default CustomerRegistration;