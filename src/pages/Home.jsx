import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactServices from "../services/ContactService.jsx";
import { ContactCard } from "../components/ContactCard.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const fetchGetAllAgendas = async () => {
		try {
			const data = await ContactServices.getAllAgendas();
			console.log(data)
			dispatch({ type: 'getAllAgendas', payload: data.contacts })
		} catch (error) {
			console.log(error)
		}
	}

	const fetchGetAgendas = async (username) => {
		try {
			const data = await ContactServices.getAgenda(username);
			console.log(data)
			dispatch({ type: 'getUserAgenda', payload: data.contacts })
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
			<div className="row  d-flex justify-content-center">
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
		</div>
	)
}