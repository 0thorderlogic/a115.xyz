import { defineCollection, z } from "astro:content";

const journalCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  journal: journalCollection,
};
