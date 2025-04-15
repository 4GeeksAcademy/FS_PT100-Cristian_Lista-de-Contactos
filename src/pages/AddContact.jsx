//Esta vista debe contener la lista de contactos

import React from "react";


export const AddContact = () => {



    return (
        <div className="container">
            <h1>Add a new contact</h1>
            <div className="col-12">
                <label for="formGroupExampleInput" className="form-label d-flex m-1">Full name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full name"></input>
            </div>
            <div className="col-12">
                <label for="inputEmail4" className="form-label d-flex m-1">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Enter email"></input>
            </div>
            <div className="col-12">
                <label for="formGroupExampleInput2" className="form-label d-flex m-1">Phone</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter phone"></input>
            </div>
            <div className="col-12">
                <label for="inputAddress" className="form-label d-flex m-1">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Address"></input>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary mt-3 col-12">save</button>
            </div>
            <p><a href="./Contact.jsx" className="link-underline-primary d-flex">or get back to contacts</a></p>
        </div>
    )
}  