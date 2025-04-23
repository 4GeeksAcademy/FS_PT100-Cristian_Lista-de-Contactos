import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ContactServices from "../services/ContactService"
import { Link } from "react-router-dom"

export const AddContact = () => {

    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    })

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate()

    const handleSave = e => {
        navigate('/')
    }

    const handleSubmit = async e => {
         try {
             e.preventDefault()
             const resp = await ContactServices.createContact(data)
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
                    <label htmlFor="formGroupExampleInput" className="form-label d-flex m-1">Full name</label>
                    <input type="text" className="form-control" placeholder="name" name="name" value={data.name} onChange={handleChange} />
                </div>
                <div className="col-12">
                    <label htmlFor="formGroupExampleInput2" className="form-label d-flex m-1">Phone</label>
                    <input type="text" className="form-control" placeholder="phone" name="phone" value={data.phone} onChange={handleChange} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputEmail4" className="form-label d-flex m-1">Email</label>
                    <input type="text" className="form-control" placeholder="email" name="email" value={data.email} onChange={handleChange} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label d-flex m-1">Address</label>
                    <input type="text" className="form-control" placeholder="address" name="address" value={data.address} onChange={handleChange} />
                </div>
                <div className="col-12">
                    <button onClick={handleSave} type="button" className="btn btn-primary mt-3 col-12">save</button>
                </div>
                <div className="col-12">
                    <Link to="/">
                        <span href="#" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">or get back to contact</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}