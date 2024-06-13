import React, { Fragment, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";

function Login() {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const navigate = useNavigate();

    const Log = () => {
        axios.post("https://apitest.reachstar.io/signin",{
            email : email,
            password : password
        }).then(function(response){
            console.log(response)
            navigate("/dashbord")
        }).catch(function(error){
            console.log(error)
        })
    };

    return(
        <Fragment>

            <div className="container border border-2 p-5 mt-5">

                <div className=" row mt-5">
                    <h6>Email</h6>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <input type="mail" className="form-control" onChange={(e) => setEmail(e. target.value)} />
                    </div>
                </div>

                <div className="row mt-5">
                    <h6>Password</h6>
                </div>

                <div className=" row mb-5">
                    <div className="col-md-4">
                        <input type="password" className="form-control" onChange={(e) => setPassword (e.target.value)} />
                    </div>
                </div>

                <div className="d-flex gap-3">
                    <div className=" row">
                        <div className="col-md-4">
                            <button type="submit" className="login_button"> Forgot Password? </button> 
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-4">
                        <button type="submit" className="login_button" onClick={Log}> Login </button>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Login;