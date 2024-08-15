import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "5m7w9c7e", // Replace with your project ID
  dataset: "production", // Replace with your dataset
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2024-08-13', // Use current date or other valid date
})
