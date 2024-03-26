
import axios from "axios";
import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DisplayCartContent from "../cart/DisplayCartContent";
import { PropTypes, checkPropTypes } from "prop-types";
import basket from "../../pictures/basket.jpg";

function UpdateCartItem(props) {

    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState(0.0);
    const [itemQuantity, setItemQuantity] = useState("");
    const params = useParams("");
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
const [id, setId] = useState();



useEffect(() => {
    axios.get("http://localhost:8080/item/get/" + params.id)
    .then((res) => {
        console.log(res);
        setItemQuantity(res.data.itemQuantity);
    }).catch(err => console.error(err))
}, []);

    
    
    return (
        <div  style={{backgroundColor:"#fcc72b", height:"900px"}}>


<form
            onSubmit={e => {

                e.preventDefault()

                // axios.patch("http://localhost:8080/item/update/"+params.id, { itemName, itemPrice, itemQuantity, cart: params.id })
                axios.patch("http://localhost:8080/item/update/"+params.id, { itemQuantity, cart: { id: params.id }})

                    .then(response => {
                        
                        setItemQuantity("");
                        // window.location.reload(DisplayCartContent)
                        //  navigate("/cart/get/"+id)
                        navigate(-1);
                       

                    })

                    .catch(err => console.error(err))

            }
            }
            >
                    

<br></br><br></br>
            <div style={{marginLeft: "10px"}} label htmlFor="itemQuantity" className="form-label"><h2>Item Quantity:</h2>
                <input size="50"
                    id="itemQuantity"
                    className="form-control border-3 border-success rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "30px", marginTop: "30px" }}
                    type="number"
                    // placeholder = {props.qty}
                    value={itemQuantity}
                    onChange={e => setItemQuantity(e.target.value)}
                    
                />

            </div>


            <button className="btn btn-success" style = {{margin: "5px",marginLeft:"40px", color:"#fdc1da"}} type="submit"><strong>Submit</strong></button>
<br></br><br></br>
<div><img className="text-center" style={{ marginLeft:"40px",width: "10%" }} src={basket}></img></div>
        </form >
        

        </div>
      );
}

export default UpdateCartItem ;



