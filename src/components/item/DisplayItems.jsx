import axios from "axios";
import { useEffect, useState } from "react";
import ItemStructure from "./ItemStructure";
import { useParams } from "react-router-dom";


function DisplayItems () {
   const [items, setItems] = useState([]); 
   const itemList = [];
   const [disbaleStatus, setDisbaleStatus] = useState(false);

   const params = useParams("");
   var visStatus;
   
    function getItems() {
        axios.get("http://localhost:8080/item/get")
        
            .then((response) => { setItems(response.data);
            console.log("response.data: ",response.data);
            
             })
             
            .catch(console.log())
            console.log("items1: ",items);
            
    }
    useEffect(() => { getItems() }, [])
    
    console.log("params.id:",params.id);
    for (const item of items) {
        
        itemList.push(<ItemStructure
            id={item.id}
         name={item.itemName}
         price={item.itemPrice}
         cartId={item.cartId}
         
        />

        )
    }
   
    
    
    
    return ( 
        <div>
            <div  style={{columnCount: "2", backgroundColor: "5dbc4d", width: "100%" }}>
                 {itemList}
               </div>
        </div>
     );
}

export default DisplayItems ;