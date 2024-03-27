import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DisplayStockItems from "./DisplayStockItems";
import DisplayItems from "./DisplayItems";
import ItemStructure from "./ItemStructure";
import propTypes from "prop-types";

function AddItem() {

    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState(0.0);
    const [itemQuantity, setItemQuantity] = useState(1);
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

         compStatus={"AddItem"}
        />

        )
    }

    function handleSubmit(){
        // var status=true;
        // console.log("Items:",items);
        // for (const item of items) {
        //     console.log(item.itemName, itemName, item.itemPrice, itemPrice)
        //      if (item && item.itemName === itemName && item.itemPrice === itemPrice) {
        //         alert("Item already exists");
        //         status = false;
        //                   break;
                          
        //     }
        // }
        // console.log("status:",status);
        // if (status == true) {
            axios.post("http://localhost:8080/item/create", { itemName, itemPrice, itemQuantity })

                        .then(response => {
                            
                            setItemName("");
                            setItemPrice("");
                            setItemQuantity(1);
                            
                            getItems();

                        })

                        .catch(err => console.error(err))

    // }
}
    
   



    return (
        <div style={{ backgroundColor: "#F8B751", padding: "50px", height: "1800px" }} >
         
         <h3>Add New Items</h3> <div style={{  width: "50%" }}>
            <form className="card" style={{ width: "50%", position: "center",marginTop:"20px", margin: "20px" }}
                onSubmit={e => {

                    e.preventDefault()
                    setCartId(params.id);
                    handleSubmit();

               


                 
                }
                }
            >
                <div style={{ marginLeft: "28px" }} label htmlFor="itemName" className="form-label"><strong>Item Name</strong>
                    <input size="50"
                        id="itemName"
                        className="form-control border border-success rounded" 
                        style={{ display: "inline-block", width: "250px", height: "37px", margin: "10px", marginLeft: "20px" }}
                        type="text"
                        value={itemName}
                        onChange={e => setItemName(e.target.value)}

                    />

                </div>

                <div style={{ marginLeft: "35px" }} label htmlFor="itemPrice" className="form-label"><strong>Item Price</strong>
                    <input size="50"
                        id="itemPrice"
                        className="form-control border border-success rounded" 
                        style={{ display: "inline-block", width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                        type="number"
                        value={itemPrice}
                        onChange={e => setItemPrice(e.target.value)}

                    />
                </div>


                 <div style={{ marginLeft: "10px" }} label htmlFor="itemQuantity" className="form-label"><strong>Item Quantity</strong>
                    <input size="50"
                        id="itemQuantity"
                        className="form-control border border-success rounded" 
                        style={{ display: "inline-block", width: "250px", height: "37px", margin: "5px", marginLeft: "20px" }}
                        type="number"
                        value={itemQuantity}
                        onChange={e => setItemQuantity(e.target.value)}
                        contentEditable
                    />

                </div> 


                <button id="itemSubmit" style={{ float: "right", margin: "5px", width: "150px", color: "#fdc1da", backgroundColor: "#11663f" }} className="btn btn-success" type="submit"><strong>Submit</strong></button>




            </form >
            </div>

  

            {/* <DisplayItems /> */}
           <div style={{ width:"100%", columnCount: "3"}}>

            <div > {itemList}</div>
          

           </div>
          
          


            

        </div >
    );
}
AddItem.propTypes={
    getItems:propTypes.func.isRequired
}
export default AddItem;