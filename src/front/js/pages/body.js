import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/body.css"


const Body = () => {
    const { store, actions } = useContext(Context);
    let film = store.film
    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6 m-0 vh-100 d-flex justify-content-center align-items-center">
                <div className="bodyfilm">
                    <p>{film.Title}</p>
                </div>
                <div>
                    <img
                        src={film.Poster}
                    >
                    </img>
                    <button
                        className="btn btn-warning border border-dark" onClick={() => actions.get_film()}></button>
                </div>
            </div>
            <div className="col-3"></div>

        </div>
    );


}

export default Body;