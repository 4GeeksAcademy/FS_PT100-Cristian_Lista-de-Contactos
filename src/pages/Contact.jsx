//Esta vista debe contener la lista de contactos

import React from "react";


export const Contact = () => {



    return (
        <div className="container">
            <div class="col-12">
                <label for="formGroupExampleInput" class="form-label d-flex m-1">Full name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Full name"></input>
            </div>
            <div class="col-12">
                <label for="inputEmail4" class="form-label d-flex m-1">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Enter email"></input>
            </div>
            <div class="col-12">
                <label for="formGroupExampleInput2" class="form-label d-flex m-1">Phone</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter phone"></input>
            </div>
            <div class="col-12">
                <label for="inputAddress" class="form-label d-flex m-1">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Address"></input>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary mt-2">Sign in</button>
            </div>
        </div>
    )
} 
