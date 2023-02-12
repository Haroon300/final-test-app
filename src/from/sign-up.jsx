import './sign-up.css';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Home from './home';
import { useEffect } from 'react';


function Sign_up(){
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [login, setLogin]= useState(false);

    const auth = getAuth();


    useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                console.log("auth change : login", user);
                setLogin(true);
                // ...
            } else {
                console.log("auth change : Logout ")
                // User is signed out
                setLogin(false);
                // ...
            }
            });
    

    },[])

    const loginHandler = (e)=>{
        e.preventDefault();


        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("log in sucessfull :", user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("login error", errorCode,errorMessage);
          });
    }
    


        





    return(
        <div>
            {(login)?<Home/>:
            
            <div className='flex '>
                    <fieldset>
                    <legend><h1>Sign in</h1></legend>
                    <form onSubmit={loginHandler}>
                    <div>
                        <label>Email : </label>
                        <input type="email" name="email" id="email" placeholder='Saylani@gmail.com' onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div>
                        <label>password : </label>
                        <input type="password" name="password" placeholder='Password'onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button type='submit'>Sign in</button>
                    </div>
                    </form>
                    </fieldset>
                </div>

            }
             
        </div>
    )
}

export default Sign_up;