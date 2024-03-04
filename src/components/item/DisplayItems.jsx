// import axios from "axios";
// import { useEffect, useState } from "react";
// import ItemStructure from "./ItemStructure";


// function DisplayItems () {
//    const [items, setItems] = useState([]); 
//    const itemList = [];


//     function getItems() {
//         axios.get("http://localhost:8080/item/get")
        
//             .then((response) => { setItems(response.data);
//             console.log("response.data: ",response.data);
//              })
             
//             .catch(console.log())
//             console.log("items1: ",items);
//     }
   
   
//     for (const item of items) {
        
//         itemList.push(<ItemStructure
//             id={item.id}
//          name={item.itemName}
//          price={item.itemPrice}
         
//         />

//         )
//     }
    
//     useEffect(() => { getItems() }, [])
    
//     return ( 
//         <div>
//             <div class="border border-primary p-2 mb-2 border" style={{ backgroundColor: "5dbc4d", width: "80%" }}>
//                  {itemList}
//                </div>
//         </div>
//      );
// }

// export default DisplayItems ;