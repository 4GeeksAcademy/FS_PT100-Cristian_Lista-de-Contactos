import { useNavigate } from "react-router-dom";
import ContactServices from "../services/ContactService"


export const ContactCard = (props) => {

    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            const resp = await ContactServices.deleteContact('cristian', props.cid)
            console.log(resp)
        } catch (error) {
            console.log(error);

        }
    }

    const handleEdit = e => {
        e.preventDefault()
        navigate('/edit/' + props.cid)
    }

    return (

        <div className="card">
            <div className="card-img col-sm-12 col-md-4 col-lg-6">
                <img className="img-fluid" src="data:image/png;base64,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" alt={props.name} />
                </div>
                <div className="datos">
                <h3 className="fa-solid fa-user">{props.name}</h3>
                <p className="fa-solid fa-phone-flip">{props.phone}</p>
                <p className="fa-solid fa-envelope">{props.email}</p>
                <p className="fa-solid fa-location-dot">{props.address}</p>
            </div>
            <div className="botones">
                <button className="btn btn-primary fa-solid fa-pen" onClick={handleEdit}>edit</button>
                <button className="btn btn-danger fa-solid fa-trash" onClick={handleDelete}>delete</button>
            </div>
        </div>
    )
}