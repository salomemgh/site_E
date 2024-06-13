import React from "react";
import ReactDOM from "react-dom/client";

function Slider () {
    return(
        <div id="carouselExample" className="carousel slide mt-5">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <h2 className="Carousel_text "> A BEAUTIFUL BLOG WITH NO <br /> IMAGES REQUIRED </h2>
                </div>
                <div className="carousel-item">
                    <h2 className="Carousel_text"> WHAT COULD POSSIBLY GO <br /> WRONG? </h2>
                </div>
                <div className="carousel-item">
                    <h2 className="Carousel_text">THE SIMPLEST WAYS TO <br /> CHOOSE THE BEST COFFEE</h2>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}


export default Slider;
