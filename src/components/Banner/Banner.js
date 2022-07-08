import React from 'react';
import img1 from './img1.jpg'
import img2 from './img2.jpg'

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={img1} class="d-block w-100 carousel-img" alt="..." />
                    <div class="carousel-caption  d-md-block">

                        <h1>The perfect venue for your </h1>
                        <h1>next event</h1>

                        <p><small>Premium Wedding Photography, Royal Wedding Planners, Birthday
                            Party Management</small>
                        </p>
                        <a href="https://www.google.com/" role="button" target="blank"
                            class="btn  btn-success  px-4 py-2 fw-bolder rounded my-4">
                            Book Now</a>


                    </div>
                </div>
                <div class="carousel-item">
                    <img src={img2} class=" d-block w-100 carousel-img" alt="..." />
                    <div class="carousel-caption  d-md-block">
                        <div class="header-heading">
                            <h1>The perfect venue for your </h1>
                            <h1>next event</h1>
                        </div>
                        <p class="header-heading"> <small>Premium Wedding Photography, Royal Wedding Planners, Birthday
                            Party Management</small>
                        </p>
                        <a href="https://www.google.com/" role="button" target="blank"
                            class="btn btn-success px-4 py-2 fw-bolder rounded my-4">
                            Book Now</a>
                    </div>
                </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;