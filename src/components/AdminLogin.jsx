
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import CreateCart from './cart/CreateCart'
function AdminLogin() {

    const [adminId, setAdminId] = useState();
    const [password, setPassword] = useState();
    const [admins, setAdmins] = useState([]);
    const navigate = useNavigate();
    // var disabledStatus=true;
    var count;
    const [disabledStatus, setDisabledStatus] = useState(true);

    function getAdmins() {
        axios.get("http://localhost:8080/admin/get")
            .then((response) => { setAdmins(response.data); })
            .catch(console.log())
    }
    useEffect(() => { getAdmins() }, [])
   

    function handleSubmit() {
        setAdminId("");
        setPassword("");

        for (const admin of admins) {

            if (admin.adminId === adminId && admin.password === password) {
                console.log("user matched");

                count = 0;
                break;
            }



            else count = 1;

        }
        console.log("count ", count);
       
        if (count == 0) {
            setDisabledStatus(false);
            navigate("/cart");
           
            console.log("disabledStatus: ",disabledStatus);
            
        }
        else alert ("Not authorised to access this page");


    }

    return (<div className="card" style={{ width: "30%", margin: "50px" }}>


        <Form onSubmit={e => {

            e.preventDefault();
            handleSubmit();

            // <h1> LOGIN PAGE successfully loaded</h1>


        }
        }
        >
            <Form.Group className="mb-3" controlId="formGroupEmail" >
                <Form.Label style={{ width: "30%" }}>User Id</Form.Label>
                <Form.Control type="userId" placeholder="Enter User Id" onChange={e => setAdminId(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword" >
                <Form.Label style={{ width: "30%" }}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Button style={{ float: "right", margin: "30px" }} variant="primary" type="submit" >
                Submit
            </Button>

        </Form>
        {/* <div style={{float:"right"}}>
        <button disabled={disabledStatus} type="button" className="btn btn-success" 
        style={{ margin: "10px", color: "#fdc1da"}}
        onClick={()=>navigate("/cart")}
        >Cart</button>
        <button disabled={disabledStatus}
        type="button" className="btn btn-success" 
        style={{ margin: "10px", color: "#fdc1da"}}
        onClick={()=>navigate("/item")}
        >Item</button>
        </div> */}


    </div>
    );
}

export default AdminLogin;