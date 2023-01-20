import React from 'react'
import '../style/Card.scss'

export default function Card({cover, title}) {
  return (
		<article className="card_logement">
			<img src={cover} alt="location" />
			<div className="card_label">
				<p>{title}</p>
			</div>
		</article>
	);
}