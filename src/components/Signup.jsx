import React, { Fragment, useState } from "react";
import axios from "axios";
import Nav from "./Navbar";
import { useNavigate } from "react-router";


function Signup () {
    
    const [fullname, setFullname] = useState([]);
    const [emailinput, setEmailinput] = useState([]);
    const [passwordinput, setPasswordinput] = useState([]);
    
    const navigate = useNavigate(); //new es exla chavamate

    const registracia = () => {
        axios.post("https://apitest.reachstar.io/signup",{
            name : fullname,
            email : emailinput,
            password : passwordinput
        }).then(function(response){
            // console.log(response)
            navigate("/") //NEW es exla chavamate 
        }).catch(function(error){
            window.alert(error)
        })
    };

    return(
        <Fragment>

            <div className="container border border-2 p-5 mt-5">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h4> Create Account </h4>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <h6> Name </h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <input onChange={(e) => setFullname(e.target.value)} type="text" className="form-control" />
                    </div>
                </div>
                <div className="row mt-5">
                        <h6>Email</h6>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <input onChange={(e) => setEmailinput(e.target.value)} type="mail" className="form-control" />
                    </div>
                </div>
                <div className="row mt-5">
                    <h6>Password</h6>
                </div>
                <div className="row mb-5">
                    <div className="col-md-8">
                        <input onChange={(e) => setPasswordinput(e.target.value)} type="password" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <button type="submit" className="signup_button" onClick={registracia}> Sign up </button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Signup;