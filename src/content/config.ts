import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    published: z.coerce.date(),
    edited: z.coerce.date().optional(),
    postimage: z.string().optional(),
    postimagealt: z.string().optional(),
    author: z.string(),
  }),
});

export const collections = { blog };
