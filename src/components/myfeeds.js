import React from 'react'
const MyFeeds = (props) => (
	<aside id="my-feeds">
		<h2>Meus Feeds</h2>
		<form>
			<input placeholder="URL feed"/><input type="submit" value="Adicionar" />
		</form>
		<ul>
			{ props.covers.map( (cover, index) => (
				<li key={index}><img src={cover} /></li>
			)) }
		</ul>
	</aside>
)
export default MyFeeds