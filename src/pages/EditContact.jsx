import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ContactService from "../services/ContactService"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const EditContact = () => {

    const params = useParams()
    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()
    const [formData, setFormData] = useState(store.agenda.find(el => el.id == params.id))

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleReset = () => {
        setFormData(store.agenda.find(el => el.id == params.id))
    }

    const handleSubmit = async e => {
        try {
            e.preventDeFault()
            const resp = await ContactService.editContact('cristian', params.id, formData)
            console.log(resp);
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className="container-fluid text-center">
            <h2>Edit contact</h2>
            <form className="form-control" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label htmlFor="formGroupExampleInput" className="form-label d-flex m-1 fa-solid fa-user">Full name</label>
                    <input type="text" className="form-control" placeholder="Full name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="col-12">
                    <label htmlFor="formGroupExampleInput2" className="form-label d-flex m-1 fa-solid fa-phone-flip">Phone</label>
                    <input type="text" className="form-control" placeholder="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputEmail4" className="form-label d-flex m-1 fa-solid fa-envelope">Email</label>
                    <input type="text" className="form-control" placeholder="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label d-flex m-1 fa-solid fa-location-dot">Address</label>
                    <input type="text" className="form-control mb-2" placeholder="address" name="address" value={formData.address} onChange={handleChange} />
                </div>
                <input type="submit" className="btn btn-primary" />
                <input type="reset" onClick={handleReset} className="btn btn-danger" />
            </form>
        </div>
    )
}