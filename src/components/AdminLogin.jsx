
import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import CreateCart from './cart/CreateCart';
import vegPic from "../pictures/vegPic.jpg";
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

        setAdminId("");
        setPassword("");


    }

    return (
        <div style={{ backgroundColor: "#F8B751", padding: "50px",width:"100%", height: "1800px" }}>
            
    
    <div className="card" style={{ width: "30%", margin: "50px" }}>


        <Form onSubmit={e => {

            e.preventDefault();
            handleSubmit();

            // <h1> LOGIN PAGE successfully loaded</h1>


        }
        }
        >
            <Form.Group className="mb-3" controlId="formGroupEmail" >
                <Form.Label style={{ width: "30%" }}><b>Admin Id</b></Form.Label>
                <Form.Control type="userId" placeholder="Enter Admin User Id" onChange={e => setAdminId(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword" >
                <Form.Label style={{ width: "30%" }}><b>Password</b></Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>

            <Button style={{ float: "right",  margin: "30px", width: "100px", color: "#fdc1da", backgroundColor: "#11663f"  }} variant="success" type="submit" >
                <strong>Submit</strong>

            </Button>

        </Form>
       

    </div>
    
    <div >
    <img alt="picture of basket containing vegitables" className="text-center" 
    style={{ borderRadius: "8px", marginLeft:"1200px", width: "30%" }} src={vegPic}></img>
    </div>
    </div>
    
    );
}

export default AdminLogin;