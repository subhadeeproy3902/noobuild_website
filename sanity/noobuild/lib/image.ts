import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from './client';

// import { dataset, projectId } from '../env'

// Set up the client for fetching data in the getProps page functions

// const projectId = process.env.SANITY_STUDIO_NEXT_PUBLIC_SANITY_PROJECT_ID
// const dataset = process.env.SANITY_STUDIO_NEXT_PUBLIC_SANITY_DATASET


// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}
