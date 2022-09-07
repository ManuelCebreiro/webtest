import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Body from "./body";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			<div clasName="row">
				<h1>Bienvenido a decinetime tour</h1></div>
			<Body />
			<div clasName="row"></div>
		</div>
	);
};
