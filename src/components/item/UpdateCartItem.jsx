
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

    // function getCartItems() {
    //     axios.get("http://localhost:8080/cart/get/" + params.id)
    //         .then((response) => { setItems(response.data.items) })
    //         .catch(console.log())
    //         console.log( items);
    //         setId({cart: params.id});
    // }
    // useEffect(() => { getCartItems() }, [])

    // for (const item of items){
    //     if (item.id === params.id){
    //         setItemQuantity(item.itemQuantity)
    //    break }
    // }
    
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
                    {/* <div label htmlFor="itemName" className="form-label">Item Name
                <input size="50"
                    id="itemName"
                    className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px" }}
                    type="text"
                    // placeholder=""
                    value={itemName}
                    onChange={e => setItemName(e.target.value)}
                    
                />

            </div>

            <div label htmlFor="itemPrice" className="form-label">Item Price
                <input size="50"
                    id="itemPrice"
                    className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px" }}
                    type="number"
                    value={itemPrice}
                    onChange={e => setItemPrice(e.target.value)}
                    
                /> */}
            {/* </div> */}

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



// import axios from "axios";
// import {useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import DisplayCartContent from "../cart/DisplayCartContent";
// import { PropTypes, checkPropTypes } from "prop-types";


// function UpdateCartItem(props) {

//     const [itemName, setItemName] = useState("");
//     const [itemPrice, setItemPrice] = useState(0.0);
//     const [itemQuantity, setItemQuantity] = useState("");
//     const params = useParams("");
//     const navigate = useNavigate();
//     const [items, setItems] = useState([]);
//  const [id, setId] = useState();


//     function getCartItems() {
//         axios.get("http://localhost:8080/cart/get/" + params.id)
//             .then((response) => { setItems(response.data.items);/* id=response.data.id*/ })
//             .catch(console.log())
//             console.log( items);

//             setId(params.id);
            
//     }
//     useEffect(() => { getCartItems() }, [])

    
    
//     return (
//         <div className="form-control border-3 border-primary rounded" style={{backgroundColor:"#5dbc4d"}}>


// <form
//             onSubmit={e => {

//                 e.preventDefault()

               
//                 axios.patch("http://localhost:8080/item/update/"+id, { itemQuantity})

//                     .then(response => {
                        
//                         setItemQuantity(response.data.itemQuantity);
                        
//                         navigate(-1);
                       

//                     })

//                     .catch(err => console.error(err))

//             }
//             }
//             >
                   

//             <div style={{marginLeft: "10px"}} label htmlFor="itemQuantity" className="form-label">Item Quantity
//                 <input size="50"
//                     id="itemQuantity"
//                     className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px", margin: "5px", marginLeft: "30px", marginTop: "30px" }}
//                     type="number"
//                     placeholder={itemQuantity}
//                     value={itemQuantity}
//                     onChange={e => setItemQuantity(e.target.value)}
                    
                       
                   
//                 />

//             </div>


//             <button className="btn btn-primary" style = {{margin: "5px"}} type="submit">Submit</button>

//         </form >

//         </div>
//       );
// }

// export default UpdateCartItem ;