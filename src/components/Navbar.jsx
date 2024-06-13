import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar () {

    const navigate = useNavigate();

    function AddBlog () {
        navigate("/AddBlog")
        let addblog1 = document.getElementById("add_b");
        addblog1.style.display = "none";
    }

    return(
        <header>
            <nav>
                 <Link to={"/"} className="links">Home</Link>
                 <Link to={"/Signup"} className="links"> Sign Up </Link>
                 <Link to={"/Login"} className="links" > Log in </Link>
                 <Link to={"/Detail"} className="links"></Link>

                 <button type="button" className="button_add" id="add_b" onClick={AddBlog}>add</button>
            </nav>
        </header>
    )
}

export default Navbar;
