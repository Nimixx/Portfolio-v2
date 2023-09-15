import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      isDraft: z.boolean(),
      title: z.string(),
      description: z.string(),
      author: z.string(),
      imageCredit: z.string().optional(),
      imageAuthor: z.string().optional(),
      // Transform string to Date object
      tags: z.array(z.string()).optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().refine((img) => img.width >= 600, {
        message: "Hero image must be at least 600px wide",
      }),
    }),
});

const project = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      github: z.string().optional(),
      deploy: z.string().optional(),
      imageCredit: z.string().optional(),
      imageAuthor: z.string().optional(),
      // Transform string to Date object
      tags: z.array(z.string()).optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().refine((img) => img.width >= 600, {
        message: "Hero image must be at least 600px wide",
      }),
    }),
})

export const collections = { blog, project };