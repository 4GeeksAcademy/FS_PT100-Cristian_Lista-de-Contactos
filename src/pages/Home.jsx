import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactServices from "../services/ContactServices.jsx";
import { ContactCard } from "../components/ContactCard.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const fetchGetAllAgendas = async () => {
		try {
			const data = await ContactServices.getAllAgendas();
			console.log(data)
			dispatch({ type: 'getAllAgendas', payload: data.agendas })
		} catch (error) {
			console.log(error)
		}
	}

	const fetchGetAgendas = async (name) => {
		try {
			const data = await ContactServices.getAgendas(name);
			console.log(data)
			dispatch({ type: 'getNameAgenda', payload: data.contacts })
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {

		fetchGetAllAgendas()
		fetchGetAgendas('cristian')
	}, [])

	return (
		<div className="card_user">
			<div className="row">
				{store.agenda?.map(el => <ContactCard
					key={el.id}
					cid={el.id}
					name={el.name}
					phone={el.phone}
					email={el.email}
					address={el.address}
				/>
				)}
			</div>
			<button className="create m-3" onClick={() => ContactServices.createAgenda('cristian')}>Create Contact</button>
		</div>
	)
}