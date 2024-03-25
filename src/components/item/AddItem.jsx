import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DisplayStockItems from "./DisplayStockItems";
import DisplayItems from "./DisplayItems";
import ItemStructure from "./ItemStructure";
import propTypes from "prop-types";

function AddItem({}) {

    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState(0.0);
    const [itemQuantity, setItemQuantity] = useState(0);
    const [cartId, setCartId] = useState();
    const params = useParams("");
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const itemList = [];

    function getItems() {
        axios.get("http://localhost:8080/item/get")
        
            .then((response) => { setItems(response.data);
            console.log("response.data: ",response.data);
             })
             
            .catch(console.log())
            console.log("items1: ",items);
    }
    useEffect(() => { getItems() }, [])
   
    for (const item of items) {
        
        itemList.push(<ItemStructure
            id={item.id}
         name={item.itemName}
         price={item.itemPrice}
         
        />

        )
    }




    return (
        <div style={{ backgroundColor: "#fcc72b", padding: "50px", height: "1800px" }}>
            <form className="card" style={{ width: "50%", position: "center", margin: "20px" }}
                onSubmit={e => {

                    e.preventDefault()
                    setCartId(params.id)


                    axios.post("http://localhost:8080/item/create", { itemName, itemPrice, itemQuantity, cart: params.id })

                        .then(response => {

                            setItemName("");
                            setItemPrice("");
                            setItemQuantity("");
                            
                            getItems();

                        })

                        .catch(err => console.error(err))

                }
                }
            >
                <div style={{ marginLeft: "28px" }} label htmlFor="itemName" className="form-label"><strong>Item Name</strong>
                    <input size="50"
                        id="itemName"
                        className="form-control border border-success rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px", marginTop: "30px" }}
                        type="text"
                        value={itemName}
                        onChange={e => setItemName(e.target.value)}

                    />

                </div>

                <div style={{ marginLeft: "35px" }} label htmlFor="itemPrice" className="form-label"><strong>Item Price</strong>
                    <input size="50"
                        id="itemPrice"
                        className="form-control border border-success rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                        type="number"
                        value={itemPrice}
                        onChange={e => setItemPrice(e.target.value)}

                    />
                </div>


                <div style={{ marginLeft: "10px" }} label htmlFor="itemQuantity" className="form-label"><strong>Item Quantity</strong>
                    <input size="50"
                        id="itemQuantity"
                        className="form-control border border-success rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                        type="number"
                        value={itemQuantity}
                        onChange={e => setItemQuantity(e.target.value)}
                        contentEditable
                    />

                </div>


                <button id="itemSubmit" style={{ margin: "5px", width: "150px", color: "#fdc1da" }} className="btn btn-success" type="submit"><strong>Submit</strong></button>




            </form >

            {/* <DisplayItems /> */}
            <div style={{ columnCount: "2"}}>
            <div style={{ width:"200%"}}> {itemList}</div>
          

           </div>
          
          


            

        </div >
    );
}
AddItem.propTypes={
    getItems:propTypes.func.isRequired
}
export default AddItem;