import React from 'react'
import { render } from 'react-dom'
import Player from './components/player'
import MyFeeds from './components/myfeeds'
import PodCast from './components/podcast'
import props from './data'
import * as selectors from './selectors'

require("./style.scss")

const App = () => (
	<section id="stage">

		<MyFeeds {...props.feeds} />

		<PodCast {...props.podcast} />

		<Player title={props.player.title} file={props.player.file} mediatype={props.player.mediatype} />

	</section>
)

render(<App />, document.getElementById("podcasts-app"))
