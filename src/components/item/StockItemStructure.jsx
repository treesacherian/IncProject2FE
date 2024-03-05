// import PropTypes from "prop-types";

// import { useNavigate } from "react-router";
// import { useState } from "react";
// import axios from "axios";
// import UpdateCartItem from "./UpdateCartItem";

// function StockItemStructure(props) {
//     const navigate = useNavigate();

//     function deleteItem() {
//         axios.delete("http://localhost:8080/item/delete/" + props.id)
//         window.location.reload()
//     }


//     return (
//         <div>
//             <h5>Items: {props.id}</h5>


//             <div className="row">
//                 <p className="col">  ID: {props.id} </p>
//                 <p className="col"> ITEM : {props.name} </p>
//                 <p className="col">  PRICE: £{props.price} </p>



//                 <button
//                     style={{ width: "200px", height: "50px", margin: "5px", padding: "5px" }}
//                     className="btn btn-danger col" onClick={() => { deleteItem() }}>
//                     Delete
//                     </button>
//             </div>




//         </div>
//     );
// }

// //     ItemStructure.propTypes = {
// //         quantity: PropTypes.number
// // }

// export default StockItemStructure;