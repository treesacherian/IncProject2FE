import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DisplayItems from "../item/DisplayItems";

import ItemStructure from "../item/ItemStructure";

function AddItemToCart() {

    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState(0.0);
    const [itemQuantity, setItemQuantity] = useState(0);
    const [filter, setFilter] = useState("")
    const [items, setItems] = useState([]);
    const params = useParams("");
    const navigate = useNavigate();
    const itemList = [];
    let count=0;

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

    function getItems() {
        axios.get("http://localhost:8080/item/get")
            .then((response) => { setItems(response.data); })
            .catch(console.log())
    }
    useEffect(() => { getItems() }, [])


    for (const item of items) {

        // *******************
        if (filter && !item.itemName.toLowerCase().includes(filter.toLowerCase())) continue;
        
        // count = (cart.items.length);
        itemList.push(<ItemStructure
            id={item.id}
            name={item.itemName}
            price={item.itemPrice}
            cartId={item.cartId}
            
            // itemCount={count}

        />

        )
    }



    return (
        <div style={{ backgroundColor: "#fcc72b", padding: "50px", height: "1800px" }}>
            <div id="cartSearch" className="card-body" style={{ width: "20%", padding: "20px", border: "show ", borderColor: "black" }}>
                <div className="card">
                    <div style={{ marginLeft: "28px" }} label htmlFor="buyer" className="form-label"><strong>Item Search</strong>
                        <input size="50"
                            id="filter"
                            className="form-control border-3 border-success" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "20px", marginTop: "30px" }}
                            type="text"
                            placeholder="Enter Item to search"
                            value={filter}
                            onChange={e => { setFilter(e.target.value); console.log(e.target.value); }}
                        />
                    </div>
                </div>
            </div>

            <br></br>
           
            <h3>Current Stock Items</h3>
            {itemList}
            {/* <DisplayItems /> */}


        </div>
    );
}

export default AddItemToCart;