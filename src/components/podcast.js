import React from 'react'

const PodCast = (props) => (
	<section id="the-podcast">
		<header>
			<img className="cover" src="https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg" />
			<div>
				<h1>NerdCast</h1>
				<h2>Jovem Nerd</h2>
				<p>O mundo vira piada no Jovem Nerd</p>
			</div>
		</header>
		<ul id="podcast-episodes">
			{ props.episodes.map( (title, index) => (
				<li key={index}><h3>{title}</h3><button>►</button></li>
			)) }
		</ul>
	</section>
)
export default PodCast