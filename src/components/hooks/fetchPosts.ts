import { getCollection } from 'astro:content'

export const posts = (await getCollection('blog'))
	.filter((post) => post.data.isDraft !== true)
	.sort((a, b) => {
		const dateA = new Date(a.data.pubDate)
		const dateB = new Date(b.data.pubDate)
		return dateB.getTime() - dateA.getTime()
	})
