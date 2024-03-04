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
            <div class="border border-primary p-2 mb-2 " style={{ /*backgroundColor: "#5dbc4d",*/ width: "100%" }} >



                {/* <p>CCZone Homepage</p> */}
                <br />
                <div >
                <img className="text-center" style={{ display :"inline-block", width: "10%" }} src={onLine}></img>
                    {/* <p>The new way to buy<br></br> your groceries from the <br></br>comfort of your Sofa<br></br>
                                           </p> */}
                </div>
                <div>
                    <img className="text-center" style={{ width: "10%" }} src={lowPrice}></img>
                    <p></p>
                    {/* <p>Price matched against all major supermarkets.</p> */}
                </div>

                <div>
                    <img classNmae="text-center" style={{ width: "10%" }} src={priceMatch}></img>
                    {/* <p>Here to help with the cost of living!</p> */}
                </div>
                <div>
                    <img className="text-center" style={{ width: "10%" }} src={basket}></img>
                </div>



            </div>
        </div>
    );
}

export default Home;