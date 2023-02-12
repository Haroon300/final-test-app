import './home.css';
import shop from '../icon/shop.png';
import mainpic from '../img/Grocery.png';
import src from '../icon/Search.png';

function Home(){
    return(
        <div>
            <div className='flex col'>
                <div className='flex'>
                    <div>
                        <h1 className="green">SAYLANI WELFARE</h1>
                        <h4 className="blue">DISCOUNT STORE</h4>
                    </div>
                    
                    <div id='shop'>
                        <img src={shop} alt="shop logo" />
                    </div>
                </div>
                <div>
                    <img src={mainpic} alt="Grocery" />
                </div>
                <div className='flex'>
                    
                    <input type="text" name="search" id="search" placeholder='Search here' />
                    <div>
                        <button><img src={src} alt="Search" id='src'/></button>
                    </div>
                </div>
                <div>
                    <h5>Shop by Categery</h5>
                </div>
                <div>
                    
                </div>

            </div>

        </div>
    )
}

export default Home;
