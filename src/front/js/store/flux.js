const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			APIKey: "5bfd2a70",
			film: {},
			listFilm: [],
			validacion: true

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			datospeliculasbuscador: (e) => {

				setStore({ listFilm: [...getStore().listFilm, e] })

			},
			get_film: () => {
				let variable = getStore().listFilm
				const nombrepeli = variable[variable.length - 1]               //listFilm es una lista de peliculas y en esta variable lo que estoy haciendo es llamar a la ultima posicion que es la que quiero que aparezca

				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};
				fetch("https://www.omdbapi.com/?t=" + nombrepeli + "&APIkey=5bfd2a70", requestOptions)
					.then((resp) => {
						if (resp.ok) {
							return resp.json()
						} else {
							alert("ha habido un problema intentalo de nuevo mas tarde");
						}
					})
					.then((data) => {
						setStore({ film: data })
					})
				console.log(nombrepeli)
			},
			get_film_random: () => {
				var min = 100001;
				var max = 999999;

				var idrandom = Math.floor(Math.random() * (max - min + 1) + min);
				console.log(idrandom)
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};
				fetch("https://www.omdbapi.com/?i=tt" + idrandom + "&APIkey=5bfd2a70", requestOptions)
					.then((resp) => {
						if (resp.ok) {
							console.log(resp)
							return resp.json()
						} else if (resp.redirected == false) {

						} else {
							alert("ha habido un problema intentalo de nuevo mas tarde");
						}
					})
					.then((data) => {
						setStore({ film: data })
					})
			},

		}
	};
};

export default getState;
