import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/body.css"


const Body = () => {
    const { store, actions } = useContext(Context);

    let film = store.film

    const [listfilms, setListFilms] = useState([]);
    const [inputValue, setinputValue] = useState();

    console.log(film.Response)

    useEffect(() => {
        if (film.Response == false) {
            // actions.get_film_random()
        }
    })

    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6 m-0 text-center">
                <div className="row">
                    <h1>Tu película {film.Title} </h1>
                    <div className="bodyfilm">
                        <img
                            src={film.Poster}
                            style=
                            {{
                                width: 400,
                                height: 600,

                            }}
                        >
                        </img>
                    </div>
                    <div className="row" >
                        <div className="col-4"></div>
                        <div className="col-4">
                            <div className="row">
                                <input
                                    value={inputValue}
                                    className="text-center"
                                    placeholder="Título película"
                                    // onChange={(e) => e.target.value}
                                    onChange={(e) => { setinputValue(e.target.value) }}
                                    onKeyDown={(e) => {
                                        // let array = Array.from(e.target.value);
                                        // let filterarray = array.filter(words => words !== " ");

                                        if (e.key === "Enter") {
                                            setinputValue("")
                                            actions.datospeliculasbuscador(inputValue)
                                            actions.get_film()
                                        }
                                    }}

                                >

                                </input>
                                <button className="btn btn-dark" onClick={() => actions.get_film_random()}>NEXT
                                </button>
                            </div>
                        </div>
                        <div className="col-4">
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="row">Lista películas buscadas</div>
                <div className="text-center">
                    <ul className="list-group">
                        {store.listFilm.map((texto, index) => {
                            return (
                                <li key={index}
                                    className="container list-group-item">{texto}
                                    <button
                                        type="button"
                                        className="btn-close "
                                        onClick={(e) => e.target.parentElement.style.display = "none"}></button></li>

                            )
                        })}
                    </ul>
                </div></div>

        </div >
    );


}

export default Body;