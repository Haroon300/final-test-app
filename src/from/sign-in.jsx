import { useState } from 'react';
import './sign-in.css';
import Sign_up from './sign-up';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Sign_in(){
    const [sign_in, setSign_in]= useState(false);
    
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [firstName, setFirstName]= useState("");
    const [lastName, setLastName]= useState("");
    const [comPassword, setComPassword]= useState("");
    
    const auth = getAuth();


    function signIn(){
        setSign_in(true);
    }

    const signupHandler = (e)=>{
        e.preventDefault();



        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("user : ", user);
            <Sign_up/>
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("firebase error : " ,error);
            // ..
        });
    }

    return(
        <div>
            {(sign_in)? <Sign_up/>:
            <div>
                    
                    <div className='flex '>
                    <fieldset>
                    <legend><h1>Sign up</h1></legend>
                    <form onSubmit={signupHandler}>
                    <div>
                        <label>First Name : </label>
                        <input type="text" name="fname"  placeholder='First Name'onChange={(e)=>{setFirstName(e.target.value)}}/>
                    </div>
                    <div>
                        <label>Last Name : </label>
                        <input type="text" name="lname" placeholder='Last Name'onChange={(e)=>{setLastName(e.target.value)}}/>
                    </div>
                    <div>
                        <label>Email : </label>
                        <input type="email" name="email" id="email" placeholder='Saylani@gmail.com'onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div>
                        <label>password : </label>
                        <input type="password" name="password" placeholder='Password'onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <div>
                        <label>Comfrom password : </label>
                        <input type="password" name="comfrom_password" placeholder='Comfrom Password'onChange={(e)=>{setComPassword(e.target.value)}}/>
                    </div>
                    <div>
                        <button type='submit'>Sign up</button>
                        
                        <button onClick={signIn}>Sign in</button>

                    </div>
                    </form>
                    </fieldset>
                </div>
                
            </div>
            }


        </div>
    )
}
export default Sign_in;