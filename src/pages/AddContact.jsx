import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ContactService from "../services/ContactServices"


export const AddContact = () => {

    const [data, formData] = useState({
        "name": "",
        "phone": "",
        "email": "",
        "address": ""
    })

    const handleChange = e => {
        setFormData({ ...formData, [e.targed.name]: e.targed.value })
    }

    const handleSave = e => {
        e.preventDeFault();
        navigate('/')
    }
    const navigate = useNavigate()

    const handleSubmit = async e => {
        try {
            e.preventDefault()
            const resp = await ContactServices.createContact(formData)
            console.log(resp)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        
        <div className="container-fluid text-center">
            <h1>Add a new contact</h1>
            <form className="form-control" onSubmit={handleSubmit}>
                <div className="col-12">
                    <label for="formGroupExampleInput" className="form-label d-flex m-1">Full name</label>
                    <input type="text" className="form-control" placeholder="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="col-12">
                    <label for="formGroupExampleInput2" className="form-label d-flex m-1">Phone</label>
                    <input type="text" className="form-control" placeholder="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="col-12">
                    <label for="inputEmail4" className="form-label d-flex m-1">Email</label>
                    <input type="text" className="form-control" placeholder="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label d-flex m-1">Address</label>
                    <input type="text" className="form-control" placeholder="address" name="address" value={formData.address} onChange={handleChange} />
                </div>
                <div className="col-12">
                    <button onClick={handleSave} type="submit" className="btn btn-primary mt-3 col-12">save</button>
                </div>
                <div className="col-12">
                    <Link to="/EditContact">
                        <p><a href="#" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">or get back to contact</a></p>
                    </Link>
                </div>
            </form>
        </div>
    )
}