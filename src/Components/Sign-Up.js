import './Sign-Up.css'
import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

const SignUp = () =>{

    const [name,setName]= useState("");
    const [password,setPassword]= useState("")
    const [email,setEmail]= useState("")

    const navigate = useNavigate()

    
    useEffect(()=>{
    const auth = localStorage.getItem('user')

    if(auth) {
        navigate('/')
    }
    })


    const collectData= async () =>{
        console.log(name,email,password);

        let result= await fetch("http://localhost:8000/register",{

            method:'post',
            body: JSON.stringify({name,email,password}),
            headers:  {
              'Content-Type': 'application/json'
            },
        })
        result = await result.json()
        // console.log(result);

        localStorage.setItem("user",JSON.stringify(result.insert))   //local storage me data save krwane ke ley use kra hai .........

        localStorage.setItem("token",JSON.stringify(result.auth))   //local storage me data save krwane ke ley use kra hai .........

          navigate('/')   // register hone ke bad redirect krne ke ley use kra hai.................
       
    }

    return(
        <div>
            <section className="section">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="section1">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>

                    <div className="form-outline flex-fill mb-0">
                      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter your name" className="form-control" />

                      <label className="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="enter your email" className="form-control" />
                     
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}placeholder="enter your password" className="form-control" />
                      
                      <label className="form-label" for="form3Example4c">Your Password</label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button  type="button" onClick={collectData} className="btn btn-primary btn-lg"  style={{marginBottom:100}}>Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"  style={{marginBottom:140}}/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            
        </div>
    )
}

export default SignUp