const ContactServices = {}

//---------- GET ----------//GET ALL AGENDAS
ContactServices.getAllAgendas = async () => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

//---------- GET ----------//GET AGENDA
ContactServices.getAgendas = async (slug) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug)
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

//----- POST -----// CREATE AGENDA
ContactServices.createAgenda = async (slug) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/'+slug, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);

    }
}

//----- POST -----// CREATE CONTACT
ContactServices.createContact = async (contact) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/cristian/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
        const data = await resp.json()
        return ContactServices.getAgendas('cristian')
    } catch (error) {
        console.log(error);
    }
}

//----- DELETE -----// DELETE AGENDA
ContactServices.deleteContact = async (slug, id) => {
    try {
        await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}` , {
             method: 'DELETE',
             headers: {
                 'Content-Type': 'application/json'
             }
         })
         return ContactServices.getAgendas('cristian')
     } catch (error) {
         console.log(error)
     }
 }

 //----- MODIFICAR -----// MODIFICAR AGENDA
 ContactServices.editContact = async (slug, id, formdata) => {
    try {
        const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}` , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        } )
         return contactService.getAgenda(slug)
     } catch (error) {
         console.log(error)
     }
}

export default ContactServices