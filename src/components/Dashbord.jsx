import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import Slider from "./Slider";
import axios from "axios";
import Details from "./Details";

function Dashbord() {
    const [data, setData] = useState([]);

    axios.get("https://apitest.reachstar.io/blog/list").then(function(response){
        setData(response.data);
    }).catch(function(error){
        console.log(error);
    });

    return(
        <React.Fragment>
            <div className="w-100" style={{backgroundColor:"#dc7cac"}}>

                <Navbar />

                <div className="div_style">
                    <Slider />
                </div>

                <div className="scroll_box w-100">
                    <div className="scroll-box2 w-100">
                        <div className="container cont_dashbord">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-6 col_design mt-3">
                                    <div className="w-100">
                                        {
                                            data.map((item, index) => <div key={index}>
                                                <p dangerouslySetInnerHTML={{__html: item.id}}></p>
                                                <h3><p dangerouslySetInnerHTML={{__html : item.title}}></p></h3>
                                                <p dangerouslySetInnerHTML={{__html:item.description}}></p>

                                                <button type="button" className="button_dt">
                                                 <Link to={`/Details/${item.id}`} className="button_detail">Detail</Link>
                                                </button>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </React.Fragment>
    )
}

export default Dashbord;