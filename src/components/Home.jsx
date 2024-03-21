import homeLogo from "../pictures/homeLogo.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import lowPrice from "../pictures/lowprice.png";
import onLine from "../pictures/online.png";
import priceMatch from "../pictures/priceMatch.jpg";
import basket from "../pictures/basket.jpg";
import homeBackground from "../pictures/homeBackground.jpg";
function Home() {
    return (
        <div className="homeClass" style={{width:"100%"}}>
            



                {/* <p>CCZone Homepage</p> */}
                
                <div >
                    
                <img alt="picture of a computer keyboard with a button saying order shopping" className="text-center" style={{ marginLeft:"830px", width: "10%" }} src={onLine}></img>
                    <p style={{ textAlign:"center", fontFamily:"cursive",color:"green"}}><b>The new way to buy<br></br> your groceries from the <br></br>comfort of your Sofa<br></br>
                                         </b>  </p>
                </div>
                <div>
                    <img alt="a logo showing the words low everyday prices"  className="text-center" style={{marginLeft:"550px", width: "10%" }} src={lowPrice}></img>
                    <img alt="a shopping basket full of groceries" className="text-center" style={{ marginLeft:"400px",width: "10%" }} src={basket}></img>
                    <p></p>
                     <p style={{ textAlign:"center", fontFamily:"cursive",color:"green"}}><b>Price matched against all major supermarkets. </b></p> 
                </div>

                <div>
                    <img alt="a gold logo with the words price match" classNmae="text-center" style={{ marginLeft:"830px",width: "10%" }} src={priceMatch}></img>
                    {/* <p>Here to help with the cost of living!</p> */}
                </div>
                <div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>



            
        </div>
    );
}

export default Home;