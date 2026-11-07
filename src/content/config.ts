import { defineCollection, z } from "astro:content";

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    date: z.date(),
    featureImage: z.string().optional(),
    pdfUrl: z.string().optional(),
    externalUrl: z.string().optional(),
    blogPostSlug: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    featureImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    featureImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  publications,
  projects,
  blog,
};
