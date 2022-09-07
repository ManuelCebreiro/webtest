import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/body.css"

const { store, actions } = useContext(Context);

const Body = () => {
    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6 m-0 vh-100 d-flex justify-content-center align-items-center">
                <div className="bodyfilm"></div>
                <button onClick={() => actions.get_film()}></button>
            </div>
            <div className="col-3"></div>

        </div>
    );


}

export default Body;