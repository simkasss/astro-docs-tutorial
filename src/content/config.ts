// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const postCollection = defineCollection({
  type: "content", // Markdown (for json use 'data')
  schema: z
    .object({
      title: z.string(),
      pubDate: z.string(),
      description: z.string().optional(), // optional property
      author: z.string().default("Anonymous"),
      image: z.object({
        url: z.string().url(), // validate that the string is also a URL
        alt: z.string(),
      }),
      tags: z.array(z.string()),
    })
    .strict(),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  posts: postCollection,
};
