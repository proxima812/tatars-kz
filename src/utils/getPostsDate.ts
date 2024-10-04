import { getCollection } from "astro:content"

export async function getPostsDate(collectionName) {
	const allPosts = await getCollection(collectionName, ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true
	})

	const sortedPosts = allPosts.sort((a, b) => {
		const dateA = new Date(a.data.published)
		const dateB = new Date(b.data.published)
		return dateA > dateB ? -1 : 1
	})

	return sortedPosts
}
