//Muestra un solo contacto.

export const ContactCard = (props) => {


    return (
        <div className="container">
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <h3>{props.phone}</h3>
            <h3>{props.email}</h3>
        </div>
    );
}; 