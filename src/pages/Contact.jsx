import React from "react"

export const Contact = (props) => {


    return (
        <>
            <div className="container contact d-flex justify-content-end">
                <a className="btn btn-success mb-3" href="/AddContact.jsx" role="button">Add new contact</a>
            </div>
            <div className="contacts">
                <div className="row">
                    <h3> {props.name}</h3>
                    <h3 className="fa-solid fa-location-dot">{props.city}</h3>
                    <h3 className="fa-solid fa-phone">{props.phone}</h3>
                    <h3 className="fa-solid fa-envelope">{props.email}</h3>
                </div>
            </div>
        </>
    )
}
