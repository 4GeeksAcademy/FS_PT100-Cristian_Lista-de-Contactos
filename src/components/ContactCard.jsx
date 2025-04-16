//Muestra un solo contacto.
import React from "react";

export const ContactCard = (props) => {


    return (
        <div className="container">
            <h3>{props.name}</h3>
            <p>{props.city}</p>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    );
}; 