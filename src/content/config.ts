import { defineCollection, z } from "astro:content"

const posts = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string().default("title"),
			description: z.string().default("description"),
			// ogImage: image().describe("Изображение").optional(),
			ogImage: image().describe("Изображение").or(z.string()).optional(),

			// "2024-02-21T15:30:00Z"
			// https://armno.in.th/blog/exploring-keystatic/#published-date-field
			datePublished: z.union([z.string().datetime(), z.date()]),
			dateModified: z.union([z.string().datetime(), z.date()]).optional(),
			tags: z.array(z.string()).default(["Прочее"]).optional(),
			categories: z.array(z.string()).default(["Другое"]).optional(),
			draft: z.boolean().default(false),
			discussion_id: z.string(),
			discussionNameChannel: z.string(),
			height: z.string().default("auto"),
			color: z.string().default("000000"),
		}),
})

const pages = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string().default("title"),
			description: z.string().default("description"),
			ogImage: image().optional(),
			index: z.boolean().optional(),
		}),
})

export const collections = { posts, pages }
