import { useState } from 'react';
import './App.css';
import Sign_up from './from/sign-in';
import Sign_in from './from/sign-in';
import logo from './img/logo.png';




function App() {
    const [change , setChange] = useState(false); 

function start(){
    setChange(true); 
}

  return (
    <div>
        {(change) ? <Sign_up/> :

        <div className='flex col'>
            <div>
                <img src={logo} alt="logo" id='logo' />
            </div>
            <div id='title'>
                <samp id='blue_color'>
                    Saylani Discount 
                </samp>    
                <samp id='green_color'>Store</samp>
                
            </div>
            <div className='btn_div' onClick={start}>
                <button>
                    Get Start
                </button>
            </div>
        </div>
        
        
        }
    </div>
    );
        }
   

export default App;



