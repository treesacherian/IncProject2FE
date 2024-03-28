import homeLogo from "../pictures/homeLogo.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import lowPrice from "../pictures/lowprice.png";
import onLine from "../pictures/online.png";
import priceMatch from "../pictures/priceMatch.jpg";
import basket from "../pictures/basket.jpg";
import homeBackground from "../pictures/homeBackground1.jpg";
import homeLogol from "../pictures/homeLogol.jpg";


function Home() {
    return (
        <div className="homeClass" style={{ width: "100%" }}>




            <div className="topright">
                <img alt="a shopping basket full of groceries" className="text-center" style={{ borderRadius: "50%", float: "right", margin: "10px", width: "50%" }} src={basket}></img>
                <p style={{ textAlign: "center", fontFamily: "cursive", color: "green" }}><b>The new way to buy<br></br> your groceries from the <br></br>comfort of your Sofa<br></br>
                </b>  </p>
            </div>
            <img alt="a gold logo with the words price match" classNmae="text-center" style={{ borderRadius: "50%", marginLeft:"850px",marginTop:"50px", width: "10%" }} src={priceMatch}></img>

            <div class="topleft">
            <img alt="a gold logo with the words price match" classNmae="text-center" style={{ borderRadius: "50%", float: "left", width: "10%" }} src={homeLogol}></img>

            </div>

            <div class="bottomleft">
            <img alt="picture of a computer keyboard with a button saying order shopping" className="text-center" style={{ borderRadius: "8px", marginTop: "450px", marginLeft: "10px", float: "left", display: "bottom ", width: "30%" }} src={onLine}></img>
            </div>

            <div class="center">
            <img alt="a logo showing the words low everyday prices" className="text-center" style={{ borderRadius: "8px", float: "right", width: "20%" }} src={lowPrice}></img>
            <p style={{float:"right",fontFamily: "cursive", color: "green",marginLeft:"700px", textAlign: "center",  }}><b>Price matched against all major supermarkets. </b></p>
            </div>
            

            





            <p></p>
            



            
            



        </div>
    );
}

export default Home;