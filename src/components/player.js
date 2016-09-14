import React from 'react'

const Player = (props) => (
	<footer id="player">
		<h3>{props.title}</h3>
		<audio controls>
			<source src={props.file} type={props.mediatype}></source>
			Your browser does not support the audio element.
		</audio>
	</footer>
)
export default Player