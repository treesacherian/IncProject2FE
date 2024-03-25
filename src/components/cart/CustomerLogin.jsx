import { useEffect, useState } from "react";
import propTypes from "prop-types";
import { useNavigate } from "react-router";
import axios from "axios";
import CartStructure from "./CartStructure"

function CustomerLogin(props) {


    const [userId, setUserId] = useState();
    const [password, setPassword] = useState();
    const [carts, setCarts] = useState([]);
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [quantity, setQuantity] = useState();
    const [tel, setTel] = useState();
    const [address, setAddress] = useState();
    const navigate = useNavigate();
    var visibility;
    var count;

    if (!id) visibility = "none";




    function handleSubmit() {

        // console.log("props.getCarts: ",props.carts);

        // setCarts(props.carts);
        setUserId("");
        setPassword();
        // console.log("carts: ", carts);


        // The above code did not work by passing props, therefore below 3 lines  required

        axios.get("http://localhost:8080/cart/get")
            .then((response) => { setCarts(response.data); console.log("carts: ", carts); })
            .catch(console.log())


        for (const cart of carts) {

            if (cart.userId === userId && cart.password !== password) {
                setUserId("");
                setPassword();
                count = 0;
                alert("Incorrect password. Please enter correct details");
                break;
            }
            else if (cart.userId === userId && cart.password === password) {
                console.log("user matched");
                setId(cart.id);
                setName(cart.buyer);
                setQuantity(cart.items.length);
                setTel(cart.tel);
                setAddress(cart.address);
                setUserId(cart.userId)
                console.log("id:", id, "buyer: ", name);
                count = 0;
                break;
            }



            else count = 1;

        }
        console.log("count ", count);
        if (count == 1) {
            alert("not an existing user");
            navigate("/cart/create");
        }



    }  /******** closing curly bracket was before for loop */


    useEffect(() => { handleSubmit() }, [])


    return (


        <div style={{ backgroundColor: "#fcc72b", padding: "10px", height: "1800px" }}>
            <h3>Returning customers, please login below</h3>
            <form
                className="card"
                style={{ width: "40%", }}
                onSubmit={e => {

                    e.preventDefault();
                    handleSubmit();


                }
                }
            >

                <div style={{ display: "inline-block", marginLeft: "10px" }} label htmlFor="userId" className="form-label"><strong>User Id</strong>
                    <input size="50"
                        id="userId"
                        className="form-control border border-success rounded"
                        style={{ display: "inline-block", width: "200px", height: "37px", margin: "5px", marginTop: "30px" }}
                        type="text"
                        value={userId}
                        onChange={e => { setUserId(e.target.value); console.log(e.target.value); }}
                        required
                    />
                </div>

                <div style={{ display: "inline-block", marginLeft: "10px" }} label htmlFor="password" className="form-label"><strong>Password</strong>
                    <input size="50"
                        id="password"
                        className="form-control border border-success rounded"
                        style={{ display: "inline-block", width: "200px", height: "37px", margin: "5px", marginTop: "30px" }}
                        type="password"
                        value={password}
                        onChange={e => { setPassword(e.target.value); console.log(e.target.value); }}
                        required
                    />
                </div >
                <div style={{ float: "right" }}>
                    <button style={{ float: "right", margin: "5px", width: "150px", color: "#fdc1da", backgroundColor: "#11663f" }} className="btn btn-success" type="submit"><strong>Submit</strong></button>
                </div>




            </form>
            <p>New customers please click <a href="/cart/create">here </a> to register</p>

            <div style={{ display: visibility, width: "50% " }}>
                <CartStructure id={id}
                    buyer={name}
                    itemCount={quantity} 
                tel={tel}
                address={address}
                userId={userId}
                />


            </div>

        </div>


    );
}

CustomerLogin.prototype = {
    getCarts: propTypes.func.isRequired
}

export default CustomerLogin;