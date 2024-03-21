import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PropTypes, checkPropTypes } from "prop-types";
import { Table } from "react-bootstrap";
import CartStructure from "./cart/CartStructure";
import ItemStructure from "./item/ItemStructure";
import homeLogo from "./homeLogo.jpg";





function Checkout() {
  const params = useParams();
  const [items, setItems] = useState([]);
  const [buyer, setBuyer] = useState("")
  const itemList = []
  let cartTotal = 0;

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


  function getCartItems() {
    axios.get("http://localhost:8080/cart/get/" + params.id)
      .then((response) => {
        setItems(response.data.items)
        setBuyer(response.data.buyer)
        console.log("response.data.items:", response.data.items);
      })
      .catch(console.log())

    console.log("items:", items);
  }


  for (const item of items) {
    itemList.push(<ItemStructure
      id={item.id}
      name={item.itemName}
      price={item.itemPrice}
      quantity={item.itemQuantity}
    />

    )

  }
  for (const item of items) {
    cartTotal = cartTotal + item.itemPrice * item.itemQuantity

  }
  useEffect(() => { getCartItems() }, [])


  return (
    <div>
      <br />
      <h1>Invoice for {buyer}</h1>
      <br />


      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="2">CCZone Customer Invoice</th>
            <th colSpan="2">Invoice date: {date}</th>
          </tr>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.itemName}</td>
              <td>{item.itemQuantity}</td>
              <td>£{item.itemPrice.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3"><strong>Total:</strong></td>
            <td><strong>£{cartTotal.toFixed(2)}</strong></td>
          </tr>
          <tr>
            <td colSpan="3"><strong>Bank Details;</strong>
              <br /> Account Name: CCZone Ltd
              <br /> Sort Code: 30-00-00
              <br /> Account Number: 12345678
            </td>
            <td> </td>

          </tr>
          <tr>
            <td colSpan="4"><strong>Please make full payment within 21 days.</strong></td>

          </tr>

        </tfoot>
      </Table>
      <br/>
      <button id="btn-print" className="btn btn-success" style={{ marginLeft: "10px", padding: "5px", color: "#fdc1da"}}
      onClick={() => alert("Invoice Printing")}>Print Invoice</button>
      
    </div>
  );
}

export default Checkout;