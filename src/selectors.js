import React from 'react'

const getFeedCovers = (data) => (
	data.podcasts.map( podcast => podcast.cover )
	)

const getPodcast = (data, podcastId) => ({
	data.podcast.find( podcast => podcast.id === podcastId )
})

const getEpisodes = (data, podcastId) => (
	data.episodes.filter( episode => episode.podcastId === podcastId)
)

const getFullPodcast = (data, podcastId) => {
	...getPodcast(daa, podcastId),
	episodes: getEpisodes(data, podcastId)
}

const getEpisode = ()

const getPlayer = (data, podcastId, episodeId) => (

)

export { getFeedCovers, getFullPodcast, getPlayer }