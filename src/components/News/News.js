import React from 'react';
import photo from '../News/pic.jpg'

const News = () => {
    return (
        <div className='text-center container mb-5'>
            <h1>News</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4  ">
                <div class="col">
                    <div class="card">
                        <img src={photo} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Covid 19</h5>
                            <p class="card-text">Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
                                Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={photo} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Covid 19</h5>
                            <p class="card-text">Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
                                Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={photo} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Covid 19</h5>
                            <p class="card-text">Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
                                Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default News;