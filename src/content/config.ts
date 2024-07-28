import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    published_date: z.coerce.date(),
    updated_date: z.coerce.date().optional(),
    post_image: z.string().optional(),
    post_image_alt: z.string().optional(),
  }),
});

export const collections = { blog };
