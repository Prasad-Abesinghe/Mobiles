import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "usmz1yow",
  dataset: "production",
  apiVersion: "2024-01-08",
  useCdn: true, // Corrected from useCdb to useCdn
});

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source) {
  return imgBuilder.image(source);
}
