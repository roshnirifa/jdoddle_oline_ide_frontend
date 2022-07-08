import React, { useState } from 'react';
import './Ide.css'


const Ide = () => {
    const handleSubmitForC = () => {
        let c = document.querySelector("#c").value;

        let output = document.querySelector(".ide #output");
        fetch("http://localhost:5000/api", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                code: c
            })
        })
            .then((res) => res.json()).then(data => {
                output.value = (data?.body?.output);
            })

        // console.log(html, css, js, output);

    }

    return (
        <div>

            <div class="input-group mb-3 justify-content-center mt-5">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Languages</label>
                </div>
                <select class="custom-select w-25" id="inputGroupSelect01">

                    <option selected id='c-input'>C</option>
                    <option value="C++" id="cpp-input">C++</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                </select>
            </div>
            <div class="mt-3 p-4  ">
                <div class="row ide justify-content-center">
                    <div class="col-md-4 ">
                        <h4>C</h4>
                        <textarea id="c"> </textarea> <br />
                        <button onClick={handleSubmitForC} class="btn btn-primary w-75 my-4" >submit</button>
                    </div>


                    <div className='text-center'>
                        <h4>Output</h4>
                        <textarea className='output' id="output"></textarea>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Ide;