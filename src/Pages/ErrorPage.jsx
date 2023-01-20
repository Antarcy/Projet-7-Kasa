import React from 'react'
import { Link } from "react-router-dom";


export default function ErrorPage() {
  return (
		<div className="errorContainer">
			<p className="errorNumber">404</p>
			<p className="errorText">Oups! La page que vous demandez n'existe plus.</p>
			<Link to="/" className="errorLinkHome">
				Recharger le site 
			</Link>
		</div>
	);
}