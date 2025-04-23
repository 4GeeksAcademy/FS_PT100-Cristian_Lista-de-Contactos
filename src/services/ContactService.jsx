const ContactService = {}

//---------- GET ----------//GET ALL AGENDAS
ContactService.getAllAgendas = async () => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

//---------- GET ----------//GET AGENDA
ContactService.getAgenda = async (slug) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/' + slug)
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

//----- POST -----// CREATE AGENDA
ContactService.createAgenda = async (slug) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/'+ slug, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error)
    }
}


//----- POST -----// CREATE CONTACT
ContactService.createContact = async (contact) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/cristian/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact)
        })
        const data = await resp.json()
        return ContactService.getAgenda('cristian')
    } catch (error) {
        console.log(error)
    }
}

//----- DELETE -----// DELETE AGENDA
ContactService.deleteContact = async (slug, id) => {
    try {
        await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}` , {
             method: 'DELETE',
             headers: {
                 'Content-Type': 'application/json'
             }
         })
         return ContactService.getAgenda('cristian')
     } catch (error) {
         console.log(error)
     }
 }

 //----- MODIFICAR -----// MODIFICAR AGENDA
 ContactService.editContact = async (slug, id, formdata) => {
    try {
        const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}}/contacts/${id}` , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        } )
         return ContactService.getAgenda(slug)
     } catch (error) {
         console.log(error)
     }
}

export default ContactService