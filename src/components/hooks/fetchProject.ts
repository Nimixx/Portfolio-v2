import { getCollection } from "astro:content";

export const project = (await getCollection("project")).sort((a, b) => {
  const dateA = new Date(a.data.pubDate);
  const dateB = new Date(b.data.pubDate);
  return dateB.getTime() - dateA.getTime();
});
