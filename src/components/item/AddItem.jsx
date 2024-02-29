import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function AddItem() {

    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState(0.0);
    const [itemQuantity, setItemQuantity] = useState(0);
    const params = useParams("");
    const navigate = useNavigate();
    return (
        <div className="form-control border-3 border-primary rounded" style={{backgroundColor:"#295821"}}>
            <form
            onSubmit={e => {

                e.preventDefault()

                axios.post("http://localhost:8080/item/create", { itemName, itemPrice, itemQuantity, cart: params.id })

                    .then(response => {
                        setItemName("");
                        setItemPrice("");
                        setItemQuantity("");
                        navigate("/cart")

                    })

                    .catch(err => console.error(err))

            }
            }
            >
                    <div style={{marginLeft: "28px"}} label htmlFor="itemName" className="form-label">Item Name
                <input size="50"
                    id="itemName"
                    className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px", marginTop: "30px" }}
                    type="text"
                    value={itemName}
                    onChange={e => setItemName(e.target.value)}
                    
                />

            </div>

            <div style={{marginLeft: "35px"}} label htmlFor="itemPrice" className="form-label">Item Price
                <input size="50"
                    id="itemPrice"
                    className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                    type="number"
                    value={itemPrice}
                    onChange={e => setItemPrice(e.target.value)}
                    
                />
            </div>


            <div style={{marginLeft: "10px"}} label htmlFor="itemQuantity" className="form-label">Item Quantity
                <input size="50"
                    id="itemQuantity"
                    className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                    type="number"
                    value={itemQuantity}
                    onChange={e => setItemQuantity(e.target.value)}
                    contentEditable
                />

            </div>


            <button style = {{margin: "5px"}} className="btn btn-primary" type="submit">Submit</button>

        </form >

        </div >
     );
}

export default AddItem;