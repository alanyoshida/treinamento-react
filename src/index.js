import React from 'react'
import { render } from 'react-dom'
import Player from './player'
import MyFeeds from './myfeeds'
import PodCast from './podcast'

require("./style.scss")

const App = () => (
	<section id="stage">

		<MyFeeds />

		<PodCast />

		<Player />

	</section>
)

render(<App />, document.getElementById("podcasts-app"))
