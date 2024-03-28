// import axios from "axios";
// import { useEffect, useState } from "react";
// import ItemStructure from "./ItemStructure";


// function DisplayStockItems() {
//     const [items, setItems] = useState([]);
//     const itemList = [];


//     function getItems() {
//         axios.get("http://localhost:8080/item/get")

//             .then((response) => {
//                 setItems(response.data);
//                 console.log("response.data: ", response.data);
//             })

//             .catch(console.log())
//         console.log("items1: ", items);
//     }


//     for (const item of items) {





// //         />

//         )
//     }


//     useEffect(() => { getItems() }, [])

//     return (
//         <div>
//             <div  style={{ backgroundColor: "#F8B751", width: "80%" }}>
//                 {itemList}
//             </div>
//         </div>
//     );
// }


// export default DisplayStockItems;